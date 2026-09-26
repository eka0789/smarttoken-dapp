import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleFutureClose: (e: React.MouseEvent) => void;
}

const phaseList = [
  {
    title: 'Phase 9',
    content: '= 10,000 SMTC ',
    value: '($10,000,000)'
  },
  {
    title: 'Phase 8',
    content: '= 8,000 SMTC ',
    value: '($6,200,000)'
  },
  {
    title: 'Phase 7',
    content: '= 5,000 SMTC ',
    value: '($2,500,000)'
  },
  {
    title: 'Phase 6',
    content: '= 1,500 SMTC ',
    value: '($225,000)'
  },
  {
    title: 'Phase 5',
    content: '= 300 SMTC ',
    value: '($90,000)'
  },
  {
    title: 'Phase 4',
    content: '= 100 SMTC ',
    value: '($1,000)'
  },
  {
    title: 'Passed',
    content: '',
    value: ''
  },
  {
    title: 'Passed',
    content: '',
    value: ''
  },
  {
    title: 'Passed',
    content: '',
    value: ''
  },
  {
    title: 'Passed',
    content: '',
    value: ''
  }
];

const FutureReward: React.FC<ParentProps> = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: '30px 0 !important',
          position: 'relative',
          background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
          boxSizing: 'border-box',
          borderRadius: '10px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <CloseIcon
          onClick={props.onHandleFutureClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Typography
          fontSize="24px"
          color="#E0A501"
          fontWeight="700"
          marginBottom="20px"
        >
          Future Rewards
        </Typography>
        <Divider
          sx={{
            border: '2px solid #323232'
          }}
        />
        <Typography
          fontSize="18px"
          color="#EDEDED"
          fontWeight="500"
          marginTop="20px"
        >
          We predict your future wealth
        </Typography>
        <Box
          padding="20px 120px 0 120px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            sx={{
              textAlign: 'center',
              width: '100%',
              height: '380px'
            }}
          >
            {phaseList.map((row, idx) => {
              return (
                <Box
                  key={idx}
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  width="100%"
                >
                  <CustomTitle
                    width="94px"
                    height="30px"
                    title={row.title}
                    background={
                      row.title.includes('Phase') ? '#323232' : '#E0A501'
                    }
                    color={row.title.includes('Phase') ? '#EDEDED' : '#212121'}
                    borderRadius="20px"
                    fontSize="18px"
                    fontWeight="600"
                  />
                  <Box
                    textAlign="left"
                    display="flex"
                    alignItems="center"
                    marginLeft="20px"
                  >
                    <Typography
                      sx={{
                        fontSize: '18px',
                        color: '#EDEDED',
                        fontWeight: '500'
                      }}
                    >
                      {row.content}
                    </Typography>
                    <Typography
                      sx={{
                        marginLeft: '5px',
                        fontSize: '18px',
                        color: '#E0A501',
                        fontWeight: '500'
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="40px"
            onHandleClick={props.onHandleFutureClose}
          >
            Close
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default FutureReward;
