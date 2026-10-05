import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { currentNetwork, getContractInfo } from 'src/utils';

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

  const openSmtcOnBscscan = () => {
    const isTestnet = currentNetwork === 97;
    const smtcAddress =
      getContractInfo('SmartTokenCash')?.address ||
      (isTestnet
        ? '0x3235b29315eBEe65bFAb6F1C07c6f0F44aF05809'
        : '0x6aedC09AE456651FccBBE357B57CA77A44f9da51');
    const explorer = isTestnet
      ? 'https://testnet.bscscan.com'
      : 'https://bscscan.com';
    window.open(
      `${explorer}/token/${smtcAddress}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <Box className={classes.innerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px">
              <Typography variant="h4">
                Quest Wallet Balance{' '}
                <Typography
                  component="span"
                  sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontStyle: 'italic' }}
                >
                  (demo)
                </Typography>
              </Typography>
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
                onHandleClick={openSmtcOnBscscan}
              >
                Visit bscscan
              </CustomButton>
            </ColumnBox>
          </CustomCard>
        </Box>
        <Box className={classes.innerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px">
              <Typography variant="h4">
                Total Distributed{' '}
                <Typography
                  component="span"
                  sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontStyle: 'italic' }}
                >
                  (demo)
                </Typography>
              </Typography>
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
              <Typography variant="h4">
                Quest Claimed{' '}
                <Typography
                  component="span"
                  sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontStyle: 'italic' }}
                >
                  (demo)
                </Typography>
              </Typography>
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
