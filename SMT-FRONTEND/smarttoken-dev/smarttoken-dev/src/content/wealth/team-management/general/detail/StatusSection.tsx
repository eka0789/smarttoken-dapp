import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import useSmartArmy from 'src/hooks/useSmartArmy';
import useGoldenTree from 'src/hooks/useGoldenTree';
import useFarmHarvest from 'src/hooks/useFarmHarvest';
import { formatDecimalNumber } from 'src/utils/formatBalance';

const useStyles = makeStyles((theme) => ({
  // CUSTOM BOX STYLE
  customBoxStyle: {
    width: '100%',
    // height: '329px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%'
    }
  },
  // CUSTOM INNER BOX STYLE
  customInnerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '47%',
    '@media (max-width: 968px)': {
      width: '90%',
      marginTop: '20px'
    }
  }
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '26px',
  borderRadius: '10px',
  border: '2px solid #323232',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
    borderRadius: '8px 0px 0px 8px'
  }
}));

const activityLog = [
  'Earned 33 SMT Staking Rewards',
  'Prince Nobility title achieved!',
  'Updated Runner to Visionary License',
  'Earned 10 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 15 SMT Staking Rewards',
  'Earned 13 SMT Staking Rewards',
  'Earned 10 Surprise Rewards',
  'Earned 6 SMT Staking Rewards',
  'Updated Opportunist to Runner License',
  'Earned 5 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 10 SMT Staking Rewards'
];

const StatusSection = ({ userAccount }) => {
  const classes = useStyles();
  const { fetchLicense, fetchLicenseType } = useSmartArmy();
  const { fetchGrowth } = useGoldenTree();
  const { fetchFarmUserInfo } = useFarmHarvest();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function init() {
      let accountInfo = [];
      let licenseOf = await fetchLicense(userAccount);
      let licenseTypeOf = await fetchLicenseType(licenseOf.level);
      let growthAmount = await fetchGrowth(userAccount);
      let farmUserInfo = await fetchFarmUserInfo(userAccount);
      let userStackedSmt = formatDecimalNumber(farmUserInfo.tokenBalance, 18);

      accountInfo.push({
        name: 'License type',
        value: licenseTypeOf.name
      });
      accountInfo.push({
        name: 'Expiration time',
        value: 'licenseOf.expireAt'
      });
      accountInfo.push({
        name: 'SMT Stacked',
        value: userStackedSmt + ' SMT'
      });
      accountInfo.push({
        name: 'Staking Rewards Earned',
        value: '333 SMT'
      });
      accountInfo.push({
        name: 'Total Golden Tree Contribution',
        value: formatDecimalNumber(growthAmount, 18) + ' Growth'
      });
      setInfo(accountInfo);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAccount]);

  return (
    <Box className={classes.customBoxStyle}>
      {/* FITST PART */}
      <Box className={classes.customInnerBoxStyle}>
        <CustomCard width="100%" height="auto">
          <ColumnBox padding="30px 20px">
            {info.map((con, idx) => (
              <RowBox key={idx} justifyContent="flex-start">
                <RowBox minWidth="175px" width="175px">
                  <Typography variant="h3" color="#EDEDED">
                    {con.name}
                  </Typography>
                  <Typography variant="h3" color="#EDEDED">
                    :
                  </Typography>
                </RowBox>
                <Typography variant="h3" color="#E0A501" marginLeft="10px">
                  {con.value}
                </Typography>
              </RowBox>
            ))}
          </ColumnBox>
        </CustomCard>
        {/* PROGRESS BAR */}
        <ColumnBox marginTop="20px">
          <Typography variant="h3" color="#EDEDED">
            Next Title Progress
          </Typography>
          {/* PROGRESS */}
          <Box marginTop="7px" height="26px" width="100%">
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
          <Typography variant="h4" textAlign="center" marginTop="7px">
            7,333 / 18,000 Growth
          </Typography>
        </ColumnBox>
      </Box>

      {/* SECOND PART */}
      <Box className={classes.customInnerBoxStyle}>
        <CustomCard width="100%" height="100%">
          <ColumnBox padding="20px 20px 10px 20px">
            <Typography
              variant="h3"
              color="#E0A501"
              fontWeight="700"
              textAlign="center"
            >
              Activity Log
            </Typography>
            <Box marginTop="10px" paddingLeft="5px">
              {activityLog.map((con, idx) => (
                <Typography key={idx} variant="h4">
                  &#8226; {con}
                </Typography>
              ))}
            </Box>
            <Typography
              variant="h4"
              color="#E0A501"
              marginTop="5px"
              width="100%"
              textAlign="right"
            >
              See all &gt;
            </Typography>
          </ColumnBox>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default StatusSection;
