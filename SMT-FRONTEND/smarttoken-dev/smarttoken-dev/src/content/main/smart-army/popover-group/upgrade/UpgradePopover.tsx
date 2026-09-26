import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import { UpgradePopoverStyle } from 'src/models/main/smart-army/CustomStyle';
import useSmartArmy from 'src/hooks/useSmartArmy';

interface ParentProps {
  onHandleVisionaryClose: (e: React.MouseEvent) => void;
  onHandleVisionaryNext: (e: React.MouseEvent, value: string) => void;
  desireLicense: string;
  curLicense: string;
}

const upgradeImage = {
  name: 'upgrade',
  path: '/static/img/main_smart/visionary/upgrade.png',
  desc: 'upgrade background'
};
const changeImage = {
  name: 'change',
  path: '/static/img/main_smart/visionary/change.png',
  desc: 'change background'
};

const UpgradePopover = (props: ParentProps) => {
  const classes = UpgradePopoverStyle();
  const { upgradeLicense, isLoading, setIsLoading } = useSmartArmy();

  const onHandleUpgrade = async (e) => {
    let licenseName = props.desireLicense;

    try {
      await upgradeLicense(licenseName);
      props.onHandleVisionaryNext(e, 'visionary_got');
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleVisionaryClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={upgradeImage.path}
        alt={upgradeImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Hidden mdDown>
          <Typography variant="h2" color="#E0A501" fontWeight="700">
            It’s nice to see you upgrading your license!
          </Typography>
          <Typography
            variant="h3"
            color="#EDEDED"
            marginTop="30px"
            padding="0 56px"
          >
            Let’s reconfirm your license upgrade Make sure you have made the
            right decision for upgrading your current license
          </Typography>
          <Box
            component="img"
            src={changeImage.path}
            alt={changeImage.name}
            marginTop="37px"
          />
        </Hidden>
        <ColumnBox className={classes.mobileInnerBox} justifyContent="center">
          <Box display="flex">
            <Typography className={classes.customLeftTitleStyle}>
              Your current license:
            </Typography>
            <Typography className={classes.customRightTitleStyle}>
              {props.curLicense}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography className={classes.customLeftTitleStyle}>
              Your target license:
            </Typography>
            <Typography className={classes.customRightTitleStyle}>
              {props.desireLicense}
            </Typography>
          </Box>
          <Hidden mdDown>
            <Box display="flex">
              <Typography variant="h3" color="#EDEDED">
                Upgrade fee:
              </Typography>
              <Typography variant="h3" color="#E0A501" marginLeft="5px">
                1 SMT
              </Typography>
            </Box>
          </Hidden>
        </ColumnBox>
        <Box className={classes.customButtonBoxStyle}>
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
              onHandleClick={(e) => onHandleUpgrade(e)}
            >
              Upgrade now{' '}
              {isLoading && (
                <Box component="img" src="/static/img/loading.gif" />
              )}
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
              onHandleClick={props.onHandleVisionaryClose}
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
              fontSize="18px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={(e) => onHandleUpgrade(e)}
            >
              Yes{' '}
              {isLoading && (
                <Box component="img" src="/static/img/loading.gif" />
              )}
            </CustomButton>
            <CustomButton
              width="120px"
              height="25px"
              background="#936900"
              color="#FFFFFF"
              fontSize="18px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={props.onHandleVisionaryClose}
            >
              No
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(UpgradePopover);
