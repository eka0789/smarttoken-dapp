import { Box, Typography } from '@mui/material';
import CustomeCard from '../../../../../components/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM STATISTIC BOX STYLE
  customBoxStyle: {
    float: 'right',
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      width: '100%',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  },

  // INDIVIDUAL STATISTIC BOX STYLE
  indiStatBoxStyle: {
    width: '23%',
    '@media (max-width: 968px)': {
      width: '43%',
      marginTop: '10px'
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
    <Box className={classes.customBoxStyle}>
      <Box className={classes.indiStatBoxStyle}>
        <CustomeCard height={'89px'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              variant="h3"
              component="div"
              textAlign="center"
              lineHeight={'100%'}
              height="22px"
              fontSize="12px"
              padding="0 10px"
              color="#EDEDED"
            >
              Total Direct Sales Made
            </Typography>
            <Typography
              variant="h3"
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="22px"
              fontSize="18px"
              fontWeight={'700'}
              marginTop={'12px'}
              color="#E0A501"
            >
              100,000 BUSD
            </Typography>
          </Box>
        </CustomeCard>
      </Box>

      <Box className={classes.indiStatBoxStyle}>
        <CustomeCard height={'89px'} width={'100%'}>
          <Box padding="10px">
            <Typography
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="22px"
              fontSize="12px"
              fontWeight={'700'}
              color="#EDEDED"
            >
              Number of Direct Team Member
            </Typography>
            <Box display="flex" justifyContent="center" marginTop={'12px'}>
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
                lineHeight={'100%'}
                component="div"
                textAlign="center"
                height="22px"
                fontSize="18px"
                color="#E0A501"
              >
                345
              </Typography>
            </Box>
          </Box>
        </CustomeCard>
      </Box>

      <Box className={classes.indiStatBoxStyle}>
        <CustomeCard height={'89px'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="22px"
              fontSize="12px"
              padding="0 10px"
              color="#EDEDED"
            >
              Total Profit from Direct Sales
            </Typography>
            <Typography
              variant="h3"
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="22px"
              fontSize="18px"
              marginTop={'12px'}
              color="#E0A501"
            >
              10,000 BUSD
            </Typography>
          </Box>
        </CustomeCard>
      </Box>

      <Box className={classes.indiStatBoxStyle}>
        <CustomeCard height={'89px'} width={'100%'}>
          <Box padding="10px 0">
            <Typography
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="11px"
              fontSize="12px"
              color="#EDEDED"
              padding="0 10px"
            >
              Last Active
            </Typography>
            <Typography
              lineHeight={'100%'}
              component="div"
              textAlign="center"
              height="28px"
              fontSize="14px"
              marginTop={'17px'}
              padding="0 8px"
              color="#E0A501"
            >
              13:30 20/09/2021 (1 day ago)
            </Typography>
          </Box>
        </CustomeCard>
      </Box>
    </Box>
  );
};

export default StatisticHeader;
