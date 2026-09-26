import { calculatePercent } from 'src/utils/percent';
import {
  getBalanceAmount,
  getBalanceNumber,
  getDecimalAmount,
  getFullDisplayBalance,
  formatDecimalNumber
} from 'src/utils/formatBalance';

describe('utils/percent', () => {
  describe('calculatePercent', () => {
    it('mengembalikan warna emas saat pool tercapai', () => {
      expect(calculatePercent(10, '10')).toBe('#E0A501');
      expect(calculatePercent(25, '25')).toBe('#E0A501');
      expect(calculatePercent(50, '50')).toBe('#E0A501');
      expect(calculatePercent(100, '100')).toBe('#E0A501');
    });
    it('mengembalikan warna abu saat pool belum tercapai', () => {
      expect(calculatePercent(10, '9')).toBe('#5A5A5A');
      expect(calculatePercent(50, '49')).toBe('#5A5A5A');
      expect(calculatePercent(0, '0')).toBe('#5A5A5A');
    });
  });
});

describe('utils/formatBalance', () => {
  const ONE_ETH = '1000000000000000000';

  it('getDecimalAmount mengubah nominal jadi satuan terkecil', () => {
    expect(getDecimalAmount('1').toString()).toBe(ONE_ETH);
    expect(getDecimalAmount('1.5').toString()).toBe('1500000000000000000');
  });

  it('getBalanceAmount mengubah wei jadi string desimal', () => {
    expect(getBalanceAmount(ONE_ETH)).toBe('1.0');
  });

  it('getBalanceNumber mengubah wei jadi number', () => {
    expect(getBalanceNumber(ONE_ETH)).toBe(1);
  });

  it('getFullDisplayBalance memotong desimal', () => {
    expect(getFullDisplayBalance('1234560000000000000', 18, 4)).toBe(
      '1.2345'
    );
  });

  it('formatDecimalNumber memformat 2–4 desimal (bebas locale)', () => {
    // toLocaleString mengikuti locale mesin ("," atau ".") — normalisasi dulu
    const fmt = (v: any) => String(formatDecimalNumber(v, 18)).replace(',', '.');
    expect(fmt(ONE_ETH)).toBe('1.00');
    expect(fmt('1234560000000000000')).toBe('1.2346');
    // input null/undefined aman
    expect(fmt(null)).toBe('0.00');
  });
});
