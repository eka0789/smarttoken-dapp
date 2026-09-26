import { makeStyles } from '@mui/styles';
// import { Theme } from '@mui/material';

// Achievement Style
export const AchievementStyle = makeStyles({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 70px 30px 70px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important',
    marginBottom: '0px !important'
  },
  multiTabCustomStyle: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    background: '#695400',
    borderRadius: '10px',
    textAlign: 'center',
    width: 'fit-content',
    '@media (max-width: 968px)': {
      margin: '0 auto'
    }
  }
});

// Achievement - Nobility - Collected Style
export const CollectedStyle = makeStyles({
  innerBoxStyle: {
    marginBottom: '30px'
  },
  mainBoxStyle: {
    height: '280px',
    width: '45% !important',
    '@media (max-width: 968px)': {
      width: '48% !important',
      height: '240px'
    }
  },
  cardTitle: {
    fontWeight: '700',
    color: '#E0A501',
    position: 'absolute',
    bottom: '20px',
    '@media (max-width: 968px)': {
      fontSize: '20px !important',
      bottom: '16px'
    }
  },
  mainInnerBoxStyle: {
    height: '240px',
    width: '100%',
    '@media (max-width: 968px)': {
      height: '200px'
    }
  },
  badgeStyle: {
    position: 'absolute',
    bottom: '62px',
    '@media (max-width: 968px)': {
      bottom: '40px'
    }
  },
  badgeStyle1: {
    position: 'absolute',
    top: '0',
    left: '0'
  }
});

// Achievement - Quest - Style
export const QuestStyle = makeStyles({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  claimOutBoxCustomStyle: {
    width: '93%',
    marginBottom: '10px',
    '@media (max-width: 968px)': {
      width: '100%',
      marginTop: '20px'
    }
  },
  customSwordOutBoxStyle: {
    width: '30% !important',
    '@media (max-width: 600px)': {
    }
  },
  customSwordInnerBoxStyle: {
    height: '160px',
    '@media (max-width: 600px)': {
      height: '100px'
    }
  },
  customContentStyle: {
    height: '100px',
    overflow: 'hidden',
    fontWeight: '400 !important',
    marginTop: '10px !important',
    '@media (max-width: 600px)': {
      fontSize: '9px',
      height: '68px',
    }
  },
  customSwordStyle: {
    width: '110px',
    height: '107px',
    '@media (max-width: 600px)': {
      height: '68px',
      width: '70px'
    }
  },
  customSwordPaddingStyle: {
    padding: '25px',
    '@media (max-width: 600px)': {
      padding: '16px 15px'
    }
  },
  cardInnerBoxStyle: {
    alignItems: 'flex-start !important',
    padding: '20px',
    height: '100%'
  },
  cardHeadingStyle: {
    color: "#E0A501 !important",
    fontWeight: "700 !important",
    '@media (max-width: 600px)': {
      fontSize: '16px !important',
    }
  },
  commonTitle: {
    '@media (max-width: 600px)': {
      fontSize: '9px !important',
    }
  },
  rewardImageStyle: {
    '@media (max-width: 600px)': {
      width: '14px',
      height: '20px',
    }
  },
  rewardImageBox: {
    justifyContent: "flex-start !important",
    marginRight: "23px",
    '@media (max-width: 600px)': {
      marginRight: '3px',
    }
  }
});
