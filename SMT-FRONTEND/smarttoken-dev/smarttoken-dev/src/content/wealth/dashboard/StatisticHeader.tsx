import { Hidden, Box, Typography } from '@mui/material';
import CustomeCard from 'src/components/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM CARD BOX STYLE
  cardBoxStyle: {
    width: '200px',
    height: '120px',
    '@media (max-width: 968px)': {
      width: '136px',
      height: '96px'
    }
  },

  // CARD BOX TITLES STYLE
  cardBoxTitleNameStyle: {
    textAlign: 'center',
    color: '#EDEDED !important',
    padding: '0 20px !important',
    height: '32px',
    '@media (max-width: 968px)': {
      fontSize: '14px !important',
      padding: '0 10px !important'
    }
  },
  cardBoxTitleValueStyle: {
    textAlign: 'center',
    fontSize: '48px !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '36px !important',
      lineHeight: '100% !important'
    }
  }
}));

const groupIcon = {
  name: 'group',
  path: '/static/img/wealth_dashboard/group.svg',
  desc: 'group icon'
};

const StatisticHeader = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      width="100%"
    >
      <Box className={classes.cardBoxStyle}>
        <CustomeCard height={'100%'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              variant="h3"
              component="div"
              className={classes.cardBoxTitleNameStyle}
            >
              Ladder level
            </Typography>
            <Typography className={classes.cardBoxTitleValueStyle}>
              7
            </Typography>
          </Box>
        </CustomeCard>
      </Box>

      <Box className={classes.cardBoxStyle}>
        <CustomeCard height={'100%'} width={'100%'}>
          <Box padding="10px 0">
            <Typography variant="h3" className={classes.cardBoxTitleNameStyle}>
              Team member amount
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Hidden mdDown>
                <Box
                  component="img"
                  src={groupIcon.path}
                  alt={groupIcon.name}
                />
              </Hidden>
              <Typography className={classes.cardBoxTitleValueStyle}>
                1333
              </Typography>
            </Box>
          </Box>
        </CustomeCard>
      </Box>

      <Box className={classes.cardBoxStyle}>
        <CustomeCard height={'100%'} width={'100%'}>
          <Box padding="10px 0">
            <Typography variant="h3" className={classes.cardBoxTitleNameStyle}>
              Current level depth
            </Typography>
            <Typography className={classes.cardBoxTitleValueStyle}>
              13
            </Typography>
          </Box>
        </CustomeCard>
      </Box>
    </Box>
  );
};

export default StatisticHeader;
