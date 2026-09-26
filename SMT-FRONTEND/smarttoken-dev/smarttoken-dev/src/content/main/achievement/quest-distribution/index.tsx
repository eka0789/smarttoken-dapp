import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Hero from '../Hero';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import StatisticHeader from './StatisticHeader';
import ControllBar from './ControllBar';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 110px 10px 100px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },

  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    color: '#E0A501 !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important',
    }
  }
}));


const QuestDistribution = () => {

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Main | Achievement</title>
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
              to="/main/achievement"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h1"
              component="span"
              marginLeft='26px'
              className={classes.headerTypoStyle}
            >
              Rewards Distribution
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <StatisticHeader />
          </Grid>

          <Grid item xs={12}>
            <ControllBar />
          </Grid>

          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default QuestDistribution;
