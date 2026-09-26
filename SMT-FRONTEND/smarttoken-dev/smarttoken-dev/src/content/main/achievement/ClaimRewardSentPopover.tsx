import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleClaimClose: (e: React.MouseEvent) => void;
}

const notifyIcon = {
  name: 'notify',
  path: '/static/img/main_achievement/notify.svg',
  desc: 'notifyIcon'
};

const SurePopover: React.FC<ParentProps> = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: '30px 30px 70px 30px !important',
          position: 'relative',
          background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
          boxSizing: 'border-box',
          borderRadius: '10px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <CloseIcon
          onClick={props.onHandleClaimClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px',
            color: '#EDEDED'
          }}
        />
        <Typography
          fontSize="24px"
          color="#E0A501"
          fontWeight="700"
          marginBottom="20px"
        >
          Claim Request
        </Typography>
        <Divider
          sx={{
            border: '2px solid #323232'
          }}
        />
        <Box
          padding="50px 76px 0 76px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="36px" color="#EDEDED" fontWeight="600">
            Your claim request is sent!
          </Typography>
          <Box
            component="img"
            src={notifyIcon.path}
            alt={notifyIcon.name}
            marginTop="20px"
          />
          <Typography
            fontSize="24px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="30px"
          >
            We’ll notify you soon!
          </Typography>
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="47px"
            onHandleClick={props.onHandleClaimClose}
          >
            Ok, thanks!
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default SurePopover;
