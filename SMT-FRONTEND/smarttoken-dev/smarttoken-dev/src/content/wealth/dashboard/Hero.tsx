import { Box, Hidden, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const heroPath = {
  name: 'hero',
  path: '/static/img/wealth_dashboard/hero.png',
  desc: 'heroImage'
};
const heroMobilePath = {
  name: 'heroMobile',
  path: '/static/img/wealth_dashboard/mobileHero.png',
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
        background: 'rgba(0, 0, 0, 0.3)'
      }}
    >
      <Hidden lgDown>
        <Box
          component="img"
          src={heroPath.path}
          alt={heroPath.name}
          className={classes.heroCustomStyle}
        />
        <Box position="absolute" bottom="78px" left="70px">
          <Typography
            variant="h3"
            component="div"
            fontSize="40px"
            lineHeight="100%"
            color="#EDEDED"
            sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)' }}
          >
            It’s time to
          </Typography>
          <Typography
            variant="h3"
            component="div"
            fontSize="40px"
            lineHeight="100%"
            color="#E0A501"
            sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)' }}
          >
            Retire Young,
          </Typography>
          <Typography
            variant="h3"
            component="div"
            fontSize="40px"
            lineHeight="100%"
            color="#EDEDED"
            sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)' }}
          >
            be smart & wealthy!
          </Typography>
        </Box>
      </Hidden>
      <Hidden lgUp>
        <Box
          component="img"
          src={heroMobilePath.path}
          alt={heroMobilePath.name}
          className={classes.heroMobileCustomStyle}
        />
        <Box position="absolute" bottom="69px" left="30px">
          <Typography
            variant="h3"
            component="div"
            fontSize="20px"
            lineHeight="100%"
            color="#EDEDED"
            sx={{ textShadow: '2.66667px 2.66667px 4px rgba(0, 0, 0, 0.5)' }}
          >
            It’s time to
          </Typography>
          <Typography
            variant="h3"
            component="div"
            fontSize="20px"
            lineHeight="100%"
            color="#E0A501"
            sx={{ textShadow: '2.66667px 2.66667px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Retire Young,
          </Typography>
          <Typography
            variant="h3"
            component="div"
            fontSize="20px"
            lineHeight="100%"
            color="#EDEDED"
            sx={{ textShadow: '2.66667px 2.66667px 4px rgba(0, 0, 0, 0.5)' }}
          >
            be smart & wealthy!
          </Typography>
        </Box>
      </Hidden>
    </Box>
  );
}

export default Hero;
