import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { LiqStartPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
  onHandleLiquidateNext: (e: React.MouseEvent, value: string) => void;
}

const startImage = {
  name: 'start',
  path: '/static/img/main_smart/runner/liqStart.png',
  desc: 'start background'
};

const LiqStartPopover = (props: ParentProps) => {
  const classes = LiqStartPopoverStyle();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleLiquidateClose}
          className={classes.closeIconStyle}
        />
        <Box
          component="img"
          src={startImage.path}
          alt={startImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#F84343" fontWeight="600">
              Oh no, do you know what you’re doing?
            </Typography>
          </Hidden>
          <Typography className={classes.customHeadingStyle}>
            Do you really want to leave us? Liquidating the license will leave
            you nothing including our family bond :(
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            *liquidating the license will destroy all license’s records. You
            will be charged by liquidation rate fee to unlock your locked LP
            token
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            marginTop="34px"
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_now')}
              >
                yes, start liquidating
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
                onHandleClick={props.onHandleLiquidateClose}
              >
                maybe later
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_now')}
              >
                Yes
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
                onHandleClick={props.onHandleLiquidateClose}
              >
                No
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LiqStartPopover;
