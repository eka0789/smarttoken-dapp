import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

// Rewards - Index Style
export const IndexStyles = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '70px 45px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },
  customOutBoxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media (max-width: 986px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  boxHeadingStyle: (props: Theme) => ({
    color: props.colors.primary.main,
    height: '48px',
    display: 'flex',
    alignItems: 'center'
  }),
  treePhaseStyle: (props: Theme) => ({
    maxWidth: '240px',
    height: '240px',
    position: 'relative',
    width: '100%',
    background: props.colors.gradients.black1,
    borderRadius: '10px',
    border: `2px solid ${props.colors.blackAlt.main}`
  }),
  treePhaseImageStyle: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

// Rewards - Dailiy Farming Style
export const DailiyStyles = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 62px 40px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    color: '#E0A501 !important',
    marginLeft: '26px !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important',
      marginLeft: '5px !important'
    }
  },
  headerIconStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important',
    marginBottom: '0px !important'
  },
  mutiTabBoxCustomStyle: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    background: '#695400',
    borderRadius: '10px',
    textAlign: 'center',
    width: 'fit-content',
    '@media (max-width: 968px)': {
      height: '24px'
    }
  },
  mutiTabGridCustomStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px !important',
    '@media (max-width: 968px)': {
      overflow: 'auto'
    }
  },
  customRightSideOutBoxStyle: {
    '@media (min-width: 968px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '34px',
      marginTop: '20px'
    },
    '@media (max-width: 968px)': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '20px',
      justifyContent: 'space-between'
    }
  },
  customRightSideInnerBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    borderRadius: '10px',
    width: '100%',
    height: '250px',
    marginBottom: '24px',
    '@media (max-width: 968px)': {
      width: '95%'
    }
  },
  tableCustomStyle: {
    marginTop: '10px',
    width: '100%',
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  }
});

// Rewards - Dailiy Farming - FixedBar Style
export const FixedBarStyles = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customOutBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '120px',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'auto'
    }
  },
  customInnerBoxStyle: {
    width: '30%',
    height: '100%',
    '@media (max-width: 968px)': {
      width: '70%'
    }
  },
  customInnerBoxBottomStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
    height: '100%',
    paddingLeft: '20px',
    '@media (max-width: 968px)': {
      width: '100%',
      height: '95px',
      paddingLeft: '0px',
      marginTop: '20px'
    }
  },
  customHarvestProgressOutBoxStyle: {
    padding: '0 11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  harverstProgressInnerBoxStyle: {
    height: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    padding: '8px 80px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 968px)': {
      padding: '8px 35px'
    }
  },
  remainingSmtCusotmBoxStyle: {
    height: '100%',
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
    padding: '6px 50px 6px 70px',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    textAlign: 'center',
    width: '80%',
    '@media (max-width: 968px)': {
      padding: '6px 10px 6px 45px'
    }
  },
  farmedSmtStyle: {
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '16px !important'
    }
  },
  valueSmtStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '700 !important',
    '@media (max-width: 968px)': {
      fontSize: '20px !important'
    }
  },
  harverstTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  },
  harvestButtonTitle: {
    color: '#212121',
    marginLeft: '14px !important',
    cursor: 'pointer',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  secondCardOutBoxStyle: {
    height: '50px',
    width: '100%',
    '@media (max-width: 968px)': {
      height: '40px'
    }
  }
});

// Rewards - Dailiy Farming - LPBar Style
export const LPBarStyle = makeStyles({
  firstCardBoxGroup: {
    textAlign: 'center',
    padding: '20px 0'
  },
  lastCardBoxGroup: {
    textAlign: 'center',
    padding: '20px 0'
  },
  firstCardBoxStyle: {
    width: '35%',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '45%',
      height: '86px'
    }
  },
  lastCardBoxStyle: {
    width: '30%',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '45%',
      height: '86px'
    }
  },
  outBoxStyle: {
    marginTop: '20px',
    '@media (max-width: 968px)': {
      justifyContent: 'space-evenly !important'
    }
  },
  mobileTitleStyle: (props: Theme) => ({
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  }),
  mobileTitleNumStyle: (props: Theme) => ({
    color: props.colors.primary.main,
    '@media (max-width: 968px)': {
      fontSize: '24px !important',
      lineHeight: '100% !important'
    }
  })
});

// Rewards - Dailiy Farming - SellBar Style
export const SellBarStyle = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customOutBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  firstCardBoxStyle: {
    width: '30%',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '144px',
      height: '75px'
    }
  },
  customCardTitle: {
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  },
  customCareNumTitle: {
    fontSize: '30px !important',
    color: '#E0A501',
    fontWeight: '700 !important',
    marginTop: '11px !important',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  },
  cardInnerBoxStyle: {
    padding: '20px 0',
    '@media (max-width: 968px)': {
      padding: '10px 0'
    }
  },
  cardInnerBoxStyle1: {
    width: '70%',
    height: '120px',
    margin: '0 0 0 20px',
    '@media (max-width: 968px)': {
      margin: '12px 0 0 0',
      height: '95px'
    }
  },
  secondCardOutBoxStyle: {
    height: '50px',
    width: '100%',
    '@media (max-width: 968px)': {
      height: '40px'
    }
  },
  harvestBoxStyle: {
    height: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    padding: '8px 80px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 968px)': {
      padding: '8px 30px'
    }
  },
  harvestTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  },
  harvestButtonTitleStyle: {
    color: '#212121',
    marginLeft: '14px !important',
    cursor: 'pointer',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  }
});

// Rewards - Dailiy Farming - Harvest Popover Style
export const HarvestPopoverStyle = makeStyles({
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '100%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      height: '25px'
    }
  },
  outBoxStyle: (props: Theme) => ({
    padding: '30px 30px 50px 30px !important',
    position: 'relative',
    background: props.colors.gradients.black1,
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    margin: '0 auto',
    '@media (max-width: 968px)': {
      width: '95%',
      padding: '18px 18px 44px 18px !important'
    }
  }),
  headingTitle: (props: Theme) => ({
    color: props.colors.primary.main,
    fontWeight: '700',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      fontSize: '15px !important',
      marginBottom: '12px !important'
    }
  }),
  contentHeadingTitle: (props: Theme) => ({
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      fontSize: '15px !important'
    }
  }),
  innerBoxStyle: {
    padding: '20px 55px 0 55px',
    '@media (max-width: 968px)': {
      padding: '25px 35px 0 35px'
    }
  },
  cardBoxStyle: {
    width: '37%'
  },
  cardInnerBoxStyle: {
    padding: '20px 0',
    textAlign: 'center'
  },
  cardHeadingStyle: {
    '@media (max-width: 968px)': {
      fontSize: '8px !important'
    }
  },
  cardContentTitleStyle: (props: Theme) => ({
    color: props.colors.primary.main,
    fontSize: '48px !important',
    fontWeight: '700',
    height: '59px',
    lineHeight: '100% !important',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '30px !important',
      height: '37px',
      marginTop: '6px !important'
    }
  }),
  noteStyle: {
    marginTop: '30px !important',
    '@media (max-width: 968px)': {
      marginTop: '17px !important',
      fontSize: '10px !important'
    }
  },
  innerInputStyle: (props: Theme) => ({
    padding: '9px 60px 9px 20px',
    height: '100%',
    borderRadius: '10px !important',
    background: '#EDEDED',
    color: '#5A5A5A !important',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '14px !important',
      padding: '5px 60px 5px 0 !important'
    }
  }),
  innerInputTitleStyle: (props: Theme) => ({
    margin: '0 auto',
    position: 'absolute',
    right: '20px',
    color: props.colors.blackAlt.main,
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  }),
  closeIconStyle: (props: Theme) => ({
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      top: '16px',
      right: '16px'
    }
  })
});

// Rewards - Dailiy Farming - Receive Popover Style
export const ReceivePopoverStyle = makeStyles({
  outBoxStyle: (props: Theme) => ({
    padding: '30px 30px 70px 30px !important',
    position: 'relative',
    background: props.colors.gradients.black1,
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    margin: '0 auto',
    '@media (max-width: 968px)': {
      width: '95%',
      padding: '18px 18px 44px 18px !important'
    }
  }),
  closeIconStyle: (props: Theme) => ({
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      top: '16px',
      right: '16px'
    }
  }),
  headingTitle: (props: Theme) => ({
    color: props.colors.primary.main,
    fontWeight: '700',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      fontSize: '15px !important',
      marginBottom: '12px !important'
    }
  }),
  innerBoxStyle: {
    padding: '60px 55px 0 55px',
    '@media (max-width: 968px)': {
      padding: '37px 35px 0 35px'
    }
  },
  innerBoxStyle1: {
    padding: '0 90px',
    '@media (max-width: 968px)': {
      padding: '0 40px'
    }
  },
  contentHeadingTitle: (props: Theme) => ({
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      fontSize: '15px !important'
    }
  }),
  contentMiddleTitleStyle: (props: Theme) => ({
    fontSize: '48px !important',
    color: props.colors.primary.main,
    fontWeight: '700',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '30px !important'
    }
  }),
  contentBottomTitleStyle: (props: Theme) => ({
    color: props.colors.white.main,
    marginTop: '30px !important',
    '@media (max-width: 968px)': {
      marginTop: '18px !important',
      fontSize: '11px !important'
    }
  })
});

// Rewards - Dailiy Farming - Sure Popover Style
export const SurePopoverStyle = makeStyles({
  outBoxStyle: (props: Theme) => ({
    padding: '30px 30px 70px 30px !important',
    position: 'relative',
    background: props.colors.gradients.black1,
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    margin: '0 auto',
    '@media (max-width: 968px)': {
      width: '95%',
      padding: '18px 18px 44px 18px !important'
    }
  }),
  closeIconStyle: (props: Theme) => ({
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      top: '16px',
      right: '16px'
    }
  }),
  headingTitle: (props: Theme) => ({
    color: props.colors.primary.main,
    fontWeight: '700',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      fontSize: '15px !important',
      marginBottom: '12px !important'
    }
  }),
  innerBoxStyle: {
    padding: '130px 70px 0 70px',
    '@media (max-width: 968px)': {
      padding: '37px 0 0 0'
    }
  },
  contentHeadingTitle: (props: Theme) => ({
    color: props.colors.white.main,
    '@media (max-width: 968px)': {
      fontSize: '15px !important'
    }
  }),
  contentMiddleTitleStyle: (props: Theme) => ({
    fontSize: '48px !important',
    color: props.colors.primary.main,
    fontWeight: '700',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '30px !important'
    }
  })
});

// Rewards - Nobility Style
export const NobilityStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 250px 230px 70px !important',
    '@media (max-width: 968px)': {
      padding: '20px 24px !important'
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
  outBoxStyle: {
    alignItems: 'flex-start',
    '@media (max-width: 968px)': {
      flexDirection: 'column !important',
      alignItems: 'center'
    }
  },
  cardHeadintStyle: {
    color: '#E0A501 !important',
    height: '48px',
    display: 'flex',
    alignItems: 'center'
  }
});

// Rewards - Nobility - Passive Style
export const PassiveStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '40px 42px 200px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '25px 20px !important'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bscscanButtonStyle: {
    position: 'absolute',
    top: '69px',
    right: '42px',
    '@media (max-width: 968px)': {
      top: '35px',
      right: '20px'
    }
  },
  cardActionStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '40px',
    position: 'relative',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    justifyContent: 'center'
  },
  cardContent: {
    padding: '42px 10px 12px 10px !important',
    width: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '-32px'
  },
  outBoxStyle: {
    marginTop: '30px',
    alignItems: 'flex-start !important',
    '@media (max-width: 968px)': {
      marginTop: '20px',
      flexDirection: 'column !important'
    }
  },
  leftInnerBox: {
    width: '45% !important',
    paddingRight: '20px',
    alignItems: 'stretch !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      padding: '0px'
    }
  },
  rightInnerBox: {
    width: '55% !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      marginTop: '30px'
    }
  },
  learnTitleStyle1: {
    textAlign: 'left',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '17px !important'
    }
  },
  learnTitleStyle2: {
    color: '#E0A501',
    marginLeft: '5px',
    '@media (max-width: 968px)': {
      fontSize: '17px !important'
    }
  },
  learnOutBoxStyle: {
    padding: '20px',
    height: '100%',
    position: 'relative'
  }
});

// Rewards - Nobility - Chest Style
export const ChestStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '40px 42px 200px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '25px 20px !important'
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
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bscscanButtonStyle: {
    position: 'absolute',
    top: '69px',
    right: '42px',
    '@media (max-width: 968px)': {
      top: '35px',
      right: '20px'
    }
  },
  outBoxStyle: {
    marginTop: '30px',
    alignItems: 'flex-start !important',
    '@media (max-width: 968px)': {
      marginTop: '20px',
      flexDirection: 'column !important'
    }
  },
  leftInnerBox: {
    width: '45% !important',
    paddingRight: '20px',
    alignItems: 'stretch !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      padding: '0px'
    }
  },
  rightInnerBox: {
    width: '55% !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      marginTop: '30px'
    }
  },
  insideChestStyle: {
    padding: '10px 20px 20px 20px !important',
    boxSizing: 'border-box',
    marginTop: '20px'
  }
});

// Rewards - Golden Tree Phase Style
export const GoldenTreeStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '40px !important',
    '@media (max-width: 1280px)': {
      padding: '25px 20px !important'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important',
      width: '300px',
      textAlign: 'left'
    }
  },
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important',
    marginBottom: '0px !important'
  },
  bscButtonBox: {
    height: '32px',
    background: '#695400',
    borderRadius: '10px',
    width: 'auto !important',
    '@media (max-width: 968px)': {
      height: '23px'
    }
  },
  mobileBscScanButton: {
    '@media (max-width: 968px)': {
      position: 'absolute',
      top: '25px',
      right: '20px'
    }
  },
  outBoxStyle: {
    marginTop: '20px',
    alignItems: 'flex-start !important',
    '@media (max-width: 968px)': {
      marginTop: '20px',
      flexDirection: 'column !important'
    }
  },
  leftInnerBox: {
    width: '55% !important',
    paddingRight: '20px',
    alignItems: 'stretch !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      padding: '0px'
    }
  },
  rightInnerBox: {
    width: '45% !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      marginTop: '30px'
    }
  }
});

// Rewards - Golden Tree Phase - Noble Component Style
export const NobleStyle = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outBoxStyle: {
    height: '120px',
    '@media (max-width: 968px)': {
      height: '96px'
    }
  },
  progressTitle: {
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  progressInnerBox: {
    height: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    padding: '8px 60px 8px 20px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      padding: '8px 15px 8px 5px'
    }
  },
  claimTitleStyle: {
    marginLeft: '10px !important',
    cursor: 'pointer',
    color: '#212121 !important',
    '@media (max-width: 968px)': {
      fontSize: '13px !important'
    }
  },
  cardHeadingStyle: {
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  cardContentTitleStyle: {
    color: '#E0A501',
    fontWeight: '700',
    '@media (max-width: 968px)': {
      fontSize: '17px !important'
    }
  }
});

// Rewards - Golden Tree Phase - Farmer Component Style
export const FarmerStyle = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outBoxStyle: {
    height: '142px',
    '@media (max-width: 968px)': {
      height: '105px'
    }
  },
  cardHeadingStyle: {
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  cardContentTitleStyle: {
    color: '#E0A501',
    fontWeight: '700',
    '@media (max-width: 968px)': {
      fontSize: '17px !important'
    }
  },
  progressTitle: {
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  progressTitle1: {
    color: '#212121 !important',
    padding: '11px 25px 11px 40px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '10px !important',
      padding: '11px 10px 11px 15px'
    }
  },
  progressInnerBox: {
    height: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center',
    width: '50px'
  },
  claimTitleStyle: {
    marginLeft: '14px !important',
    cursor: 'pointer',
    color: '#212121 !important',
    '@media (max-width: 968px)': {
      fontSize: '13px !important'
    }
  }
});

// Rewards - Golden Tree Phase - Learn Style
export const LearnStyle = makeStyles({
  learnTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  }
});

// Rewards - Quest Rewards - Style
export const QuestStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '40px !important',
    '@media (max-width: 1280px)': {
      padding: '25px 20px !important'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bscscanButtonStyle: {
    position: 'absolute',
    top: '69px',
    right: '42px',
    '@media (max-width: 968px)': {
      top: '25px',
      right: '20px'
    }
  },
  outBoxStyle: {
    marginTop: '50px',
    alignItems: 'flex-start !important',
    '@media (max-width: 968px)': {
      marginTop: '20px',
      flexDirection: 'column !important'
    }
  },
  leftInnerBox: {
    width: '45% !important',
    paddingRight: '20px',
    alignItems: 'stretch !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      padding: '0px'
    }
  },
  rightInnerBox: {
    width: '55% !important',
    '@media (max-width: 968px)': {
      width: '100% !important',
      marginTop: '20px'
    }
  }
});

// Rewards - Surprise StatisticHeader Style
export const SupriseStatisticStyle = makeStyles({
  outBoxStyle: {
    marginBottom: '8px',
    height: '124px',
    '@media (max-width: 968px)': {
      height: 'auto',
      marginBottom: '20px'
    }
  },
  leftInnerBoxStyle: {
    width: '100%',
    '@media (max-width: 968px)': {
      flexDirection: 'column !important',
      height: '100%'
    }
  },
  cardBoxStyle: {
    width: '31%',
    '@media (max-width: 968px)': {
      width: '80%',
      height: '92px'
    }
  },
  titleStyle1: {
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  titleStyle2: {
    '@media (max-width: 968px)': {
      fontSize: '17px !important'
    }
  },
  titleStyle3: {
    color: '#E0A501',
    fontWeight: '700 !important',
    marginTop: '15px !important',
    '@media (max-width: 968px)': {
      fontSize: '26px !important',
      marginTop: '11px !important'
    }
  },
  firstCardBoxStyle: {
    padding: '20px',
    '@media (max-width: 968px)': {
      padding: '15px'
    }
  },
  secondCardBoxStyle: {
    padding: '20px 10px',
    '@media (max-width: 968px)': {
      padding: '10px'
    }
  },
  secondCardInnerBoxStyle: {
    height: '40px',
    marginTop: '10px',
    justifyContent: 'space-around !important',
    '@media (max-width: 968px)': {
      marginTop: '7px',
      height: '35px'
    }
  }
});
