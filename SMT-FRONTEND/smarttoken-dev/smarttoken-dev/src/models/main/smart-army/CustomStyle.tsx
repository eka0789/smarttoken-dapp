import { makeStyles } from '@mui/styles';
// import { Theme } from '@mui/material';

/** Achievement Style */
export const SmartArmyStyle = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  customOutBoxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      marginTop: '20px'
    }
  },
  customInnerBoxStyle: {
    height: '390px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '22%',
    minWidth: '230px',
    '@media (max-width: 968px)': {
      marginBottom: '40px'
    }
  },

  customCardButtonStyle: {
    '@media (max-width: 968px)': {
      position: 'absolute',
      bottom: '-10px'
    }
  },

  customCardBoxStyle: {
    padding: '37px 20px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative'
  }
});

/** Active(Liquidate/Extend) Style */
export const ChoosePopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '230px 100px 70px 100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '115px 50px 35px 50px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  },
  customTitleGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    '@media (max-width: 968px)': {
      padding: '0 10px'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginBottom: '5px !important'
    }
  },
  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const ExtNowPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '172px 85px 70px 85px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '110px 20px 35px 20px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  },
  customTitleGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    '@media (max-width: 968px)': {
      padding: '0 10px'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginBottom: '5px !important'
    }
  },
  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const ExtThankPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '170px 42px 70px 42px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '95px 40px 35px 40px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  },
  customTitleGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    '@media (max-width: 968px)': {
      padding: '0 10px'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginBottom: '5px !important'
    }
  },

  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const LiqGotPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '190px 114px 70px 114px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '120px 50px 35px 50px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const LiqNowPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '170px 85px 70px 85px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '103px 22px 35px 22px !important'
    }
  },
  customTitleGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    '@media (max-width: 968px)': {
      padding: '0 10px'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginBottom: '5px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  },
  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const LiqStartPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '170px 100px 70px 100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '105px 30px 35px 30px !important'
    }
  },
  customHeadingStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    padding: '0 35px',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      padding: '0 !important',
      marginTop: '0  !important'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#C59100',
    fontWeight: '600 !important',
    marginTop: '30px  !important',
    padding: '0 12px',
    '@media (max-width: 968px)': {
      fontSize: '9px !important',
      marginTop: '25px !important',
      padding: '0'
    }
  },
  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED'
  }
});

/** Exchange Style */
export const ConfirmPopoverStyle = makeStyles({
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '100%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {}
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED'
  },
  customOutBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 65px 60px 65px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    textAlign: 'center',
    width: '700px',
    '@media (max-width: 968px)': {
      width: '350px',
      padding: '30px 10px 35px 10px !important'
    }
  }
});
export const FinalPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED',
    zIndex: '9999'
  },
  customInnerBoxStyle: {
    padding: '180px 55px 60px 55px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '100px 10px 35px 20px !important'
    }
  },
  customHeadingStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    padding: '0 163px',
    '@media (max-width: 968px)': {
      fontSize: '16px !important',
      padding: '0'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '31px !important',
    padding: '0 17px',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});
export const IntroducePopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '167px 100px 50px 100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '100px 10px 35px 20px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED',
    zIndex: '9999'
  },
  customHeadingStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    padding: '0 52px',
    '@media (max-width: 968px)': {
      fontSize: '16px !important',
      padding: '0'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '30px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customLeftTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customRightTitleStyle: {
    fontSize: '18px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    marginLeft: '5px',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
});

/** No Balance Style */
export const NoBalanceStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '190px 57px 70px 57px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '100px 10px 35px 20px !important'
    }
  },
  customMainTitleStyle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customMainSecondStyle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '20px !important',
    padding: '0 66px',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10'
  }
});

/** Upgrade Style */
export const GotPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '713px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '170px 50px 58px 50px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '50px 25px 35px 25px !important'
    }
  },
  customHeadingTitle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '700 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED',
  }
});
export const ThankPopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '713px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '170px 60px 58px 60px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '95px 80px 35px 80px !important'
    }
  },
  customHeadingStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    padding: '0 52px',
    '@media (max-width: 968px)': {
      fontSize: '16px !important',
      padding: '0'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '30px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED',
  }
});
export const UpgradePopoverStyle = makeStyles({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '713px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '172px 94px 70px 94px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '105px 50px 35px 50px !important'
    }
  },
  customLeftTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customRightTitleStyle: {
    fontSize: '18px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    marginLeft: '5px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customButtonBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '92px',
    '@media (max-width: 968px)': {
      marginTop: '25px'
    }
  },
  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  },
  mobileInnerBox: {
    marginTop: '62px',
    '@media (max-width: 968px)': {
      marginTop: '0'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    zIndex: '10',
    color: '#EDEDED',
  }
});