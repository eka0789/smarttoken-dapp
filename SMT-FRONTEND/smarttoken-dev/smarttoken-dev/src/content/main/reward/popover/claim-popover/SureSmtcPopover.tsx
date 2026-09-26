import React from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import { SurePopoverStyle } from 'src/models/main/reward/CustomStyle';

interface ParentProps {
  onHandleClaimClose: (e: React.MouseEvent) => void;
  amount: number;
}

const SureSmtcPopover = (props: ParentProps) => {
  const theme: Theme = useTheme();
  const classes = SurePopoverStyle(theme);

  const onHandleClose = () => {
    window.location.reload();
    // props.onHandleClaimClose();
  };

  return (
    <Box className={classes.outBoxStyle}>
      <CloseIcon onClick={onHandleClose} className={classes.closeIconStyle} />
      <Typography variant="h2" className={classes.headingTitle}>
        Claim Successful!
      </Typography>
      <Divider sx={{ border: '2px solid #323232' }} />
      <ColumnBox className={classes.innerBoxStyle}>
        <Typography variant="h2" className={classes.contentHeadingTitle}>
          You’ve received
        </Typography>
        <Typography className={classes.contentMiddleTitleStyle}>
          {props.amount} SMTC
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
            marginTop="120px"
            onHandleClick={onHandleClose}
          >
            Got it
          </CustomButton>
        </Hidden>
        <Hidden mdUp>
          <CustomButton
            width="150px"
            height="31px"
            background="#E0A501"
            color="#212121"
            fontSize="13px"
            fontWeight="600"
            boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="80px"
            onHandleClick={onHandleClose}
          >
            Got it
          </CustomButton>
        </Hidden>
      </ColumnBox>
    </Box>
  );
};

export default SureSmtcPopover;
