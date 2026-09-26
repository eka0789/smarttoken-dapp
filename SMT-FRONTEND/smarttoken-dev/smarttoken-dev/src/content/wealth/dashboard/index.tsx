import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import ScatterChartGroup from './ScatterChartGroup';
import StatisticHeader from './StatisticHeader';
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 40px 34px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px 50px 20px !important'
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Wealth | Dashboard</title>
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
          <Grid
            item
            lg={10}
            md={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <StatisticHeader />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <ScatterChartGroup />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
