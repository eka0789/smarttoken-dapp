import random from 'lodash/random'
import { currentNetwork } from './index'

const isTestnet = currentNetwork === 97

// Array of available nodes to connect to with robust public BSC fallbacks
export const nodes = isTestnet
  ? [
      process.env.REACT_APP_NODE_1 || 'https://data-seed-prebsc-1-s1.binance.org:8545',
      process.env.REACT_APP_NODE_2 || 'https://bsc-testnet.publicnode.com',
      process.env.REACT_APP_NODE_3 || 'https://bsc-testnet-dataseed.binance.org'
    ]
  : [
      process.env.REACT_APP_NODE_1 || 'https://bsc-dataseed1.defibit.io',
      process.env.REACT_APP_NODE_2 || 'https://bsc-dataseed1.ninicoin.io',
      process.env.REACT_APP_NODE_3 || 'https://bsc-dataseed.binance.org'
    ]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
