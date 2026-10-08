# 18 — Demo Day Runbook (Testnet)

> **Tujuan:** memastikan Smart Token dApp berjalan mulus saat Demo Day — semua data
> dibaca langsung dari **BSC Testnet (chain id 97)**, karena kita demo pakai testnet sebelum
> migrasi ke Mainnet.
> **Versi aset yang dipakai dalam runbook ini (sudah diverifikasi aktif di testnet):**

| Peran | Alamat testnet (chain 97) |
|---|---|
| SMT Token | `0x768f0B3280FaE944ab42c5C9e919F26480635393` |
| SmartComp | `0x9419Ce0Fa0B39644dE6c0D5De332cc280f8a2b4C` |
| GoldenTreePool | `0x9Ab7FC48b6a8B3E38e59A9fB5f82E9695191c469` |
| SmartArmy | `0x9aD2b8345da513ac13c916c4538b6Ea215B3e54f` |
| SmartFarm | `0x2b68e85bE8076e8BBA39dF4B194AA83a7CC26439` |
| SmartLadder | `0x48B8b13052C8adB1CfaDc49CF684D27631a08153` |
| SMTBridge | `0x95379256b0DB1489Bd785548B8bdd42E68e0D723` |
| SmartNobilityAchievement | `0xA216D3ebb2f18C8580dcb506168e409f7542C455` |
| SmartOtherAchievement | `0x07bB8f9Bbc171d7350842a173ae09eaA16A57714` |
| Router (PancakeSwap) | `0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3` |
| Multicall | `0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576` |
| SMT-BNB LP | `0x0d7B71827067D17dB2C20D145964f71E3226E37c` |
| SMT-BUSD LP | `0x0cCEB32d4Fe96FB7566Eb9E7087c129B475e4899` |

**Ringkasan status (per tanggal runbook):** total supply SMT testnet 15.000.000 SMT,
likuiditas tersedia di SMT–BNB & SMT–BUSD pool (harga ~0,83 BUSD/SMT),
semua kontrak frontend terverifikasi ada kode di testnet.

---

## 0. Prinsip Demo Day di Testnet

1. **Gunakan wallet terpisah khusus demo** (jangan wallet utama). Buat akun baru di MetaMask khusus testnet.
2. **Isi BNB testnet** (gas) dari faucet — beberapa faucet tersedia:
   - <https://testnet.bnbchain.org/faucet-smart>
   - <https://faucet.quicknode.com/binance/bnb-testnet>
   - <https://www.bnbchain.org/en/testnet-faucet>
   - Duduk diam 1–2 menit, cek saldo di MetaMask (jaringan BNB Smart Chain Testnet).
3. **Siapkan 2–3 akun demo** (akun A = sponsor, akun B = anggota baru) — banyak fitur (referral,
   sponsor, ladder) jauh lebih hidup kalau punya 2 akun. Nanti bisa transfer SMT antar akun via BscScan.
4. **Semua yang tampil di layar harus live dari chain** — tidak boleh ada angka hardcode.
   Kalau satu halaman error/loading, **jangan panik**: tunjukkan transisi jaringan, buka BscScan
   untuk alamat terkait, lalu lanjut ke fitur berikutnya.
5. **Selalu test pada hari yang sama sebelum demo** (hanya ~10 menit, lihat Bab 2).

---

## 1. Persiapan Set Timer / Minggu Sebelum Demo

### 1.1 Environment wajib benar (sudah dikonfigurasi, cek ulang)

File: `SMT-FRONTEND/smarttoken-dev/smarttoken-dev/.env.production` dan `vercel.json`,
**pastikan keduanya berisi network testnet** (jangan sampai ada yang ketinggalan mainnet):

```dotenv
REACT_APP_NETWORK_ID=97
REACT_APP_NODE_1=https://bsc-testnet.publicnode.com
REACT_APP_NODE_2=https://bsc-testnet.bnbchain.org
REACT_APP_NODE_3=https://bsc-testnet.drpc.org
```

- `.env.production` dipakai saat **build produksi** (vercel build — sudah sesuai).
- Jika ingin demo dari **localhost**, buat `.env.local` berisi nilai yang sama
  (catatan: file `.env.local` di repo adalah token Vercel, jangan di-commit; buat `.env.local` baru
  hanya untuk dev).

### 1.2 Wallet & Faucet

| Item | Langkah |
|---|---|
| Akun demo | Buat 2 akun baru di MetaMask (Name: Demo-1 Sponsor, Demo-2 Member). Simpan address. |
| Tambah jaringan | MetaMask → Settings → Networks → Add network: **BNB Smart Chain Testnet**, Chain ID `97`, RPC `https://bsc-testnet.publicnode.com`, Symbol `tBNB`. (dApp juga bisa auto-switch saat connect — NetworkGuard sudah ada.) |
| Faucet | Minta BNB testnet ke tiap faucet + juga bisa minta SMT testnet dari kontrak lewat BscScan (read/write). Kalau butuh BUSD testnet, gunakan `0xf7c71c408904b8d011533F9327494C4EbF845146`. |
| Cek saldo | Buka BscScan testnet: `https://testnet.bscscan.com/address/<akun>` dan pastikan saldo tBNB > 0. |

> **Penting:** kalau MetaMask belum punya jaringan testnet dan tombol Connect Wallet langsung
> error "wrong network" — dApp punya `NetworkGuard` + tombol switch otomatis. Pastikan NetworkGuard
> tidak dismiss (tutup) sebelum network benar.

### 1.3 Siapkan "Plan B" (tanpa transaksi)

Untuk jaga-jaga kalau gas habis / faucet kosong / transaksi tertunda, siapkan:
- **BscScan testnet tab siap buka** untuk alamat SMT & beberapa kontrak, supaya bisa tunjukkan
  "data live on-chain" tanpa perlu transaksi.
- **Bisa demo read-only** (lihat saldo, tier, reserve pool) tanpa perlu signing.

---

## 2. Checklist Verifikasi H-1 (Hari Sebelum Demo) — ±10 menit

Jalankan di folder frontend. Saya sertakan script otomatis di repositori
(`scripts/demo-day-check.sh` di root repo — lihat Bab 4).

Secara manual, langkahnya:

```bash
# 1. Install dependensi (pakai flag khusus CRA lama + React 17)
cd SMT-FRONTEND/smarttoken-dev/smarttoken-dev
npm install --legacy-peer-deps

# 2. Build produksi (pakai env testnet via vercel.json / .env.production)
npm run build
# Harus selesai tanpa error. Kalau error, jalankan ulang dengan:
#   REACT_APP_NETWORK_ID=97 npm run build

# 3. Jalankan lokal
npm start
# buka http://127.0.0.1:3000  (jangan localhost — CRA sering hanya dengar 127.0.0.1)
```

**Yang wajib diklik saat H-1 (satu kali putar penuh):**

- [ ] Buka `http://127.0.0.1:3000` → Dashboard tampil (tanpa wallet: data publik on-chain tetap muncul).
- [ ] Klik **Connect Wallet** → pilih MetaMask → muncul permintaan switch/add jaringan **BSC Testnet**
      (NetworkGuard) → approve. Address & saldo tampil.
- [ ] Halaman **Dashboard** → saldo SMT & BNB terbaca (bukan 0 kecuali memang kosong, dan itu wajar).
- [ ] Halaman **Rewards** → angka reward non-nol / sesuai chain (kalau 0 karena akun baru, wajar).
- [ ] Halaman **Achievement** → tier & progress tampil.
- [ ] Halaman **Smart Army License** → 4 tier, harga lisensi terbaca dari chain.
- [ ] Halaman **Golden Tree** → pohon referensi gyroscope/level terisi.
- [ ] Halaman **Get SMT / SMTC** → pilihan swap SMT/BNB, estimasi harga & slippage muncul,
      tombol **Swap** bisa ditekan (kalau ada saldo tBNB).
- [ ] **Test transaksi nyata 1×** di hari H-1: beli/swap SMT kecil, atau register lisensi paling murah.
      Pastikan MetaMask approve & konfirmasi, lalu cek tx sukses di BscScan testnet.
      **Ini paling penting** — menghindari kejutan "tombol tidak bereaksi" di hari H.

> Catatan: kalau `npm start` di Windows error `openssl` / `digital envelope`, pastikan
> script `start` sudah memakai `NODE_OPTIONS=--openssl-legacy-provider` (di package.json sudah ada).
> Kalau tetap error, jalankan:
> ```bash
> set NODE_OPTIONS=--openssl-legacy-provider && npm start
> ```

**Siapa yang butuh apa saat H-1:**
- Demo pakai browser Chrome/Firefox + MetaMask extension.
- Mode incognito lebih aman (hindari cache/session lawas).

---

## 3. Panduan Jalannya Demo Day (T minus)

### 3.1 Checklist 30 menit sebelum sesi

- [ ] MetaMask sudah terbuka & jaringan **BSC Testnet** (chain 97).
- [ ] Akun demo-1 (sponsor) & demo-2 (member) siap; catat address.
- [ ] Saldo tBNB cukup (gas) — cek `testnet.bscscan.com`.
- [ ] Jika akan demo beli SMT: pastikan SMT testnet / BNB testnet di akun; kalau kosong,
      pakai faucet atau transfer dari akun lain.
- [ ] Browser: buka 2 tab — (A) dApp, (B) BscScan testnet SMT.
- [ ] Layar proyektor: resolusi 1920×1080, zoom browser 100%, tutup bookmark bar (F11).
- [ ] **Dry-run 5 menit**: buka tiap halaman utama sekali, pastikan tidak ada spiner abadi.
- [ ] Matikan notifikasi OS (Windows: Focus Assist / Do Not Disturb).

### 3.2 Skenario Demo yang Disarankan (durasi ±5–7 menit)

**Pembuka (30 detik):**
> "Smart Token adalah ekosistem reward DeFi satu pintu di BNB Smart Chain. Semua angka,
> saldo, reward, dan status lisensi dibaca langsung dari smart contract — di demo ini
> saya jalankan di BSC Testnet supaya aman tanpa aset asli."

**1) Connect & Network Guard (±1 menit)**
- Buka dApp → klik **Connect Wallet** → MetaMask.
- **Tunjukkan guard**: pindah ke jaringan lain sebentar (mis. Ethereum) → muncul banner merah
  "Wrong network detected" + tombol switch → klik, kembali ke BSC Testnet.
- Setelah connect, tunjukkan address wallet di header.

**2) Dashboard & data live (±1 menit)**
- Saldo SMT/BNB, kartu pajak (Current Tax), status lisensi.
- Tegaskan: "Ini bukan angka mock — dibaca dari kontrak SmartToken `0x768f...` di testnet."

**3) Swap SMT (inti — ±2 menit)**
- Buka **Get SMT / SMTC** → pilih BNB → SMT, masukkan jumlah kecil (mis. 0.01 tBNB).
- Klik Swap → konfirmasi MetaMask → tunggu sukses.
- Buka tab BscScan: tunjukkan tx baru + aliran pajak menuju pool (SmartLadder/SmartFarm/GoldenTree).
- **Plan B** (jika tx gagal): tunjukkan form swap + estimasi, lalu buka BscScan & tunjukkan
  transaksi orang lain di tab Transfers — poin "pajak terdistribusi on-chain" tetap terbukti.

**4) Fitur keanggotaan (±2 menit)**
- **Smart Army License**: 4 tier + harga lisensi; kalau sempat, register lisensi tier termurah
  (butuh SMT).
- **Farming**: form stake, reward 0,1%/hari; tunjukkan parameter dari chain.
- **Team / Ladder**: struktur 7 level, porsi reward tiap level.
- (Opsional) **Achievement**: contoh quest/progress.

**5) Penutup (±30 detik)**
> "Karena ini testnet, semua aman — tidak ada aset asli yang dipertaruhkan. Di produksi,
> tinggal ganti alamat kontrak & network ke BSC Mainnet. Terima kasih."

### 3.3 Script "jika terjadi masalah" saat demo

| Masalah | Tindakan |
|---|---|
| dApp blank / loading lama | Refresh; cek jaringan MetaMask; coba RPC lain (`.env` sudah punya 3 fallback). |
| Connect Wallet error | Pastikan MetaMask terinstall & **tidak dalam mode "locked"**; cek ekstensi; restart browser. |
| Transaksi pending lama | Buka BscScan testnet, cek tx. Kalau pending > 2 menit, batalkan & ulangi dengan gas lebih tinggi; atau pakai Plan B (tanpa transaksi). |
| Saldo tampil 0 tapi seharusnya ada | Refresh; cek address MetaMask (jangan salah akun); cek explorer testnet. |
| Halaman error kontrak | Buka alamat kontrak di BscScan testnet — pastikan chain id 97 & alamat benar (tabel Bab 0). |
| Router/Pancake error | Pastikan network testnet; router alamat `0x9Ac6...` benar untuk testnet. |
| Spinner terus | Hard refresh Ctrl+Shift+R; tutup tab lain yang memakai banyak resource. |
| Lupa isi gas | Minta faucet lagi; atau pindah ke akun demo lain yang sudah berisi. |

---

## 4. Script Otomatis Verifikasi (opsional, hemat waktu)

Saya sertakan `scripts/demo-day-check.sh` di root repo — jalankan **setiap H-1 & pagi hari demo**:

```bash
bash scripts/demo-day-check.sh
```

Script akan:
1. Cek 3 RPC testnet (harus responsive, chain id 97).
2. Cek kode kontrak 10 alamat yang dipakai frontend (harus non-kosong).
3. Cek saldo tBNB akun demo (jika akun diisi via env `DEMO_ACCOUNT`).
4. Cek ada file `.env.local`/produksi mengarah testnet (baris `REACT_APP_NETWORK_ID=97`).
5. Ingatkan menjalankan `npm run build` & `npm start`.

> Script membutuhkan `curl`, `jq` (opsional) — Windows pakai Git Bash yang sudah tersedia.

---

## 5. Setelah Demo (migrasi ke Mainnet — roadmap)

Saat siap pindah ke mainnet:
1. Update `CONTRACTS_BY_NETWORK` di `src/utils/index.ts` dengan alamat mainnet (sudah ada blok
   `Networks.MainNet` — isi dari `SMT-Backend/contract address.txt`).
2. Ganti env: `REACT_APP_NETWORK_ID=56`, RPC mainnet (sudah template di `.env.example`).
3. Hapus/arsipkan wallet demo; gunakan wallet produksi terpisah.
4. Ulangi checklist H-1 (Bab 2) sekali lagi sebelum go-live mainnet.

---

## 6. Referensi Cepat

- BscScan testnet: <https://testnet.bscscan.com>
- Faucet BNB testnet: <https://testnet.bnbchain.org/faucet-smart>
- SmartToken (SMT) testnet: `0x768f0B3280FaE944ab42c5C9e919F26480635393`
- Dokumen lama terkait: `docs/08-DEPLOYMENT.md`, `docs/14-TEST-AND-QA-REPORT.md`, `docs/17-VIDEO-DEMO-SCRIPT.md`