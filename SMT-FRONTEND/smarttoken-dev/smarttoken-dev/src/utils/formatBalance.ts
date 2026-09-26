import { BigNumberish, utils } from 'ethers';

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount: string, decimals = 18) => {
  return utils.parseUnits(amount, decimals);
};

/**
 *
 * @param amount
 * @param decimals
 * @returns Real Value
 */
export const getRealValue = (amount: string, decimals = 18) => {
  return Number(utils.formatEther(amount)) * 10 ** 18;
};

export const getBalanceAmount = (amount: BigNumberish, decimals = 18) => {
  return utils.formatUnits(amount, decimals);
};

/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance: BigNumberish, decimals = 18) => {
  return +getBalanceAmount(balance, decimals);
};

export const getFullDisplayBalance = (
  balance: BigNumberish,
  decimals = 18,
  decimalsToAppear?: number
) => {
  return String(
    Math.floor(
      +getBalanceAmount(balance, decimals) * 10 ** (decimalsToAppear || 8)
    ) /
      10 ** (decimalsToAppear || 8)
  );
};

export const formatDecimalNumber = (amount: BigNumberish, decimal: number) => {
  return formatNumber(getBalanceNumber(amount || 0, decimal), 2, 4);
};

export const formatNumber = (
  number: number,
  minPrecision = 2,
  maxPrecision = 2
) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision
  };
  return number.toLocaleString(undefined, options);
};

export const nFormatter = (num, digits) => {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};
