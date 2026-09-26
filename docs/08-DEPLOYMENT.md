# 08 — Deployment & Environment Guide

> Panduan rilis: kontrak (Hardhat/UUPS → BSC) dan frontend (CRA build → hosting statis).

---

## 1. Matriks Environment

| Environment | Chain | ChainId | Kegunaan |
|---|---|---|---|
| **Local** | Hardhat node | 31337 | pengembangan kontrak |
| **Testnet** | BSC Testnet | 97 | QA & demo sebelum mainnet |
| **Production** | BSC Mainnet | 56 | pengguna akhir |

---

## 2. Environment Variables

### 2.1 Frontend (`.env` di `SMT-FRONTEND/smarttoken-dev/smarttoken-dev`)
```env
REACT_APP_NETWORK_ID=56
REACT_APP_NODE_1=https://bsc-dataseed.binance.org
REACT_APP_NODE_2=https://bsc-dataseed1.defibit.io
REACT_APP_NODE_3=https://bsc-dataseed1.ninicoin.io
REACT_APP_WALLETCONNECT_PROJECT_ID=
REACT_APP_SENTRY_DSN=
```
- Semua variabel `REACT_APP_*` **ter-bundle ke JS publik** → JANGAN pernah menaruh secret di sini.
- CI (`.github/workflows/ci.yml`) memakai NETWORK_ID=56 + 3 RPC publik untuk build.

### 2.2 Kontrak (`.env` di proyek Hardhat — lihat `.env.example`)
```env
DEPLOYER_PRIVATE_KEY=      # ⚠️ wallet khusus, saldo minimal, JANGAN commit
ETHERSCAN_API_KEY=         # verifikasi BscScan
BSC_MAINNET_RPC=           # opsional override
BSC_TESTNET_RPC=
```
> **Peringatan historis:** `.env.example` menyatakan kunci deployer lama pernah terekspos di repo. Jika wallet tsb masih `owner` kontrak mainnet → **rotasi ownership segera** (panggil transfer ownership ke wallet baru/multisig di semua proxy).

---

## 3. Deploy / Upgrade Smart Contracts

### 3.1 Deploy baru (testnet)
```bash
cd SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main
cp .env.example .env    # isi kunci TESTNET
npx hardhat compile
npx hardhat test
npx hardhat run scripts/maindeploy.js --network bscTestnet
```
`scripts/maindeploy.js` melakukan: deploy/reaksi **SmartComp → SMTBridge → GoldenTreePool → Nobility → OtherAchievement → SmartArmy → SmartFarm → SmartLadder → SMTC → SMT**, lalu mendaftarkan semuanya ke SmartComp (log output mirip `contract address.txt`).

### 3.2 Upgrade implementation (proxy UUPS)
```bash
# setelah mengubah kontrak:
npx hardhat compile && npx hardhat test
# deploy implementation baru + upgradeToAndCall via hardhat-upgrades
# lihat checklist lengkap di 06-SMART-CONTRACTS §11
```

### 3.3 Verifikasi
```bash
npx hardhat verify --network bscMainnet <ADDRESS> <CONSTRUCTOR_ARGS>
```

### 3.4 Sinkronisasi ke frontend
1. Salin ABI baru dari `artifacts/contracts/<Nama>.sol/<Nama>.json` → `src/updatedContracts/<Nama>.sol/<Nama>.json`.
2. Bila alamat proxy berubah → update `utils/index.ts` (`CONTRACTS_BY_NETWORK`) **dan** tabel alamat di `docs/06`.
3. `npm run build` + smoke test semua halaman.

---

## 4. Deploy Frontend

### 4.1 Build
```bash
cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev
npm ci --legacy-peer-deps || npm install --legacy-peer-deps
npm run build          # → build/
```

### 4.2 Hosting
Proyek ini SPA dengan client routing → **wajib fallback ke index.html**. `public/_redirects` sudah disiapkan:
```
/*  /index.html  200
```
Opsi hosting:
| Platform | Konfigurasi |
|----------|-------------|
| Netlify | drag & drop `build/` atau repo; `_redirects` otomatis dibaca |
| Vercel | Framework: Create React App; rewrite `/(.*) → /index.html` |
| Nginx | `try_files $uri /index.html;` |
| GitHub Pages | butuh `homepage` di package.json + HashRouter (tidak disarankan untuk route v6 ini) |

### 4.3 Checklist pra-rilis frontend
- [ ] `REACT_APP_NETWORK_ID=56` (mainnet) dan 3 RPC aktif
- [ ] Build lokal dites: connect wallet, 1 read (saldo), 1 write (claim di testnet) sukses
- [ ] Source map tidak berisi secret (tidak ada — tidak ada secret)
- [ ] Sentry DSN produksi aktif
- [ ] Tag versi git + changelog

---

## 5. Rilis Aman (release checklist gabungan)

1. **Testnet penuh** — semua AC FRD modul yang terdampak.
2. **Storage layout check** untuk upgrade kontrak (§06).
3. **Backup**: catat alamat proxy/implementation, ABI, dan parameter admin sebelum upgrade.
4. **Rencana rollback**: simpan implementation lama (alamat + ABI); downgrade = `upgradeTo` ke implementation lama (pastikan layout kompatibel).
5. **Komunikasi**: umumkan maintenance di modul Messages/kanal komunitas.
6. **Post-rilis**: pantau Sentry + BscScan error 30 menit pertama; smoke test klaim reward.

---

## 6. Operasional Harian

| Tugas | Cara |
|---|---|
| Ganti pajak / emergency | Wallet operator → fungsi `set*Fee` SmartToken (BscScan Write) |
| Tambah distributor reward | Owner → `addDistributor` (GoldenTreePool) / `addFarmDistributor` (Other) |
| Update harga lisensi | Owner → `updateLicenseTypePrice` (SmartArmy) |
| Update share ladder | Owner → `updateActivityShare` (SmartLadder) |
| Kumpulkan token stray | Owner → `SMTBridge.collect(token)` |
| Rotasi owner proxy | Owner lama → transferOwnership (semua 10 kontrak) |

> Semua operasi di atas bisa dilakukan lewat halaman *Write Contract* BscScan dengan wallet owner/operator.
