import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Hero from '../Hero';
import { Container, Grid, Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import EarningHistoryTable from '../nobility/passive/EarningHistoryTable';
import DoubleClaimBar from '../double-claim-bar';
import StatisticHeader from './StatisticHeader';
import BuyCard from './BuyCard';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '40px 42px 200px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '25px 20px !important'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important',
    '@media (max-width: 1280px)': {
      fontSize: '22px !important'
    }
  },
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outBoxStyle: {
    marginTop: '30px',
    alignItems: 'flex-start !important',
    '@media (max-width: 968px)': {
      marginTop: '20px',
      flexDirection: 'column !important'
    }
  },
  rightInnerBoxStyle: {
    width: '55% !important',
    '@media (max-width: 968px)': {
      width: '100% !important'
    }
  }
}));

const SurprisePhase = () => {
  const classes = useStyles();

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
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              sx={{ marginLeft: '26px' }}
              className={classes.headerTypoStyle}
            >
              Surprise Rewards
            </Typography>
          </Grid>

          <RowBox className={classes.outBoxStyle}>
            <Hidden mdDown>
              <Box
                width="45%"
                paddingRight="20px"
                display="flex"
                position="relative"
              >
                <BuyCard />
              </Box>
            </Hidden>

            <ColumnBox className={classes.rightInnerBoxStyle}>
              <StatisticHeader />
              <DoubleClaimBar rewardsTitle="surprise" />
              <EarningHistoryTable />
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>
    </>
  );
};

export default SurprisePhase;
