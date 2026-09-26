import { Typography, Box, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import { toast } from 'react-hot-toast';

const useStyle = makeStyles({
  outBoxStyle: {
    height: '132px',
    '@media (max-width: 968px)': {
      height: '98px'
    }
  },
  outCardBoxStyle: {
    padding: '15px 56px 34px 20px',
    height: '100%',
    position: 'relative',
    zIndex: '1'
  },
  buttonBoxStyle: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    zIndex: '2',
    '@media (max-width: 968px)': {
      bottom: '15px',
      right: '15px'
    }
  },
  cardHeadingStyle: {
    color: '#E0A501',
    '@media (max-width: 968px)': {
      fontSize: '26px !important'
    }
  },
  cardContentTitle: {
    textAlign: 'left',
    color: '#EDEDED',
    zIndex: '3',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  }
});

const learnMore = () => {
  toast.info('Documentation is coming soon');
};

const learnImage = {
  name: 'learn',
  path: '/static/img/main_reward/questReward/learn.png',
  desc: 'learnImage'
};

const Learn = () => {
  const classes = useStyle();

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CustomCard height="100%" width="100%">
          <Box className={classes.outCardBoxStyle}>
            <Typography variant="h1" className={classes.cardHeadingStyle}>
              Journey to the moon!
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitle}>
              Learn how to get thousands of SMT Cash on Quest Rewards!
            </Typography>
            <Box className={classes.buttonBoxStyle}>
              <Hidden mdDown>
                <CustomButton
                  background="#E0A501"
                  borderRadius="20px"
                  width="130px"
                  height="26px"
                  fontSize="14px"
                  fontWeight="600"
                  color="#212121"
                  onHandleClick={learnMore}
                >
                  Learn more
                </CustomButton>
              </Hidden>
              <Hidden mdUp>
                <CustomButton
                  background="#E0A501"
                  borderRadius="20px"
                  width="96px"
                  height="20px"
                  fontSize="10px"
                  fontWeight="600"
                  color="#212121"
                  onHandleClick={learnMore}
                >
                  Learn more
                </CustomButton>
              </Hidden>
            </Box>
            <Box
              component="img"
              src={learnImage.path}
              alt={learnImage.name}
              sx={{
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                zIndex: '-1'
              }}
            />
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default Learn;
