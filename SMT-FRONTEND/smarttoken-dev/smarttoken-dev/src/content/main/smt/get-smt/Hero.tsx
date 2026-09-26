import { Box, Hidden, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const heroPath = {
  name: 'hero',
  path: '/static/img/main_smt/hero1.png',
  desc: 'heroImage'
};
const heroMobilePath = {
  name: 'heroMobile',
  path: '/static/img/main_smt/mobileHero.png',
  desc: 'heroMobileImage'
};

const useStyles = makeStyles((theme) => ({
  heroCustomStyle: {
    height: '289px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    '@media (max-width: 1280px)': {
      marginTop: '100px'
    }
  },
  heroMobileCustomStyle: {
    height: '200px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    '@media (max-width: 1280px)': {
      marginTop: '100px'
    }
  },

  heroTitle: {
    position: 'absolute',
    top: '121px',
    left: '50px',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
    color: '#EDEDED',
    lineHeight: '29px !important',
    fontSize: '24px !important',
    fontWeight: '700 !important'
  }
}));

function Hero() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <Hidden lgDown>
        <Box
          component="img"
          src={heroPath.path}
          alt={heroPath.name}
          className={classes.heroCustomStyle}
        />
      </Hidden>
      <Hidden lgUp>
        <Box
          component="img"
          src={heroMobilePath.path}
          alt={heroMobilePath.name}
          className={classes.heroMobileCustomStyle}
        />
        <Typography
          variant="h3"
          component="span"
          gutterBottom
          className={classes.heroTitle}
        >
          BUY SMART TOKEN (SMT)
        </Typography>
      </Hidden>
    </Box>
  );
}

export default Hero;
