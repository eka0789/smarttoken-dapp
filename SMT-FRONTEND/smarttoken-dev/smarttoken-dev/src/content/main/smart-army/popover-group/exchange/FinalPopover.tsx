import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { FinalPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
}

const introduceImage = {
  name: 'introduce',
  path: '/static/img/main_smart/trial/introduce.png',
  desc: 'introduce background'
};

const FinalPopover = (props: ParentProps) => {
  const classes = FinalPopoverStyle();

  const onHandleClose = () => {
    // props.onHandleTrialClose();
    window.location.reload();
  };

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon onClick={onHandleClose} className={classes.closeIconStyle} />
      <Box
        component="img"
        src={introduceImage.path}
        alt={introduceImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Typography className={classes.customHeadingStyle}>
          Hi there, welcome to Smart Army family!
        </Typography>
        <Typography className={classes.customMainTitleStyle}>
          We are waiting for your action contributing to Golden Tree and grow
          together with us!
        </Typography>
        <Typography className={classes.customMainTitleStyle}>
          We advise you to learn from our guide if it's your first time here
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          width="100%"
          marginTop="50px"
        >
          <Hidden mdDown>
            <CustomButton
              width="240px"
              height="50px"
              background="#E0A501"
              color="#212121"
              fontSize="20px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
            >
              Take the tour
            </CustomButton>
            <CustomButton
              width="240px"
              height="50px"
              background="#936900"
              color="#FFFFFF"
              fontSize="20px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={onHandleClose}
            >
              Maybe later
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <CustomButton
              width="120px"
              height="25px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
            >
              Take the tour
            </CustomButton>
            <CustomButton
              width="120px"
              height="25px"
              background="#936900"
              color="#FFFFFF"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={onHandleClose}
            >
              Maybe later
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default FinalPopover;
