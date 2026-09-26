import { Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeaderProfile from './Profile';
import HeaderAsset from './Asset';
import ConnectWallet from './ConnectWallet';
import RowBox from 'src/components/Box/RowBox';
import { useWeb3React } from '@web3-react/core';

const useStyles = makeStyles({
  outBoxStyle: {
    width: '225px !important',
    '@media (max-width: 1024px)': {
      width: 'auto !important',
      justifyContent: 'flex-end'
    }
  }
});

const HeaderButtons = () => {
  const classes = useStyles();
  const { account } = useWeb3React();

  return (
    <RowBox className={classes.outBoxStyle}>
      {account && <HeaderAsset />}
      <HeaderProfile />
      <Hidden lgDown>
        <ConnectWallet />
      </Hidden>
    </RowBox>
  );
};

export default HeaderButtons;
