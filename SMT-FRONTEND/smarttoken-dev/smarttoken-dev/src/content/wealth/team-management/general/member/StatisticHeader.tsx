import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';

const useStyles = makeStyles((theme) => ({
  // CUSTOM STATISTIC BOX STYLE
  customBoxStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  },
  // INDIVIDUAL STATISTIC BOX STYLE
  indiStatBoxStyle: {
    width: '32%',
    '@media (max-width: 968px)': {
      width: '45%',
      marginTop: '10px'
    }
  }
}));

const groupIcon = {
  name: 'group',
  path: '/static/img/wealth_dashboard/group.svg',
  desc: 'group icon'
};

const StatisticHeader = ({ userInfo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.customBoxStyle}>
      <Box className={classes.indiStatBoxStyle}>
        <CustomCard height={'58px'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              height="11px"
              color="#EDEDED"
            >
              Ladder level
            </Typography>
            <Typography
              variant="h3"
              component="div"
              textAlign="center"
              height="22px"
              marginTop="5px"
              color="#E0A501"
            >
              {userInfo.ladderLevel}
            </Typography>
          </Box>
        </CustomCard>
      </Box>

      <Box className={classes.indiStatBoxStyle}>
        <CustomCard height={'58px'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              height="11px"
              color="#EDEDED"
            >
              Team member amount
            </Typography>
            <Box display="flex" justifyContent="center" marginTop={'5px'}>
              <Box
                component="img"
                src={groupIcon.path}
                alt={groupIcon.name}
                sx={{
                  width: '22px',
                  height: '22px'
                }}
              />
              <Typography
                variant="h3"
                component="div"
                textAlign="center"
                height="22px"
                color="#E0A501"
              >
                777
              </Typography>
            </Box>
          </Box>
        </CustomCard>
      </Box>

      <Box className={classes.indiStatBoxStyle}>
        <CustomCard height="58px" width="100%">
          <Box padding="10px 0">
            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              height="11px"
              color="#EDEDED"
              padding="0 20px"
            >
              Current level depth
            </Typography>
            <Typography
              variant="h3"
              component="div"
              textAlign="center"
              height="22px"
              marginTop="5px"
              color="#E0A501"
            >
              9
            </Typography>
          </Box>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default StatisticHeader;
