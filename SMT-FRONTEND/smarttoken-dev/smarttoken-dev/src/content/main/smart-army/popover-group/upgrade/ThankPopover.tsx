import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { ThankPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleVisionaryClose: (e: React.MouseEvent) => void;
}

const gotImage = {
  name: 'got',
  path: '/static/img/main_smart/visionary/got.png',
  desc: 'got background'
};
const changeImage = {
  name: 'change',
  path: '/static/img/main_smart/visionary/change.png',
  desc: 'change background'
};

const UpgradePopover = (props: ParentProps) => {
  const classes = ThankPopoverStyle();

  const onHandleClose = () => {
    // props.onHandleVisionaryClose();
    window.location.reload();
  };

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleVisionaryClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={gotImage.path}
        alt={gotImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Hidden mdDown>
          <Typography variant="h2" color="#E0A501">
            Good news!
          </Typography>
          <Typography variant="h2" color="#E0A501">
            Your upgrade has been processed successfully!
          </Typography>
          <Box
            component="img"
            src={changeImage.path}
            alt={changeImage.name}
            marginTop="30px"
          />
          <Typography
            variant="h2"
            color="#EDEDED"
            padding="0 7px"
            marginTop="50px"
          >
            Let's re-confirm your license activation, make sure you have chosen
            the right one for you, buddy
          </Typography>
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="88px"
            onHandleClick={onHandleClose}
          >
            Thanks!
          </CustomButton>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h3" color="#E0A501">
            CONGRATULATION!
          </Typography>
          <Typography variant="h5" color="#EDEDED" marginTop="20px">
            Your license is now upgraded to
          </Typography>
          <Typography
            variant="h5"
            color="#E0A501"
            fontWeight="700"
            marginTop="5px"
          >
            VISIONARY
          </Typography>
          <CustomButton
            width="120px"
            height="25px"
            background="#E0A501"
            color="#212121"
            fontSize="14px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="17px"
            marginTop="31px"
            onHandleClick={onHandleClose}
          >
            Got it
          </CustomButton>
        </Hidden>
      </Box>
    </Box>
  );
};

export default UpgradePopover;
