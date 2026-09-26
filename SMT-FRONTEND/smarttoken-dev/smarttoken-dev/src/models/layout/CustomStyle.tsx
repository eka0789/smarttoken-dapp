import { makeStyles } from '@mui/styles';
// import { Theme } from '@mui/material';

export const WalletModalStyle = makeStyles({
  outBoxStyle: {
    padding: '30px 20px 40px 20px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '760px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '100%'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      top: '18px',
      right: '18px'
    }
  },
  headingTitle: {
    color: '#E0A501',
    fontWeight: '700 !important',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      marginBottom: '10px !important',
      fontSize: '21px !important'
    }
  },
  itemTitle: {
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  walletTitle: {
    fontSize: '20px !important',
    lineHeight: '100% !important',
    fontWeight: '600 !important',
    marginTop: '20px !important',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  },
  deActiveStyle: {
    opacity: '.3'
  },
  checkBoxTitleStyle: {
    color: '#EDEDED !important',
    marginLeft: '12px !important',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  walletBorderStyle: {
    outline: '3px solid #FFCB00',
    outlineOffset: '-3px',
    borderRadius: '50%',
    '@media (max-width: 968px)': {
      width: '71px',
      height: '71px'
    }
  },
  innerBoxStyle: {
    padding: '30px 30px 0 30px',
    '@media (max-width: 968px)': {
      padding: '17px 0 0 10px'
    }
  },
  getWalletTitleStyle: {
    color: '#EDEDED',
    marginTop: '73px !important',
    '@media (max-width: 968px)': {
      fontSize: '10px !important',
      marginTop: '43px !important'
    }
  },
  walletIconStyle: {
    '@media (max-width: 968px)': {
      width: '71px',
      height: '71px'
    }
  },
  outWalletIconStyle: {
    marginLeft: '45px',
    '@media (max-width: 968px)': {
      marginLeft: '20px'
    }
  },
  innerWalletIconStyle: {
    marginTop: '10px',
    width: 'auto',
    marginRight: '80px',
    '@media (max-width: 968px)': {
      marginRight: '20px'
    }
  }
});
