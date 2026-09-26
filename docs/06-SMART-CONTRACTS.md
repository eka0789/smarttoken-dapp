# 06 — Smart Contracts Guide

> **10 kontrak** ekosistem SMT · Solidity + Hardhat + OpenZeppelin UUPS
> Sumber: `SMT-Backend/mainDeploy/smt-contracts-main/smt-contracts-main/contracts/`
> ABI frontend: `SMT-FRONTEND/.../src/updatedContracts/` (salinan manual — sinkronkan tiap upgrade)

---

## 0. Ringkasan & Alamat Deploy (BSC Mainnet, chainId 56)

| Kontrak | Proxy Address | Pola | Owner awal |
|---------|---------------|------|------------|
| **SmartComp** (registry) | `0xF5a2F35c97cbfabd5ac9efAE4cC6cC021F6Bb19c` | UUPS proxy | `0x4877...D800` |
| **SmartToken** (SMT) | `0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28` | token + tax | sama |
| **SmartTokenCash** (SMTC) | `0x6aedC09AE456651FccBBE357B57CA77A44f9da51` | UUPS | sama |
| **SmartArmy** | `0xd46F6e865B112223D62a97fF86ebd1c20be6cBA4` | UUPS | sama |
| **SmartFarm** | `0xfEDF921A8A0535b966b2Dc13D2c4582E6CB8B383` | UUPS | sama |
| **SmartLadder** | `0x5eA1eF3E7ecAABdC381F5866EB76202Ebcaf008D` | UUPS | sama |
| **GoldenTreePool** | `0x5Ee32C58766C288323b7de14F52b87ca4274fD55` | UUPS | sama |
| **SmartNobilityAchievement** | `0x37a0E7335Ede4859F86809433a6786d1B2FeA406` | UUPS | sama |
| **SmartOtherAchievement** | `0xaB7F3B06f132E028820071ec408ABCF9514BEFf5` | UUPS | sama |
| **SMTBridge** | `0x93c2Cd7221f8930f4C7B1Cc146D6e24D73aAC694` | UUPS | sama |

**Dependensi eksternal (PancakeSwap mainnet):** Factory `0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73` · Router `0x10ED43C718714eb63d5aA57B78B54704E256024E` · WBNB `0xbb4C...95c` · BUSD `0xe9e7...D56`.
**LP pair:** SMT-BNB `0x2A5834B777Fe6e2a9830C04Ba7C215BBa649C8D3` · SMT-BUSD `0xfbeC5B4878E6401522D98459FcF9B2E0bF8bbac5`.
**Wallet namedAccounts:** PrivateSale, Airdrop, Dev, Quest (lihat `hardhat.config.js`).

> ⚠️ Selalu verifikasi ulang alamat via `SmartComp` getter sebelum integrasi — alamat di atas adalah snapshot dokumentasi, bukan jaminan runtime.

---

## 1. SmartComp — Comptroller / Registry

Peran: **service locator on-chain**. Semua kontrak lain memegang `ISmartComp` dan menarik alamat dari sini.

- Fungsi view: `isComptroller()`, `getSMT()`, `getSMTC()`, `getBUSD()`, `getWBNB()`, `getUniswapV2Factory()`, `getUniswapV2Router()`, `getSmartArmy()`, `getSmartLadder()`, `getSmartFarm()`, `getGoldenTreePool()`, `getSmartNobilityAchievement()`, `getSmartOtherAchievement()`, `getSmartBridge()`.
- Admin (`onlyOwner`): `setUniswapRouter`, `setBUSD`, `setSMTC`, `setSMT`, `setSmartBridge`, `setSmartLadder`, `setSmartArmy`, `setSmartFarm`, `setGoldenTreePool`, dst.
- Events: `NewSmartLadder`, `NewSmartArmy`, `NewSmartFarm`, `NewGoldenTreePool`.
- Inisialisasi: `initialize(router, busd)`.

**Aturan emas:** kontrak baru yang ikut ekosistem harus menerima `ISmartComp` di `initialize` dan memvalidasi `comptroller.isComptroller()`.

---

## 2. SmartToken (SMT) — Token Utama + Tax Engine

BEP-20 dengan **pajak on-transfer** yang berbeda untuk buy/sell/transfer, plus mekanisme emergency.

### Konsep kunci
- `_buyNormalTaxFee`, `_sellNormalTaxFee`, `_transferNormalTaxFee` (basis %, `< 100`).
- Komposisi pajak per jenis: `referralFee`, `goldenPoolFee`, `devFee`, `achievementFee`, `farmingFee`, `burnFee` (array, lihat event `UpdatedBuyTaxFees`/`UpdatedSellTaxFees`/`UpdatedTransferTaxFees`).
- **Emergency tax**: operator dapat menaikkan pajak sementara; lock status via `setTaxLock...` (event `UpdatedTaxLockStatus`, `ResetedTimestamp`).
- Whitelist/`excludeFromFee` untuk kontrak ekosistem & partner.
- Pair dilacak: `getETHPair()` (SMT-BNB), pair BUSD dibuat otomatis (`CreatedPair`).

### Fungsi penting
| Fungsi | Akses | Fungsi view | Akses |
|---|---|---|---|
| `setBuyFee`, `setSellFee`, `setTransferFee` | onlyOperator | `balanceOf`, `totalSupply`, `decimals` | publik |
| whitelist add/update | onlyOperator | tax info (getter internal per ABI) | publik |
| `setSmartComp`, `setExchangeRouter` | onlyOperator | `getOwner` | publik |

### Frontend
- `useSMTInfo` membaca pajak live untuk kartu "Current Tax" (buy 15%, sell 15%, dst sesuai chain).
- Tooltip dashboard menjelaskan aturan emergency (harga −25%/24 jam → +10%, 24 jam).

---

## 3. SmartTokenCash (SMTC) — Token Reward

- UUPS, `initialize(comp, questReward, dev, airdrop)` — tiga wallet penerima alokasi quest/dev/airdrop (sesuai namedAccounts).
- BEP-20 standar + `burn(amount)`. Tidak bisa di-mint sembarangan — diterbitkan sebagai reward oleh kontrak achievement/farm.

---

## 4. SmartArmy — Lisensi

### Tipe lisensi (on-chain)
```solidity
createLicense("Trial",       100  * 1e18, ladderLevel 1, ...);
createLicense("Opportunist", 1000 * 1e18, ladderLevel 3, ...);
createLicense("Runner",      5000 * 1e18, ladderLevel 5, ...);
createLicense("Visionary",   10000 * 1e18, ladderLevel 7, ...);
```

### Fungsi user
| Fungsi | Efek |
|---|---|
| `registerLicense(level, sponsor, userName, telegram, tokenUri)` | Beli lisensi (bayar SMT) → status **Pending**; mendaftarkan sponsor ke SmartLadder |
| `activateLicense()` | Pending → **Active**, mulai hitung `expireAt` |
| `upgradeLicense(level)` | Naik tier (bayar selisih) |
| `extendLicense()` payable | Perpanjang, fee BNB (`feeInfo.extendFeeBNB`) |
| `liquidateLicense()` | Active → Liquidated, cairkan `lpLocked` dikurangi `penaltyFeePercent` |

### Fungsi view penting
`licenseOf(account)`, `licenseIdOf`, `licenseLevelOf`, `isActiveLicense`, `licenseActiveDuration`, `lockedLPOf`, `licensePortionOf`, `licensedUsers`, `isEnabledIntermediary`, `fetchAllLicenses`, `countOfLicenses`.

### Admin
`createLicense`, `updateLicenseTypePrice`, `updateFeeInfo(penaltyFeePercent, extendFeeBNB, feeAddress)`, `setComptroller`.

### Events
`LicenseTypeCreated/Updated`, `RegisterLicense`, `ActivatedLicense`, `LiquidateLicense`, `ExtendLicense`, `TransferLicense`.

---

## 5. SmartFarm — Staking & Reward

### Fungsi user
`stakeSMT(amount, lpAmount)` · `withdrawSMT(amount)` · `claimReward(_amount)` · `exit()`.

### Reward model
- **Fixed reward**: 0.1%/hari dari jumlah farm (`calcFixedReward`).
- **Passive reward**: bagian dari pajak farming & distribusi (`calcPassiveReward`, `notifyRewardAmount`).
- View: `earned(account)`, `earnedPassive(account)`, `rewardsOf`, `havestOf`, `balanceOf`, `reserveOf`, `userInfoOf`, `rewardPerToken`, `lastTimeRewardApplicable`.

### Internal
Swap & likuiditas otomatis: `_swapTokensForBUSD`, `_swapTokensForSMT`, `_addLiquidity`, `_removeLiquidity` — sebagian pajak farming dikonversi & ditambahkan ke LP.
Admin: `updateFarmingRewardParams`, `updateFeeInfo`, `setComptroller`.
Events: `Staked`, `Withdrawn`, `Claimed`, `RewardAdded`, `UpdatedRewardWallet`.

---

## 6. SmartLadder — Referral 7 Level

### Struktur
```solidity
struct Activity {
  string name;       // buytax, farmtax, smartliving, ecosystem
  uint16[7] share;   // distribusi per level (basis 10000)
  address token;     // SMT
  bool enabled; bool isValid;
  uint256 totalDistributed;
}
```
Default (`initActivities`): buytax `[5000,500,500,750,750,1250,1250]`, farmtax `[5500,250,250,750,750,1250,1250]`, smartliving & ecosystem `[5000,500,500,750,750,1250,1250]`.

### Fungsi
- User: (dipanggil kontrak lain) `registerSponsor(user, sponsor)` — dipicu saat `registerLicense`.
- Distribusi: `distributeTax(id, account)`, `distributeBuyTax`, `distributeFarmingTax`, `distributeSmartLivingTax`, `distributeEcosystemTax` — membagi pajak ke sponsor L1–L7 + admin wallet.
- View: `usersOf(sponsor)`, `sponsorOf(user)`, `isRegistered(user, sponsor)` → **dipakai Wealth/Team Management**.
- Admin: `addActivity`, `updateActivityShare`, `enableActivity`, `updateAdminWallet`, `initActivities`.

Events: `ActivityAdded/Updated/Enabled`, `ReferralReward(from, sponsor, token, amount, level)`, `AdminReferralReward`.

---

## 7. GoldenTreePool — Growth & Phase Reward

- Growth tercatat per akun via `increaseGrowth` (dipicu aktivitas ekosistem, `notifyGrowth` dari Nobility).
- Fase (`currentPhaseOfGoldenTree`) naik saat `currentTotalGrowth` melampaui `thresholdPrice()` → `UpgradeTreePhase(n)` + `distributePhaseReward(phase)` ke kontributor.
- `notifyReward(amount, account)` — menerima BUSD/SMT masuk; `swapDistribute(_amount)` menukar SMTC→BUSD progresif; `sellSmtc(amount)` untuk distribusi.
- Batasan admin: `setSwapEnabled`, `setLimitPerSwap`, `addDistributor`/`removeDistributor` (siapa yang boleh `notifyReward`), `updateGrowthShare`.
- View: `growthBalanceOf`, `contributionOf`, `currentTotalGrowth`, `smtcTotalSupply`, `getRewardsDistributor`, `currentPhaseOfGoldenTree`, `thresholdPrice`.

Events: `RewardAdded`, `RewardSwapped`, `Growth`, `ReferralGrowth`, `UpgradeTreePhase`.

---

## 8. SmartNobilityAchievement — Title & Chest

- 8 title (`totalNobilityTypes = 8`): Folks, Baron, Count, Viscount, Earl, Duke, Prince, King. Parameter per title: threshold growth (contoh Folks `1e18`, Baron `1e19`, Count `5e19`), porsi, biaya upgrade, chest supply SMT (`_mapChestStmSupply`) & SMTC (`_mapChestStmcSupply`).
- Klaim reward: `claimChestSMTReward`, `claimChestSMTCReward`, `claimNobleReward`, `claimPassiveShareReward`.
- Reward acak chest: `getChestRandomReward(nonce, nobilityType)`.
- Progres: `isUpgradeable(from, to) → (bool, price)`, `isPossibleNobilityReward(account)`.
- Distribusi leader: `distributeToNobleLeaders(amount)`, `distributePassiveShare(...)`; porsi via `nobilityOf(account).portions` (Folks 1 … King 5).
- View: `nobilityTitleOf(account)` → nama string (dipakai sidebar avatar badge), `isNobleLeader`, `userNobilityCounts`.

Events: `NobilityTypeUpdated`, `UserNobilityUpgraded`, `RewardSwapped`.

---

## 9. SmartOtherAchievement — Farm / Surprise / Sell-Tax Reward

- Klaim: `claimFarmReward`, `claimSurprizeSMTReward`, `claimSurprizeSMTCReward`, `claimSellTaxReward`.
- Distribusi (dipanggil farm/bridge): `distributeSellTax`, `distributeToFarmers`, `distributeSurprizeReward(...)`, `addFarmDistributor`.
- View: `rewardsInfoOf(account)` (struct UserInfo).
- Admin: `swapDistribute`, `removeFarmDistributor`, `setComptroller`.

Events: `RewardSwapped`.

---

## 10. SMTBridge — Swap Aggregator

- Fungsi user: `swapExactTokensForTokensSupportingFeeOnTransferTokens`, `swapExactETHForTokens...`, `swapExactTokensForETH...` — wrapper PancakeSwap yang sadar pajak (fee-on-transfer).
- Internal: `_swapSupportingFeeOnTransferTokens`, `_transferTokenToPair`.
- Admin: `collect(token)` (tarik token ter-stray), `setAggregatorFee`, `setPancakeFactory`, `setWBNB`.

> Dipakai halaman **Get SMT/SMTC** (SwapPanel) via `useSwap`.

---

## 11. Upgradeability & Keamanan

### Pola UUPS
```solidity
contract X is UUPSUpgradeable, OwnableUpgradeable, IX {
  function initialize(address _comp) public initializer { __Ownable_init(); ... }
  function _authorizeUpgrade(address) internal override onlyOwner {}
}
```

### Checklist sebelum upgrade implementation
1. **Storage layout** tidak boleh mengubah urutan/tipe variabel state lama (tambahkan hanya di akhir).
2. `initializer` baru tidak boleh dipanggil lagi (gunakan `reinitializer(n)` bila perlu).
3. Jalankan `npx hardhat test` penuh.
4. Deploy implementation → `upgradeToAndCall` via proxy (hardhat-upgrades).
5. Verifikasi implementation baru di BscScan; update ABI di frontend (`updatedContracts/`).
6. Update dokumen: 06 (fungsi baru), 05 (diagram bila berubah), alamat bila proxy baru.

### Model akses
| Peran | Fungsi | Catatan |
|---|---|---|
| `owner` (OwnableUpgradeable) | set registry, upgrade, parameter | rekomendasi: pindah ke multisig |
| `operator` (SmartToken) | pajak, whitelist | pantau via event |
| `distributor` (GTP/achievement) | notify/distribute | whitelist address |
| user | register/stake/claim/swap | — |

### Risiko yang diketahui
- Kunci deployer lama terekspos di history repo (`mainDeploy/.env.example` mencatatnya) → **rotasi ownership wajib**.
- Semua proxy tanpa timelock → pertimbangkan timelock/multisig di F1.
- Event distribusi besar (`swapDistribute`) bergantung likuiditas pool — sudah ada `setLimitPerSwap`.
