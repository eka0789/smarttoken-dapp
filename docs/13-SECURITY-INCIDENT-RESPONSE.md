# 13 — Security & Incident Response Plan

> Prosedur tanggap darurat, manajemen insiden keamanan, dan protokol perlindungan aset untuk ekosistem **Smart Ecosystem (SMT)**.

---

## 1. Klasifikasi Tingkat Keparahan Insiden (Severity Matrix)

| Level | Kriteria | Contoh Kejadian | Waktu Respon Maksimal |
|---|---|---|:---:|
| **P0 — Critical** | Dana pengguna/protokol terancam langsung atau dieksploitasi | Bug reentrancy, pembobolan pool, private key owner bocor | **< 15 menit** |
| **P1 — High** | Kerusakan fungsionalitas mayor, transaksi gagal massal | RPC utama lumpuh total, oracle/quote DEX manipulasi harga | **< 1 jam** |
| **P2 — Medium** | Masalah tampilan frontend, metrik reward tidak sinkron | UI glitch, kalkulasi APY dApp salah, delay data on-chain | **< 4 jam** |
| **P3 — Low** | Masalah kosmetik non-kritis | Typo teks, animasi lag di perangkat tertentu | **< 24 jam** |

---

## 2. Alur Tanggap Darurat P0 (War Room Protocol)

Bila terjadi ancaman keamanan kritis atau eksploitasi on-chain:

```
[Deteksi Anomali]
       │
       ▼
1. Verifikasi Cepat (5 Menit) ───► Cek BscScan / Token Balance / Tx Drainer
       │
       ▼
2. Isolasi Kontrak (Freeze/Pause) ───► Eksekusi fungsi pause di SmartComp / Kontrak terkait
       │
       ▼
3. Nonaktifkan Akses Frontend ───► Pasang banner "Maintenance Mode" di dApp (CDN/DNS level)
       │
       ▼
4. Upgrade Proxy UUPS Darurat ───► Deploy patch kontrak baru & panggil upgradeTo
       │
       ▼
5. Komunikasi Publik & Pasca-Insiden (Post-Mortem)
```

### 2.1 Tindakan Isolasi Cepat
1. **Pemberhentian Interaksi Frontend:**
   Jika eksploitasi terjadi lewat celah dApp, arahkan traffic domain ke halaman statis pemeliharaan via Cloudflare / DNS provider untuk mencegah pengguna lain mengirim transaksi.
2. **Eksekusi Upgrade UUPS Darurat:**
   Karena seluruh kontrak berbasis **UUPS (Universal Upgradeable Proxy Standard)**, perbaikan logika dapat dideploy seketika:
   - Deploy logic contract baru dengan fungsi celah yang telah ditambal.
   - Panggil `upgradeTo(newImplementation)` menggunakan wallet Owner.
3. **Evakuasi Likuiditas/Dana:**
   Jika dana pool masih tersisa di kontrak yang rentan, owner/admin segera memanggil fungsi penarikan darurat (*emergency rescue*) ke safe cold wallet.

---

## 3. Praktik Terbaik Manajemen Kunci Akses (Key Management)

1. **JANGAN PERNAH** menyimpan private key owner atau deployer di file `.env` produksi yang terhubung ke server publik atau repositori git.
2. **Gnosis Safe Multisig:**
   Sangat direkomendasikan memindahkan kontrol semua proxy dari single-key (`0x24C6...`) ke Safe Multisig di BSC dengan skema minimal 2-of-3 atau 3-of-5 signers dari pihak eksekutif/manajemen.
3. **Pemisahan Peran:**
   - **Wallet Cold / Multisig:** Hanya untuk upgrade logic kontrak dan perubahan parameter inti.
   - **Wallet Hot Operasional:** Hanya untuk distribusi gas harian atau klaim batch reguler dengan limit saldo kecil.
