import { useState, useRef, useEffect, useContext } from 'react';
import { Box, Typography, Popover } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SouthIcon from '@mui/icons-material/South';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomCard from 'src/components/Card';
import Setting from './Setting';
import Recent from './Recent';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import useTokenRatio from 'src/hooks/useTokenRatio';
import useSwap from 'src/hooks/useSwap';
import { useWeb3React } from '@web3-react/core';
import { WalletButtonContext } from 'src/contexts/WalletButtonContext';

import { swapPanleStyle } from 'src/models/main/get-smt/CustomStyle';
import { ExchangeButton } from 'src/models/main/get-smt/StyledStyle';
import { loadingBar } from 'src/utils/loadingBar';
import { toast } from 'react-hot-toast';

// BNB ICON
const bnbIcon = {
  name: 'bnb',
  path: '/static/img/main_smt/get_smt/bnb.svg',
  desc: 'btnIcon'
};

const SwapPanel = () => {
  const classes = swapPanleStyle();
  const { fetchRatio, fetchRatioBUSD } = useTokenRatio();
  const { fetchSwap, isLoading } = useSwap();
  const { account } = useWeb3React();
  const { handleClickOpen } = useContext(WalletButtonContext);

  const fromBalanceRef = useRef<any>(null);
  const toBalanceRef = useRef<any>(null);
  const symbolArray = ['SMT', 'BNB', 'BUSD'];
  const [balance, setBalance] = useState<any>({
    fromBalance: '',
    toBalance: ''
  });
  const [symbol, setSymbol] = useState<any>({
    fromSymbol: symbolArray[0],
    toSymbol: symbolArray[1]
  });

  useEffect(() => {
    let interval;
    async function init() {
      fetchRatio();
      fetchRatioBUSD();
      interval = setInterval(() => {
        fetchRatio();
        fetchRatioBUSD();
      }, 5000);
    }
    init();
    return () => clearInterval(interval);
  });

  const fromHandleClick = () => {
    setIsOpen({
      ...isOpen,
      fromOpen: true
    });
  };
  const fromHandleClose = () => {
    setIsOpen({
      ...isOpen,
      fromOpen: false
    });
  };
  const toHandleClick = () => {
    setIsOpen({
      ...isOpen,
      toOpen: true
    });
  };
  const toHandleClose = () => {
    setIsOpen({
      ...isOpen,
      toOpen: false
    });
  };
  const [isOpen, setIsOpen] = useState({
    fromOpen: false,
    toOpen: false
  });
  const onFromSelectSymbol = (value) => {
    let idx = symbolArray.findIndex((arr) => arr === value);
    fromHandleClose();
    setSymbol({
      ...symbol,
      fromSymbol: symbolArray[idx]
    });
  };
  const onToSelectSymbol = (value) => {
    let idx = symbolArray.findIndex((arr) => arr === value);
    toHandleClose();
    setSymbol({
      ...symbol,
      toSymbol: symbolArray[idx]
    });
  };

  /** exchange button click */
  const onHandleExchage = async () => {
    if (!balance.fromBalance) {
      toast.error('Please input a value');
      return;
    }
    if (
      (fromBalanceRef.current?.innerText === 'BNB' &&
        toBalanceRef.current?.innerText === 'BUSD') ||
      (fromBalanceRef.current?.innerText === 'BUSD' &&
        toBalanceRef.current?.innerText === 'BNB')
    ) {
      toast.error('Current swap is not supported');
      return;
    }
    if (fromBalanceRef.current?.innerText === 'BNB') {
      await fetchSwap(balance.fromBalance, 'BNBtoSMT');
    } else if (fromBalanceRef.current?.innerText === 'BUSD') {
      await fetchSwap(balance.fromBalance, 'BUSDtoSMT');
    } else if (toBalanceRef.current?.innerText === 'BNB') {
      await fetchSwap(balance.fromBalance, 'SMTtoBNB');
    } else {
      await fetchSwap(balance.fromBalance, 'SMTtoBUSD');
    }
    setBalance({
      fromBalance: '',
      toBalance: ''
    });
  };
  /** input change handler */
  const onHandleChange = (evt, tokenName) => {
    const value = evt.target.value;
    const name = evt.target.name;
    if (value === '' || value === 0 || value === ' ') {
      setBalance({
        fromBalance: '',
        toBalance: ''
      });
      return;
    }

    const desiredBNBBalance = parseFloat(localStorage.getItem('SMTtoBNB'));
    const desiredBUSDBalance = parseFloat(localStorage.getItem('SMTtoBUSD'));
    if (tokenName === 'BNB' && name === 'fromBalance') {
      setBalance({
        fromBalance: value,
        toBalance: value / desiredBNBBalance
      });
    } else if (
      tokenName === 'SMT' &&
      name === 'fromBalance' &&
      toBalanceRef.current?.innerText === 'BNB'
    ) {
      setBalance({
        fromBalance: value,
        toBalance: value * desiredBNBBalance
      });
    }
    if (tokenName === 'BNB' && name === 'toBalance') {
      setBalance({
        fromBalance: value / desiredBNBBalance,
        toBalance: value
      });
    } else if (
      tokenName === 'SMT' &&
      name === 'toBalance' &&
      fromBalanceRef.current?.innerText === 'BNB'
    ) {
      setBalance({
        fromBalance: value * desiredBNBBalance,
        toBalance: value
      });
    }

    if (tokenName === 'BUSD' && name === 'fromBalance') {
      setBalance({
        fromBalance: value,
        toBalance: value / desiredBUSDBalance
      });
    } else if (
      tokenName === 'SMT' &&
      name === 'fromBalance' &&
      toBalanceRef.current?.innerText === 'BUSD'
    ) {
      setBalance({
        fromBalance: value,
        toBalance: value * desiredBUSDBalance
      });
    }
    if (tokenName === 'BUSD' && name === 'toBalance') {
      setBalance({
        fromBalance: value / desiredBUSDBalance,
        toBalance: value
      });
    } else if (
      tokenName === 'SMT' &&
      name === 'toBalance' &&
      fromBalanceRef.current?.innerText === 'BUSD'
    ) {
      setBalance({
        fromBalance: value * desiredBUSDBalance,
        toBalance: value
      });
    }
  };
  /** click the symbol change button */
  const changePosition = () => {
    const from = fromBalanceRef.current?.innerText;
    const to = toBalanceRef.current?.innerText;
    setSymbol({
      fromSymbol: to,
      toSymbol: from
    });
    const fromBalance = balance.fromBalance;
    const toBalance = balance.toBalance;
    setBalance({
      fromBalance: toBalance,
      toBalance: fromBalance
    });
  };

  return (
    <CustomCard marginTop="30px" height="auto">
      <Box padding="20px" height="100%">
        <RowBox height="29px">
          <Typography
            variant="h2"
            component="span"
            className={classes.swapTitleStyle}
          >
            Swap
          </Typography>
          <RowBox width="65px">
            <Setting />
            <Recent />
          </RowBox>
        </RowBox>

        <RowBox height="16px" marginTop="10px">
          <Typography variant="h3" color="#EDEDED">
            Trade token in an instant
          </Typography>
          <Box>
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
          <Typography variant="h4">from</Typography>
          <RowBox marginTop="13px">
            <input
              className={classes.searchCustomStyle}
              name="fromBalance"
              placeholder="000"
              value={balance.fromBalance}
              onChange={(e) => onHandleChange(e, symbol.fromSymbol)}
              type="number"
            />
            <RowBox
              float="right"
              width="120px"
              className={classes.tokenSelectStyle}
              onHandleClick={fromHandleClick}
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h2"
                component="span"
                sx={{ color: '#EDEDED', fontWeight: '600' }}
                ref={fromBalanceRef}
              >
                {symbol.fromSymbol}
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </RowBox>
            <Popover
              anchorEl={fromBalanceRef.current}
              onClose={fromHandleClose}
              open={isOpen.fromOpen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              PaperProps={{
                style: {
                  background:
                    'linear-gradient(180deg, #212121 0%, #000000 100%)',
                  borderRadius: '5px',
                  marginTop: '10px'
                }
              }}
            >
              <ColumnBox padding="5px 15px">
                {symbolArray.map((symbol, idx) => (
                  <Typography
                    key={idx}
                    variant="h2"
                    className={classes.symBolArrStyle}
                    onClick={() => onFromSelectSymbol(symbol)}
                  >
                    {symbol}
                  </Typography>
                ))}
              </ColumnBox>
            </Popover>
          </RowBox>
        </Box>

        <Box sx={{ marginTop: '14px', textAlign: 'center', lineHeight: '1px' }}>
          <SouthIcon
            sx={{ color: '#E0A501', fontSize: '32px', cursor: 'pointer' }}
            onClick={changePosition}
          />
        </Box>

        <Box className={classes.inputBoxStyle}>
          <Typography variant="h4">to</Typography>
          <RowBox marginTop="14px">
            <input
              className={classes.searchCustomStyle}
              placeholder="000"
              name="toBalance"
              value={balance.toBalance}
              onChange={(e) => onHandleChange(e, symbol.toSymbol)}
              type="number"
            />
            <RowBox
              float="right"
              width="120px"
              className={classes.tokenSelectStyle}
              onHandleClick={toHandleClick}
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h2"
                component="span"
                sx={{ color: '#EDEDED', fontWeight: '600' }}
                ref={toBalanceRef}
              >
                {symbol.toSymbol}
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </RowBox>
            <Popover
              anchorEl={toBalanceRef.current}
              onClose={toHandleClose}
              open={isOpen.toOpen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              PaperProps={{
                style: {
                  background:
                    'linear-gradient(180deg, #212121 0%, #000000 100%)',
                  borderRadius: '5px',
                  marginTop: '10px'
                }
              }}
            >
              <ColumnBox padding="5px 15px">
                {symbolArray.map((symbol, idx) => (
                  <Typography
                    key={idx}
                    variant="h2"
                    className={classes.symBolArrStyle}
                    onClick={() => onToSelectSymbol(symbol)}
                  >
                    {symbol}
                  </Typography>
                ))}
              </ColumnBox>
            </Popover>
          </RowBox>
        </Box>

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          {account ? (
            <ExchangeButton variant="contained" onClick={onHandleExchage}>
              Exchange {' '} {isLoading && <Box component="img" src={loadingBar} />}
            </ExchangeButton>
          ) : (
            <ExchangeButton variant="contained" onClick={handleClickOpen}>
              Connect Wallet
            </ExchangeButton>
          )}
        </Box>
      </Box>
    </CustomCard>
  );
};

export default SwapPanel;
