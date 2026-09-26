import React from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';

interface ParentProps {
  onHandleChestClose: (e: React.MouseEvent) => void;
  onHandleChestNext: (e: React.MouseEvent) => void;
  rewardsTitle: string;
  remainCount: number;
}

const useStyle = makeStyles({
  outBoxStyle: {
    padding: '30px 30px 70px 30px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
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
    fontWeight: '700',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      fontSize: '15px !important',
      marginBottom: '12px !important'
    }
  }
});

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/nobilityReward/chest/welcome.png',
  desc: 'welcomeImage'
};

const ChestPopover = (props: ParentProps) => {
  const classes = useStyle();

  return (
    <Box className={classes.outBoxStyle}>
      <CloseIcon
        className={classes.closeIconStyle}
        onClick={props.onHandleChestClose}
      />
      <Typography variant="h2" className={classes.headingTitle}>
        Claim Successful!
      </Typography>
      <Divider
        sx={{
          border: '2px solid #323232'
        }}
      />
      <ColumnBox padding="50px 70px 0 70px">
        <Box component="img" src={welcomeImage.path} alt={welcomeImage.name} />
        <Typography variant="h3" color="#E0A501" marginTop="10px">
          You have: {props.remainCount}
        </Typography>

        <Hidden mdDown>
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="34px"
            onHandleClick={props.onHandleChestNext}
          >
            Open x 1
          </CustomButton>
        </Hidden>
        <Hidden mdUp>
          <CustomButton
            width="150px"
            height="30px"
            background="#E0A501"
            color="#212121"
            fontSize="13px"
            fontWeight="600"
            boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="20px"
            marginTop="34px"
            onHandleClick={props.onHandleChestNext}
          >
            Open x 1
          </CustomButton>
        </Hidden>
      </ColumnBox>
    </Box>
  );
};

export default ChestPopover;
