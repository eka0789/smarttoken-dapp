import React from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import { GotPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleVisionaryClose: (e: React.MouseEvent) => void;
  onHandleVisionaryNext: (e: React.MouseEvent, value: string) => void;
}

const gotImage = {
  name: 'got',
  path: '/static/img/main_smart/visionary/got.png',
  desc: 'got background'
};
const changeImage = {
  name: 'change',
  path: '/static/img/main_smart/visionary/change.png',
  desc: 'change background'
};

const GotPopover = (props: ParentProps) => {
  const classes = GotPopoverStyle();

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleVisionaryClose}
        className={classes.closeIconStyle}
      />
      <Hidden mdDown>
        <Box
          component="img"
          src={gotImage.path}
          alt={gotImage.name}
          sx={{
            position: 'absolute',
            top: '0',
            left: '0'
          }}
        />
      </Hidden>
      <Box className={classes.customInnerBoxStyle}>
        <Hidden mdUp>
          <Typography className={classes.customHeadingTitle}>
            This upgrade works by liquidating your previous license & exchange
            to new license. The liquidation rate & exchange fee is going to be
            charged
          </Typography>
        </Hidden>
        <Hidden mdDown>
          <Typography variant="h2" color="#E0A501" fontWeight="700">
            Look! Additional privileges have been added to your account. You
            look super cool now!
          </Typography>
        </Hidden>
        <Box
          component="img"
          src={changeImage.path}
          alt={changeImage.name}
          marginTop="20px"
        />
        <Hidden mdDown>
          <RowBox padding="0 200px" marginTop="10px">
            <Typography
              fontSize="18px"
              fontWeight="700"
              color="#E0A501"
              lineHeight="100%"
            >
              Before
            </Typography>
            <Typography
              fontSize="18px"
              fontWeight="700"
              color="#E0A501"
              lineHeight="100%"
            >
              After
            </Typography>
          </RowBox>
          <RowBox marginTop="10px" justifyContent="center">
            <Box textAlign="left" marginRight="20px" width="280px">
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Teamwork ladder{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  lv.5
                </Typography>
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Entitled to be an SMT intermediary
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Farming rewards:
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226;{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  0.17%
                </Typography>{' '}
                Fee as a liquidity provider
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226; Fixed{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  0.1% /day
                </Typography>
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226; Sell tax distribution *4
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Access to Smart Academy, Smart Living, Smart Utilities,
                Smart Wealth{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  (Runner)
                </Typography>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: '100%', border: '2px solid #E0A501' }}
            />
            <Box textAlign="left" marginLeft="30px" width="280px">
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Teamwork ladder{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  lv.7
                </Typography>
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Entitled to be an SMT intermediary
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Farming rewards:
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226;{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  0.17%
                </Typography>{' '}
                Fee as a liquidity provider
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226; Fixed{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  0.1% /day
                </Typography>
              </Typography>
              <Typography
                style={{
                  color: '#EDEDED',
                  fontSize: '14px',
                  paddingLeft: 12
                }}
              >
                &#8226; Sell tax distribution *4
              </Typography>
              <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                &#8226; Access to Smart Academy, Smart Living, Smart Utilities,
                Smart Wealth{' '}
                <Typography
                  component="span"
                  style={{ color: '#E0A501', fontSize: '14px' }}
                >
                  (Visionary)
                </Typography>
              </Typography>
            </Box>
          </RowBox>
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            marginTop="40px"
            onHandleClick={(e) =>
              props.onHandleVisionaryNext(e, 'visionary_thank')
            }
          >
            Got it
          </CustomButton>
        </Hidden>
        <Hidden mdUp>
          <Box
            marginTop="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <CustomButton
              width="140px"
              height="25px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              onHandleClick={(e) =>
                props.onHandleVisionaryNext(e, 'visionary_thank')
              }
            >
              Upgrade now
            </CustomButton>
            <CustomButton
              width="140px"
              height="25px"
              background="#936900"
              color="#FFFFFF"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
            >
              Postpone
            </CustomButton>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default GotPopover;
