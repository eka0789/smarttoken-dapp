import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { NoBalanceStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleOppClose: (e: React.MouseEvent) => void;
}

const finalImage = {
  name: 'final',
  path: '/static/img/main_smart/opp/final.png',
  desc: 'final background'
};

const FinalPopover = (props: ParentProps) => {
  const classes = NoBalanceStyle();

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleOppClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={finalImage.path}
        alt={finalImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Typography className={classes.customMainTitleStyle}>
          Sorry, it looks like you have insufficient balance to exchange with
          the license you chose
        </Typography>
        <Typography className={classes.customMainSecondStyle}>
          Please make sure you have enough balance to pay for the license and
          standard BSC fee.
        </Typography>
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
            marginTop="50px"
            onHandleClick={props.onHandleOppClose}
          >
            Got it
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
            marginTop="50px"
            onHandleClick={props.onHandleOppClose}
          >
            Got it
          </CustomButton>
        </Hidden>
      </Box>
    </Box>
  );
};

export default FinalPopover;
