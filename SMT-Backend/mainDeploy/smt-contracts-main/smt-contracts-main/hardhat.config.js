require('dotenv').config();
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

// Secrets are loaded from .env (see .env.example). Never commit real values.
const privateKey = process.env.DEPLOYER_PRIVATE_KEY || '';
const apiKeyForEtherscan = process.env.ETHERSCAN_API_KEY || '';
const optimizerEnabled = true;

// Public RPC endpoints; override via .env for higher throughput (Alchemy/QuickNode/etc).
const RPC = {
  bscMainnet: process.env.BSC_MAINNET_RPC || 'https://bsc-dataseed.binance.org',
  bscTestnet: process.env.BSC_TESTNET_RPC || 'https://data-seed-prebsc-1-s1.binance.org:8545',
  polygonMainnet: process.env.POLYGON_MAINNET_RPC || 'https://polygon-rpc.com',
  ethMainnet: process.env.ETH_MAINNET_RPC || 'https://eth.llamarpc.com',
  fantom: process.env.FANTOM_RPC || 'https://rpc.ftm.tools',
  fantomTestnet: process.env.FANTOM_TESTNET_RPC || 'https://rpc.testnet.fantom.network',
};

const withAccounts = (url) => privateKey ? { url, accounts: [privateKey] } : { url };

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  abiExporter: {
    path: './abis',
    clear: true,
    flat: true,
  },
  etherscan: {
    apiKey: apiKeyForEtherscan,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
  },
  mocha: {
    timeout: 30000,
  },
  namedAccounts: {
    NA_PrivateSale: {
      56: '0xd488474CD881722C453a025F54c2124Ab7d64F07',
      97: '0xd488474CD881722C453a025F54c2124Ab7d64F07'
    },
    NA_Airdrop: {
      56: '0x0f5516cE3EC302f623E7c9c115cF252267D41139',
      97: '0x0f5516cE3EC302f623E7c9c115cF252267D41139'
    },
    NA_Dev: {
      56: '0xCe64Bb454cBf1195D9Fd32611c76C768Aac02Ac2',
      97: '0xCe64Bb454cBf1195D9Fd32611c76C768Aac02Ac2'
    },
    NA_Quest: {
      56: '0x1200Fddbd6AfFd50E884f4893302FD7DB409a102',
      97: '0x1200Fddbd6AfFd50E884f4893302FD7DB409a102'
    },
    NA_Busd: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '0xF655fcF48c0f62d4Da945c8efAb50C6DcFEe0da8'
    },
    NA_SmartComp: {
      56: '0xF5a2F35c97cbfabd5ac9efAE4cC6cC021F6Bb19c',
      97: '0x00805aBD8D711c1dBd1A67b1DB6c976e6414CC72'
    },
    NA_SmartBridge: {
      default: 0,
      56: '0x93c2Cd7221f8930f4C7B1Cc146D6e24D73aAC694',
      97: '0x8CAB5D338cD734876901b31D6888A7f9C9237B3F',
    },
    NA_GoldenTreePool: {
      default: 0,
      56: '0x5Ee32C58766C288323b7de14F52b87ca4274fD55',
      97: '0x5B6adC100B73e2B91daf98DfD818428c1E4f890d',
    },
    NA_NobilityAch: {
      default: 0,
      56: '0x37a0E7335Ede4859F86809433a6786d1B2FeA406',
      97: '0xCEC4Aa68Aa69E6e3318426208842e30A9E6f6186',
    },
    NA_OtherAch: {
      default: 0,
      56: '0xaB7F3B06f132E028820071ec408ABCF9514BEFf5',
      97: '0xa8E150A678A2eb74C893fD1110bBC222Ef1a5231',
    },
    NA_SmartArmy: {
      56: '0xd46F6e865B112223D62a97fF86ebd1c20be6cBA4',
      97: '0xD6Fc21a62ACD7B514A6c89cA9d9E89A5d24d1656',
    },
    NA_SmartFarm: {
      56: '0xfEDF921A8A0535b966b2Dc13D2c4582E6CB8B383',
      97: '0x47Cb6A839DF045d6663249828b9BD91976899CA4',
    },
    NA_SmartLadder: {
      56: '0x5eA1eF3E7ecAABdC381F5866EB76202Ebcaf008D',
      97: '0xA446a536Fd20569e879945fC04eef1569F698ae4',
    },
    NA_SMT: {
      56: '0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28',
      97: '0x1F498dB7Df03c6BCa6b05D198dF77dF21D7F9b69',
    },
    NA_Router: {
      56: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
      97: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    },
    NA_SMTC: {
      56: '0x6aedC09AE456651FccBBE357B57CA77A44f9da51',
      97: '0x8ACD0e813e30a6b55cB27d974787F4AEaDB0B9a0',
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31356,
      allowUnlimitedContractSize: true
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    ethermainnet: withAccounts(RPC.ethMainnet),
    polygonmainnet: withAccounts(RPC.polygonMainnet),
    bscmainnet: withAccounts(RPC.bscMainnet),
    fantom: withAccounts(RPC.fantom),
    fantomtestnet: withAccounts(RPC.fantomTestnet),
    bsctestnet: withAccounts(RPC.bscTestnet)
  },
  solidity: {
    compilers: [
      {
        version: '0.8.2',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      }
    ],
  },
}
