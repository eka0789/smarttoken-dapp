# Smart Ecosystem (SMT)

Ekosistem DeFi di **BNB Smart Chain**: token SMT/SMTC, lisensi Smart Army, farming, referral ladder 7 level, Golden Tree, dan achievement Nobility — dengan dApp React satu pintu.

## Struktur Repository

```
SMT/
├─ docs/            ← 📚 DOKUMENTASI LENGKAP (mulai dari sini!)
│  └─ README.md     ← index semua dokumen (BRD, PRD, FRD, technical guide, dll)
├─ SMT-FRONTEND/    ← dApp React 17 + MUI 5 + Web3 (ethers, WalletConnect)
│  └─ smarttoken-dev/smarttoken-dev
├─ SMT-Backend/     ← Smart contracts (Hardhat + OpenZeppelin UUPS)
│  ├─ mainDeploy/smt-contracts-main/...   ← proyek kontrak aktif (10 kontrak)
│  ├─ Hardhat/                            ← toolchain
│  └─ contract address.txt                ← alamat deploy BSC mainnet
└─ .github/         ← CI (build + test frontend)
```

## Mulai Cepat

```bash
# Frontend
cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev
npm install --legacy-peer-deps && npm start     # → http://localhost:3000

# Contracts
cd SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main
cp .env.example .env && npm install && npx hardhat test
```

## Dokumentasi

👉 **[docs/README.md](docs/README.md)** — BRD · PRD · FRD · Technical Guide · Architecture & Diagrams · Smart Contracts · API Reference · Deployment · Contributing · Glossary.

## Status Kesiapan Produksi (per 2026-09-28)

✅ **Semua item engineering-side selesai** — 18/18 test pass, build produksi sukses, 17 halaman terverifikasi visual, 0 teks template, NetworkGuard/error boundaries/empty states terpasang.

Sisa aksi **operator** (butuh akun eksternal, bukan kode):
1. Push repo ke remote (`git remote add origin <url> && git push -u origin main`)
2. Isi `REACT_APP_WALLETCONNECT_PROJECT_ID` (daftar gratis di cloud.walletconnect.com)
3. Isi `REACT_APP_SENTRY_DSN` (opsional, error tracking)
4. Audit kontrak eksternal (opsional, untuk kepercayaan investor)

Detail lengkap: [docs/08-DEPLOYMENT.md §8](docs/08-DEPLOYMENT.md).
