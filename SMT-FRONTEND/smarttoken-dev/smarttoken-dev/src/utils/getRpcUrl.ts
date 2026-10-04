import random from 'lodash/random'

// Array of available nodes to connect to with robust public BSC fallbacks
export const nodes = [
  process.env.REACT_APP_NODE_1 || 'https://bsc-dataseed1.defibit.io',
  process.env.REACT_APP_NODE_2 || 'https://bsc-dataseed1.ninicoin.io',
  process.env.REACT_APP_NODE_3 || 'https://bsc-dataseed.binance.org'
]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
