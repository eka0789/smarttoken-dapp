import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import { ExtNowPopoverStyle } from 'src/models/main/smart-army/CustomStyle';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
  onHandleLiquidateNext: (e: React.MouseEvent, value: string) => void;
}

const nowImage = {
  name: 'now',
  path: '/static/img/main_smart/runner/extNow.png',
  desc: 'now background'
};

const ExtNowPopover = (props: ParentProps) => {
  const classes = ExtNowPopoverStyle();
  const { extendLicense } = useSmartArmy();

  const onHandleExtend = async (e) => {
    if (await extendLicense()) props.onHandleLiquidateNext(e, 'ext_thank');
    else toast.error('BNB balance is low to extend license');
  };

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleLiquidateClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={nowImage.path}
        alt={nowImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Hidden mdDown>
          <Typography fontSize="24px" color="#E0A501" fontWeight="600">
            It’s nice to have you for another year!
          </Typography>
          <Typography
            fontSize="18px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="20px"
            padding="0 25px"
          >
            It’s been 1 year since we have been working together. We know you
            love Smart Army family
          </Typography>
          <Typography
            fontSize="18px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="20px"
          >
            Can we start extending your Smart Army License now?
          </Typography>
          <Box display="flex" marginTop="20px">
            <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
              Upgrade fee:
            </Typography>
            <Typography
              fontSize="18px"
              color="#E0A501"
              fontWeight="600"
              marginLeft="5px"
            >
              1 SMT
            </Typography>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Typography className={classes.customMainTitleStyle}>
            Are you sure to extend your current license?
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            This will cost you some additional administrative fee.
          </Typography>
        </Hidden>
        <RowBox marginTop="56px">
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
              onHandleClick={(e) => onHandleExtend(e)}
            >
              Yes, right now
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
              Not now
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <CustomButton
              width="150px"
              height="25px"
              background="#E0A501"
              color="#212121"
              fontSize="12px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={(e) => onHandleExtend(e)}
            >
              Yes, please proceed
            </CustomButton>
            <CustomButton
              width="150px"
              height="25px"
              background="#936900"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={props.onHandleLiquidateClose}
            >
              No, take me back
            </CustomButton>
          </Hidden>
        </RowBox>
      </Box>
    </Box>
  );
};

export default ExtNowPopover;
