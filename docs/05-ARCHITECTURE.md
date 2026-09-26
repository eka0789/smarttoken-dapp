# 05 — Architecture & Diagrams

> Semua diagram memakai **Mermaid** (render di GitHub/VS Code/[mermaid.live](https://mermaid.live)).
> Diagram ini adalah *source of truth* arsitektur; perubahan signifikan wajib memperbarui dokumen ini.

---

## 1. System Context (C4 Level 1)

```mermaid
flowchart TB
    subgraph Users["👤 Pengguna"]
        W["Wallet: MetaMask / Trust /<br/>Binance Wallet / WalletConnect"]
    end

    subgraph App["💻 Smart Ecosystem dApp (SPA)"]
        FE["React 17 + MUI 5<br/>SMT-FRONTEND"]
    end

    subgraph Chain["⛓️ BNB Smart Chain (56 / 97)"]
        SC["10 Smart Contract (UUPS)<br/>SMT-Backend / Hardhat"]
        PCS["PancakeSwap<br/>Factory + Router"]
        IPFS["IPFS<br/>(avatar lisensi)"]
    end

    subgraph Infra["🌐 Infra pendukung"]
        RPC["BSC RPC<br/>(3 endpoint fallback)"]
        BSC["BscScan<br/>(explorer/verifikasi)"]
        SENTRY["Sentry<br/>(error tracking)"]
    end

    W -- "sign transaksi" --> FE
    FE -- "ethers.js read/write" --> SC
    FE -. "RPC read-only" .-> RPC
    SC -- "swap & likuiditas" --> PCS
    FE -- "upload avatar" --> IPFS
    FE -. error .-> SENTRY
    SC --- BSC
```

**Prinsip utama:** *serverless dApp* — tidak ada backend REST. Seluruh data bisnis dibaca langsung dari kontrak; satu-satunya layanan eksternal adalah RPC, IPFS (avatar), Sentry, dan explorer.

---

## 2. Arsitektur Frontend (C4 Level 2 + layering)

```mermaid
flowchart TB
    subgraph Entry["Entry"]
        IDX["index.tsx<br/>ThemeProvider → App → Router"]
    end

    subgraph Layout["layouts/"]
        SL["SidebarLayout<br/>(Sidebar + Header + PageTransition)"]
        BL["BaseLayout (status pages)"]
    end

    subgraph Pages["content/ — halaman (lazy)"]
        M["main/: Dashboard, Reward×6,<br/>Achievement×2, SmartArmy, GoldenTree,<br/>SMT×3, Message×2, Legal"]
        W["wealth/: Dashboard, TeamMgmt×4, Tools"]
        ST["pages/Status×4"]
    end

    subgraph Comp["components/ + models/"]
        UI["Button, Card, Box, Reveal,<br/>PageTransition, SuspenseLoader, ..."]
    end

    subgraph Logic["hooks/ — lapisan domain"]
        H1["useSmartArmy"]
        H2["useRewards / useSmartAchievement"]
        H3["useGoldenTree / useLadder"]
        H4["useSwap / useAddLiquidity /<br/>useTokenBalances / useTokenPrices"]
        H5["useAuth / useEagerConnect /<br/>useInactiveListener"]
    end

    subgraph Web3["utils/ — lapisan web3"]
        U1["utils/index.ts:<br/>CONTRACTS_BY_NETWORK, getContract()"]
        U2["connectors.ts (wallet)<br/>multicall.ts · ipfs.ts"]
        AB["ABI: updatedContracts/ + contracts/abi"]
    end

    IDX --> SL --> Pages
    SL --> BL
    Pages --> Comp
    Pages --> Logic
    Comp --> Logic
    Logic --> U1
    Logic --> U2
    U1 --> AB
    U2 --> AB
    AB -- "ethers.js" --> RPC2["BSC RPC"]
```

**Aturan dependensi:** `content → hooks → utils → ABI`. Komponen halaman tidak boleh membangun `Contract` ethers sendiri.

---

## 3. Arsitektur Kontrak (C4 Level 2)

### 3.1 Relationship antar kontrak

```mermaid
flowchart TB
    COMP["SmartComp (Comptroller/Registry)<br/>proxy 0xF5a2...b19c"]

    SMT["SmartToken (SMT)<br/>BEP20 + tax engine"]
    SMTC["SmartTokenCash (SMTC)<br/>reward token, burnable"]

    ARMY["SmartArmy<br/>lisensi 4 tier"]
    LADDER["SmartLadder<br/>referral 7 level"]
    FARM["SmartFarm<br/>staking & reward"]
    GTP["GoldenTreePool<br/>growth & phase reward"]
    NOB["SmartNobilityAchievement<br/>title Folks→King, chest"]
    OTH["SmartOtherAchievement<br/>farm/surprise/sell-tax reward"]
    BRIDGE["SMTBridge<br/>swap via PancakeSwap"]

    PCS["PancakeSwap<br/>Factory 0xcA14... / Router 0x10ED..."]

    COMP --- SMT & SMTC & ARMY & LADDER & FARM & GTP & NOB & OTH & BRIDGE
    COMP --- PCS

    SMT -- "pajak buy/sell/transfer" --> LADDER
    SMT -- "pajak goldenPool" --> GTP
    SMT -- "pajak farming" --> FARM
    SMT -- "pajak achievement" --> NOB & OTH
    ARMY -- "register → registerSponsor" --> LADDER
    FARM -- "reward terdistribusi" --> OTH
    GTP -- "notifyGrowth" --> NOB
    BRIDGE --> PCS
```

**Pola:** setiap kontrak bisnis menyimpan referensi `ISmartComp comptroller` dan menarik alamat kontrak lain dari sana (`comptroller.getSMT()` dll). Ganti alamat = satu fungsi owner di SmartComp, tanpa redeploy.

### 3.2 SmartComp — service locator on-chain

| Fungsi registry | Mengembalikan |
|---|---|
| `getSMT()` / `getSMTC()` / `getBUSD()` / `getWBNB()` | Token |
| `getUniswapV2Factory()` / `getUniswapV2Router()` | DEX |
| `getSmartArmy()` / `getSmartLadder()` / `getSmartFarm()` / `getGoldenTreePool()` | Modul bisnis |
| `getSmartNobilityAchievement()` / `getSmartOtherAchievement()` / `getSmartBridge()` | Modul reward & bridge |

Setter masing-masing `onlyOwner` → inilah mekanisme "plug & play" saat upgrade.

---

## 4. Alur Bisnis Utama

### 4.1 Engine pajak SMT (inti ekonomi)

```mermaid
flowchart LR
    TX["Transfer SMT<br/>(buy / sell / wallet)"] --> CHK{Dari/ke<br/>whitelist atau<br/>pair?}
    CHK -- "excluded" --> PASS["Transfer polos"]
    CHK -- "kena pajak" --> CALC["Hitung pajak<br/>normal / emergency"]
    CALC --> POOL["Potong pajak<br/>ke contract"]
    POOL --> D1["buytax → SmartLadder<br/>share[7]"]
    POOL --> D2["goldenPoolFee →<br/>GoldenTreePool.notifyReward"]
    POOL --> D3["farmingFee → SmartFarm<br/>notifyRewardAmount"]
    POOL --> D4["achievementFee →<br/>Nobility / OtherAchievement"]
    POOL --> D5["devFee → wallet dev"]
    POOL --> D6["burnFee → burn SMTC/SMT"]
    D1 --> SPON["Sponsor L1..L7<br/>event ReferralReward"]
```

- `SmartLadder.initActivities()` — share default (basis 10000): **buytax** `[5000,500,500,750,750,1250,1250]`, **farmtax** `[5500,250,250,750,750,1250,1250]`, plus `smartliving`, `ecosystem`.
- Emergency tax: operator menaikkan pajak sementara (`setBuyFee` dll), dashboard menampilkan status live.

### 4.2 Siklus hidup lisensi (state machine)

```mermaid
stateDiagram-v2
    [*] --> None: wallet baru
    None --> Pending: registerLicense(level, sponsor, data, tokenUri)
    Pending --> Active: activateLicense()
    Active --> Active: upgradeLicense(level) / extendLicense()
    Active --> Liquidated: liquidateLicense() (kena penaltyFee, LP dicairkan)
    Liquidated --> Pending: registerLicense ulang
    Active --> [*]: expireAt lewat
```

Event terkait: `RegisterLicense`, `ActivatedLicense`, `UpgradeLicense`, `LiquidateLicense`, `ExtendLicense`.

### 4.3 Farming (stake → reward → claim)

```mermaid
sequenceDiagram
    actor U as Farmer
    participant SMT as SmartToken
    participant SF as SmartFarm
    participant OTH as OtherAchievement

    U->>SMT: approve(SmartFarm, amount)
    U->>SF: stakeSMT(amount)
    SF->>SF: updateFeeInfo — potong pajak farming
    SF->>SF: lock SMT, catat UserInfo
    loop Setiap blok
        SF-->>U: reward terakumulasi (fixed 0.1%/hari + passive)
    end
    SF->>OTH: bagian farm reward → distributeToFarmers
    U->>SF: claimReward(amount)
    SF-->>U: transfer SMT/SMTC + event Claimed
    U->>SF: withdrawSMT / exit()
```

### 4.4 Golden Tree — growth & fase

```mermaid
flowchart LR
    A["Aktivitas ekosistem<br/>(farming, notifyReward)"] --> B["GoldenTreePool<br/>increaseGrowth(account)"]
    B --> C{"currentTotalGrowth<br/>≥ threshold phase?"}
    C -- "ya" --> D["UpgradeTreePhase(n)<br/>distributePhaseReward(n)"]
    C -- "belum" --> E["Growth tercatat<br/>per address"]
    D --> F["Porsi reward fase<br/>ke kontributor fase tsb"]
```

- Growth per akun menentukan kualifikasi reward fase (`growthBalanceOf`, `contributionOf`).
- Threshold & fase dikonfigurasi on-chain; dApp hanya membaca.

### 4.5 Nobility & Chest

```mermaid
sequenceDiagram
    actor U as Member
    participant NOB as SmartNobilityAchievement
    U->>NOB: memenuhi syarat growth/porsi
    NOB-->>U: title naik (event UserNobilityUpgraded)
    U->>NOB: buka Chest
    NOB->>NOB: getChestRandomReward(nonce, tier)
    NOB-->>U: SMT (claimChestSMTReward) dan/atau SMTC (claimChestSMTCReward)
    NOB->>NOB: swapDistribute — sebagian reward di-swap via PancakeSwap
```

Porsi distribusi antar noble leader memakai `PortionInfo`: Folks 1 … King 5.

---

## 5. Model Data On-Chain (ERD logis)

```mermaid
erDiagram
    SMARTARMY ||--o{ USERLICENSE : "licenseOf"
    SMARTARMY ||--|| LICENSETYPE : "licenseTypeOf(level)"
    USERLICENSE }o--|| ADDRESS : owner
    SMARTLADDER ||--o{ ACTIVITY : "activities(id)"
    SMARTLADDER ||--o{ SPONSOR_REL : "usersOf(sponsor) / sponsorOf(user)"
    SMARTFARM ||--o{ USERINFO : "userInfoOf(account)"
    GOLDENTREEPOOL ||--o{ GROWTH : "growthBalanceOf(account)"
    NOBILITY ||--o{ USERNOBILITY : "userNobilities(account)"
    NOBILITY ||--|| NOBILITYTYPE : "nobilityTypes(id) x8"

    USERLICENSE {
        address owner
        uint256 level
        uint256 startAt
        uint256 activeAt
        uint256 expireAt
        uint256 lpLocked
        string tokenUri
        uint8 status
    }
    LICENSETYPE {
        uint256 level
        string name
        uint256 price
        uint256 ladderLevel
        uint256 duration
        uint256 portions
    }
    ACTIVITY {
        string name
        uint16 share_7
        address token
        bool enabled
        uint256 totalDistributed
    }
    NOBILITYTYPE {
        uint256 id
        string name
        uint256 threshold
        uint256 portions
    }
```

---

## 6. Arsitektur UI ( halaman & navigasi )

```mermaid
flowchart LR
    ROOT["/"] --> DASH["/main/dashboard"]
    subgraph Main["SidebarLayout — /main"]
        DASH --> REW["/main/rewards"]
        REW --> DF["/main/rewards/daily-farming"]
        REW --> NOB["/main/rewards/nobility"]
        NOB --> G[".../golden"] & P[".../passive"] & C[".../chest"]
        REW --> SUR["/main/rewards/surprise"] & Q["/main/rewards/quest"]
        DASH --> ACH["/main/achievement"] --> AD[".../distribution"]
        DASH --> SMA["/main/smart"]
        DASH --> GT["/main/golden"]
        DASH --> SMT["/main/smt"] --> GS[".../getSmt"] --> GSD[".../detail"] & GC[".../getSmtc"]
        DASH --> MSG["/main/messages"] --> MD[".../detail"]
        DASH --> LEG["/main/legal"]
    end
    subgraph Wealth["SidebarLayout — /wealth"]
        WD["/wealth/dashboard"] --> TM["/wealth/team/general"] --> TMD[".../detail/:address/:level"] & TMM[".../member/:address/:level"]
        WD --> DS["/wealth/team/direct"] --> DSD[".../detail/:address/:level"]
        WD --> TO["/wealth/tools"]
    end
    subgraph Status["BaseLayout — /status"]
        S404["404"] & S500["500"] & SMAIN["maintenance"] & SCS["coming-soon"]
    end
```

Code-splitting: setiap route `React.lazy` + `SuspenseLoader`; transisi antar halaman via `PageTransition` (key = pathname).

---

## 7. Keputusan Arsitektur (ADR ringkas)

| # | Keputusan | Alasan | Konsekuensi |
|---|-----------|--------|-------------|
| ADR-1 | Tanpa backend REST; baca langsung kontrak | Transparansi penuh, tidak ada titik pusat yang bisa dimanipulasi | Bergantung pada RPC; perlu multicall & fallback |
| ADR-2 | UUPS upgradeable (bukan immutable) | Ekosistem masih berkembang cepat | Butuh disiplin keamanan owner (R2 BRD) |
| ADR-3 | Registry pattern via SmartComp | Ganti modul tanpa sentuh kontrak lain | Semua kontrak bergantung SmartComp — jangan hapus |
| ADR-4 | React 17 + CRA 4 (legacy) | Warisan proyek; stabil | Upgrade path: migrasi Vite + React 18 saat F2+ |
| ADR-5 | ABI diduplikasi ke frontend (`updatedContracts`) | Frontend tidak tergantung proses build kontrak | Wajib sinkron manual tiap upgrade ABI |
| ADR-6 | Animasi via utility CSS global | Konsisten, murah, mudah dihapus | Kebisingan visual bila diboroskan — patuhi guideline |
| ADR-7 | Data notifikasi/pesan masih mock | Belum ada indexer | Roadmap F2: event indexer off-chain |

---

## 8. Skalabilitas & Batas

- **Read scale:** multicall menggabungkan puluhan `call` per halaman; RPC publik BSC cukup untuk komunitas menengah, RPC berbayar untuk besar.
- **Write scale:** semua write = transaksi user sendiri (tidak ada backend yang menulis) → sehat.
- **Indexer:** untuk riwayat earning/messages skalabel, tambahkan subgraph (The Graph) atau event-listener sederhana → tulis ke DB read-only (roadmap F2/F3).
