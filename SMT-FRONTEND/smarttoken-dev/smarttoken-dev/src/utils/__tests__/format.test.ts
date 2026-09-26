import {
  isAddress,
  toEth,
  toWei
} from 'src/utils/contracts';
import {
  letteredNumber,
  numberWithCommas,
  shorter
} from 'src/utils/index';

describe('utils/contracts', () => {
  describe('isAddress', () => {
    it('menerima alamat valid', () => {
      expect(isAddress('0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28')).toBe(true);
    });
    it('menolak alamat tidak valid', () => {
      expect(isAddress('bukan-address')).toBe(false);
      expect(isAddress('')).toBe(false);
    });
  });

  describe('toWei / toEth', () => {
    it('mengonversi ether ke wei', () => {
      expect(toWei('1').toString()).toBe('1000000000000000000');
    });
    it('mengonversi wei ke ether', () => {
      expect(toEth('1000000000000000000')).toBe('1.0');
    });
  });
});

describe('utils/index', () => {
  describe('letteredNumber', () => {
    it('format ribuan jadi K', () => {
      expect(letteredNumber(1500)).toBe('1.5K');
    });
    it('format juta jadi M', () => {
      expect(letteredNumber(2500000)).toBe('2.5M');
    });
    it('format miliar jadi B', () => {
      expect(letteredNumber(3000000000)).toBe('3.0B');
    });
    it('format triliun jadi T', () => {
      expect(letteredNumber(4000000000000)).toBe('4.0T');
    });
    it('angka kecil dikembalikan apa adanya', () => {
      expect(letteredNumber(999)).toBe(999);
    });
  });

  describe('numberWithCommas', () => {
    it('menambahkan pemisah ribuan', () => {
      expect(numberWithCommas(1234567.89)).toBe('1,234,567.89');
    });
  });

  describe('shorter', () => {
    it('memotong alamat panjang', () => {
      expect(shorter('0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28')).toBe(
        '0xf3F9...9c28'
      );
    });
  });
});
