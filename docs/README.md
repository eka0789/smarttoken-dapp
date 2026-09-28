# 📚 Smart Ecosystem (SMT) — Project Documentation

Dokumentasi lengkap **Smart Ecosystem** — ekosistem DeFi berbasis **BNB Smart Chain (BEP-20)** yang terdiri dari token SMT, sistem lisensi Smart Army, farming, referral ladder (Smart Ladder), Golden Tree, sistem achievement Nobility, dan DEX aggregator untuk swap/likuiditas.

Dokumentasi ini ditujukan untuk **Project Manager, Product Owner, Developer (Web2 & Web3/Solidity), QA, dan stakeholder bisnis** agar siapa pun dapat memahami, memelihara, dan mengembangkan fitur baru.

---

## 🗂️ Struktur Dokumen

| # | Dokumen | Untuk Siapa | Isi |
|---|---------|-------------|-----|
| 01 | [BRD — Business Requirements Document](01-BRD.md) | Owner, PM, Investor | Visi-misi, model bisnis, stakeholder, tujuan bisnis, risiko, KPI |
| 02 | [PRD — Product Requirements Document](02-PRD.md) | PM, PO, Designer, Dev | Personas, user stories, fitur & prioritas, roadmap, metrik produk |
| 03 | [FRD — Functional Requirements Document](03-FRD.md) | Developer, QA | Spesifikasi fungsional per modul, alur, acceptance criteria |
| 04 | [Technical Guide](04-TECHNICAL-GUIDE.md) | Developer | Setup environment, stack teknologi, struktur folder, konvensi kode, testing |
| 05 | [Architecture & Diagrams](05-ARCHITECTURE.md) | Semua | Diagram arsitektur sistem, alur data, state machine, sequence (Mermaid) |
| 06 | [Smart Contracts Guide](06-SMART-CONTRACTS.md) | Web3 Dev, Auditor | Detail 10 kontrak: fungsi, event, akses kontrol, upgradeability |
| 07 | [Interface & Integration Reference](07-API-REFERENCE.md) | Frontend Dev, Integrator | "API layer" aplikasi: hooks, pemanggilan kontrak, wallet connector, util |
| 08 | [Deployment & Environment Guide](08-DEPLOYMENT.md) | DevOps, Developer | Environment variables, deploy kontrak, deploy frontend, checklist rilis |
| 09 | [Contributing & Workflow](09-CONTRIBUTING.md) | Semua engineer | Alur kerja git, definisi of done, code review, definition of quality |
| 10 | [Glossary](10-GLOSSARY.md) | Semua | Kamus istilah (DeFi, blockchain, domain SMT) |
| 11 | [Handover Checklist & Berita Acara](11-HANDOVER-CHECKLIST.md) | Owner, PM, Klien | Checklist serah terima aset, akses akun, verifikasi & form ttd |
| 12 | [Operations & Maintenance Runbook](12-OPERATIONS-RUNBOOK.md) | Tim Operasional, DevOps | Monitoring harian, SOP likuiditas, rotasi kunci, konfigurasi kontrak |
| 13 | [Security & Incident Response](13-SECURITY-INCIDENT-RESPONSE.md) | Tim Teknis, Auditor | Tanggap darurat P0-P3, penanganan insiden, upgrade UUPS darurat |
| 14 | [Test & QA Report](14-TEST-AND-QA-REPORT.md) | QA, PM, Stakeholder | Laporan uji smart contract (18/18 pass), build frontend & kompatibilitas |
| 15 | [User & Member Guide](15-USER-GUIDE.md) | Pengguna Umum, Komunitas | Buku manual koneksi wallet, Army, Ladder, Farm, Golden Tree, FAQ |

---

## 🚀 Quick Start (2 menit)

```bash
# Frontend (dApp)
cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev
npm install --legacy-peer-deps
npm start                     # → http://localhost:3000

# Smart contracts (Hardhat)
cd SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main
cp .env.example .env          # isi DEPLOYER_PRIVATE_KEY & ETHERSCAN_API_KEY
npm install
npx hardhat compile
npx hardhat test
```

> **Catatan versi Node:** frontend memakai CRA 4 + `--openssl-legacy-provider` (sudah dibungkus di script `npm start` / `npm run build`). Node 20 LTS direkomendasikan.

---

## 🌐 Ringkasan Sistem (30 detik)

```
User (wallet: MetaMask / Trust / WalletConnect / Binance Wallet)
        │  BNB Smart Chain (chainId 56 mainnet / 97 testnet)
        ▼
React dApp (SMT-FRONTEND)  ──ethers.js──►  Smart Contracts (SMT-Backend, Hardhat/UUPS)
        │                                        │
        │                                        ├─ SmartComp (registry/comptroller)
        ├─ Tanpa REST server — semua data        ├─ SmartToken (SMT) & SmartTokenCash (SMTC)
        │  on-chain, dibaca langsung             ├─ SmartArmy (lisensi)  ── SmartLadder (referral)
        │  via kontrak & multicall               ├─ SmartFarm (farming)
        ▼                                        ├─ GoldenTreePool (growth & phase)
Dashboard / Rewards / Achievement /              ├─ SmartNobilityAchievement & SmartOtherAchievement
Wealth / Get SMT / Messages / Legal              └─ SMTBridge (swap via PancakeSwap)
```

---

## 📌 Konvensi Dokumentasi

- Dokumen ditulis dalam **Bahasa Indonesia**, istilah teknis tetap **English**.
- Diagram memakai **Mermaid** — render otomatis di GitHub, GitLab, VS Code (extension Mermaid), dan [mermaid.live](https://mermaid.live).
- Setiap FRD module punya **Acceptance Criteria (AC)** bernomor — dipakai sebagai dasar test case QA.
- Alamat kontrak yang dikutip adalah **BSC Mainnet (chainId 56)** per `SMT-Backend/contract address.txt`. Selalu verifikasi ulang sebelum transaksi bernilai.

## 🔄 Cara Memperbarui Dokumentasi

1. Perubahan fitur → wajib update **FRD** (03) + **PRD** (02) bila mengubah scope.
2. Perubahan kontrak → update **Smart Contracts** (06) + alamat di **Deployment** (08).
3. Perubahan setup/build → update **Technical Guide** (04).
4. Buat PR yang memisahkan perubahan *code* dan *docs* bila keduanya besar, tapi keduanya harus merge di release yang sama.

## 🧭 Mau menambah fitur baru? Mulai dari sini

1. Baca **PRD §Fitur & Prioritas** — pastikan fitur baru selaras dan beri prioritas MoSCoW.
2. Tulis draft FRD baru (copy template di **FRD §0**) — definisikan AC sebelum coding.
3. Cek **Architecture** — putuskan apakah perlu kontrak baru atau cukup memperluas kontrak UUPS yang ada (lihat panduan upgrade di **Smart Contracts §Upgradeability**).
4. Ikuti **Technical Guide** untuk implementasi + **Contributing** untuk alur PR.
