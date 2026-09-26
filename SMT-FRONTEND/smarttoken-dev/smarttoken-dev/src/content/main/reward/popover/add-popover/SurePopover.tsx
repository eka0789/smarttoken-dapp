import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleAddClose: (e: React.MouseEvent) => void;
  smtVal: number;
}

const surePopoverImage = {
  name: 'background',
  path: '/static/img/main_reward/dailyFarming/surePopover.svg',
  desc: 'background'
};

const SurePopover = (props: ParentProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%',
        textAlign: 'center',
        height: '527px'
      }}
    >
      <Box position="relative" width="100%" height="150px">
        <Box
          component="img"
          src={surePopoverImage.path}
          alt={surePopoverImage.name}
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
      </Box>
      <Box
        padding="60px 85px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
          You have successfully added
        </Typography>
        <Typography fontSize="48px" color="#E0A501" fontWeight="600">
          {props.smtVal} SMT
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="104px"
          width="100%"
        >
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
          >
            See guide
          </CustomButton>
          <CustomButton
            width="240px"
            height="50px"
            background="#936900"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={props.onHandleAddClose}
          >
            Got it
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SurePopover;
