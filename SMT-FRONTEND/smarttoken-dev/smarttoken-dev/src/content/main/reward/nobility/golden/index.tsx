import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { Container, Grid, Box, Typography, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import CustomButton from 'src/components/Button';
import Hero from '../../Hero';
import NobleBar from './Noble';
import FarmerBar from './Farmer';
import EarningHistoryTable from './EarningHistoryTable';
import LearnCard from './Learn';
import MultiTabButton from 'src/components/MultiTab';
import TreePhaseCard from './TreePhase';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { GoldenTreeStyle } from 'src/models/main/reward/CustomStyle';

const tooltipContent = [
  'For Smart Army who achieves one of the nobility titles from Folks - King',
  'For Smart Army who farms equal or more than 100 SMT in his/her farming amount',
]

const StaticHeader = {
  "For Noble Leaders": <NobleBar />,
  "For Farmers": <FarmerBar />
};


const GoldenPhase = () => {

  const theme: Theme = useTheme();
  const classes = GoldenTreeStyle(theme);

  const [tabValue, tabSetState] = useState<string>('For Noble Leaders');
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
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              aria-label="vehicles"
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Golden Tree Phases Rewards
            </Typography>
          </Grid>

          <Hidden mdUp>
            <Box className={classes.mobileBscScanButton}>
              <CustomButton
                width="113px"
                height="18px"
                background="#E0A501"
                color="#212121"
                borderRadius="15px"
                fontSize="9px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Box>
          </Hidden>

          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="20px"
          >
            <RowBox className={classes.bscButtonBox}>
              <MultiTabButton
                titles='For Noble Leaders, For Farmers'
                currentValue={tabValue}
                onHandleClick={handleClickTab}
                tooltipContent={tooltipContent}
              />
            </RowBox>
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
          </Grid>

          <RowBox className={classes.outBoxStyle}>
            <ColumnBox className={classes.leftInnerBox}>
              {StaticHeader[tabValue]}
              <Hidden mdDown>
                <EarningHistoryTable />
              </Hidden>
            </ColumnBox>

            <ColumnBox className={classes.rightInnerBox}>
              <LearnCard />
              <TreePhaseCard />
              <Hidden mdUp>
                <EarningHistoryTable />
              </Hidden>
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>
    </>
  );
};

export default GoldenPhase;
