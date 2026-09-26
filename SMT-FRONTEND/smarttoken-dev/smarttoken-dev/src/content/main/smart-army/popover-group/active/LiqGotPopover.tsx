import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CustomButton from 'src/components/Button';
import CloseIcon from '@mui/icons-material/Close';
import { LiqGotPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
}

const gotImage = {
  name: 'got',
  path: '/static/img/main_smart/runner/liqNow.png',
  desc: 'got background'
};

const LiqGotPopover = (props: ParentProps) => {
  const classes = LiqGotPopoverStyle();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleLiquidateClose}
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
            <Typography fontSize="36px" color="#E0A501" fontWeight="700">
              Liquidation is successful
            </Typography>
            <Typography
              fontSize="24px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="53px"
            >
              Your LP token has been unlocked and sent back to your personal
              wallet.
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
              marginTop="60px"
              onHandleClick={props.onHandleLiquidateClose}
            >
              Got it
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <Typography fontSize="12px" color="#EDEDED" fontWeight="600">
              Your license has been liquidated, SMT Token has been automatically
              sent to your wallet
            </Typography>
            <CustomButton
              width="120px"
              height="25px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              marginTop="40px"
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

export default LiqGotPopover;
