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
