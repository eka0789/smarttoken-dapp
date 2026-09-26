import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import CustomTitle from 'src/components/Title/BadgeTitle';

interface ParentProps {
  onHandleClaimClose: (e: React.MouseEvent) => void;
  onHandleClaimNext: (e: React.MouseEvent) => void;
}

const questionIcon = {
  name: 'question',
  path: '/static/img/main_achievement/question.svg',
  desc: 'questionIcon'
};
const circleTree = {
  name: 'circleTree',
  path: '/static/img/main_achievement/circleTree.svg',
  desc: 'circleTree'
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
            color: '#EDEDED',
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
          padding="60px 10px 0 10px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="18px" color="#F84343" fontWeight="600">
            Claiming without fulfilling the requirement may reject the request
            and close the quest. Closed quest cannot be taken anymore.
          </Typography>
          <Box marginTop="50px" display="flex" flexDirection="column">
            <Box display="flex" alignItems="center">
              <Typography
                fontSize="18px"
                color="#E0A501"
                fontWeight="600"
                lineHeight="100%"
              >
                Requirement:
              </Typography>
              <Typography
                fontSize="18px"
                color="#EDEDED"
                fontWeight="600"
                lineHeight="100%"
                marginLeft="50px"
              >
                Upgrade or buy runner license
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginTop="20px">
              <Typography
                fontSize="18px"
                color="#E0A501"
                fontWeight="600"
                lineHeight="100%"
              >
                Type of quest:
              </Typography>
              <CustomTitle
                title="one-time"
                width="86px"
                height="21px"
                color="#212121"
                background="#C4C4C4"
                borderRadius="20px"
                fontSize="14px"
                fontWeight="500"
                marginRight="10px"
                marginLeft="45px"
              />
              <CustomTitle
                title="personal"
                width="86px"
                height="21px"
                color="#EDEDED"
                background="#936900"
                borderRadius="20px"
                fontSize="14px"
                fontWeight="500"
              />
            </Box>
            <Box display="flex" alignItems="center" marginTop="20px">
              <Typography
                fontSize="18px"
                color="#E0A501"
                fontWeight="600"
                lineHeight="100%"
              >
                Rewards:
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                marginRight="23px"
                marginLeft="90px"
              >
                <Box
                  component="img"
                  src={circleTree.path}
                  alt={circleTree.name}
                />
                <Typography
                  component="span"
                  fontSize="18px"
                  color="#EDEDED"
                  fontWeight="500"
                  lineHeight="100%"
                  marginLeft="5px"
                >
                  0.2 SMTC
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" marginTop="66px">
            <CustomButton
              width="240px"
              height="50px"
              background="#E0A501"
              color="#212121"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleClaimNext}
            >
              Claim my rewards
            </CustomButton>
            <Box
              component="img"
              src={questionIcon.path}
              alt={questionIcon.name}
              marginLeft="14px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SurePopover;
