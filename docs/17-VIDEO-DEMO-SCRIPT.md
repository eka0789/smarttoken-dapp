# 17 — Video Demo Production Kit

> **Status: naskah siap pakai + versi auto-rekam sudah ada.**
> Video walkthrough otomatis (tanpa transaksi wallet): `video-assets/SMT-Video-Demo.mp4` — 2:50, 1080p, narasi TTS `id-ID-ArdiNeural`, dibuat dengan Playwright + ffmpeg (script: `.deckbuild/record-demo.js`, `.deckbuild/tts_gen.py`).
> Untuk versi dengan transaksi wallet asli (connect, swap, lisensi), ikuti naskah di bawah ini lalu rekam manual dengan OBS.
> Target durasi: **3:00** (maks 3:30). Bahasa: Indonesia.
> Aset overlay: `video-assets/card-1.png … card-7.png` (2000×1125, 16:9 — pas untuk 1080p).

---

## 0. Persiapan Sebelum Merekam (±15 menit)

| # | Item | Detail |
|---|------|--------|
| 1 | dApp berjalan | `cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev && npm start` → `http://localhost:3000` |
| 2 | Wallet terisi | MetaMask di BSC Mainnet: **sedikit BNB untuk gas** + sejumlah **SMT** (untuk swap/stake). Kalau dana minim → baca "Plan B" di tiap segmen. |
| 3 | Tab siap | (a) dApp · (b) BscScan token SMT `bscscan.com/token/0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28` · (c) kartu overlay (PNG dibuka fullscreen / PPTX `video-assets/SMT-Video-Cards.pptx` mode Slide Show) |
| 4 | OBS Studio | Gratis dari obsproject.com. Pengaturan: **1920×1080, 30 fps**, format MKV (aman dari crash → remux ke MP4), encoder x264 preset "veryfast", bitrate 6000–8000 Kbps |
| 5 | Audio | Mic + Noise Suppression (Filter → Noise Suppression: Speex -30dB). Baca naskah dengan tempo santai; **jangan terburu-buru** |
| 6 | Browser | Mode incognito + zoom 100–110%, tutup bookmark bar & notifikasi (Windows: aktifkan Focus Assist / Do Not Disturb) |
| 7 | Dry run | Rekam 1× tanpa tekanan untuk cek audio + alur, lalu rekam per segmen (lebih mudah disunting daripada sekali jalan) |

> **Tips eksekusi:** rekam **per segmen** (6 file), lalu sambung di editor (Clipchamp bawaan Windows / CapCut gratis). Tiap segmen punya kartu pembuka — tampilkan kartu 2–3 detik sebagai transisi.

---

## 1. Shot List + Naskah (baca persis seperti tertulis)

### SEGMENT 0 · Hook — 0:00–0:20 · kartu `card-1.png` + BscScan

| Time | Layar | Aksi |
|---|---|---|
| 0:00–0:10 | **card-1** (fullscreen) | — |
| 0:10–0:20 | BscScan token SMT | Scroll pelan: harga, holders, recent transfers |

**NARASI (0:00–0:20):**
> "Program reward di dunia crypto biasanya berjalan di balik layar — kamu harus percaya, tanpa bisa memeriksa. Smart Ecosystem membaliknya: seluruh distribusi reward berjalan di smart contract di BNB Smart Chain, dan bisa diverifikasi semua orang. Ini SMT — dan ini demo singkatnya."

**Teks overlay (opsional):** `BNB Smart Chain Mainnet · 0xf3F9B44b…c28`

---

### SEGMENT 1 · Masalah — 0:20–0:50 · kartu `card-2.png`

| Time | Layar | Aksi |
|---|---|---|
| 0:20–0:50 | **card-2** (fullscreen) | Diamkan; atau zoom-in pelan per baris di editor |

**NARASI (0:20–0:50):**
> "Dua ekstrem yang biasa terjadi. Pertama, reward didistribusikan manual oleh admin — tidak transparan, tidak bisa diaudit. Kedua, program referral bergaya MLM yang sebenarnya Ponzi: reward dibayar dari uang anggota baru, dan kolaps tepat saat rekrutmen berhenti. Ditambah lagi, bagi pemula DeFi terfragmentasi — swap di satu tempat, staking di tempat lain, tracking tim pakai spreadsheet. Akibatnya kepercayaan rendah, dan mayoritas calon pengguna menyerah di tengah jalan."

---

### SEGMENT 2 · Wallet & Dashboard — 0:50–1:20 · kartu `card-3.png` → dApp

| Time | Layar | Aksi |
|---|---|---|
| 0:50–0:54 | **card-3** (fullscreen) | — |
| 0:54–1:05 | dApp | Tunjukkan **NetworkGuard**: buka MetaMask, switch ke jaringan lain sebentar → peringatan muncul → kembali ke BSC Mainnet. Lalu **Connect Wallet** → tanda tangan di MetaMask |
| 1:05–1:20 | dApp Dashboard | Highlight: saldo SMT live, kartu pajak (Current Tax), status lisensi. Gerakkan mouse pelan ke tiap kartu |

**NARASI (0:50–1:20):**
> "Sekarang langsung ke produk. Saya buka dApp Smart Ecosystem. Perhatikan Network Guard — kalau wallet berada di jaringan yang salah, aplikasi langsung memperingatkan sebelum transaksi apa pun terjadi. Saya hubungkan wallet… dan dashboard langsung membaca data live dari blockchain: saldo SMT, pajak yang sedang aktif, dan status lisensi. Tidak ada angka yang di-hardcode — semuanya dibaca langsung dari smart contract."

**Plan B (tanpa dana/gas):** tetap tunjukkan NetworkGuard + Connect; saldo 0 tetap membuktikan pembacaan on-chain (bilang: "wallet baru ini belum diisi — dan lihat, datanya tetap dibaca langsung dari chain").

---

### SEGMENT 3 · Swap & Tax On-Chain — 1:20–2:00 · kartu `card-4.png` → dApp Swap → BscScan

| Time | Layar | Aksi |
|---|---|---|
| 1:20–1:24 | **card-4** (fullscreen) | — |
| 1:24–1:45 | dApp halaman Swap | Input kecil: BNB → SMT. Klik swap → konfirmasi di MetaMask → tunggu konfirmasi |
| 1:45–2:00 | BscScan | Buka token SMT → tab **Transfers**: tunjukkan tx swap barusan + saldo pool kontrak (SmartLadder / SmartFarm / GoldenTreePool) |

**NARASI (1:20–2:00):**
> "Demo intinya: pertukaran token. Saya buka halaman swap… menukar BNB ke SMT — likuiditasnya lewat PancakeSwap, langsung dari dApp. Transaksi dikonfirmasi… dan ini bagian terpentingnya: setiap transaksi SMT dikenakan pajak yang langsung terbagi on-chain. Saya buka BscScan — di sini token SMT-nya, dan di sini aliran pajaknya menuju kontrak pool: SmartLadder, SmartFarm, Golden Tree, dan achievement. Tidak ada admin yang memegang distribusi — semuanya dieksekusi oleh kontrak SmartToken, dan bisa diperiksa siapa pun."

**Plan B:** kalau tidak mau bertransaksi (gas/Slippage), tunjukkan form swap + angka pajak live, lalu langsung ke BscScan dan buka tx **orang lain** di tab Transfers — poin "pajak terdistribusi on-chain" tetap terbuktikan.

---

### SEGMENT 4 · Lisensi, Farming & Tim — 2:00–2:35 · kartu `card-5.png` → dApp

| Time | Layar | Aksi |
|---|---|---|
| 2:00–2:04 | **card-5** (fullscreen) | — |
| 2:04–2:16 | Halaman **Smart Army** | Tunjukkan 4 tier: Trial → Opportunist → Runner → Visionary (harga & level ladder). Kalau punya SMT: register lisensi |
| 2:16–2:26 | Halaman **Farming** | Tunjukkan form stake + angka reward 0,1%/hari. Kalau punya SMT: stake kecil |
| 2:26–2:35 | Halaman **Team / Ladder** | Tunjukkan struktur 7 level + porsi reward per level |

**NARASI (2:00–2:35):**
> "Sekarang bagian keanggotaan. Di halaman Smart Army ada empat tier lisensi — dari Trial sampai Visionary. Semakin tinggi tier, semakin besar level referral dan porsi reward yang terbuka. Lalu farming: saya mem-farm SMT dan LP token — reward terhitung harian, ditambah bagian passive dari pajak ekosistem. Terakhir, halaman tim: struktur referral tujuh level. Semua porsi reward tertulis di kontrak — level satu menerima porsi terbesar, sisanya mendorong pertumbuhan jaringan."

**Plan B:** tanpa transaksi pun halaman ini sudah menampilkan harga tier, parameter farming, dan struktur ladder dari chain — cukup jelaskan sambil menunjuk.

---

### SEGMENT 5 · Tutup — 2:35–3:00 · kartu `card-6.png` → `card-7.png`

| Time | Layar | Aksi |
|---|---|---|
| 2:35–2:39 | **card-6** (fullscreen) | — |
| 2:39–2:50 | Opsional: repo GitHub | Tunjukkan struktur repo + badge CI hijau (2–3 detik cukup) |
| 2:50–3:00 | **card-7** (fullscreen) | Biarkan tampil sampai video berakhir |

**NARASI (2:35–3:00):**
> "Secara arsitektur, Smart Ecosystem adalah dApp tanpa backend — semua data dan logika dibaca langsung dari blockchain. Sepuluh smart contract UUPS terverifikasi di BscScan, delapan belas dari delapan belas test lulus di CI, dan QA visual tujuh belas halaman selesai. Lihat kode dan kontraknya di GitHub dan BscScan — tautannya ada di deskripsi. Smart Ecosystem: reward yang transparan, satu pintu untuk semua."

---

## 2. Pasca-Rekam

1. Remux MKV → MP4 di OBS (File → Remux Recordings) — tanpa re-encode.
2. Sambungkan segmen di editor; potong jeda bisu; total **≤ 3:30**.
3. Normalisasi audio (CapCut/Clipchamp: "Auto volume"); target loudness ± -14 LUFS.
4. Ekspor **1080p 30fps**.
5. Thumbnail: pakai **card-1.png** (sudah 16:9, tinggal resize 1280×720) atau screenshot BscScan + logo.

## 3. Kit Upload YouTube

- **Judul:** `Smart Ecosystem (SMT) — Video Demo | DeFi Satu Pintu di BNB Smart Chain`
- **Visibility:** Unlisted (boleh untuk hackathon, asal bisa diembed)
- **Deskripsi (copy-paste):**

```
Smart Ecosystem (SMT) — ekosistem DeFi satu pintu di BNB Smart Chain.
Reward referral 7 level, farming, dan lisensi keanggotaan terdistribusi
otomatis on-chain lewat 10 smart contract UUPS yang terverifikasi.

Timestamps:
0:00 Hook — reward yang bisa diverifikasi
0:20 Masalah: reward manual, ponzi, tools terfragmentasi
0:50 Hubungkan wallet & dashboard live
1:20 Swap & pajak terdistribusi on-chain (BscScan)
2:00 Lisensi Smart Army, farming & tim 7 level
2:35 Arsitektur serverless & keamanan

Kontrak SMT: https://bscscan.com/token/0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28
GitHub: https://github.com/eka0789/smarttoken-dapp
Track: Finance & Commerce · Consumer Apps | BNB Smart Chain Hackathon
```

- **Tag:** bnb smart chain, defi, smart contract, pancakeswap, hackathon submission, token, staking, referral
- **Untuk formulir:** paste URL video (format `https://youtu.be/…` atau `https://www.youtube.com/watch?v=…` — keduanya bisa diembed).

## 4. Aset

| File | Fungsi |
|---|---|
| `video-assets/card-1.png` | Hook (0:00) + bisa jadi thumbnail |
| `video-assets/card-2.png` | Slide masalah (0:20) |
| `video-assets/card-3.png` | Pembuka segmen 01 (0:50) |
| `video-assets/card-4.png` | Pembuka segmen 02 (1:20) |
| `video-assets/card-5.png` | Pembuka segmen 03 (2:00) |
| `video-assets/card-6.png` | Pembuka segmen 04 (2:35) |
| `video-assets/card-7.png` | Kartu penutup + CTA (2:50) |
| `video-assets/SMT-Video-Cards.pptx` | Sumber kartu (bisa diedit; mode Slide Show untuk fullscreen) |
