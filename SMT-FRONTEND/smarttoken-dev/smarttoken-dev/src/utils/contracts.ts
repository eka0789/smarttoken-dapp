import { ethers } from 'ethers';

export function isAddress(address: string) {
  try {
    ethers.utils.getAddress(address);
  } catch (e) {
    return false;
  }
  return true;
}

export function toEth(amount: string | number) {
  return ethers.utils.formatEther(String(amount));
}

export function toWei(amount: string | number) {
  return ethers.utils.parseEther(String(amount));
}
