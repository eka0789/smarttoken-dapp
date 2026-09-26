import { Box, Hidden, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const heroPath = {
  name: 'hero',
  path: '/static/img/main_reward/hero.png',
  desc: 'heroImage'
};
const heroMobilePath = {
  name: 'heroMobile',
  path: '/static/img/main_reward/mobileHero.png',
  desc: 'heroMobileImage'
};

const useStyles = makeStyles((theme) => ({
  heroCustomStyle: {
    height: '300px',
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
    top: '131px',
    left: '70px',
    width: '446px'
  },
  heroMobileTitle: {
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
    <Box
      sx={{
        flexGrow: 1,
        position: 'relative',
        background: 'rgba(0, 0, 0, .4)'
      }}
    >
      <Hidden lgDown>
        <Box
          component="img"
          src={heroPath.path}
          alt={heroPath.name}
          className={`${classes.heroCustomStyle} animate-fade-in`}
        />
        <Box className={`${classes.heroTitle} animate-fade-left`}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
              color: '#E0A501',
              lineHeight: '100%',
              fontSize: '48px',
              fontWeight: '700'
            }}
          >
            Million of rewards
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
              color: '#EDEDED',
              fontSize: '40px',
              fontWeight: '600',
              lineHeight: '36px'
            }}
          >
            are awaiting for you to get everyday!
          </Typography>
        </Box>
      </Hidden>
      <Hidden lgUp>
        <Box
          component="img"
          src={heroMobilePath.path}
          alt={heroMobilePath.name}
          className={`${classes.heroMobileCustomStyle} animate-fade-in`}
        />
      </Hidden>
    </Box>
  );
}

export default Hero;
