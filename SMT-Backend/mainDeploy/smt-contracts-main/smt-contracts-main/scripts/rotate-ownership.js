/**
 * OWNERSHIP ROTATION RUNBOOK (P0 security)
 * =====================================================================
 * Konteks: kunci deployer/owner lama pernah terekspos di history repo
 * (lihat .env.example). Semua 10 proxy ekosistem masih `Owned` oleh
 * akun lama => WAJIB dipindahkan ke wallet baru (idealnya multisig).
 *
 * Pemakaian:
 *   1) Dry-run  (tanpa transaksi, hanya laporan):
 *        npx hardhat run scripts/rotate-ownership.js --network bscMainnet
 *   2) Eksekusi (kirim tx transferOwnership):
 *        OWNERSHIP_NEW_OWNER=0x... OWNERSHIP_EXECUTE=yes \
 *        npx hardhat run scripts/rotate-ownership.js --network bscMainnet
 *
 * Kontrak yang diproses (proxy mainnet dari `contract address.txt`):
 *   SmartComp, SmartToken(SMT), SmartTokenCash(SMTC), SmartArmy,
 *   SmartFarm, SmartLadder, GoldenTreePool, SmartNobilityAchievement,
 *   SmartOtherAchievement, SMTBridge.
 *
 * Catatan:
 * - Semua memakai OwnableUpgradeable => fungsi `transferOwnership(address)`
 *   dan `owner()`.
 * - Setelah rotasi: VERIFIKASI di BscScan bahwa `owner()` setiap proxy
 *   = alamat baru. Simpan output skrip ini sebagai bukti audit.
 * - Rekomendasi lanjutan: gunakan Safe (Gnosis) multisig 2/3 sebagai
 *   owner baru, dan pertimbangkan timelock untuk fungsi upgrade.
 */

const PROXIES = {
  SmartComp: '0xF5a2F35c97cbfabd5ac9efAE4cC6cC021F6Bb19c',
  SmartToken: '0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28',
  SmartTokenCash: '0x6aedC09AE456651FccBBE357B57CA77A44f9da51',
  SmartArmy: '0xd46F6e865B112223D62a97fF86ebd1c20be6cBA4',
  SmartFarm: '0xfEDF921A8A0535b966b2Dc13D2c4582E6CB8B383',
  SmartLadder: '0x5eA1eF3E7ecAABdC381F5866EB76202Ebcaf008D',
  GoldenTreePool: '0x5Ee32C58766C288323b7de14F52b87ca4274fD55',
  SmartNobilityAchievement: '0x37a0E7335Ede4859F86809433a6786d1B2FeA406',
  SmartOtherAchievement: '0xaB7F3B06f132E028820071ec408ABCF9514BEFf5',
  SMTBridge: '0x93c2Cd7221f8930f4C7B1Cc146D6e24D73aAC694'
};

// ABI minimal OwnableUpgradeable
const OWNABLE_ABI = [
  'function owner() view returns (address)',
  'function transferOwnership(address newOwner)'
];

async function main() {
  const { ethers } = hre;
  const signers = await ethers.getSigners();
  const deployer = signers[0];
  const newOwner = (process.env.OWNERSHIP_NEW_OWNER || '').trim();
  const execute =
    (process.env.OWNERSHIP_EXECUTE || '').toLowerCase() === 'yes';

  console.log('== Smart Ecosystem — Ownership Rotation ==');
  console.log(
    'Signer      :',
    deployer ? await deployer.getAddress() : '(tidak ada — read-only dry-run)'
  );
  console.log('Owner baru  :', newOwner || '(belum diisi — dry-run saja)');
  console.log('Mode        :', execute ? 'EXECUTE' : 'DRY-RUN');
  console.log('='.repeat(60));

  if (execute) {
    if (!deployer) {
      throw new Error('Tidak ada signer. Set DEPLOYER_PRIVATE_KEY di .env.');
    }
    if (!ethers.utils.isAddress(newOwner)) {
      throw new Error(
        'OWNERSHIP_NEW_OWNER tidak valid. Set address baru & OWNERSHIP_EXECUTE=yes.'
      );
    }
  }

  const signerOrProvider = execute ? deployer : ethers.provider;
  const results = [];
  for (const [name, address] of Object.entries(PROXIES)) {
    const proxy = await ethers.getContractAt(OWNABLE_ABI, address, signerOrProvider);
    const currentOwner = await proxy.owner();
    const signerAddr = deployer ? await deployer.getAddress() : '';
    const isMine = signerAddr && currentOwner.toLowerCase() === signerAddr;
    results.push({ name, address, currentOwner, isMine });
    console.log(
      `${name.padEnd(26)} ${address}  owner=${currentOwner}  ${isMine ? '(kontrol oleh signer)' : '(BUKAN signer ini!)'}`
    );
  }

  if (!execute) {
    console.log('\nDRY-RUN selesai. Belum ada transaksi terkirim.');
    console.log('Untuk eksekusi: OWNERSHIP_NEW_OWNER=0x... OWNERSHIP_EXECUTE=yes npx hardhat run ...');
    return;
  }

  console.log('\n-- Mengirim transferOwnership ke', newOwner, '--');
  for (const { name, address, currentOwner } of results) {
    if (currentOwner.toLowerCase() !== (await deployer.getAddress())) {
      console.log(`SKIP ${name}: bukan dimiliki signer ini`);
      continue;
    }
    const proxy = await ethers.getContractAt(OWNABLE_ABI, address);
    const tx = await proxy.transferOwnership(newOwner);
    await tx.wait();
    const confirmed = (await proxy.owner()).toLowerCase();
    console.log(
      `${name}: tx=${tx.hash}  ownerBaru=${confirmed}  ${confirmed === newOwner.toLowerCase() ? 'OK' : 'GAGAL VERIFIKASI!'}`
    );
  }
  console.log(
    '\nSELESAI. Simpan output ini sebagai bukti audit & verifikasi manual di BscScan.'
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
