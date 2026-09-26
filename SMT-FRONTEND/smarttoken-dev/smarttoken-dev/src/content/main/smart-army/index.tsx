import { Helmet } from 'react-helmet-async';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Hero from './Hero';
import LicenseMenu from './LicenseMenu';
import History from './History';
import HelpCard from './HelpCard';
import RowBox from 'src/components/Box/RowBox';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '258px 50px 60px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '230px 20px !important'
    }
  },
  licenseTimeStyle: {
    height: '42px',
    width: '370px !important',
    background: '#323232',
    borderRadius: '20px',
    float: 'right',
    padding: '0 20px',
    '@media (max-width: 968px)': {
      float: 'none',
      margin: '0 auto'
    }
  }
}));

const SmartArmy = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Main | Smart Army License</title>
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
          <Grid item xs={12}>
            <RowBox className={classes.licenseTimeStyle}>
              <Typography variant="h4">Current license expires in:</Typography>
              <Typography variant="h4" color="#E0A501">
                364 d : 20 h : 45 s
              </Typography>
            </RowBox>
          </Grid>

          <Grid item xs={12}>
            <LicenseMenu />
          </Grid>

          <Grid item xs={12} md={7}>
            <History />
          </Grid>

          <Grid item xs={12} md={5}>
            <HelpCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SmartArmy;
