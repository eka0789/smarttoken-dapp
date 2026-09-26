# 07 — Interface & Integration Reference ("API Layer")

> Aplikasi ini **tidak punya REST API** — lapisan "API" adalah **React hooks + utilitas web3** yang membungkus kontrak.
> Dokumen ini adalah referensi integrator: *hook apa yang dipanggil, kontrak/fungsi apa yang diakses, data apa yang kembali.*

---

## 1. Peta Hook → Kontrak

| Hook (`src/hooks/`) | Domain | Kontrak & fungsi utama | Dipakai halaman |
|---|---|---|---|
| `useAuth` | Sesi wallet | `@web3-react` (account, chainId, library) | global |
| `useEagerConnect` / `useInactiveListener` | Auto-reconnect & event wallet | connector Injected/BSC/WC | global |
| `useSmartArmy` | Lisensi | `SmartArmy.registerLicense / activateLicense / upgradeLicense / liquidateLicense / extendLicense / licenseOf / licenseTypes / fetchAllLicenses` | Smart Army, Sidebar |
| `useSmartAchievement` | Nobility title | `SmartNobilityAchievement.nobilityTitleOf / isUpgradeable / claim*` | Achievement, Rewards |
| `useRewards` | Semua klaim reward | `SmartNobilityAchievement.claimChestSMT/SMTC, claimPassiveShareReward`; `SmartOtherAchievement.claimSurprizeSMT/SMTC, claimFarmReward, claimSellTaxReward`; `fetchQuestRewards` | Rewards ×5 |
| `useGoldenTree` | Growth & fase | `GoldenTreePool.currentTotalGrowth / currentPhaseOfGoldenTree / growthBalanceOf / contributionOf / thresholdPrice` | Golden Tree, Dashboard |
| `useSmartFarmInfo` / `useFarmHarvest` / `useFarmingStakeSMT` | Farming | `SmartFarm.balanceOf / earned / earnedPassive / stakeSMT / withdrawSMT / claimReward / exit` | Daily Farming |
| `useLadder` | Jaringan tim | `SmartLadder.usersOf / sponsorOf / isRegistered / activities` | Wealth → Team |
| `useSMTInfo` | Token & pajak | `SmartToken` tax getters, pairs, supply | Dashboard (Current Tax) |
| `useTokenBalances` | Saldo multi-token | `balanceOf` SMT/SMTC/BNB/BUSD/LP (multicall) | global, Wealth |
| `useTokenPrices` / `useTokenRatio` | Harga | router `getAmountsOut` / pair reserves | Swap, monitor |
| `useSwap` | Swap | `SMTBridge.swapExact*` + router quote | Get SMT |
| `useAddLiquidity` | LP | router `addLiquidityETH`/`removeLiquidityETH` | Get SMT |
| `useAxios` | HTTP opsional | — (cadangan integrasi off-chain) | — |
| `useView` | Util layout | — | — |

---

## 2. Utilitas Inti (`src/utils/`)

### 2.1 `index.ts` — registry kontrak & helper

```ts
// Alamat + ABI per chain (56 mainnet, 97 testnet)
CONTRACTS_BY_NETWORK[chainId]['SmartArmy'] // → { address, abi }
getContract(name, chainId, signerOrProvider?)   // → ethers.Contract
getContractAddress(name, chainId)               // → string
simpleProvider                                  // provider baca tanpa wallet
```

Kontrak terdaftar: `SmartTokenCash`, `SMTBridge`, `SmartComp`, `GoldenTreePool`, `SmartNobilityAchievement`, `SmartOtherAchievement`, `SmartArmy`, `SmartFarm`, `SmartLadder`, `SmartToken`, `SMT_BNB_LP`, `SMT_BUSD_LP`.

> **Aturan:** alamat baru HANYA ditambah di sini. ABI baru ditaruh di `src/updatedContracts/<Nama>.sol/<Nama>.json` (salinan dari hasil build Hardhat) lalu di-import ke `utils/index.ts`.

### 2.2 `connectors.ts` — wallet

| Connector | Kondisi aktif | Chain |
|---|---|---|
| `InjectedConnector` | MetaMask/Trust terpasang | 56, 97 |
| `BscConnector` | Binance Chain Wallet | 56, 97 |
| `WalletConnectV2Connector` | `REACT_APP_WALLETCONNECT_PROJECT_ID` ada | 56 (+97 optional) |

`ConnectorNames = { Injected, WalletConnect, BinanceChainWallet }`.

### 2.3 Lain-lain
| File | Isi |
|---|---|
| `multicall.ts` | agregasi banyak `call` dalam satu RPC (`Multicall.json` ABI) |
| `ipfs.ts` | upload avatar lisensi → `tokenUri` (`isIPFSConfigured`, `uploadToIPFS`) |
| `formatBalance.ts` | `formatDecimalNumber(x, dec)` — tampilan angka |
| `licenseInfo.ts` | konstanta tier: `TRIAL, OPPORTUNIST, RUNNER, VISIONARY` |
| `nobilityInfo.ts` | `PortionInfo` porsi reward per title (Folks 1 … King 5) |
| `passiveGlobalShareInfo.ts` | data porsi passive share |
| `cache.ts`, `loadingBar.ts`, `percent.ts`, `ethereum.ts`, `wallet.ts` | util pendukung |

---

## 3. Contoh Integrasi (copy-paste ready)

### 3.1 Baca data lisensi user
```tsx
import { useWeb3React } from '@web3-react/core';
import useSmartArmy from 'src/hooks/useSmartArmy';

const { account, chainId } = useWeb3React();
const { fetchLicense, fetchLicenseType } = useSmartArmy();

const license = await fetchLicense(account);        // { level, status, tokenUri, ... }
const tier    = await fetchLicenseType(license.level); // { name, price, ladderLevel, ... }
```

### 3.2 Kirim transaksi + feedback
```tsx
const contract = await getContract('SmartArmy', chainId);
try {
  const tx = await contract.activateLicense();
  toast.loading('Confirming…', { id: 'tx' });
  await tx.wait();
  toast.success('License activated', { id: 'tx' });
} catch (e: any) {
  toast.error(e?.reason ?? 'Transaction failed', { id: 'tx' });
}
```

### 3.3 Baca banyak nilai sekaligus (multicall)
```ts
import { multicall } from 'src/utils/multicall';
// lihat signature di file — gunakan untuk halaman yang butuh >5 call
```

---

## 4. Events yang Relevan di-Monitor (untuk indexer/notifikasi)

| Event | Kontrak | Kegunaan produk |
|---|---|---|
| `RegisterLicense` / `ActivatedLicense` | SmartArmy | Onboarding, notifikasi |
| `Staked` / `Withdrawn` / `Claimed` | SmartFarm | Riwayat earning (FRD M4) |
| `ReferralReward` | SmartLadder | Notifikasi komisi tim |
| `Growth` / `UpgradeTreePhase` | GoldenTreePool | Notifikasi fase baru |
| `UserNobilityUpgraded` | NobilityAchievement | Notifikasi title |
| `RewardSwapped` | Achievement/GTP | Notifikasi reward |
| `UpdatedTaxes` / emergency | SmartToken | Banner pajak berubah |

> Belum ada indexer; halaman riwayat saat ini membaca langsung/mocked. Roadmap F2.

---

## 5. Integrasi Eksternal

| Layanan | Dipakai untuk | Konfigurasi |
|---|---|---|
| BSC RPC publik | baca/write chain | `REACT_APP_NODE_1..3`, `connectors.ts` |
| WalletConnect Cloud | scan-to-connect | `REACT_APP_WALLETCONNECT_PROJECT_ID` |
| IPFS (web3.storage/Infura-style via `ipfs-http-client`) | avatar lisensi | lihat `utils/ipfs.ts` |
| BscScan | verifikasi tx & kontrak | link langsung dari UI |
| Sentry | error tracking | `REACT_APP_SENTRY_DSN` |

---

## 6. Konvensi Error & Bahasa

- Revert Solidity → `e.reason` ditampilkan apa adanya bila informatif, else pesan generik.
- Validasi lokal (saldo, form) → toast/alert **sebelum** tx dikirim (hemat gas, UX lebih baik).
- Semua angka tampil memakai `formatDecimalNumber`/`toEth` — jangan pernah render wei mentah.
