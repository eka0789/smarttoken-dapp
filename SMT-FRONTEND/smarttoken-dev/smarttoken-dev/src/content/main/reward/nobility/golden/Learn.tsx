import { Typography, Box } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import { LearnStyle } from 'src/models/main/reward/CustomStyle';
import { toast } from 'react-hot-toast';

const learnMore = () => {
  toast.info('Documentation is coming soon');
};

const ecoTreeImage = {
  name: 'ecotree',
  path: '/static/img/main_dashboard/ecotree.svg',
  desc: 'ecoTreeImage'
};

const Learn = () => {

  const classes = LearnStyle();

  return (
    <>
      <CustomCard height="132px" width="100%">
        <Box sx={{ padding: '20px', height: '100%', position: 'relative' }}>
          <Typography
            className={classes.learnTitleStyle}
            variant="h2"
            component="span"
            sx={{
              textAlign: 'left',
              lineHeight: '17px',
              color: '#EDEDED'
            }}
          >
            Learn how
          </Typography>
          <Typography
            className={classes.learnTitleStyle}
            variant="h2"
            component="span"
            sx={{
              lineHeight: '17px',
              color: '#E0A501',
              marginLeft: '5px'
            }}
          >
            Golden Tree
          </Typography>
          <Typography
            className={classes.learnTitleStyle}
            variant="h2"
            component="div"
            sx={{
              textAlign: 'left',
              lineHeight: '17px',
              color: '#EDEDED'
            }}
          >
            could change your life
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
            src={ecoTreeImage.path}
            alt={ecoTreeImage.name}
            sx={{
              position: 'absolute',
              bottom: '0px',
              right: '30px'
            }}
          />
        </Box>
      </CustomCard>
    </>
  );
};

export default Learn;
