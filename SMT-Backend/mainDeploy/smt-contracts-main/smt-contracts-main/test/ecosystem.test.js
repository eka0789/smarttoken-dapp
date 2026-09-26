const { expect } = require('chai');
const { ethers, upgrades, network } = require('hardhat');

const ZERO = '0x0000000000000000000000000000000000000000';
const BURN_ADDRESS = '0x000000000000000000000000000000000000dEaD';
const ether = (n) => ethers.utils.parseEther(n.toString());
const DURATION = 7 * 24 * 60 * 60;

async function deployEcosystem() {
  const [owner, user1, user2, dev, airdrop, quest] = await ethers.getSigners();

  const WETH = await ethers.getContractFactory('WETH');
  const weth = await WETH.deploy();
  await weth.deployed();

  const Factory = await ethers.getContractFactory('PancakeSwapFactory');
  const factory = await Factory.deploy(owner.address);
  await factory.deployed();

  const Router = await ethers.getContractFactory('PancakeSwapRouter');
  const router = await Router.deploy(factory.address, weth.address);
  await router.deployed();

  const BUSD = await ethers.getContractFactory('BEP20Token');
  const busd = await BUSD.deploy();
  await busd.deployed();

  const SmartComp = await ethers.getContractFactory('SmartComp');
  const comp = await upgrades.deployProxy(SmartComp, [router.address, busd.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await comp.deployed();

  const GTP = await ethers.getContractFactory('GoldenTreePool');
  const goldenTree = await upgrades.deployProxy(GTP, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await goldenTree.deployed();
  await comp.setGoldenTreePool(goldenTree.address);

  const Nob = await ethers.getContractFactory('SmartNobilityAchievement');
  const nobility = await upgrades.deployProxy(Nob, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await nobility.deployed();
  await comp.setSmartNobilityAchievement(nobility.address);

  const Oth = await ethers.getContractFactory('SmartOtherAchievement');
  const otherAch = await upgrades.deployProxy(Oth, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await otherAch.deployed();
  await comp.setSmartOtherAchievement(otherAch.address);

  const Army = await ethers.getContractFactory('SmartArmy');
  const army = await upgrades.deployProxy(Army, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await army.deployed();
  await comp.setSmartArmy(army.address);

  const Farm = await ethers.getContractFactory('SmartFarm');
  const farm = await upgrades.deployProxy(Farm, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await farm.deployed();
  await comp.setSmartFarm(farm.address);

  const Ladder = await ethers.getContractFactory('SmartLadder');
  const ladder = await upgrades.deployProxy(Ladder, [comp.address, owner.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await ladder.deployed();
  await comp.setSmartLadder(ladder.address);

  const SMTC = await ethers.getContractFactory('SmartTokenCash');
  const smtc = await upgrades.deployProxy(
    SMTC,
    [comp.address, quest.address, dev.address, airdrop.address],
    { initializer: 'initialize', kind: 'uups' }
  );
  await smtc.deployed();
  await comp.setSMTC(smtc.address);

  const Bridge = await ethers.getContractFactory('SMTBridge');
  const bridge = await upgrades.deployProxy(Bridge, [comp.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await bridge.deployed();
  await comp.setSmartBridge(bridge.address);

  const SMT = await ethers.getContractFactory('SmartToken');
  const smt = await upgrades.deployProxy(SMT, [comp.address, dev.address, airdrop.address], {
    initializer: 'initialize',
    kind: 'uups',
  });
  await smt.deployed();
  await comp.setSMT(smt.address);

  await ladder.initActivities();

  // Taxed transfers call GoldenTreePool.notifyReward -> router.getAmountsOut
  // which reverts without reserves, so seed initial liquidity like the launch flow.
  await smt.approve(router.address, ether(100000));
  await busd.approve(router.address, ether(10000000));
  await router.addLiquidity(
    smt.address,
    busd.address,
    ether(100000),
    ether(10000000),
    0,
    0,
    owner.address,
    (await ethers.provider.getBlock('latest')).timestamp + 3600
  );

  return {
    owner,
    user1,
    user2,
    dev,
    airdrop,
    quest,
    weth,
    factory,
    router,
    busd,
    comp,
    goldenTree,
    nobility,
    otherAch,
    army,
    farm,
    ladder,
    smtc,
    bridge,
    smt,
  };
}

describe('Smart Ecosystem', () => {
  let eco;
  let snapshotId;

  before(async () => {
    eco = await deployEcosystem();
    snapshotId = await network.provider.send('evm_snapshot');
  });

  beforeEach(async () => {
    await network.provider.send('evm_revert', [snapshotId]);
    snapshotId = await network.provider.send('evm_snapshot');
  });

  describe('SmartToken', () => {
    it('has correct metadata', async () => {
      expect(await eco.smt.name()).to.equal('Smart Token');
      expect(await eco.smt.symbol()).to.equal('SMT');
      expect(await eco.smt.decimals()).to.equal(18);
      expect(await eco.smt.totalSupply()).to.equal(ether(15000000));
    });

    it('mints the initial distribution to ecosystem wallets', async () => {
      const { smt, farm, owner, nobility, otherAch, airdrop, dev } = eco;
      expect(await smt.balanceOf(farm.address)).to.equal(ether(10605400));
      // 2M private-sale mint minus the 100k used to seed DEX liquidity in the fixture
      expect(await smt.balanceOf(owner.address)).to.equal(ether(1900000));
      expect(await smt.balanceOf(nobility.address)).to.equal(ether(1329600));
      expect(await smt.balanceOf(otherAch.address)).to.equal(ether(900000));
      expect(await smt.balanceOf(airdrop.address)).to.equal(ether(150000));
      expect(await smt.balanceOf(dev.address)).to.equal(ether(15000));
    });

    it('excludes ecosystem accounts from fees', async () => {
      const { smt, farm, owner, user1 } = eco;
      expect(await smt.isExcludedFromFee(owner.address)).to.equal(true);
      expect(await smt.isExcludedFromFee(farm.address)).to.equal(true);
      expect(await smt.isExcludedFromFee(user1.address)).to.equal(false);
    });

    it('transfers the full amount between excluded accounts', async () => {
      const { smt, owner, user1 } = eco;
      await smt.transfer(user1.address, ether(2000));
      expect(await smt.balanceOf(user1.address)).to.equal(ether(2000));
    });

    it('applies 15% transfer tax on P2P transfers and distributes it', async () => {
      const { smt, owner, user1, user2, farm, goldenTree, dev, nobility, router } = eco;
      await smt.transfer(user1.address, ether(2000));

      const busdOut = await router.getAmountsOut(ether(75), [
        smt.address,
        eco.busd.address,
      ]);

      const farmBefore = await smt.balanceOf(farm.address);
      const goldenBefore = await smt.balanceOf(goldenTree.address);
      const devBefore = await smt.balanceOf(dev.address);
      const nobleBefore = await smt.balanceOf(nobility.address);
      const revenueBefore = await goldenTree.totalRevenue();

      await smt.connect(user1).transfer(user2.address, ether(1000));

      expect(await smt.balanceOf(user2.address)).to.equal(ether(850));
      expect(await smt.balanceOf(user1.address)).to.equal(ether(1000));
      expect(await smt.balanceOf(farm.address)).to.equal(farmBefore.add(ether(45)));
      expect(await smt.balanceOf(goldenTree.address)).to.equal(goldenBefore.add(ether(75)));
      expect(await smt.balanceOf(dev.address)).to.equal(devBefore.add(ether(15)));
      expect(await smt.balanceOf(nobility.address)).to.equal(nobleBefore.add(ether(15)));
      expect(await goldenTree.totalRevenue()).to.equal(revenueBefore.add(busdOut[1]));
    });

    it('applies sell tax when transferring to the SMT-BNB pair', async () => {
      const { smt, owner, user1, farm, goldenTree, dev, otherAch, busd } = eco;
      await smt.transfer(user1.address, ether(2000));
      const ethPair = await smt._uniswapV2ETHPair();

      const farmBefore = await smt.balanceOf(farm.address);
      const goldenBefore = await smt.balanceOf(goldenTree.address);
      const devBefore = await smt.balanceOf(dev.address);
      const otherBefore = await smt.balanceOf(otherAch.address);
      const burnBefore = await smt.balanceOf(BURN_ADDRESS);
      const pairBefore = await smt.balanceOf(ethPair);

      await smt.connect(user1).transfer(ethPair, ether(1000));

      expect(await smt.balanceOf(ethPair)).to.equal(pairBefore.add(ether(850)));
      expect(await smt.balanceOf(user1.address)).to.equal(ether(1000));
      expect(await smt.balanceOf(dev.address)).to.equal(devBefore.add(ether(15)));
      expect(await smt.balanceOf(goldenTree.address)).to.equal(goldenBefore.add(ether(45)));
      expect(await smt.balanceOf(farm.address)).to.equal(farmBefore.add(ether(30)));
      expect(await smt.balanceOf(BURN_ADDRESS)).to.equal(burnBefore.add(ether(45)));
      expect(await smt.balanceOf(otherAch.address)).to.equal(otherBefore.add(ether(15)));

      // sell farming tax reaches the farm reward accounting
      expect(await eco.farm.rewardRate()).to.equal(ether(30).div(DURATION));
    });

    it('applies buy tax on transfers from the pair and pays unreferral buyers to admin', async () => {
      const { smt, owner, user2, ladder, goldenTree, dev, otherAch, router } = eco;
      const ethPair = await smt._uniswapV2ETHPair();
      await smt.transfer(ethPair, ether(2000));

      const goldenBefore = await smt.balanceOf(goldenTree.address);
      const devBefore = await smt.balanceOf(dev.address);
      const otherBefore = await smt.balanceOf(otherAch.address);
      const adminBefore = await smt.balanceOf(owner.address);
      const ladderBefore = await smt.balanceOf(ladder.address);

      await network.provider.request({
        method: 'hardhat_impersonateAccount',
        params: [ethPair],
      });
      await network.provider.request({
        method: 'hardhat_setBalance',
        params: [ethPair, '0x1000000000000000000'],
      });
      const pairSigner = await ethers.getSigner(ethPair);
      await smt.connect(pairSigner).transfer(user2.address, ether(1000));
      await network.provider.request({
        method: 'hardhat_stopImpersonatingAccount',
        params: [ethPair],
      });

      expect(await smt.balanceOf(user2.address)).to.equal(ether(850));
      expect(await smt.balanceOf(goldenTree.address)).to.equal(goldenBefore.add(ether(45)));
      expect(await smt.balanceOf(dev.address)).to.equal(devBefore.add(ether(15)));
      expect(await smt.balanceOf(otherAch.address)).to.equal(otherBefore.add(ether(15)));
      // buyer without a sponsor: referral tax forwarded to the ladder admin wallet
      expect(await smt.balanceOf(ladder.address)).to.equal(ladderBefore);
      expect(await smt.balanceOf(owner.address)).to.equal(adminBefore.add(ether(75)));
    });

    it('reverts on transfer above balance', async () => {
      const { smt, user1, user2 } = eco;
      await expect(
        smt.connect(user1).transfer(user2.address, ether(1))
      ).to.be.revertedWith('SMT: balance of sender is too small.');
    });

    it('approves, transfers via allowance and decreases it', async () => {
      const { smt, owner, user1, user2 } = eco;
      await smt.transfer(user1.address, ether(2000));

      await smt.connect(user1).approve(user2.address, ether(500));
      expect(await smt.allowance(user1.address, user2.address)).to.equal(ether(500));

      await smt.connect(user2).transferFrom(user1.address, eco.quest.address, ether(200));
      expect(await smt.allowance(user1.address, user2.address)).to.equal(ether(300));

      await smt.connect(user1).increaseAllowance(user2.address, ether(100));
      expect(await smt.allowance(user1.address, user2.address)).to.equal(ether(400));

      await smt.connect(user1).decreaseAllowance(user2.address, ether(50));
      expect(await smt.allowance(user1.address, user2.address)).to.equal(ether(350));
    });

    it('only operator can set fees, with a hard cap under 100', async () => {
      const { smt, user1 } = eco;
      await expect(smt.connect(user1).setSellFee(10)).to.be.revertedWith(
        'SMT: caller is not the operator'
      );
      await expect(smt.setSellFee(100)).to.be.revertedWith(
        'SMT: sellTaxFee exceeds maximum value'
      );
      await expect(smt.setBuyFee(100)).to.be.revertedWith(
        'SMT: buyTaxFee exceeds maximum value'
      );
      await expect(smt.setTransferFee(100)).to.be.revertedWith(
        'SMT: transferTaxFee exceeds maximum value'
      );

      await expect(smt.setSellFee(20))
        .to.emit(smt, 'UpdatedSellFee')
        .withArgs(20);
      expect(await smt._sellNormalTaxFee()).to.equal(20);
    });

    it('stops distributing taxes when they are locked', async () => {
      const { smt, owner, user1, user2, dev } = eco;
      await smt.transfer(user1.address, ether(2000));

      await smt.setTaxLockStatus(true, true, true, true, true, true);
      const devBefore = await smt.balanceOf(dev.address);

      await smt.connect(user1).transfer(user2.address, ether(1000));
      // the tax is still deducted from the received amount but no longer paid out
      expect(await smt.balanceOf(user2.address)).to.equal(ether(850));
      expect(await smt.balanceOf(user1.address)).to.equal(ether(1150));
      expect(await smt.balanceOf(dev.address)).to.equal(devBefore);
    });
  });

  describe('SmartComp', () => {
    it('identifies itself as comptroller and wires the dex', async () => {
      const { comp, router, busd, factory } = eco;
      expect(await comp.isComptroller()).to.equal(true);
      expect(await comp.getUniswapV2Router()).to.equal(router.address);
      expect(await comp.getBUSD()).to.equal(busd.address);
      expect(await comp.getUniswapV2Factory()).to.equal(factory.address);
    });

    it('registers ecosystem contracts', async () => {
      const { comp, goldenTree, farm, ladder, army, smt, smtc, bridge, nobility, otherAch } = eco;
      expect(await comp.getGoldenTreePool()).to.equal(goldenTree.address);
      expect(await comp.getSmartFarm()).to.equal(farm.address);
      expect(await comp.getSmartLadder()).to.equal(ladder.address);
      expect(await comp.getSmartArmy()).to.equal(army.address);
      expect(await comp.getSMT()).to.equal(smt.address);
      expect(await comp.getSMTC()).to.equal(smtc.address);
      expect(await comp.getSmartBridge()).to.equal(bridge.address);
      expect(await comp.getSmartNobilityAchievement()).to.equal(nobility.address);
      expect(await comp.getSmartOtherAchievement()).to.equal(otherAch.address);
    });

    it('rejects the zero address for the bridge', async () => {
      await expect(eco.comp.setSmartBridge(ZERO)).to.be.revertedWith(
        "input address can't be not zero address"
      );
    });

    it('only owner can update wiring', async () => {
      const { comp, user1 } = eco;
      await expect(comp.connect(user1).setSMT(user1.address)).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });

    it('emits NewSmartLadder when the ladder is replaced', async () => {
      const { comp, ladder } = eco;
      await expect(comp.setSmartLadder(ladder.address))
        .to.emit(comp, 'NewSmartLadder')
        .withArgs(ladder.address, ladder.address);
      expect(await comp.getSmartLadder()).to.equal(ladder.address);
    });
  });

  describe('GoldenTreePool', () => {
    it('initializes defaults', async () => {
      const { goldenTree } = eco;
      expect(await goldenTree.swapEnabled()).to.equal(true);
      expect(await goldenTree.limitPerSwap()).to.equal(ether(1000));
      expect(await goldenTree.currentPhase()).to.equal(0);
      expect(await goldenTree.totalRevenue()).to.equal(0);
    });

    it('rejects a growth share that does not sum to 100%', async () => {
      const { goldenTree } = eco;
      await expect(
        goldenTree.updateGrowthShare([6000, 500, 500, 500, 500, 500, 500, 500])
      ).to.be.revertedWith('GoldenTreePool#updateGrowthShare: invalid share');
    });

    it('accepts a valid growth share update', async () => {
      const { goldenTree } = eco;
      await goldenTree.updateGrowthShare([6500, 500, 500, 500, 500, 500, 500, 500]);
      expect(await goldenTree.growthShare(0)).to.equal(6500);
    });

    it('rejects notifyReward from a non distributor', async () => {
      const { goldenTree, user1 } = eco;
      await expect(
        goldenTree.connect(user1).notifyReward(ether(1), user1.address)
      ).to.be.revertedWith('GoldenTreePool: only reward distributors');
    });

    it('accrues growth balance for the account on notifyReward', async () => {
      const { goldenTree, owner, user1, smt, busd, router } = eco;
      const busdOut = await router.getAmountsOut(ether(100), [smt.address, busd.address]);
      const growthBefore = await goldenTree.growthBalances(user1.address);
      await goldenTree.notifyReward(ether(100), user1.address);

      const expectedGrowth = busdOut[1].mul(6500).div(10000);
      expect(await goldenTree.growthBalances(user1.address)).to.equal(
        growthBefore.add(expectedGrowth)
      );
    });

    it('rejects zero amount on sellSmtc', async () => {
      const { goldenTree, user1 } = eco;
      await expect(
        goldenTree.connect(user1).sellSmtc(0)
      ).to.be.revertedWith('GoldenTreePool#buySmtc: Invalid zero amount');
    });

    it('rejects sellSmtc when the pool has no BUSD reserves', async () => {
      const { goldenTree, user1 } = eco;
      // pool owns SMTC phase rewards but no BUSD to pay out with
      expect(await eco.smtc.balanceOf(goldenTree.address)).to.not.equal(0);
      await expect(
        goldenTree.connect(user1).sellSmtc(ether(100))
      ).to.be.revertedWith('GoldenTreePool#buySmtc: insufficient BUSD balance');
    });

    it('rejects sellSmtc above the pool SMTC balance', async () => {
      const { goldenTree, user1, busd, owner } = eco;
      await busd.connect(owner).transfer(goldenTree.address, ether(10000));
      await expect(
        goldenTree.connect(user1).sellSmtc(ether(300000))
      ).to.be.revertedWith('GoldenTreePool#buySmtc: insufficient SMTC balance');
    });
  });

  describe('SmartFarm', () => {
    it('rejects notifyRewardAmount from a non distributor', async () => {
      const { farm, user1 } = eco;
      await expect(
        farm.connect(user1).notifyRewardAmount(ether(100))
      ).to.be.revertedWith('SmartFarm: only reward distributors');
    });

    it('sets reward rate and period from a distributor notification', async () => {
      const { farm, owner } = eco;
      const tx = await farm.notifyRewardAmount(ether(704800));
      const receipt = await tx.wait();
      const block = await ethers.provider.getBlock(receipt.blockNumber);

      expect(await farm.rewardRate()).to.equal(ether(704800).div(DURATION));
      expect(await farm.periodFinish()).to.equal(block.timestamp + DURATION);
    });

    it('rejects claims without rewards', async () => {
      const { farm, user1 } = eco;
      await expect(farm.connect(user1).claimReward(ether(1))).to.be.revertedWith(
        'SmartFarm#stakeSMT: Not enough rewards to claim'
      );
    });

    it('rejects exit when nothing is staked', async () => {
      const { farm, user1 } = eco;
      await expect(farm.connect(user1).exit()).to.be.revertedWith(
        'SmartFarm#withdrawSMT: Cannot withdraw 0'
      );
    });
  });

  describe('SmartLadder', () => {
    it('initializes the default activities', async () => {
      const { ladder, smt } = eco;
      const buytax = await ladder.activities(1);
      expect(buytax.name).to.equal('buytax');
      expect(buytax.token).to.equal(smt.address);
      expect(buytax.isValid).to.equal(true);
      expect(buytax.enabled).to.equal(true);
    });

    it('returns no sponsor for unregistered users', async () => {
      const { ladder, user1 } = eco;
      expect(await ladder.sponsorOf(user1.address)).to.equal(ZERO);
    });
  });
});
