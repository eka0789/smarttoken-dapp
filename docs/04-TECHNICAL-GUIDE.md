# 04 — Technical Guide

> **Smart Ecosystem** · Panduan teknis untuk developer yang menjalankan, memodifikasi, dan mengembangkan proyek.
> Pasangan dokumen: Architecture (05), Smart Contracts (06), API Reference (07), Deployment (08).

---

## 1. Stack Teknologi

### 1.1 Frontend (`SMT-FRONTEND/smarttoken-dev/smarttoken-dev`)

| Lapisan | Teknologi | Versi | Catatan |
|---------|-----------|-------|---------|
| Framework | React | 17.0.2 | CRA 4 (`react-scripts` 4.0.3) + `react-app-rewired` |
| Bahasa | TypeScript | ~4.3 | Mixed dengan JSX |
| UI Kit | MUI (Material UI) | **5.0.3** | `@mui/material`, `@mui/icons-material`, `@mui/lab`, `@mui/styles` (JSS) |
| Routing | react-router-dom | **v6.30** | `createBrowserRouter`-style object di `src/router.tsx` |
| Web3 | ethers | **5.5.3** | Utilitas utama interaksi kontrak |
| Web3 | @web3-react | core 6 | InjectedConnector, WalletConnect v2 connector custom |
| Web3 | web3modal / web3 | 1.9 / 1.7 | Fallback & utilitas |
| Chart | react-apexcharts | 1.4 | Portfolio & scatter chart |
| State | React Context + hooks | — | `SidebarContext`, `WalletButtonContext`, `authContext` (reducer) |
| Toast | react-hot-toast | 2.2 | Feedback transaksi |
| Form | react-hook-form | 7 | Form lisensi dll |
| Error tracking | @sentry/react | 7 | Runtime error |
| Loading | nprogress | — | Bar loading pindah route |
| Styling kustom | styled() + makeStyles + `animations.css` | — | Tema dark-gold |

### 1.2 Smart Contracts (`SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main`)

| Lapisan | Teknologi |
|---------|-----------|
| Environment | Hardhat + `hardhat-deploy`, `@nomiclabs/hardhat-ethers`, `hardhat-waffle` |
| Upgradeability | OpenZeppelin **UUPS** (`UUPSUpgradeable`, `OwnableUpgradeable`) |
| Verifikasi | `@nomiclabs/hardhat-etherscan` (BscScan) |
| Bahasa | Solidity (lihat `pragma` di masing-masing file) |
| Test | Waffle/Mocha — `test/ecosystem.test.js` |

> Folder `SMT-Backend/Hardhat` hanya berisi toolchain; **proyek kontrak aktif ada di `mainDeploy/smt-contracts-main/smt-contracts-main`**. ABI hasil compile juga dikopi ke frontend di `src/updatedContracts/`.

### 1.3 CI

`.github/workflows/ci.yml` — setiap push/PR ke main/master/develop:
1. `npm install --legacy-peer-deps` (frontend)
2. `npm test` (passWithNoTests)
3. `npm run build` dengan env `REACT_APP_NETWORK_ID=56` + 3 RPC publik.

---

## 2. Menjalankan di Lokal

### 2.1 Prasyarat
- **Node.js 20 LTS** (frontend butuh flag legacy openssl — sudah dibungkus di npm script)
- Git, dan untuk kontrak: wallet deployer (testnet dulu!)

### 2.2 Frontend

```bash
cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev
npm install --legacy-peer-deps     # peer deps lama, JANGAN pakai npm ci biasa
npm start                          # dev server → http://localhost:3000
npm run build                      # build produksi → build/
npm test                           # jest (watchAll=false, passWithNoTests)
```

**Environment variables frontend** (buat `.env`):
```env
REACT_APP_NETWORK_ID=56
REACT_APP_NODE_1=https://bsc-dataseed.binance.org
REACT_APP_NODE_2=https://bsc-dataseed1.defibit.io
REACT_APP_NODE_3=https://bsc-dataseed1.ninicoin.io
REACT_APP_WALLETCONNECT_PROJECT_ID=<dari cloud.walletconnect.com>   # opsional
REACT_APP_SENTRY_DSN=<opsional>
```
> Tanpa `REACT_APP_WALLETCONNECT_PROJECT_ID`, opsi WalletConnect otomatis disembunyikan (lihat `connectors.ts`).

**Troubleshooting umum:**
| Gejala | Solusi |
|--------|--------|
| `error:0308010C digital envelope routines::unsupported` | Pastikan jalankan lewat `npm start` (bukan `react-scripts start` langsung) — flag `--openssl-legacy-provider` wajib |
| Port 3000 dipakai | `set PORT=3001` (Windows) sebelum `npm start` |
| Install gagal peer dep | Selalu `--legacy-peer-deps` |
| Halaman kosong di build | Cek console; pastikan assets `public/static` ter-copy |

### 2.3 Smart Contracts

```bash
cd SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main
cp .env.example .env               # isi DEPLOYER_PRIVATE_KEY, ETHERSCAN_API_KEY
npm install
npx hardhat compile
npx hardhat test                   # test/ecosystem.test.js
npx hardhat node                   # local chain (chainId 31337)
npx hardhat run scripts/maindeploy.js --network bscTestnet
```

> ⚠️ **KEAMANAN:** `.env.example` mencatat bahwa kunci deployer lama **pernah terekspos di repo**. Jika wallet tersebut masih mengontrol kontrak mainnet, **rotasi ownership SEGERA** (`OwnableUpgradeable` → panggil kontrak untuk transfer ownership ke wallet baru/multisig).

---

## 3. Struktur Folder (Frontend)

```
src/
├─ index.tsx               # entry: ThemeProvider → App → Router
├─ App.tsx                 # Suspense + Router
├─ router.tsx              # definisi semua route (lazy per halaman)
├─ theme/
│  ├─ ThemeProvider.tsx    # StylesProvider(injectFirst) + theme factory
│  ├─ base.ts              # themeCreator + type augmentation
│  ├─ animations.css       # ★ keyframes & utility class animasi global
│  └─ schemes/
│     └─ NebulaFighterTheme.ts   # ★ satu-satunya tema (dark-gold)
├─ layouts/
│  ├─ BaseLayout/          # untuk status pages
│  └─ SidebarLayout/       # layout utama: Sidebar, Header, wallet-modal
│     └─ Sidebar/{SidebarMenu, WealthSidebarMenu, MobileSidebarMenu, ...}
├─ components/             # komponen reusable generik
│  ├─ Animations/          # ★ Reveal (scroll-reveal), PageTransition
│  ├─ Button/  Card/  Box/  Label/  Text/  Tooltip/  Logo/ ...
│  ├─ PageTitleWrapper/  SuspenseLoader/  Toast/
├─ content/                # ★ HALAMAN (per section router)
│  ├─ main/                # /main/*  → dashboard, reward/, achievement/, smart-army/,
│  │                       #   golden-tree/, smt/, message/, legal/
│  ├─ wealth/              # /wealth/* → dashboard, team-management/, tools/
│  └─ pages/Status/        # 404, 500, ComingSoon, Maintenance
├─ hooks/                  # ★ 1 hook ≈ 1 domain kontrak (lapisan "API")
│  ├─ useSmartArmy.ts  useRewards.ts  useGoldenTree.ts  useLadder.ts
│  ├─ useSwap.ts  useAddLiquidity.ts  useTokenBalances.ts ...
│  └─ useEagerConnect.ts  useInactiveListener.ts (wallet)
├─ contexts/               # SidebarContext, WalletButtonContext, auth/
├─ contracts/              # ABI hasil ekspor (abi/, addressnya di utils)
├─ updatedContracts/       # ★ ABI + Solidity reference (sumber ABI frontend)
├─ models/                 # tipe data, sample/mock data, styled util (StyledData.tsx)
├─ utils/                  # ★
│  ├─ index.ts             # CONTRACTS_BY_NETWORK (alamat mainnet), getContract()
│  ├─ connectors.ts        # daftar wallet connector
│  ├─ ipfs.ts  multicall.ts  formatBalance.ts  licenseInfo.ts  nobilityInfo.ts
└─ icons/                  # SVG wallet dll
```

★ = titik sentuh paling sering saat pengembangan.

---

## 4. Konvensi Kode

### 4.1 Penamaan
- Komponen halaman: `PascalCase` di folder `content/<section>/<modul>/index.tsx`.
- Hook: `use<Domain>.ts` — satu hook per domain kontrak; **komponen TIDAK memanggil kontrak langsung** selain lewat hook/util.
- Styled component: `<Nama>Style(d|s)` mis. `SidebarWrapper`, `BorderLinearProgress`, dikelompokkan di `models/StyledData.tsx` atau file `CustomStyles` per modul.
- Alamat kontrak **hanya** di `utils/index.ts` (`CONTRACTS_BY_NETWORK`) — jangan hardcode 0x... di komponen.

### 4.2 Pola pemanggilan kontrak (WAJIB)
```tsx
const { account, chainId } = useWeb3React();
const contract = await getContract('SmartArmy', chainId);   // signer bila wallet connect
const value = await contract.licenseOf(account);            // read
const tx = await contract.activateLicense();                // write
await tx.wait();                                            // tunggu konfirmasi
toast.success('License activated');                         // feedback
```
- Read berulang → manfaatkan `multicall.ts` untuk menghemat RPC.
- Selalu bungkus `try/catch` → tampilkan `error.reason ?? 'Transaction failed'`.

### 4.3 Styling & Animasi
- Tema: satu theme di `NebulaFighterTheme.ts` (dark + gold `#E0A501`). Warna baru → tambahkan ke `themeColors`, jangan inline hex baru di banyak tempat (hex legacy masih banyak; jangan tambah lagi).
- Animasi: gunakan utility class dari `theme/animations.css` (`stagger-children`, `animate-fade-up`, `hover-lift`, `card-shine`, `gradient-text-gold`, `delay-100..800`) atau komponen `Reveal`. Keyframe baru → tambahkan di file itu, prefix `smt-`.
- MUI overrides global (hover card, tombol gradient) ada di `components:` section tema — ubah di sana, bukan per komponen.

### 4.4 TypeScript
- Interface props per komponen (`interface XProps`).
- Hindari `any` baru; kontrak yang mengembalikan struct → biarkan `any` hasil ethers hanya di boundary hook, normalisasi sebelum keluar hook.

### 4.5 Git
- Branch: `feature/<tiket>-<slug>`, `fix/...`, `docs/...`, `chore/...`
- Commit: `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `chore: ...` (Conventional Commits).
- PR wajib: build hijau di CI + deskripsi + screenshot untuk perubahan UI.

---

## 5. Menambah Halaman Baru (checklist)

1. Buat folder `src/content/<section>/<modul>/index.tsx`.
2. Daftarkan route di `src/router.tsx` (lazy + `Loader()`).
3. Tambahkan menu di `layouts/SidebarLayout/Sidebar/SidebarMenu/items.ts` (atau Wealth menu bila `/wealth`).
4. Data on-chain → buat `hooks/use<Domain>.ts`; daftar alamat/ABI di `utils/index.ts` bila kontrak baru.
5. Bungkus konten utama dengan class `stagger-children` (Grid container terluar) + animasi (lihat §4.3).
6. `<Helmet><title>Section | Module</title></Helmet>`.
7. Update FRD (03) + PRD bila perlu.

---

## 6. Testing

| Jenis | Lokasi | Perintah |
|-------|--------|----------|
| Unit frontend | `src/utils/__tests__/`, `src/**/*.test.*` | `npm test` |
| Kontrak | `test/ecosystem.test.js` | `npx hardhat test` |
| Manual E2E | Dev server + wallet | Testnet dulu (chain 97), lihat FRD AC |

> Standar quality: AC di FRD adalah dasar test case. Fitur baru wajib punya AC sebelum PR merge.

---

## 7. Debugging Tips

- **Tx gagal diam-diam:** buka console → error ethers berisi `reason`. Cek juga di BscScan (testnet) hash-nya.
- **Data tidak muncul:** pastikan `chainId` sesuai `CONTRACTS_BY_NETWORK`; salah chain → `getContract` gagal.
- **RPC rate limit:** ganti endpoint di `.env` (REACT_APP_NODE_1..3) atau pakai RPC berbayar.
- **Animasi tidak jalan:** cek `prefers-reduced-motion` OS, pastikan `animations.css` ter-import (ThemeProvider).
- **Sentry:** error runtime terkirim otomatis bila DSN diisi.
