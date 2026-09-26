import { Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from 'src/components/Button';

const useStyles = makeStyles({
  imgStyle: {
    width: '100%',
    minWidth: '233px',
    minHeight: '357px'
  },
  titleOutBoxStyle: {
    position: 'absolute',
    top: '20px',
    left: '20px'
  },
  titleInnerBoxStyle: {
    marginBottom: '20px',
    width: '230px',
    '@media (max-width: 968px)': {
      width: '128px'
    }
  },
  titleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '20px !important'
    }
  }
});

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/surpriseReward/welcome.png',
  desc: 'welcomeImage'
};

const BuyCard = () => {
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <Box
          component="img"
          src={welcomeImage.path}
          alt={welcomeImage.name}
          className={`${classes.imgStyle} animate-float-slow`}
        />
        <Box className={classes.titleOutBoxStyle}>
          <Box className={classes.titleInnerBoxStyle}>
            <Typography
              component="span"
              variant="h1"
              color="#EDEDED"
              className={classes.titleStyle}
            >
              Buy
            </Typography>
            <Typography
              variant="h1"
              component="span"
              color="#E0A501"
              marginLeft="5px"
              className={classes.titleStyle}
            >
              SMT
            </Typography>
            <Typography
              variant="h1"
              color="#EDEDED"
              className={classes.titleStyle}
            >
              as many
            </Typography>
            <Typography
              variant="h1"
              color="#EDEDED"
              className={classes.titleStyle}
            >
              as possible, win the
            </Typography>
            <Typography
              variant="h1"
              color="#E0A501"
              className={classes.titleStyle}
            >
              big rewards!
            </Typography>
          </Box>
          <Hidden mdDown>
            <CustomButton
              width="130px"
              height="26px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              borderRadius="20px"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
            >
              Learn more
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <CustomButton
              width="72px"
              height="14px"
              background="#E0A501"
              color="#212121"
              fontSize="7px"
              fontWeight="600"
              borderRadius="11px"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
            >
              Learn more
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default BuyCard;
