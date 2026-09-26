import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { ChoosePopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
  onHandleLiquidateNext: (e: React.MouseEvent, value: string) => void;
}

const chooseImage = {
  name: 'choose',
  path: '/static/img/main_smart/runner/choose.png',
  desc: 'choose background'
};

const ChoosePopover = (props: ParentProps) => {
  const classes = ChoosePopoverStyle();

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleLiquidateClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={chooseImage.path}
        alt={chooseImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Box className={classes.customTitleGroupStyle}>
          <Typography className={classes.customMainTitleStyle}>
            Do you wish to liquidate the license
          </Typography>
          <Typography className={classes.customMainTitleStyle}>or</Typography>
          <Typography className={classes.customMainTitleStyle}>
            extend the license?
          </Typography>
        </Box>
        <Box className={classes.customButtonStyle}>
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
              onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_start')}
            >
              Liquidate
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
              onHandleClick={(e) => props.onHandleLiquidateNext(e, 'ext_now')}
            >
              Extend
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
              onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_start')}
            >
              Liquidate
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
              onHandleClick={(e) => props.onHandleLiquidateNext(e, 'ext_now')}
            >
              Extend
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default ChoosePopover;
