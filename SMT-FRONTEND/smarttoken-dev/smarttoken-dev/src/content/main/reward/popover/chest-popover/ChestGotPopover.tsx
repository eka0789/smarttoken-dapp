import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleChestClose: (e: React.MouseEvent) => void;
  rewardsTitle: string;
}

const useStyle = makeStyles({
  outBoxStyle: {
    padding: '50px 85px 70px 85px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '30px 53px 43px 53px !important'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      top: '16px',
      right: '16px'
    }
  },
  headingTitle: {
    color: '#E0A501',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '22px !important'
    }
  },
  descTitle: {
    color: '#EDEDED',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  }
});

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/nobilityReward/chest/welcome.png',
  desc: 'welcomeImage'
};

const ChestGotPopover = (props: ParentProps) => {
  const classes = useStyle();

  return (
    <Box className={classes.outBoxStyle}>
      <CloseIcon
        onClick={props.onHandleChestClose}
        className={classes.closeIconStyle}
      />
      <Box component="img" src={welcomeImage.path} alt={welcomeImage.name} />
      <Box>
        <Typography variant="h1" className={classes.headingTitle}>
          You got: 50 SMT!
        </Typography>
        <Typography variant="h3" className={classes.descTitle}>
          Your rewards will be accumulated on your Rewards Pool
        </Typography>
      </Box>
      <Hidden mdDown>
        <CustomButton
          width="240px"
          height="50px"
          background="#936900"
          color="#FFFFFF"
          fontSize="22px"
          fontWeight="600"
          boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
          borderRadius="35px"
          marginTop="40px"
          onHandleClick={props.onHandleChestClose}
        >
          Close
        </CustomButton>
      </Hidden>
      <Hidden mdUp>
        <CustomButton
          width="150px"
          height="30px"
          background="#936900"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="600"
          boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
          borderRadius="20px"
          marginTop="24px"
          onHandleClick={props.onHandleChestClose}
        >
          Close
        </CustomButton>
      </Hidden>
    </Box>
  );
};

export default ChestGotPopover;
