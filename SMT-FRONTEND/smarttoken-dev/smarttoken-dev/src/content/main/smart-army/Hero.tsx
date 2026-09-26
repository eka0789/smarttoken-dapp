import { Box, Hidden } from '@mui/material';

const crowdImage = {
  name: 'crowdImage',
  path: '/static/img/main_smart/background.png',
  desc: 'crowdImage'
};
const businessMan = {
  name: 'businessMan',
  path: '/static/img/main_smart/businessman.svg',
  desc: 'businessMan'
};
const mobileHero = {
  name: 'mobileHero',
  path: '/static/img/main_smart/mobileHero.png',
  desc: 'mobileHero'
};

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: 'static'
        }}
      >
        <Hidden mdDown>
          <Box
            component="img"
            src={crowdImage.path}
            alt={crowdImage.name}
            position="absolute"
            top="95px"
            left="0"
            bottom="0"
            width="100%"
          />
          <Box
            component="img"
            src={businessMan.path}
            alt={businessMan.name}
            position="absolute"
            top="0"
            left="0"
            width="632px"
            height="544px"
          />
          <Box
            sx={{
              position: 'absolute',
              background:
                'linear-gradient(180deg, rgba(33, 33, 33, 0.4) 17.92%, #000000 53.26%)',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0'
            }}
          />
        </Hidden>
        <Hidden mdUp>
          <Box
            component="img"
            src={mobileHero.path}
            alt={mobileHero.name}
            position="absolute"
            top="100px"
            left="0"
            bottom="0"
            width="100%"
          />
        </Hidden>
      </Box>
    </>
  );
};

export default Hero;
