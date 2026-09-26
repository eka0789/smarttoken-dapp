import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Hidden,
  IconButton
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Hero from '../../Hero';
import EarningHistoryTable from '../passive/EarningHistoryTable';
import LearnCard from '../passive/Learn';
import DoubleClaimBar from '../../double-claim-bar';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import CustomTooltip from 'src/components/Tooltip';
import { ChestStyle } from 'src/models/main/reward/CustomStyle';
import { useWeb3React } from '@web3-react/core';
import useRewards from 'src/hooks/useRewards';
import useSmartArmy from 'src/hooks/useSmartArmy';

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/nobilityReward/chest/welcome.png',
  desc: 'welcomeImage'
};
const cashIcon = {
  name: 'cash',
  path: '/static/img/main_reward/nobilityReward/chest/cash.svg',
  desc: 'cashIcon'
};
const chestList = ['0.5', '5', '50', '0.5', '5', '50', '500'];

const PassivePhase = () => {
  const theme: Theme = useTheme();
  const classes = ChestStyle(theme);
  const { account } = useWeb3React();
  const { fetchNobilityTitle } = useRewards();
  const { fetchUserInfo } = useSmartArmy();

  const [title, setTitle] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  // const [chestRewards, setChestRewards] = useState({
  //   smtRewards: '',
  //   smtcRewards: ''
  // });

  useEffect(() => {
    async function init() {
      if (!account) return;
      let title = await fetchNobilityTitle(account);
      setTitle(title);
      let userInfo = await fetchUserInfo(account);
      setUserName(userInfo.username);
    }
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <Helmet>
        <title>Main | Rewards</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              aria-label="vehicles"
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards/nobility"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              component="span"
              sx={{ marginLeft: '26px' }}
              className={classes.headerTypoStyle}
            >
              Chest Rewards
            </Typography>
          </Grid>

          <Box className={classes.bscscanButtonStyle}>
            <Hidden mdDown>
              <CustomButton
                width="152px"
                height="25px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="12px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
            <Hidden mdUp>
              <CustomButton
                width="113px"
                height="18px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="8px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
          </Box>

          <RowBox className={classes.outBoxStyle}>
            <ColumnBox className={classes.leftInnerBox}>
              <ColumnBox alignItems="flex-start">
                <Typography variant="h1" color="#EDEDED">
                  Welcome {userName}
                </Typography>
                <Typography variant="h2" color="#E0A501">
                  Our {title}
                </Typography>
              </ColumnBox>
              <ColumnBox marginTop="10px">
                <Box
                  component="img"
                  src={welcomeImage.path}
                  alt={welcomeImage.name}
                  className="animate-float-slow"
                />
                <DoubleClaimBar rewardsTitle="chest" />
                <CustomCard
                  height="auto"
                  padding="10px 20px 20px 20px"
                  marginTop="20px"
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '20px'
                    }}
                  >
                    <CustomTooltip
                      content="Remaining chests 48 Chests"
                      width="134px"
                      iconWidth="15px"
                      iconHeight="15px"
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    color="#E0A501"
                    marginBottom="10px"
                    textAlign="center"
                  >
                    Inside the Chest
                  </Typography>
                  <Divider
                    sx={{
                      border: '2px solid #323232'
                    }}
                  />
                  <Box
                    padding="20px 10px 0 10px"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {chestList.map((con, idx) => (
                      <Box
                        key={idx}
                        display="flex"
                        marginBottom="10px"
                        alignItems="center"
                      >
                        <Box
                          component="img"
                          src={cashIcon.path}
                          alt={cashIcon.name}
                          className="hover-scale"
                        />
                        <Typography
                          variant="h4"
                          color="#E0A501"
                          marginLeft="10px"
                        >
                          {con} SMTC
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CustomCard>
              </ColumnBox>
            </ColumnBox>

            <ColumnBox className={classes.rightInnerBox}>
              <LearnCard />
              <EarningHistoryTable />
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>
    </>
  );
};

export default PassivePhase;
