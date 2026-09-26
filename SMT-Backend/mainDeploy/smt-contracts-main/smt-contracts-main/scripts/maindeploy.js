const path = require('path');
const Utils = require('../Utils');
const {
  ethers,
  getNamedAccounts,
  getChainId,
  deployments,
} = require('hardhat');
const { deploy } = deployments;
const { expect } = require('chai');

// const { deploy1820 } = require('deploy-eip-1820');
const chalk = require('chalk');
const fs = require('fs');

const uniswapRouterABI =
  require('../artifacts/contracts/interfaces/IUniswapRouter.sol/IUniswapV2Router02.json').abi;
const uniswapPairABI =
  require('../artifacts/contracts/libs/dexfactory.sol/IPancakeSwapPair.json').abi;

const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay * 1000));

let owner;
let smtContract, SmartLadderContract;

function dim() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.dim.call(chalk, ...arguments));
  }
}

function cyan() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.cyan.call(chalk, ...arguments));
  }
}

function yellow() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.yellow.call(chalk, ...arguments));
  }
}

function green() {
  if (!process.env.HIDE_DEPLOY_LOG) {
    console.log(chalk.green.call(chalk, ...arguments));
  }
}

function displayResult(name, result) {
  if (!result.newlyDeployed) {
    yellow(`Re-used existing ${name} at ${result.address}`);
  } else {
    green(`${name} deployed at ${result.address}`);
  }
}

const chainName = (chainId) => {
  switch (chainId) {
    case 1:
      return 'Mainnet';
    case 3:
      return 'Ropsten';
    case 4:
      return 'Rinkeby';
    case 5:
      return 'Goerli';
    case 42:
      return 'Kovan';
    case 56:
      return 'Binance Smart Chain';
    case 77:
      return 'POA Sokol';
    case 97:
      return 'Binance Smart Chain (testnet)';
    case 99:
      return 'POA';
    case 100:
      return 'xDai';
    case 137:
      return 'Matic';
    case 1337:
      return 'HardhatEVM';
    case 31337:
      return 'HardhatEVM';
    case 80001:
      return 'Matic (Mumbai)';
    default:
      return 'Unknown';
  }
};

async function main() {
  const { getNamedAccounts } = hre;
  const { getContractFactory, getSigners } = ethers;

  let {
    NA_PrivateSale,
    NA_Airdrop,
    NA_Dev,
    NA_Quest,
    NA_Router,
    NA_SmartComp,
    NA_SmartBridge,
    NA_GoldenTreePool,
    NA_NobilityAch,
    NA_OtherAch,
    NA_SmartArmy,
    NA_SmartFarm,
    NA_SmartLadder,
    NA_Busd,
    NA_SMT,
    NA_SMTC
  } = await getNamedAccounts();

  console.log('router: ', NA_Router);

  [owner] = await getSigners();

  const chainId = parseInt(await getChainId(), 10);
  const upgrades = hre.upgrades;

  dim('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  dim('Smart Ecosystem Contracts - Deploy Script');
  dim('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

  dim(`Network: ${chainName(chainId)}`);

  console.log('owner:', owner.address);
  console.log('chain id:', chainId);

  const options = {
    deploySmartComp: false,
    upgradeSmartComp: false,

    deployGoldenTreePool: false,
    upgradeGoldenTreePool: false,

    deploySmartNobilityAch: false,
    upgradeSmartNobilityAch: false,

    deploySmartOtherAch: false,
    upgradeSmartOtherAch: false,

    deploySmartArmy: false,
    upgradeSmartArmy: false,

    deploySmartFarm: false,
    upgradeSmartFarm: true,

    deploySmartLadder: false,
    upgradeSmartLadder: false,

    deploySMTBridge: false,

    deploySMTCashToken: false,

    resetSmartComp: false,

    deploySMTToken: false,
    upgradeSmartToken: false,
  };

  ///////////////////////// BUSD Token ///////////////////////////
  let BUSDAddress = NA_Busd;
  ///////////////////////// SmartComp ///////////////////////
  let smartCompAddress = NA_SmartComp;
  const SmartComp = await ethers.getContractFactory('SmartComp');
  if (options.deploySmartComp) {
    cyan('Deploying SmartComp contract');
    const SmartCompProxy = await upgrades.deployProxy(
      SmartComp,
      [NA_Router, BUSDAddress],
      { initializer: 'initialize', kind: 'uups' }
    );
    await SmartCompProxy.deployed();
    displayResult('SmartComp Proxy', SmartCompProxy);

    smartCompAddress = SmartCompProxy.address;
  }
  if (options.upgradeSmartComp) {
    green('Upgrading SmartComp contract');
    const smartCompContract = await SmartComp.deploy();
    smartCompContract.deployed();
    displayResult('SmartComp Contract', smartCompContract);
    smartCompAddress = smartCompContract.address;

    await upgrades.upgradeProxy(smartCompAddress, SmartComp);
    green(`Upgraded SmartComp Contract`);
  }
  if (!options.deploySmartComp && !options.upgradeSmartComp) {
    green(`\nSmartComp Contract deployed at ${smartCompAddress}`);
  }
  const smartCompInstance = await ethers.getContractAt(
    'SmartComp',
    smartCompAddress
  );

  ///////////////////////// SMTBridge ///////////////////////
  let uniswapV2Factory = await smartCompInstance.getUniswapV2Factory();
  console.log('uniswapV2Factory:', uniswapV2Factory);

  let uniswapV2Router = await smartCompInstance.getUniswapV2Router();
  console.log('uniswapV2Router:', uniswapV2Router);

  let smtBridgeAddress = NA_SmartBridge;
  if (options.deploySMTBridge) {
    let tx = await smartCompInstance.setBUSD(BUSDAddress);
    await tx.wait();

    let wbnb = await smartCompInstance.getWBNB();
    let busd = await smartCompInstance.getBUSD();
    console.log('wbnb:', wbnb);
    console.log('busd:', busd);

    let uniswapV2Factory = await smartCompInstance.getUniswapV2Factory();
    console.log('uniswapV2Factory:', uniswapV2Factory);

    cyan(`\nDeploying SMTBridge Contract...`);
    const SMTBridgeContract = await ethers.getContractFactory('SMTBridge');
    let deployedSMTBridge = await upgrades.deployProxy(
      SMTBridgeContract,
      [smartCompAddress],
      { initializer: 'initialize', kind: 'uups' }
    );
    await deployedSMTBridge.deployed();
    displayResult('SMTBridge contract', deployedSMTBridge);
    smtBridgeAddress = deployedSMTBridge.address;
    tx = await smartCompInstance.setSmartBridge(smtBridgeAddress);
    await tx.wait();
    console.log('set SmartBridge to SmartComp: ', tx.hash);
  } else {
    green(`\SMTBridge Contract deployed at ${smtBridgeAddress}`);
  }

  const smartBridgeIns = await ethers.getContractAt(
    'SMTBridge',
    smtBridgeAddress
  );
  ///////////////////////// Golden Tree Pool ////////////////////
  let goldenTreePoolAddress = NA_GoldenTreePool;
  const GoldenTreePool = await ethers.getContractFactory('GoldenTreePool');
  if (options.deployGoldenTreePool) {
    cyan(`\nDeploying GoldenTreePool contract...`);
    const GoldenTreePoolProxy = await upgrades.deployProxy(
      GoldenTreePool,
      [smartCompAddress],
      {
        initializer: 'initialize',
        kind: 'uups',
      }
    );
    await GoldenTreePoolProxy.deployed();
    displayResult('GoldenTreePool Proxy Address:', GoldenTreePoolProxy);

    goldenTreePoolAddress = GoldenTreePoolProxy.address;

    let tx = await smartCompInstance.setGoldenTreePool(goldenTreePoolAddress);
    await tx.wait();
    console.log('set GoldenTreePool to SmartComp: ', tx.hash);
  }
  if (options.upgradeGoldenTreePool) {
    green(`\nUpgrading GoldenTreePool contract...`);
    await upgrades.upgradeProxy(goldenTreePoolAddress, GoldenTreePool);
    green(`GoldenTreePool Contract Upgraded`);
  }
  if (!options.deployGoldenTreePool && !options.upgradeGoldenTreePool) {
    green(`\nGoldenTreePool Contract deployed at ${goldenTreePoolAddress}`);
  }
  const goldenTreePoolIns = await ethers.getContractAt(
    'GoldenTreePool',
    goldenTreePoolAddress
  );

  ///////////////// Smart Nobility Archievement ////////////////////
  let smartNobilityAchAddress = NA_NobilityAch;
  const SmartNobilityAchievement = await ethers.getContractFactory(
    'SmartNobilityAchievement'
  );
  if (options.deploySmartNobilityAch) {
    cyan(`\nDeploying SmartNobilityAchievement Contract...`);
    const nobilityAchProxy = await upgrades.deployProxy(
      SmartNobilityAchievement,
      [smartCompAddress],
      {
        initializer: 'initialize',
        kind: 'uups',
      }
    );
    await nobilityAchProxy.deployed();
    displayResult('SmartNobilityAchievement Proxy Address:', nobilityAchProxy);
    smartNobilityAchAddress = nobilityAchProxy.address;

    let tx = await smartCompInstance.setSmartNobilityAchievement(
      smartNobilityAchAddress
    );
    await tx.wait();
    console.log('set SmartNobilityAchievement to SmartComp: ', tx.hash);
  }
  if (options.upgradeSmartNobilityAch) {
    green(`\nUpgrading GoldenTreePool contract...`);
    await upgrades.upgradeProxy(
      smartNobilityAchAddress,
      SmartNobilityAchievement
    );
    green(`GoldenTreePool Contract Upgraded`);
  }
  if (!options.deploySmartNobilityAch && !options.upgradeSmartNobilityAch) {
    green(
      `\nSmartNobilityAchievement Contract deployed at ${smartNobilityAchAddress}`
    );
  }
  const smartNobilityAchIns = await ethers.getContractAt(
    'SmartNobilityAchievement',
    smartNobilityAchAddress
  );

  ///////////////// Smart Nobility Archievement ////////////////////
  let smartOtherAchAddress = NA_OtherAch;
  const SmartOtherAchievement = await ethers.getContractFactory(
    'SmartOtherAchievement'
  );
  if (options.deploySmartOtherAch) {
    cyan(`\nDeploying SmartOtherAchievement Contract...`);
    const otherAchProxy = await upgrades.deployProxy(
      SmartOtherAchievement,
      [smartCompAddress],
      {
        initializer: 'initialize',
        kind: 'uups',
      }
    );
    await otherAchProxy.deployed();
    displayResult('SmartOtherAchievement Proxy Address:', otherAchProxy);
    smartOtherAchAddress = otherAchProxy.address;

    let tx = await smartCompInstance.setSmartOtherAchievement(smartOtherAchAddress);
    await tx.wait();
    console.log('set SmartOtherAchievement to SmartComp: ', tx.hash);
  }
  if (!options.deploySmartOtherAch && !options.upgradeSmartOtherAch) {
    green(
      `\nSmartOtherAchievement Contract deployed at ${smartOtherAchAddress}`
    );
  }
  const smartOtherAchIns = await ethers.getContractAt(
    'SmartOtherAchievement',
    smartOtherAchAddress
  );

  ///////////////// Smart Army //////////////////////
  let smartArmyAddress = NA_SmartArmy;
  const SmartArmy = await ethers.getContractFactory('SmartArmy');
  if (options.deploySmartArmy) {
    cyan(`\nDeploying SmartArmy contract...`);
    const SmartArmyContract = await upgrades.deployProxy(
      SmartArmy,
      [smartCompAddress],
      { initializer: 'initialize', kind: 'uups' }
    );
    await SmartArmyContract.deployed();
    smartArmyAddress = SmartArmyContract.address;
    displayResult('SmartArmy Contract Address:', SmartArmyContract);

    let tx = await smartCompInstance.setSmartArmy(smartArmyAddress);
    await tx.wait();
    console.log('set SmartArmy to SmartComp: ', tx.hash);
  }
  if (options.upgradeSmartArmy) {
    green(`\nUpgrading SmartArmy contract...`);
    await upgrades.upgradeProxy(smartArmyAddress, SmartArmy);
    green(`Upgraded SmartArmy Contract`);
  }
  if (!options.deploySmartArmy && !options.upgradeSmartArmy) {
    green(`\nSmartArmy Contract deployed at ${smartArmyAddress}`);
  }
  const smartArmyIns = await ethers.getContractAt(
    'SmartArmy',
    smartArmyAddress
  );

  ///////////////////// Smart Farm ////////////////////////
  let smartFarmAddress = NA_SmartFarm;
  const SmartFarm = await ethers.getContractFactory('SmartFarm');
  if (options.deploySmartFarm) {
    cyan(`\nDeploying SmartFarm contract...`);
    const SmartFarmContract = await upgrades.deployProxy(
      SmartFarm,
      [smartCompAddress],
      { initializer: 'initialize', kind: 'uups' }
    );
    await SmartFarmContract.deployed();
    smartFarmAddress = SmartFarmContract.address;
    displayResult('SmartFarm Contract Address:', SmartFarmContract);

    let tx = await smartCompInstance
      .connect(owner)
      .setSmartFarm(smartFarmAddress);
    await tx.wait();
    console.log('set SmartFarm to SmartComp: ', tx.hash);
  }
  if (options.upgradeSmartFarm) {
    cyan(`\nUpgrading SmartFarm contract...`);
    const SmartFarmContract = await SmartFarm.deploy();
    await SmartFarmContract.deployed();
    smartFarmAddress = SmartFarmContract.address;
    displayResult('SmartFarm Contract Address:', SmartFarmContract);
  }
  if (!options.deploySmartFarm && !options.upgradeSmartFarm) {
    green(`\nSmartFarm Contract deployed at ${smartFarmAddress}`);
  }
  const smartFarmIns = await ethers.getContractAt(
    'SmartFarm',
    smartFarmAddress
  );

  ///////////////////////// Smart Ladder ///////////////////////////
  let smartLadderAddress = NA_SmartLadder;
  const SmartLadder = await ethers.getContractFactory('SmartLadder');
  if (options.deploySmartLadder) {
    cyan(`\nDeploying SmartLadder contract...`);
    SmartLadderContract = await upgrades.deployProxy(
      SmartLadder,
      [smartCompAddress, owner.address],
      { initializer: 'initialize', kind: 'uups' }
    );
    await SmartLadderContract.deployed();
    smartLadderAddress = SmartLadderContract.address;
    displayResult('SmartLadder Contract Address:', SmartLadderContract);

    let tx = await smartCompInstance
      .connect(owner)
      .setSmartLadder(smartLadderAddress);
    await tx.wait();
    console.log('set SmartLadder to SmartComp: ', tx.hash);
  }
  if (options.upgradeSmartLadder) {
    green(`\nUpgrading SmartLadder contract...`);
    await upgrades.upgradeProxy(smartLadderAddress, SmartLadder);
    green(`SmartLadder Contract Upgraded`);
  }
  if (!options.deploySmartLadder && !options.upgradeSmartLadder) {
    green(`\nSmartLadder Contract deployed at ${smartLadderAddress}`);
  }
  const smartLadderIns = await ethers.getContractAt(
    'SmartLadder',
    smartLadderAddress
  );

  ///////////////////////// SmartTokenCash ///////////////////////
  let smtcAddress = NA_SMTC;
  if (options.deploySMTCashToken) {
    cyan(`\nDeploying SMTC Contract...`);
    const SmartTokenCash = await ethers.getContractFactory('SmartTokenCash');
    let smtcContract = await upgrades.deployProxy(
      SmartTokenCash,
      [smartCompAddress, NA_Quest, NA_Dev, NA_Airdrop],
      { initializer: 'initialize', kind: 'uups' }
    );
    await smtcContract.deployed();
    smtcAddress = smtcContract.address;
    displayResult('SmartTokenCash contract', smtcContract);

    let tx = await smartCompInstance.connect(owner).setSMTC(smtcAddress);
    await tx.wait();
    console.log('set SmartTokenCash to SmartComp: ', tx.hash);
  }
  let smtcContract = await ethers.getContractAt('SmartTokenCash', smtcAddress);

  if (options.resetSmartComp) {
    let tx = await smartCompInstance
      .connect(owner)
      .setSmartBridge(smtBridgeAddress);
    await tx.wait();
    console.log('set SmartBridge to SmartComp: ', tx.hash);

    tx = await smartCompInstance.setGoldenTreePool(goldenTreePoolAddress);
    await tx.wait();
    console.log('set GoldenTreePool to SmartComp: ', tx.hash);

    tx = await smartCompInstance.setSmartAchievement(smartAchievementAddress);
    await tx.wait();
    console.log('set SmartAchievement to SmartComp: ', tx.hash);

    tx = await smartCompInstance.setSmartArmy(smartArmyAddress);
    await tx.wait();
    console.log('set SmartArmy to SmartComp: ', tx.hash);

    tx = await smartCompInstance.setSmartFarm(smartFarmAddress);
    await tx.wait();
    console.log('set SmartFarm to SmartComp: ', tx.hash);

    tx = await smartCompInstance.setSmartLadder(smartLadderAddress);
    await tx.wait();
    console.log('set SmartLadder to SmartComp: ', tx.hash);
  }

  let smtTokenAddress = NA_SMT;
  if (options.deploySMTToken) {
    cyan(`\nDeploying SMT Token Contract...`);
    const SmartToken = await ethers.getContractFactory('SmartToken');
    let smtContract = await upgrades.deployProxy(
      SmartToken,
      [smartCompAddress, NA_Dev, NA_Airdrop],
      { initializer: 'initialize', kind: 'uups' }
    );
    await smtContract.deployed();
    displayResult('\nSMT Token deployed at', smtContract);

    smtTokenAddress = smtContract.address;

    let tx = await smartCompInstance.connect(owner).setSMT(smtContract.address);
    await tx.wait();
    console.log('set SMT token to SmartComp: ', tx.hash);

    tx = await smtContract.setTaxLockStatus(
      false,
      false,
      false,
      false,
      false,
      false
    );
    await tx.wait();
    console.log('set tax lock status:', tx.hash);
    tx = await smartLadderIns.initActivities();
    await tx.wait();
    console.log("initial activities: ", tx.hash);
  } else {
    green(`\nSmart Token deployed at ${smtTokenAddress}`);
  }

  //upgrade SmartToken
  if(options.upgradeSmartToken){
    cyan(`\nUpgradeing Smart Token...`);
    const SmartToken = await ethers.getContractFactory('SmartToken');
    let smtContract = await SmartToken.deploy();
    await smtContract.deployed();
    displayResult('\nSMT Token deployed at', smtContract);
    smtTokenAddress = smtContract.address;
  }

  let smtContract = await ethers.getContractAt('SmartToken', smtTokenAddress);

  let router = await smartCompInstance.getUniswapV2Router();
  let routerInstance = new ethers.Contract(router, uniswapRouterABI, owner);
  let pairSmtcBnbAddr = await smtContract._uniswapV2ETHPair();
  console.log('SMT-BNB LP token address: ', pairSmtcBnbAddr);
  let pairSmtcBusdAddr = await smtContract._uniswapV2BUSDPair();
  console.log('SMT-BUSD LP token address: ', pairSmtcBusdAddr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
