import Hero from '../../Hero';
import ProfileInfo from './ProfileInfo';
import ProfileInfoDetail from './ProfileInfoDetail';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 60px 30px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // LEFT SIDE OF GRID CUSTOM STYLE
  customLeftSideStyle: {
    paddingRight: '50px',
    '@media (max-width: 960px)': {
      paddingRight: '0px'
    }
  },
  // RIGHT SIDE OF CRID CUSTOM STYLE
  customRightSideStyle: {
    // paddingLeft: '10px',
    '@media (max-width: 960px)': {
      // paddingLight: '0px',
    }
  }
}));

const GeneralDetail = () => {
  const classes = useStyles();
  let userAccount = window.location.pathname.split('/')[5];
  let userLadderLevel = window.location.pathname.split('/')[6];

  return (
    <>
      <Helmet>
        <title>Wealth | Team - General</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* LEFT SIDE BAR */}
          <Grid item xs={12} md={3} className={classes.customLeftSideStyle}>
            <ProfileInfo userAccount={userAccount} userLadderLevel={userLadderLevel} />
          </Grid>

          {/* RIGHT SIDE BAR */}
          <Grid item md={9} xs={12} className={classes.customRightSideStyle}>
            <ProfileInfoDetail userAccount={userAccount} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GeneralDetail;
