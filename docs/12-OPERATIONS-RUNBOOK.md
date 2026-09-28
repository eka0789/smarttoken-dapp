# 12 — Operations & Maintenance Runbook

> Panduan operasional harian, pemeliharaan berkala, dan penyesuaian parameter kontrak bagi tim teknis dan tim operasional **Smart Ecosystem (SMT)**.

---

## 1. Monitoring & Pemeliharaan Harian

### 1.1 Status RPC Node
Frontend dApp bergantung pada koneksi RPC BNB Smart Chain yang stabil. Diatur pada `src/utils/getRpcUrl.ts` dengan rotasi acak:
- Node 1: `https://bsc-dataseed1.defibit.io`
- Node 2: `https://bsc-dataseed1.ninicoin.io`
- Node 3: `https://bsc-dataseed.binance.org`

**Tindakan jika RPC publik lambat atau rate-limited:**
1. Daftarkan RPC dedicated berbayar (misal: QuickNode, Alchemy, atau Ankr Premium).
2. Perbarui environment variable frontend:
   ```env
   REACT_APP_NODE_1=https://your-dedicated-bsc-rpc-node.com
   ```
3. Lakukan redeploy frontend.

### 1.2 Monitoring Cadangan Saldo Pool Reward
Operasional rutin harus memastikan saldo token untuk reward di kontrak berikut selalu mencukupi:
- **`GoldenTreePool`**: Memastikan cadangan reward fase Golden Tree siap diklaim.
- **`SmartFarm`**: Memastikan cadangan reward token mencukupi emisi yield harian/mingguan.
- **`NobilityAchievement`**: Memastikan pool hadiah pencapaian badge dan pangkat tersedia.

---

## 2. Prosedur Operasional Rutin (SOP)

### 2.1 Menambah Likuiditas PancakeSwap (SMT/BNB & SMT/USDT)
1. Buka [PancakeSwap Pools](https://pancakeswap.finance/liquidity).
2. Hubungkan wallet penyedia likuiditas (Liquidity Provider).
3. Pilih pasangan: SMT (`0xbA3245464cb31057ae84F81E7385F47E84Fa7471`) dan WBNB atau USDT.
4. Masukkan rasio likuiditas yang ditentukan oleh tim ekonomi/market maker.
5. Konfirmasi approve dan tambah likuiditas.
6. **Catatan Keamanan:** Simpan LP Token di Safe Multisig atau kunci di token lock contract (misal PinkLock / Uncx) untuk membangun kepercayaan komunitas.

### 2.2 Penyesuaian Parameter Kontrak
Sebagian fungsi konfigurasi di kontrak Smart Ecosystem hanya dapat dipanggil oleh alamat **Owner** (`0x24C6d5CdF6078dc51c03ac130a5fA113cAE1aa49`):

- **Pause / Unpause Fitur Tertentu:**
  Pastikan wallet owner terhubung ke BscScan (menu *Contract > Write as Proxy*).
- **Update Parameter Smart Army / Ladder:**
  Perubahan level, harga aktivasi, atau rasio persentase komisi jika terdapat pembaruan kebijakan promosi.
- **Update Comptroller / Registry (`SmartComp`):**
  Jika ada penambahan modul kontrak baru di masa mendatang, daftarkan modul tersebut ke `SmartComp` agar modul lain mengenali alamat kontrak baru.

---

## 3. Prosedur Rotasi Wallet Owner & Kunci Akses

Untuk keamanan jangka panjang, jika terjadi perubahan personil atau peningkatan tata kelola ke Multisig:

1. Jalankan dry-run audit kepemilikan kontrak:
   ```bash
   cd SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main
   BSC_MAINNET_RPC=https://bsc-dataseed1.defibit.io npx hardhat run scripts/rotate-ownership.js --network bscmainnet
   ```
2. Pastikan alamat tujuan transfer sudah siap menerima (Safe Multisig disarankan).
3. Eksekusi perpindahan ownership:
   ```bash
   DEPLOYER_PRIVATE_KEY=<key_owner_saat_ini> \
   BSC_MAINNET_RPC=https://bsc-dataseed1.defibit.io \
   OWNERSHIP_NEW_OWNER=0x<alamat_multisig_baru> \
   OWNERSHIP_EXECUTE=yes \
   npx hardhat run scripts/rotate-ownership.js --network bscmainnet
   ```
4. Verifikasi di BscScan pada seluruh 10 proxy bahwa fungsi `owner()` mengembalikan alamat baru.
