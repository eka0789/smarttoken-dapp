import React, { useEffect, useState } from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import { IntroducePopoverStyle } from 'src/models/main/smart-army/CustomStyle';
import { getContract } from 'src/utils';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import { useWeb3React } from '@web3-react/core';
import { licenseDetail } from 'src/models/main/smart-army/SampleData';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
  onHandleTrialNext: (value: string) => void;
  licenseName: string;
}

const introduceImage = {
  name: 'introduce',
  path: '/static/img/main_smart/trial/introduce.png',
  desc: 'introduce background'
};

const IntroducePopover = (props: ParentProps) => {
  const classes = IntroducePopoverStyle();
  const { account, chainId } = useWeb3React();

  const nextTrial = () => {
    props.onHandleTrialNext('trial_confirm');
  };

  const [userBalance, setUserBalance] = useState<string>('0');

  useEffect(() => {
    async function init() {
      const smartTokenContract = await getContract('SmartToken', chainId);
      let balance = await smartTokenContract.balanceOf(account);
      setUserBalance(formatDecimalNumber(balance, 18));
    }
    init();
  }, []);

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleTrialClose}
        className={classes.closeIconStyle}
      />
      <Box
        component="img"
        src={introduceImage.path}
        alt={introduceImage.name}
        className={classes.customImageStyle}
      />
      <Box className={classes.customInnerBoxStyle}>
        <Typography className={classes.customHeadingStyle}>
          We're ready to introduce you to Smart Army family!
        </Typography>
        <Typography className={classes.customMainTitleStyle}>
          Let's re-confirm your license activation, make sure you have chosen
          the right one for you, buddy
        </Typography>
        <Box
          marginTop="30px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex">
            <Typography className={classes.customLeftTitleStyle}>
              Your current wallet balance:{' '}
            </Typography>
            <Typography className={classes.customRightTitleStyle}>
              {userBalance} SMT
            </Typography>
          </Box>
          <Box display="flex">
            <Typography className={classes.customLeftTitleStyle}>
              SMT required to exchange:{' '}
            </Typography>
            <Typography className={classes.customRightTitleStyle}>
              {licenseDetail[props.licenseName].require} SMT
            </Typography>
          </Box>
          <Box display="flex">
            <Typography className={classes.customLeftTitleStyle}>
              License to activate:{' '}
            </Typography>
            <Typography className={classes.customRightTitleStyle}>
              {props.licenseName}
            </Typography>
          </Box>
        </Box>
        <RowBox marginTop="30px">
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
              onHandleClick={nextTrial}
            >
              Yes, take me there
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
              onHandleClick={props.onHandleTrialClose}
            >
              No, bring me back
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
              onHandleClick={nextTrial}
            >
              Yes, take me there
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
              onHandleClick={props.onHandleTrialClose}
            >
              No, bring me back
            </CustomButton>
          </Hidden>
        </RowBox>
      </Box>
    </Box>
  );
};

export default React.memo(IntroducePopover);
