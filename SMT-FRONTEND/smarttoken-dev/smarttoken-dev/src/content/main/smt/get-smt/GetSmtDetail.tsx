import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useTheme, Theme } from '@mui/material';
import MultiTabButton from 'src/components/MultiTab';
import RowBox from 'src/components/Box/RowBox';
import { getSmtDetailStyle } from 'src/models/main/get-smt/CustomStyle';

import Hero from './Hero';
import CurrentTax from '../../dashboard/CurrentTax';
import SwapPanel from './SwapPanel';
import LiquidityPanel from './LiquidityPanel';
import AddLiquidityPanel from './AddLiquidityPanel';

import useTokenPrices from 'src/hooks/useTokenPrices';
import { nFormatter } from 'src/utils/formatBalance';

const useLiquidity = (initialState) => {
  // ADD REQUIDITY FUNCTION
  const [isLiquidityState, setLiquidity] = useState<boolean>(initialState);
  const onHandleAddLiquidity = useCallback(
    () => setLiquidity(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLiquidityState]
  );
  const onCloseAddLiquidity = useCallback(
    () => setLiquidity(false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLiquidityState]
  );

  return [isLiquidityState, onHandleAddLiquidity, onCloseAddLiquidity] as const;
};

function GetSmtDetail() {
  const theme: Theme = useTheme();
  const classes = getSmtDetailStyle(theme);

  const { prices } = useTokenPrices();

  // SMT MULTITAB CLICK EVENT
  const [tabSmtValue, tabSmtSetState] = useState<string>('Swap');
  const handleClickSmtTab = (e: React.MouseEvent, value: string): void => {
    tabSmtSetState(value);
    onCloseAddLiquidity();
  };

  const [isLiquidityState, onHandleAddLiquidity, onCloseAddLiquidity] =
    useLiquidity(false);

  return (
    <>
      <Helmet>
        <title>Main | Get SMT / SMTC</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* MAIN SIDE OF DASHBOARD */}
          <Grid item xs={12} sm={12} position="relative">
            {/* BACK BUTTON */}
            <IconButton
              aria-label="vehicles"
              sx={{ position: 'absolute' }}
              className={classes.iconBtnStyle}
              component={NavLink}
              to="/main/smt/getSmt"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            {/* SMT EXCHANGE MAIN GRID */}
            <Grid item xs={12} position="relative">
              <Box className={classes.smtExchangeMainStyle}>
                {/* CURRENT SMT PRICE */}
                <RowBox
                  justifyContent="center"
                  className={
                    tabSmtValue === 'Liquidity' &&
                    classes.currentSmtPriceBoxHidenStyle
                  }
                >
                  <RowBox justifyContent="space-evenly" height="40px">
                    <Typography
                      variant="h3"
                      className={classes.currentSmtTypoLeftStyle}
                    >
                      Current SMT Price
                    </Typography>
                    <Typography
                      variant="h3"
                      className={classes.currentSmtTypoRightStyle}
                    >
                      $ {nFormatter(prices?.smt || 0, 4)}
                    </Typography>
                  </RowBox>
                </RowBox>

                {/* MULTI SELECT MENU */}
                <RowBox height="40px" justifyContent="center" marginTop="20px">
                  <Box className={classes.multiMenuBox}>
                    <MultiTabButton
                      titles="Swap, Liquidity"
                      currentValue={tabSmtValue}
                      onHandleClick={handleClickSmtTab}
                    />
                  </Box>
                </RowBox>

                {/* SWAP PANEL */}
                <Box
                  className={
                    tabSmtValue !== 'Swap' && classes.swapHidenPanelStyle
                  }
                >
                  <SwapPanel />
                </Box>

                {/* LIQUIDITY PANEL */}
                <Box
                  className={
                    tabSmtValue === 'Liquidity'
                      ? isLiquidityState
                        ? classes.liqHidenPanelStyle
                        : ''
                      : classes.liqHidenPanelStyle
                  }
                >
                  <LiquidityPanel clickOpenHandler={onHandleAddLiquidity} />
                </Box>

                {/* ADD LIQUIDITY PANEL */}
                <Box
                  className={!isLiquidityState && classes.addLiqHidenPanelStyle}
                >
                  <AddLiquidityPanel clickOpenHandler={onCloseAddLiquidity} />
                </Box>

                {/* CURRENT TAX */}
                <Box
                  margin="30px auto"
                  maxWidth="430px"
                  className={
                    !(tabSmtValue === 'Swap') && classes.curTaxHidenStyle
                  }
                >
                  <CurrentTax />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default GetSmtDetail;
