import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { ExtThankPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
}

const thankImage = {
  name: 'thankImage',
  path: '/static/img/main_smart/runner/extThank.png',
  desc: 'thank background'
};

const ExtThankPopover = (props: ParentProps) => {
  const classes = ExtThankPopoverStyle();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleLiquidateClose}
          className={classes.closeIconStyle}
        />
        <Box
          component="img"
          src={thankImage.path}
          alt={thankImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Good news!
            </Typography>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Your license has been extended for 1 more year!
            </Typography>
            <Typography variant="h3" color="#EDEDED" marginTop="30px">
              It’s good to be with you again, buddy!
            </Typography>
            <Typography variant="h3" color="#EDEDED" marginTop="30px">
              Let’s grab much more rewards and achievement!
            </Typography>
            <Typography fontWeight="600" color="#EDEDED" marginTop="30px">
              One year in the Smart Army family can give you tons of happiness!
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
              marginTop="37px"
              onHandleClick={props.onHandleLiquidateClose}
            >
              Thanks
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h3" color="#E0A501" fontWeight="700">
              CONGRATULATION!
            </Typography>
            <Typography variant="h5" color="#EDEDED" marginTop="15px">
              Your Smartarmy License is now active! You may now enjoy the
              privilege features!
            </Typography>
            <CustomButton
              width="120px"
              height="20px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              marginTop="41px"
              onHandleClick={props.onHandleLiquidateClose}
            >
              Got it
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default ExtThankPopover;
