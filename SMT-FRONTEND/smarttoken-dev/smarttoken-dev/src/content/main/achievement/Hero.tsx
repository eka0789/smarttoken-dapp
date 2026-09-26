import { Box, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';

const heroPath = [
  {
    name: 'crowd',
    path: '/static/img/main_achievement/hero/crowd.png',
    desc: 'crowd'
  },
  {
    name: 'king',
    path: '/static/img/main_achievement/hero/king.png',
    desc: 'king'
  }
];
const heroMobilePath = {
  name: 'mobileHero',
  path: '/static/img/main_achievement/hero/mobileHero.png',
  desc: 'mobileHero'
};

const useStyles = makeStyles((theme) => ({
  heroOutBoxCustomStyle: {
    flexGrow: 1,
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.25)',
    height: '289px',
    '@media (max-width: 1024px)': {
      marginTop: '100px'
    }
  },
  heroCustomStyle: {
    position: 'absolute',
    top: '93px',
    left: '0',
    width: '100%',
    display: 'block',
    overflow: 'hidden',
    height: '196px',
  },
  heroMobileCustomStyle: {
    height: '200px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    '@media (max-width: 968px)': {
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
    <>
      <Hidden mdDown>
        <Box className={classes.heroOutBoxCustomStyle}>
          <Box
            component="img"
            src={heroPath[0].path}
            alt={heroPath[0].name}
            className={classes.heroCustomStyle}
          />
          <Box
            component="img"
            src={heroPath[1].path}
            alt={heroPath[1].name}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
          />
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box
          sx={{
            flexGrow: 1,
            position: 'relative',
            background: 'rgba(0, 0, 0, 0.25)'
          }}
        >
          <Box
            component="img"
            src={heroMobilePath.path}
            alt={heroMobilePath.name}
            className={classes.heroMobileCustomStyle}
          />
        </Box>
      </Hidden>
    </>
  );
}

export default Hero;
