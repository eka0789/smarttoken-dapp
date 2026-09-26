import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { LiqNowPopoverStyle } from 'src/models/main/smart-army/CustomStyle';
import RowBox from 'src/components/Box/RowBox';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
  onHandleLiquidateNext: (e: React.MouseEvent, value: string) => void;
}

const nowImage = {
  name: 'now',
  path: '/static/img/main_smart/runner/liqNow.png',
  desc: 'now background'
};

const LiqNowPopover = (props: ParentProps) => {
  const classes = LiqNowPopoverStyle();
  const { liquidateLicense } = useSmartArmy();

  const takeLiquidate = async (e) => {
    if (await liquidateLicense()) props.onHandleLiquidateNext(e, 'liq_got');
  };

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleLiquidateClose}
          className={classes.closeIconStyle}
        />
        <Box
          component="img"
          src={nowImage.path}
          alt={nowImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="700">
              Please re confirm before you leave
            </Typography>
            <Box
              marginTop="30px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Box display="flex">
                <Typography variant="h3" color="#EDEDED">
                  License to liquidate:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  Runner License
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h3" color="#EDEDED">
                  Running rewards/ privileges:
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography variant="h3" color="#EDEDED">
                  &#8226; Farming rewards:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  2 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography variant="h3" color="#EDEDED">
                  &#8226; Nobility rewards:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  100 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography variant="h3" color="#EDEDED">
                  &#8226; Ladder rewards:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  20 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h3" color="#EDEDED">
                  Locked LP token:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  100 SMT-BNB LP ($10,000)
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h3" color="#EDEDED">
                  Liquidation rate fee:
                </Typography>
                <Typography variant="h3" color="#E0A501" marginLeft="5px">
                  5 SMT-BNB LP
                </Typography>
              </Box>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Typography fontSize="15px" color="#EDEDED" fontWeight="600">
              You will receive
            </Typography>
            <Typography fontSize="15px" color="#E0A501" fontWeight="600">
              1820 SMT
            </Typography>
            <Typography fontSize="15px" color="#EDEDED" fontWeight="600">
              from this liquidation process
            </Typography>
          </Hidden>
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
                onHandleClick={(e) => {
                  takeLiquidate(e);
                }}
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
                onHandleClick={props.onHandleLiquidateClose}
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_got')}
              >
                Yes, liquidate now
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
                onHandleClick={props.onHandleLiquidateClose}
              >
                No, take me back
              </CustomButton>
            </Hidden>
          </RowBox>
        </Box>
      </Box>
    </>
  );
};

export default LiqNowPopover;
