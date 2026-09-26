import { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomCard from 'src/components/Card';
import Setting from './Setting';
import Recent from './Recent';
import RowBox from 'src/components/Box/RowBox';
import { addLiquidityPanleStyle } from 'src/models/main/get-smt/CustomStyle';
import { ExchangeButton } from 'src/models/main/get-smt/StyledStyle';
import useAddLiquidity from 'src/hooks/useAddLiquidity';

import useTokenBalances, { useGetEthBalance } from 'src/hooks/useTokenBalances';

import { formatDecimalNumber } from 'src/utils/formatBalance';
import { getContractAddress } from 'src/utils';

interface ChildProps {
  clickOpenHandler;
}

// BNB ICON
const bnbIcon = {
  name: 'bnb',
  path: '/static/img/main_smt/get_smt/bnb.svg',
  desc: 'btnIcon'
};

const AddLiquidityPanel = (props: ChildProps) => {
  const classes = addLiquidityPanleStyle();

  const { balances: tokenBalances } = useTokenBalances();
  const { balance: ethBalance } = useGetEthBalance();

  const { fetchAddLiquidity } = useAddLiquidity();

  const fromBalanceRef = useRef(null);
  const toBalanceRef = useRef(null);

  const [balance, setBalance] = useState<any>({
    fromBalance: '',
    toBalance: ''
  });

  const onHandleChange = async (evt, tokenName) => {
    const value = evt.target.value;
    if (value === '' || value === 0 || value === ' ') {
      setBalance({
        fromBalance: '',
        toBalance: ''
      });
      return;
    }

    const desiredBalance = parseFloat(localStorage.getItem('SMTtoBNB'));
    if (tokenName === 'BNB') {
      setBalance({
        fromBalance: value,
        toBalance: value / desiredBalance
      });
    } else {
      setBalance({
        toBalance: value,
        fromBalance: value * desiredBalance
      });
    }
  };

  const onHandleLiquidity = async () => {
    await fetchAddLiquidity(balance.toBalance * 1, balance.fromBalance * 1);
    setBalance({
      fromBalance: '',
      toBalance: ''
    });
  };

  return (
    <CustomCard marginTop="30px" height="auto">
      <Box padding="20px">
        <RowBox height="29px">
          <RowBox width="auto">
            <IconButton
              aria-label="vehicles"
              sx={{ float: 'left', padding: '0 !important' }}
              onClick={props.clickOpenHandler}
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              component="span"
              className={classes.liqTitleStyle}
            >
              Add Liquidity
            </Typography>
          </RowBox>
          <RowBox float="right" width="65px">
            <Setting />
            <Recent />
          </RowBox>
        </RowBox>

        <RowBox height="16px" marginTop="10px">
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontSize: '18px',
              color: '#EDEDED',
              lineHeight: '0px !important'
            }}
          >
            Add liquidity to receive LP tokens
          </Typography>
          <Box sx={{ float: 'right' }}>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  sx={{
                    padding: '0 !important',
                    margin: '0 !important',
                    color: '#E0A501'
                  }}
                />
              }
              label="Auto set to lowest tax"
              labelPlacement="end"
              sx={{
                padding: '0 !important',
                margin: '0 !important',
                color: '#EDEDED'
              }}
            />
          </Box>
        </RowBox>

        <Box className={classes.inputBoxStyle}>
          <RowBox>
            <Typography variant="h4">Input</Typography>
            <Typography variant="h4">
              Balance:
              {formatDecimalNumber(ethBalance, 18)}
            </Typography>
          </RowBox>
          <RowBox marginTop="13px">
            <input
              className={classes.searchCustomStyle}
              name="fromBalance"
              placeholder="000"
              value={balance.fromBalance}
              onChange={(e) => onHandleChange(e, 'BNB')}
              type="number"
            />
            <RowBox float="right" width="120px">
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path} />
              <Typography
                variant="h2"
                sx={{
                  color: '#EDEDED',
                  fontWeight: '600'
                }}
                ref={fromBalanceRef}
              >
                BNB
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </RowBox>
          </RowBox>
        </Box>

        <Box sx={{ marginTop: '14px', textAlign: 'center', lineHeight: '1px' }}>
          <AddIcon sx={{ color: '#E0A501', fontSize: '32px' }} />
        </Box>

        <Box className={classes.inputBoxStyle}>
          <RowBox>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Input
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Balance:
              {formatDecimalNumber(
                tokenBalances?.[getContractAddress('SmartToken')],
                18
              )}
            </Typography>
          </RowBox>
          <RowBox marginTop="14px">
            <input
              className={classes.searchCustomStyle}
              name="toBalance"
              placeholder="000"
              value={balance.toBalance}
              onChange={(e) => onHandleChange(e, 'SMT')}
              type="number"
            />
            <RowBox float="right" width="120px">
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path} />
              <Typography
                variant="h2"
                sx={{ color: '#EDEDED', fontWeight: '600' }}
                ref={toBalanceRef}
              >
                SMT
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </RowBox>
          </RowBox>
        </Box>

        <Box className={classes.inputBoxStyle}>
          <Typography variant="h4" textAlign="center">
            Prices and Pool Share
          </Typography>
          <RowBox justifyContent="space-around" marginTop="20px">
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501'
                }}
              >
                1.000
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  width: '154px',
                  lineHeight: '1px'
                }}
              >
                SMT per BNB
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501'
                }}
              >
                1.000
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  width: '154px',
                  lineHeight: '1px'
                }}
              >
                BNB per SMT
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501'
                }}
              >
                40%
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  width: '154px',
                  lineHeight: '1px'
                }}
              >
                Share of Pool
              </Typography>
            </Box>
          </RowBox>
        </Box>

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <ExchangeButton variant="contained" onClick={onHandleLiquidity}>
            Add Liquidity
          </ExchangeButton>
        </Box>
      </Box>
    </CustomCard>
  );
};

export default AddLiquidityPanel;
