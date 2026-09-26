import { Helmet } from 'react-helmet-async';
import {
  Hidden,
  Container,
  Grid,
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import PageHeader from './PageHeader';
import ImageSlider from './ImageSlilder';
import Chart from './Chart';
import Achievement from './Achievement';
import SmtCashMonitor from './SmtCashMonitor';
import Learn from './Learn';
import CurrentTax from './CurrentTax';
import GrowTree from './GrowTree';
import Notification from './Notification';
import CopyLinkBar from './CopyLinkBar';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';


const MainDashboard = () => {

  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <>
      <Helmet>
        <title>Main | Dashboard</title>
      </Helmet>
      <ImageSlider />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          <Grid item lg={7} md={12} xs={12}>
            {/* Notification of main dashboard */}
            <Notification />
          </Grid>

          {/* Left side of dashboard */}
          <Grid item xs={12} sm={12} md={6} lg={7} className={classes.customSpacing}>
            {/* Welcome Title */}
            <PageHeader />
            {/* Copy link bar*/}
            <Hidden mdUp>
              <Grid item xs={10} margin="0 auto">
                <CopyLinkBar />
              </Grid>
            </Hidden>
            {/* Chart */}
            <Grid item xs={12}>
              <Chart />
            </Grid>
            <Hidden mdDown>
              {/* Your Achievemnet */}
              <Grid item xs={12}>
                <Achievement />
              </Grid>
              {/* SMT & SMT Cash monitor */}
              <Grid item xs={12}>
                <SmtCashMonitor />
              </Grid>
            </Hidden>
          </Grid>

          {/* Right side of dashboard */}
          <Grid item xs={12} sm={12} md={6} lg={5} className={classes.customSpacing}>
            <Hidden mdDown>
              {/* Copy link bar*/}
              <CopyLinkBar />
              {/* Learn more card */}
              <Grid item xs={12}>
                <Learn />
              </Grid>
            </Hidden>
            {/* Currrent tax card */}
            <Grid item xs={10} md={12} margin="0 auto">
              <CurrentTax />
            </Grid>
            {/* Grow tree card */}
            <Grid item xs={12} sx={{ position: 'relative' }}>
              <GrowTree />
            </Grid>
            <Hidden mdUp>
              {/* Your Achievemnet */}
              <Grid item xs={12} display="flex" justifyContent="center">
                <Achievement />
              </Grid>
              {/* SMT & SMT cash monitor */}
              <Grid item xs={12}>
                <SmtCashMonitor />
              </Grid>
              {/* Learn more card */}
              <Grid item xs={10} margin='0 auto'>
                <Learn />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MainDashboard;