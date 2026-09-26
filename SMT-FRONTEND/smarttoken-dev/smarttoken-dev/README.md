# Smart Token Ecosystem (SMT) - Frontend

Web3 dApp React + TypeScript untuk ekosistem Smart Token di Binance Smart Chain (BSC).
Staking/farming, swap, golden tree pool, ladder, achievements, dan lainnya.

## Teknologi
- React 17 + TypeScript + MUI v5
- ethers.js v5 + @web3-react (Injected, WalletConnect, Binance Chain Wallet)
- Create React App (react-scripts 4)

## Menjalankan Aplikasi

```bash
npm install
npm start        # development server di http://localhost:3000
npm run build    # build produksi
```

> Catatan: karena proyek memakai webpack 4 (CRA4), script `start`/`build`
> otomatis menambahkan `NODE_OPTIONS=--openssl-legacy-provider` (via cross-env)
> agar kompatibel dengan Node.js modern (>= 17).

## Environment

Copy `.env.example` menjadi `.env.development` (dev) atau `.env.production`
(production), lalu sesuaikan `REACT_APP_NETWORK_ID` (56 = mainnet, 97 = testnet).

## Alamat Kontrak

Alamat kontrak yang dipakai frontend didefinisikan di
`src/utils/index.ts` → `CONTRACTS_BY_NETWORK`, harus sinkron dengan hasil
deploy di `SMT-Backend/contract address.txt`.
