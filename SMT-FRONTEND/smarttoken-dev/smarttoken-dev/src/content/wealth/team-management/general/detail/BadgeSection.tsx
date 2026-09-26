import CustomCard from '../../../../../components/Card';
import { Typography, Box, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM BOX STYLE
  customBoxStyle: {
    width: '100%',
    height: '130px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  // CUSTOM INNER BOX STYLE
  customInnerBoxStyle: {
    width: '60%',
    '@media (max-width: 968px)': {
      width: '100%',
      padding: '0 10px'
    }
  },

  // CUSTOM BADGE HEIGHT
  customBadgeStyle: {
    height: '40px',
    '@media (max-width: 968px)': {
      height: '36px'
    }
  },
  // PRINCE BADGE HEIGHT
  princeBadgeStyle: {
    height: '55px',
    '@media (max-width: 968px)': {
      height: '49px'
    }
  }
}));

const profileMark = {
  name: 'profileMark',
  avatar: '/static/img/sidebar/profileMark.svg',
  desc: 'profileMarkImage'
};

const BadgeSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.customBoxStyle}>
      <Hidden mdDown>
        <CustomCard width={'35%'} height={'100%'}>
          <Box padding={'20px 25px'}>
            <Typography
              component="div"
              height={'16px'}
              lineHeight={'100%'}
              color={'#EDEDED'}
              fontSize={'18px'}
              textAlign={'center'}
            >
              Current Nobility Title
            </Typography>
            <Box
              height={'55px'}
              marginTop={'15px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-around'}
            >
              <Box
                sx={{
                  width: '57px',
                  height: '55px'
                }}
                component="img"
                src={profileMark.avatar}
                alt={profileMark.name}
              />
              <Typography
                variant="h3"
                component="div"
                color={'#E0A501'}
                fontSize={'36px'}
                fontWeight={'700'}
                sx={{
                  letterSpacing: '1px'
                }}
              >
                Prince
              </Typography>
            </Box>
          </Box>
        </CustomCard>
      </Hidden>

      <Box className={classes.customInnerBoxStyle}>
        <CustomCard width={'100%'} height={'100%'}>
          <Box
            padding={'20px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Typography
              variant="h3"
              component="div"
              fontSize={'18px'}
              color={'#EDEDED'}
              textAlign={'center'}
            >
              Badge Collected
            </Typography>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              height={'55px'}
              marginTop={'10px'}
            >
              <Box
                component="img"
                src="/static/img/wealth_team/general/prince.svg"
                alt="prince"
                className={classes.princeBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/duke.svg"
                alt="duke"
                className={classes.customBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/earl.svg"
                alt="earl"
                className={classes.customBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/viscount.svg"
                alt="viscount"
                className={classes.customBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/count.svg"
                alt="count"
                className={classes.customBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/baron.svg"
                alt="baron"
                className={classes.customBadgeStyle}
              />
              <Box
                component="img"
                src="/static/img/wealth_team/general/folks.svg"
                alt="folks"
                className={classes.customBadgeStyle}
              />
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default BadgeSection;
