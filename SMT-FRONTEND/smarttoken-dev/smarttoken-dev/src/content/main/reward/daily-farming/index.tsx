import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { Container, Grid, Box, Typography, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Hero from '../Hero';
import ColumBox from 'src/components/Box/ColumnBox';
import CustomButton from 'src/components/Button';
import MultiTabButton from 'src/components/MultiTab';
import FixedBar from './FixedBar';
import LPBar from './LPBar';
import SellBar from './SellBar';
import EarningHistoryTable from './EarningHistoryTable';
import { DailiyStyles } from 'src/models/main/reward/CustomStyle';
// import MobileEarningHistoryTable from './MobileEarningHistoryTable';

const adImages = [
  {
    name: 'sideImage0',
    path: '/static/img/main_reward/dailyFarming/sideImage0.png',
    desc: 'sideImage0'
  },
  {
    name: 'sideImage1',
    path: '/static/img/main_reward/dailyFarming/sideImage1.png',
    desc: 'sideImage1'
  }
];

const tooltipContent = [
  'Reward at fixed amount depending on your farmed SMT amount. Distributed daily until the supply runs out.',
  'Rewards that is distributed on Pancakeswap pool. You can enjoy the rewards by unlocking your LP Token.',
  'Every sell transaction happens in Pancakeswap will have 20% of fee distributed to farmers depending on user’s sell tax portion'
];

const StaticHeader = {
  '0.1% Fixed Rewards': <FixedBar />,
  '0.17% LP Rewards': <LPBar />,
  'Sell Tax Distribution': <SellBar />
};


const DailyFarming = () => {
  const theme: Theme = useTheme();
  const classes = DailiyStyles(theme);

  const [tabValue, tabSetState] = useState<string>('0.1% Fixed Rewards');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

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
          sx={{
            position: 'relative'
          }}
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards"
            >
              <ArrowBackIcon className={classes.headerIconStyle} />
            </IconButton>
            <Typography variant="h3" className={classes.headerTypoStyle}>
              Daily Farming Rewards
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.mutiTabGridCustomStyle}>
            <Box className={classes.mutiTabBoxCustomStyle}>
              <MultiTabButton
                titles="0.1% Fixed Rewards, 0.17% LP Rewards, Sell Tax Distribution"
                currentValue={tabValue}
                tooltipContent={tooltipContent}
                onHandleClick={handleClickTab}
              />
            </Box>
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
              <Box
                sx={{
                  position: 'absolute',
                  right: '0',
                  top: '0'
                }}
              >
                <CustomButton
                  width="96px"
                  height="16px"
                  background="#E0A501"
                  color="#212121"
                  borderRadius="20px"
                  fontSize="7px"
                  fontWeight="600"
                >
                  Check on bscscan
                </CustomButton>
              </Box>
            </Hidden>
          </Grid>

          <Grid item xs={12} md={9}>
            <ColumBox>
              {StaticHeader[tabValue]}
              <Box className={classes.tableCustomStyle}>
                <EarningHistoryTable />
              </Box>
            </ColumBox>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box className={classes.customRightSideOutBoxStyle}>
              <Box className={classes.customRightSideInnerBoxStyle}>
                <Box
                  component="img"
                  src={adImages[0].path}
                  alt={adImages[0].name}
                  width="100%"
                  height="100%"
                  className="hover-scale"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '15px'
                  }}
                >
                  <Typography variant="h3" color="#EDEDED">
                    New to
                  </Typography>
                  <Typography variant="h3" component="span" color="#E0A501">
                    Farming Rewards
                  </Typography>
                  <Typography variant="h3" component="span" color="#EDEDED">
                    ?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '198px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <CustomButton
                    background="linear-gradient(180deg, #212121 0%, #000000 100%)"
                    color="#E8B500"
                    width="160px"
                    height="30px"
                    borderRadius="50px"
                    fontSize="14px"
                    fontWeight="600"
                  >
                    Learn more
                  </CustomButton>
                </Box>
              </Box>

              <Box className={classes.customRightSideInnerBoxStyle}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '50px'
                  }}
                >
                  <Typography variant="h3" color="#EDEDED">
                    Learn about the benefit of
                  </Typography>
                  <Typography variant="h3" color="#E0A501">
                    Farming
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={adImages[1].path}
                  alt={adImages[1].name}
                  width="100%"
                  height="100%"
                  className="hover-scale"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DailyFarming;
