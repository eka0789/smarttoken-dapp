import { useContext } from 'react';
import { Button, styled } from '@mui/material';
import WalletDialog from '../../../wallet-modal';
import { useWeb3React } from '@web3-react/core';
import { shorter } from 'src/utils';
import { WalletButtonContext } from 'src/contexts/WalletButtonContext';

const ConnectWalletButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '132px',
  height: '32px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#212121'
});

const ConnectWallet = () => {
  const { account } = useWeb3React();
  const { isOpen, handleClickOpen, handleClickClose } =
    useContext(WalletButtonContext);

  return (
    <>
      <ConnectWalletButton variant="contained" onClick={handleClickOpen}>
        {account ? shorter(account) : 'Connect Wallet'}
      </ConnectWalletButton>
      <WalletDialog open={isOpen} onClose={handleClickClose} />
    </>
  );
};

export default ConnectWallet;
