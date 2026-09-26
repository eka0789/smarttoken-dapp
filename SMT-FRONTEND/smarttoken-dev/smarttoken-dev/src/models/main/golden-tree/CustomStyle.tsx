import { makeStyles } from '@mui/styles';

export const statisticHeaderStyle = makeStyles({
  // CUSTOM STATISTIC BOX STYLE
  customBoxStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }
  },
  // INNER BOX OF CUSTOMCARD STYLE
  customInnerBoxStyle: {
    width: '200px',
    height: '120px',
    '@media (max-width: 968px)': {
      marginBottom: '20px'
    },
    '@media (max-width: 600px)': {
      width: '270px'
    }
  },
  // MAIN TITLE STYLE
  mainTitleTopStyle: {
    height: '40px',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    color: '#EDEDED',
    lineHeight: '100% !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  mainTitleDownStyle: {
    height: '60px',
    fontSize: '20px !important',
    fontWeight: '700 !important',
    color: '#E0A501',
    padding: '0 10px',
    lineHeight: '100% !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
