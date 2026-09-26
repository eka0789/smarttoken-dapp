import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';

const useStyles = makeStyles({
  outBoxStyle: {
    height: '130px',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      flexDirection: 'column !important',
      height: 'auto'
    }
  },
  innerBoxStyle: {
    width: '30%',
    height: '100%',
    '@media (max-width: 968px)': {
      width: '80%',
      marginBottom: '10px'
    }
  }
});

const StatisticHeader = () => {
  const classes = useStyles();

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <Box className={classes.innerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px">
              <Typography variant="h4">Quest Wallet Balance</Typography>
              <Typography
                variant="h2"
                fontWeight="700"
                color="#E0A501"
                marginTop="10px"
                marginBottom="12px"
              >
                506,000 SMTC
              </Typography>
              <CustomButton
                width="150px"
                height="25px"
                background="#E0A501"
                color="#212121"
                fontSize="12px"
                fontWeight="600"
                borderRadius="20px"
              >
                Visit bscscan
              </CustomButton>
            </ColumnBox>
          </CustomCard>
        </Box>
        <Box className={classes.innerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px">
              <Typography variant="h4">Total Distributed</Typography>
              <Typography
                variant="h2"
                fontWeight="700"
                color="#E0A501"
                marginTop="30px"
              >
                36,000 SMTC
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>
        <Box className={classes.innerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px">
              <Typography variant="h4">Quest Claimed</Typography>
              <Typography
                variant="h2"
                fontWeight="700"
                color="#E0A501"
                marginTop="30px"
              >
                1,373 Quests
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>
      </RowBox>
    </>
  );
};

export default StatisticHeader;
