import { Typography, Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import { PassiveStyle } from 'src/models/main/reward/CustomStyle';
import { toast } from 'react-hot-toast';

const learnMore = () => {
  toast.info('Documentation is coming soon');
};

const learnImage = {
  name: 'learn',
  path: '/static/img/main_reward/nobilityReward/passive/learn.png',
  desc: 'learnImage'
};

const Learn = () => {

  const theme: Theme = useTheme();
  const classes = PassiveStyle(theme);

  return (
    <>
      <CustomCard height="132px" width="100%">
        <Box className={classes.learnOutBoxStyle}>
          <Typography
            component="span"
            variant="h2"
            className={classes.learnTitleStyle1}
          >
            Learn how to
          </Typography>
          <Typography
            component="span"
            variant="h2"
            marginLeft='5px'
            className={classes.learnTitleStyle2}
          >
             retire young
          </Typography>
          <Typography
            component="div"
            variant="h2"
            className={classes.learnTitleStyle1}
          >
            from Global Passive Share!
          </Typography>
          <CustomButton
            background="#E0A501"
            borderRadius="20px"
            width="130px"
            height="26px"
            fontSize="14px"
            fontWeight="600"
            color="#212121"
            marginTop="18px"
            onHandleClick={learnMore}
          >
            Learn more
          </CustomButton>
          <Box
            component="img"
            src={learnImage.path}
            alt={learnImage.name}
            sx={{
              position: 'absolute',
              bottom: '0px',
              right: '0px'
            }}
          />
        </Box>
      </CustomCard>
    </>
  );
};

export default Learn;
