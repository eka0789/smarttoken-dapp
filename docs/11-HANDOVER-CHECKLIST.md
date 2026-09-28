# 11 — Handover Checklist & Berita Acara Serah Terima

> Dokumen resmi serah terima proyek **Smart Ecosystem (SMT)** dari tim pengembang ke pemilik proyek (Product Owner / Client / Tim Operasional).

---

## 1. Ringkasan Serah Terima

| Parameter | Keterangan |
|---|---|
| **Nama Proyek** | Smart Ecosystem (SMT) |
| **Jaringan Blockchain** | BNB Smart Chain (BSC Mainnet — Chain ID: `56`) |
| **Repositori Kode** | `https://github.com/eka0789/smarttoken-dapp` |
| **Frontend Framework** | React 17, Material-UI 5, ethers.js v5 |
| **Smart Contract Toolchain** | Hardhat, OpenZeppelin UUPS Upgradeable Proxy |
| **Tanggal Serah Terima** | 28 September 2026 |
| **Status Kesiapan** | ✅ Siap Produksi (All Tests Passing, Production Build OK) |

---

## 2. Checklist Penyerahan Aset & Akses

Pihak penerima wajib memverifikasi dan mengamankan seluruh akses berikut setelah serah terima:

### 2.1 Repositori & Kode Sumber
- [ ] Hak akses Admin / Transfer Ownership repositori GitHub (`smarttoken-dapp`).
- [ ] Verifikasi branch utama (`main`) bersih dan sinkron dengan live dApp.
- [ ] Workflow CI/CD (`.github/workflows/ci.yml`) berstatus hijau.

### 2.2 On-Chain & Wallet Governance
- [ ] **Audit Alamat Owner Proxy:** Seluruh 10 kontrak proxy terverifikasi di-own oleh wallet resmi (`0x24C6d5CdF6078dc51c03ac130a5fA113cAE1aa49`).
- [ ] **Transfer / Rotasi Ownership:** Private key wallet owner disimpan di hardware wallet (Ledger/Trezor) atau dialihkan ke Safe Multisig (disarankan 2/3).
- [ ] **BscScan Contract Verification:** Source code seluruh implementation contract telah terverifikasi publik di BscScan.
- [ ] **Likuiditas Awal:** Verifikasi pool likuiditas di PancakeSwap (Pair SMT/BNB atau SMT/USDT).

### 2.3 Layanan Cloud & Pihak Ketiga (Third-Party Services)
- [ ] **WalletConnect Cloud:** Akun project ID di `cloud.walletconnect.com` diserahterimakan / dipindahkan ke email stakeholder.
- [ ] **RPC Node Provider:** Akses ke node premium (QuickNode / Alchemy / Ankr / Defibit) bila menggunakan kuota khusus di luar node publik.
- [ ] **Hosting Frontend:** Akses deployment dApp (Vercel / Netlify / AWS S3 + CloudFront / Cloudflare Pages).
- [ ] **Domain & DNS:** Akses domain utama aplikasi dan konfigurasi SSL/TLS.
- [ ] **Error Tracking:** Akun Sentry (`REACT_APP_SENTRY_DSN`) untuk pemantauan crash frontend dApp.

---

## 3. Checklist Verifikasi Fungsional (Acceptance Sign-off)

| Modul | Deskripsi Verifikasi | Status | Paraf Verifikator |
|---|---|:---:|---|
| **Wallet Connection** | Mendukung MetaMask, Trust Wallet, Binance Wallet, WalletConnect | [ ] OK | |
| **Network Guard** | Auto-prompt ganti network ke BSC Mainnet (ChainId 56) jika salah chain | [ ] OK | |
| **Token SMT & SMTC** | Saldo terbaca akurat, transfer BEP-20 berfungsi normal | [ ] OK | |
| **Smart Army** | Pendaftaran lisensi Army berhasil, status aktif tercatat on-chain | [ ] OK | |
| **Smart Ladder** | Pohon referral 7 level terbentuk benar, komisi terdistribusi | [ ] OK | |
| **Smart Farm** | Staking token LP/SMT, perhitungan yield, dan klaim panen reward | [ ] OK | |
| **Golden Tree** | Siklus fase pertumbuhan terbaca, kontribusi & pool reward sinkron | [ ] OK | |
| **Nobility Achievement** | Tier achievement terdeteksi dan reward claimable | [ ] OK | |
| **DEX Swap / Bridge** | Quote swap PancakeSwap terintegrasi, kalkulasi slippage berjalan | [ ] OK | |
| **Responsivitas UI** | Tampilan mobile, tablet, dan desktop rapi tanpa overlap visual | [ ] OK | |

---

## 4. Tanda Tangan Serah Terima

Dengan ditandatanganinya formulir ini, pihak pengembang menyatakan seluruh artefak kode, dokumentasi teknis, dan hak akses telah diserahkan, serta pihak penerima menyatakan telah menerima dan memverifikasi fungsionalitas sistem sesuai kesepakatan.

```
Diserahkan oleh,                          Diterima oleh,
Pihak Pengembang (Lead Dev / Vendor)      Pihak Klien / Project Owner




____________________________________      ____________________________________
Nama:                                     Nama:
Jabatan:                                  Jabatan:
Tanggal:                                  Tanggal:
```
