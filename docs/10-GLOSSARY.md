# 10 — Glossary (Kamus Istilah)

> Istilah diurutkan alfabetis. Istilah domain SMT ditandai 🟡.

## A–B

| Istilah | Arti |
|---------|------|
| **ABI** | Application Binary Interface — "kontrak API" JSON yang dipakai ethers.js untuk memanggil fungsi smart contract |
| **AC** | Acceptance Criteria — kriteria kelulusan fitur di FRD |
| **Address** | Alamat wallet/kontrak di blockchain (`0x...`) |
| **APE/BEP-20** | Standar token di BNB Smart Chain (setara ERC-20 di Ethereum) |
| 🟡 **Activate License** | Mengubah lisensi dari Pending → Active (mulai masa aktif) |
| **Airdrop** | Distribusi token gratis; di SMT juga wallet alokasi (`NA_Airdrop`) |
| **Approve** | Transaksi ERC-20 yang memberi izin kontrak lain membelanjakan token kita |
| **BNB** | Token native BNB Chain (untuk gas) |
| **BNB Smart Chain (BSC)** | Blockchain EVM-compatible; SMT berjalan di sini (chain 56 mainnet / 97 testnet) |
| **BRD / PRD / FRD** | Business / Product / Functional Requirements Document |
| **Burn** | Menghancurkan token permanen (mengurangi supply) |
| **BUSD** | Stablecoin USD Binance; pasangan likuiditas SMT-BUSD |

## C–D

| Istilah | Arti |
|---------|------|
| **ChainId** | ID unik jaringan (56 = BSC mainnet, 97 = testnet) |
| 🟡 **Chest** | Reward kotak kejutan per tier nobility; isinya acak on-chain |
| **Comptroller / Registry** | Pola kontrak pusat yang menyimpan alamat kontrak lain (🟡 SmartComp) |
| **CRA** | Create React App — tooling build frontend |
| **dApp** | Decentralized application — aplikasi yang logika intinya di smart contract |
| **DEX** | Decentralized Exchange (di SMT: PancakeSwap) |
| 🟡 **Direct Sales** | Anggota referral level-1 langsung (halaman Wealth) |
| **Distributor** | Peran whitelist yang boleh memicu distribusi reward (`notifyReward` dll) |
| **Drill-down** | Navigasi data bertingkat (tim → level → detail anggota) |

## E–G

| Istilah | Arti |
|---------|------|
| **Emergency tax** | Pajak darurat yang dinaikkan operator saat pasar ekstrem (+10%, 24 jam) |
| **ERC/UUPS** | Standar & pola proxy upgradeable (upgrade dijalankan dari implementation, `onlyOwner`) |
| ** ethers.js** | Library JavaScript untuk berinteraksi dengan EVM |
| **Event** | Log yang dipancarkan kontrak; sumber data riwayat |
| 🟡 **Extend License** | Perpanjang masa aktif lisensi (fee BNB) |
| 🟡 **Farmer** | Pengguna yang mem-farm/stake SMT di SmartFarm |
| **Gas** | Biaya transaksi (dibayar BNB) |
| 🟡 **Golden Tree** | Pool reward berbasis "growth"; terbagi per fase (phase) |
| 🟡 **Growth** | Poin kontribusi akun ke Golden Tree (`growthBalanceOf`) |

## H–L

| Istilah | Arti |
|---------|------|
| **Hardhat** | Framework pengembangan/testing/deploy Solidity |
| **Hook** | Fungsi React (mis. `useSmartArmy`) — lapisan API frontend |
| **IPFS** | Storage terdistribusi; dipakai menyimpan avatar lisensi (`tokenUri`) |
| **Ladder** | 🟡 Sistem referral 7 level Smart Ladder (`share[7]`) |
| 🟡 **License tier** | Trial / Opportunist / Runner / Visionary (harga 100/1k/5k/10k SMT) |
| **LP / Liquidity Pool** | Pasangan token yang mengisi DEX; **LP token** = bukti saham pool |
| 🟡 **lpLocked** | LP yang terkunci saat membeli lisensi; dicairkan via liquidate (kena penalty) |

## M–N

| Istilah | Arti |
|---------|------|
| **Mainnet / Testnet** | Jaringan produksi / jaringan uji |
| **MetaMask / Trust / WalletConnect** | Provider wallet yang didukung dApp |
| **mint** | Menerbitkan token baru |
| **Multicall** | Menggabungkan banyak pembacaan kontrak dalam 1 transaksi baca |
| 🟡 **Nobility** | Sistem title 8 tingkat: Folks → Baron → Count → Viscount → Earl → Duke → Prince → King |
| **notifyReward** | Fungsi memberi tahu pool bahwa ada reward baru masuk |

## O–R

| Istilah | Arti |
|---------|------|
| **Operator** | Peran admin khusus di SmartToken (pajak/whitelist) |
| **Owner** | Pemilik kontrak (bisa upgrade/ubah parameter) |
| **PancakeSwap** | DEX terbesar BSC; factory & router dipakai SMT |
| **Proxy** | Kontrak yang menyimpan state & meneruskan panggilan ke implementation |
| **RPC** | Endpoint jaringan untuk membaca/mengirim transaksi |
| **Reward pasif** | Reward yang mengalir tanpa aksi (mis. passive share nobility) |

## S

| Istilah | Arti |
|---------|------|
| **Sequence diagram** | Diagram alur interaksi antar pihak (ada di docs 03/05) |
| 🟡 **Smart Army** | Program keanggotaan lisensi ekosistem |
| 🟡 **SMT (Smart Token)** | Token utama ekosistem, BEP-20 dengan pajak |
| 🟡 **SMTC (Smart Token Cash)** | Token reward ekosistem, dapat di-burn |
| **Slippage** | Toleransi perbedaan harga saat swap |
| **Stablecoin** | Token 1:1 USD (BUSD) |
| **Staking / Farming** | Mengunci token untuk mendapat reward |
| **Sponsor** | Referrer/upline dalam ladder |
| **Sentry** | Layanan error tracking frontend |

## T–Z

| Istilah | Arti |
|---------|------|
| **Testnet faucet** | Sumber BNB uji untuk testnet |
| **tokenUri** | URL (IPFS) metadata lisensi: nama, telegram, gambar |
| **Transaction (tx)** | Perubahan state di blockchain; punya hash |
| **TVL** | Total Value Locked — total aset yang dikunci di protokol |
| **UUPS** | Universal Upgradeable Proxy Standard — pola upgrade yang dipakai semua kontrak SMT |
| **Wallet** | Aplikasi penyimpan kunci pribadi pengguna |
| **Wei / Gwei** | Satuan terkecil ETH/BNB (1 token = 10¹⁸ wei) |
| **Whitelist (fee exempt)** | Alamat yang bebas pajak/pengecualian |

---

*Ada istilah yang membingungkan & belum terdaftar? Tambahkan di sini lewat PR (`docs/10-GLOSSARY.md`).*
