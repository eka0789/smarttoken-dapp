import { Box, Hidden, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const heroPath = {
  name: 'hero',
  path: '/static/img/main_golden/hero.svg',
  desc: 'heroImage'
};
const heroMobilePath = {
  name: 'heroMobile',
  path: '/static/img/main_golden/mobileHero.svg',
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
    position: 'relative',
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
        background: 'rgba(0, 0, 0, .25)'
      }}
    >
      <Hidden mdDown>
        <Box className={classes.heroCustomStyle}>
          <Box
            component="img"
            src={heroPath.path}
            alt={heroPath.name}
            sx={{
              position: 'absolute',
              top: '21px',
              right: '246px'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '70px',
              left: '90px'
            }}
          >
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#EDEDED',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              Contribute on growing
            </Typography>
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#E0A501',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              the Golden Tree,
            </Typography>
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#E0A501',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              grab your future!
            </Typography>
          </Box>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.heroMobileCustomStyle}>
          <Box
            component="img"
            src={heroMobilePath.path}
            alt={heroMobilePath.name}
            position="absolute"
            bottom="0"
            right="20px"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '82px',
              left: '20px'
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#EDEDED',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              Contribute on growing
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#E0A501',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              the Golden Tree,
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#E0A501',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
                lineHeight: '100%'
              }}
            >
              grab your future!
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
}

export default Hero;
