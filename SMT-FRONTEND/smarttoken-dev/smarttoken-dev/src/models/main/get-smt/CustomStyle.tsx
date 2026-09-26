import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const buySmtStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '60px 70px 71px 70px !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '-40px',
    position: 'relative',
    '@media (max-width: 1280px)': {
      padding: '20px !important',
      marginTop: '-20px'
    }
  },

  // LEFT AND RIGHT SIDE OF DASHBOARD STYLE
  customLeftSpacing: {
    marginTop: '40px !important',
    '@media (min-width: 968px)': {
      paddingRight: '20px',
      marginTop: '60px !important'
    }
  },
  customRightSpacing: {
    marginTop: '40px !important',
    '@media (min-width: 968px)': {
      paddingLeft: '20px',
      marginTop: '60px !important'
    }
  },

  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    width: '849px !important',
    lineHeight: '22px !important',
    color: '#EDEDED !important',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },

  // CURRENT SMT AND SMTC PRICE STYLE
  currentSmtPriceStyle: {
    justifyContent: 'space-evenly !important',
    width: '358px',
    height: '40px'
  },
  // CURRENT SMT LEFT TYPO STYLE
  currentSmtTypoLeftStyle: {
    height: '22px !important',
    fontStyle: 'normal !important',
    lineHeight: '22px !important',
    color: '#EDEDED !important',
    '@media (max-width: 968px)': {
      fontSize: '13px !important'
    }
  },
  // CURRENT SMT RIGHT TYPO STYLE
  currentSmtTypoRightStyle: {
    background: '#141414',
    border: '2px solid #323232',
    borderRadius: '10px',
    color: '#E0A501 !important',
    padding: '9px 20px 9px 80px',
    '@media (max-width: 1280px)': {
      padding: '5px 20px 5px 70px'
    },
    '@media (max-width: 968px)': {
      fontSize: '13px !important'
    }
  },
  // SMT TITLE STYLE
  smtTitleStyle: {
    position: 'absolute',
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    fontSize: '48px !important',
    lineHeight: '59px !important',
    color: '#E0A501 !important',
    textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    bottom: '30px',
    left: '0',
    right: '0',
    '@media (max-width: 968px)': {
      fontSize: '36px !important'
    }
  },
  mainImageStyle: {
    height: '480px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      height: 'auto'
    }
  }
});

export const getSmtStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 60px 50px 60px !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '-40px',
    position: 'relative',
    '@media (max-width: 1280px)': {
      padding: '30px 20px 72px 20px !important',
      marginTop: '-20px'
    }
  },

  // LEFT AND RIGHT SIDE OF DASHBOARD STYLE
  customLeftSpacing: {
    marginTop: '30px !important',
    '@media (min-width: 600px)': {
      paddingRight: '10px'
    }
  },
  customRightSpacing: {
    marginTop: '30px !important',
    '@media (min-width: 600px)': {
      paddingLeft: '10px'
    }
  },

  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },

  // CURRENT SELECTED SMT INFO STYLE
  currentSmtInfoStyle: {
    position: 'absolute',
    bottom: '0px',
    left: '0',
    right: '0',
    padding: '92px 18px 28px 18px !important',
    background:
      'linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #000000 40.18%)',
    borderRadius: '0px 0px 8px 8px',
    margin: '0 2px 2px'
  },
  // CURRENT SELECTED SMT INFO TWO LINE HEADING CONDITION STYLE
  // currentSmtInfoStyle1: {
  //   position: 'absolute',
  //   bottom: '0px',
  //   left: '0',
  //   right: '0',
  //   padding: '68px 18px 28px 18px !important',
  //   background: 'linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #000000 40.18%)',
  //   borderRadius: '0px 0px 8px 8px',
  //   margin: '0 2px 2px',
  // },
  // SMT INFO BLOCK HEADING STYLE
  currentSmtInfoHeadingStyle: {
    fontWeight: '600 !important',
    fontSize: '24px !important',
    color: '#EDEDED !important',
    lineHeight: '24px !important',
    '@media (max-width: 1366px)': {
      fontSize: '22px !important'
    },
    '@media (max-width: 930px)': {
      fontSize: '16px !important'
    }
  },
  // SMT INFO BLOCK CONTENT STYLE
  currentSmtInfoContentStyle: {
    fontSize: '14px !important',
    lineHeight: '14px !important',
    height: '98px !important',
    textAlign: 'justify',
    color: '#EDEDED !important',
    fontWeight: '400 !important',
    overflow: 'hidden',
    marginTop: '10px !important'
  },
  // TARGET SMT TITLE STYLE
  targetSmtTitleStyle: {
    position: 'absolute',
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    // lineHeight: '20px !important',
    color: '#EDEDED !important',
    textShadow: '0px 0px 20px #000000',
    margin: 'auto',
    left: '20px',
    right: '20px',
    textAlign: 'center',
    transform: 'translateY(-50%)',
    top: '50%',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  // TARGET SMT BOX STYLE
  targetSmtBoxStyle: {
    width: '170px',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '130px',
      height: '90px'
    }
  },
  // TARGET SMT BOX ACTIVE STYLE
  targetSmtBoxActiveStyle: {
    width: '170px',
    height: '120px',
    border: '2px solid #E0A501',
    boxSizing: 'border-box',
    borderRadius: '10px',
    '@media (max-width: 968px)': {
      width: '130px',
      height: '90px'
    }
  }
});

export const getSmtDetailStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '50px 60px !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '-40px',
    position: 'relative',
    '@media (max-width: 1280px)': {
      padding: '30px 20px 72px 20px !important',
      marginTop: '-20px'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important'
  },
  // SMT EXCHANGE MAIN BOX
  smtExchangeMainStyle: {
    margin: '0',
    padding: '0 205px 60px',
    '@media (max-width: 1024px)': {
      padding: '0 100px 60px'
    },
    '@media (max-width: 720px)': {
      padding: '0 20px 60px'
    }
  },
  // CURRENT SMT LEFT TYPO STYLE
  currentSmtTypoLeftStyle: {
    height: '22px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    lineHeight: '22px !important',
    color: '#EDEDED !important',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  // CURRENT SMT RIGHT TYPO STYLE
  currentSmtTypoRightStyle: {
    background: '#141414',
    border: '2px solid #323232',
    borderRadius: '10px',
    color: '#E0A501 !important',
    padding: '9px 20px 9px 96px',
    '@media (max-width: 1280px)': {
      padding: '5px 20px 5px 70px'
    }
  },
  // SMT & SMT CASH MONITOR OUT BOX STYLE
  smtCashMonitorOutBoxStyle: {
    position: 'relative',
    marginTop: '20px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  // WHEN MUTI BUTTON CLICKED THE LIQUIDITY
  smtCashMonitorOutBoxLiqStyle: {
    position: 'relative',
    height: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  // SMT & SMT CASH MONITOR INNER BOX STYLE
  smtCashMonitorInnerBoxStyle: {
    position: 'absolute',
    bottom: '0',
    background: '#695400',
    height: '100%',
    borderRadius: '12.5px',
    justifyContent: 'center !important',
    alignItems: 'center'
  },
  // MULTITAB ACTIVE BUTTON STYLE
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important'
  },
  // SWAP HIDEN PANEL STYLE
  swapHidenPanelStyle: {
    display: 'none !important'
  },
  // LIQUIDITY HIDEN PANEL STYLE
  liqHidenPanelStyle: {
    display: 'none !important'
  },
  // ADD LIQUIDITY HIDEN PANEL STYLE
  addLiqHidenPanelStyle: {
    display: 'none !important'
  },
  // CURRENT TAX HIDEN STYLE
  curTaxHidenStyle: {
    display: 'none !important'
  },
  // CURRENT SMT PRICE STYLE
  currentSmtPriceBoxHidenStyle: {
    display: 'none !important'
  },
  // ICON BUTTON STYLE
  iconBtnStyle: {
    padding: '0px !important',
    top: '0 !important',
    left: '0 !important',
    zIndex: '9999 !important'
  },
  multiMenuBox: (props: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    // right: '10px',
    // left: '10px',
    height: '100%',
    background: props.colors.primaryDark.main,
    borderRadius: '10px',
    textAlign: 'center'
  })
});

export const getSmtcStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 60px 50px 60px !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '-40px',
    position: 'relative',
    '@media (max-width: 1280px)': {
      padding: '30px 20px 72px 20px !important',
      marginTop: '-20px'
    }
  },

  // LEFT AND RIGHT SIDE OF DASHBOARD STYLE
  customLeftSpacing: {
    marginTop: '30px !important',
    '@media (min-width: 600px)': {
      paddingRight: '10px'
    }
  },
  customRightSpacing: {
    marginTop: '30px !important',
    '@media (min-width: 600px)': {
      paddingLeft: '10px'
    }
  },

  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },

  // CURRENT SELECTED SMT INFO STYLE
  currentSmtInfoStyle: {
    position: 'absolute',
    // height: '312px !important',
    bottom: '0px',
    left: '0',
    right: '0',
    padding: '92px 18px 28px 18px !important',
    background:
      'linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #000000 40.18%)',
    borderRadius: '0px 0px 8px 8px',
    margin: '0 2px 2px'
  },
  // CURRENT SELECTED SMT INFO TWO LINE HEADING CONDITION STYLE
  // currentSmtInfoStyle1: {
  //   position: 'absolute',
  //   // height: '312px !important',
  //   bottom: '0px',
  //   left: '0',
  //   right: '0',
  //   padding: '68px 18px 28px 18px !important',
  //   background: 'linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #000000 40.18%)',
  //   borderRadius: '0px 0px 8px 8px',
  //   margin: '0 2px 2px',
  // },
  // SMT INFO BLOCK HEADING STYLE
  currentSmtInfoHeadingStyle: {
    fontWeight: '600 !important',
    fontSize: '24px !important',
    color: '#EDEDED !important',
    lineHeight: '24px !important',
    '@media (max-width: 1366px)': {
      fontSize: '22px !important'
    },
    '@media (max-width: 930px)': {
      fontSize: '16px !important'
    }
  },
  // SMT INFO BLOCK CONTENT STYLE
  currentSmtInfoContentStyle: {
    fontSize: '14px !important',
    lineHeight: '14px !important',
    height: '98px !important',
    textAlign: 'justify',
    color: '#EDEDED !important',
    fontWeight: '400 !important',
    overflow: 'hidden',
    marginTop: '10px !important'
  },
  // TARGET SMT TITLE STYLE
  targetSmtTitleStyle: {
    position: 'absolute',
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    fontSize: '18px !important',
    // lineHeight: '20px !important',
    color: '#EDEDED !important',
    textShadow: '0px 0px 20px #000000',
    margin: 'auto',
    left: '20px',
    right: '20px',
    textAlign: 'center',
    transform: 'translateY(-50%)',
    top: '50%',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  // TARGET SMT BOX STYLE
  targetSmtBoxStyle: {
    width: '170px',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '130px',
      height: '90px'
    }
  },
  // TARGET SMT BOX ACTIVE STYLE
  targetSmtBoxActiveStyle: {
    width: '170px',
    height: '120px',
    border: '2px solid #E0A501',
    boxSizing: 'border-box',
    borderRadius: '10px',
    '@media (max-width: 968px)': {
      width: '130px',
      height: '90px'
    }
  }
});

export const addLiquidityPanleStyle = makeStyles({
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important'
  },

  // LIQUIDITY TITLE STYLE
  liqTitleStyle: {
    float: 'right',
    fontWeight: '700 !important',
    fontSize: '24px !important',
    lineHeight: '29px !important',
    color: '#E0A501 !important'
  },
  inputBoxStyle: {
    marginTop: '30px',
    border: '2px solid #5A5A5A',
    borderRadius: '10px',
    padding: '10px 20px 20px'
  },
  searchCustomStyle: {
    width: '50%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    fontSize: '48px',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      display: 'none'
    },
    '&:focus': {
      outline: 'none'
    },
    '@media (max-width: 968px)': {}
  }
});

export const swapPanleStyle = makeStyles({
  // SWAP TITLE STYLE
  swapTitleStyle: {
    float: 'left',
    fontWeight: '700 !important',
    color: '#E0A501'
  },
  searchCustomStyle: {
    width: '50%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    fontSize: '48px',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      display: 'none'
    },
    '&:focus': {
      outline: 'none'
    },
    '@media (max-width: 968px)': {}
  },
  inputBoxStyle: {
    height: '100px',
    marginTop: '30px',
    border: '2px solid #5A5A5A',
    borderRadius: '10px',
    padding: '10px 20px 20px'
  },
  tokenSelectStyle: {
    cursor: 'pointer'
  },
  symBolArrStyle: {
    color: '#E0A501',
    padding: '5px 0',
    cursor: 'pointer',
    '&:hover': {
      color: 'red'
    }
  }
});
