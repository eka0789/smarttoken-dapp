import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Hidden,
  Dialog,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import CustomButton from 'src/components/Button';
import useAuth from 'src/hooks/useAuth';
import { connectorLocalStorageKey, ConnectorNames } from 'src/utils/connectors';
import { WalletModalStyle } from 'src/models/layout/CustomStyle';
import {
  binanceIcon,
  trustIcon,
  metamaskIcon,
  walletConnectIcon
} from 'src/models/layout/SampleData';

interface ParentProps {
  open: boolean;
  onClose: () => void;
}

const WalletDialog: React.FC<ParentProps> = ({ onClose, open }) => {
  const classes = WalletModalStyle();
  const { loginWallet } = useAuth();

  const handleClose = () => {
    isSetAccept(false);
    onClose();
  };

  // Accept terms of service and privacy policy state
  const [isAccept, isSetAccept] = useState<boolean>(false);
  const onHandleCheck = (event: any): void => {
    isSetAccept(event.target.checked);
  };
  // Binance network choose state
  const [isBinance, isSetBinance] = useState<boolean>(false);
  const onHandleBinanceClick = (): void => {
    isSetBinance((isBinance) => !isBinance);
  };
  // Trust wallet event
  const [isTrust, isSetTrust] = useState<boolean>(false);
  const onHandleTrustClick = (): void => {
    if (isAccept && isBinance) {
      isSetTrust((isTrust) => !isTrust);
      loginWallet(ConnectorNames.Injected);
      window.localStorage.setItem(
        connectorLocalStorageKey,
        ConnectorNames.Injected
      );
      handleClose();
    }
  };
  // Metamask wallet event
  const [isMetamask, isSetMetamask] = useState<boolean>(false);
  const onHandleMetamaskClick = (): void => {
    if (isAccept && isBinance) {
      isSetMetamask((isMetamask) => !isMetamask);
      loginWallet(ConnectorNames.Injected);
      window.localStorage.setItem(
        connectorLocalStorageKey,
        ConnectorNames.Injected
      );
      handleClose();
    }
  };
  // Wallet Connect event
  const [isWalletConnect, isSetWalletConnect] = useState<boolean>(false);
  const onHandleWalletConnectClick = (): void => {
    if (isAccept && isBinance) {
      isSetWalletConnect((isWalletConnect) => !isWalletConnect);
      loginWallet(ConnectorNames.WalletConnect);
      window.localStorage.setItem(
        connectorLocalStorageKey,
        ConnectorNames.WalletConnect
      );
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          maxWidth: '900px'
        }
      }}
    >
      <Box className={classes.outBoxStyle}>
        <CloseIcon className={classes.closeIconStyle} onClick={handleClose} />
        <Typography variant="h1" className={classes.headingTitle}>
          Connect Wallet
        </Typography>
        <Divider sx={{ border: '2px solid #323232' }} />
        <Box className={classes.innerBoxStyle}>
          <ColumnBox>
            <ColumnBox alignItems="flex-start">
              <Typography variant="h2" className={classes.itemTitle}>
                1. Accept Terms of Service and Privacy Policy
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      padding: '0 !important',
                      marginLeft: '34px !important',
                      color: '#EDEDED'
                    }}
                  />
                }
                onChange={onHandleCheck}
                label={
                  <Typography
                    variant="h2"
                    className={classes.checkBoxTitleStyle}
                  >
                    I read and accept
                  </Typography>
                }
                labelPlacement="end"
                sx={{
                  padding: '0 !important',
                  margin: '10px 0 0 0 !important'
                }}
              />
            </ColumnBox>

            <ColumnBox marginTop="30px" alignItems="flex-start">
              <Typography variant="h2" className={classes.itemTitle}>
                2. Choose Network
              </Typography>
              <ColumnBox
                marginTop="20px"
                width="auto"
                className={classes.outWalletIconStyle}
              >
                <Box className={!isAccept && classes.deActiveStyle}>
                  <Box
                    component="img"
                    src={binanceIcon.path}
                    alt={binanceIcon.name}
                    className={
                      isBinance
                        ? classes.walletBorderStyle
                        : classes.walletIconStyle
                    }
                    onClick={onHandleBinanceClick}
                  />
                  <Typography className={classes.walletTitle}>
                    Binance
                  </Typography>
                </Box>
              </ColumnBox>
            </ColumnBox>

            <ColumnBox marginTop="36px" alignItems="flex-start">
              <Typography variant="h2" className={classes.itemTitle}>
                3. Choose Wallet
              </Typography>
              <Box
                className={!(isAccept && isBinance) && classes.deActiveStyle}
              >
                <RowBox
                  marginTop="10px"
                  justifyContent="flex-start"
                  className={classes.outWalletIconStyle}
                >
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={trustIcon.path}
                      alt={trustIcon.name}
                      className={
                        isAccept && isBinance && isTrust
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleTrustClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Trust Wallet
                    </Typography>
                  </ColumnBox>
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={metamaskIcon.path}
                      alt={metamaskIcon.name}
                      className={
                        isAccept && isBinance && isMetamask
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleMetamaskClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Metamask
                    </Typography>
                  </ColumnBox>
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={walletConnectIcon.path}
                      alt={walletConnectIcon.name}
                      className={
                        isAccept && isBinance && isWalletConnect
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleWalletConnectClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Wallet Connect
                    </Typography>
                  </ColumnBox>
                </RowBox>
              </Box>
            </ColumnBox>

            <ColumnBox>
              <Typography variant="h3" className={classes.getWalletTitleStyle}>
                Haven’t got a crypto wallet?
              </Typography>
              <Hidden mdDown>
                <CustomButton
                  width="240px"
                  height="50px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="22px"
                  fontWeight="600"
                  marginTop="20px"
                  boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                  borderRadius="35px"
                >
                  Learn more
                </CustomButton>
              </Hidden>
              <Hidden mdUp>
                <CustomButton
                  width="140px"
                  height="30px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="14px"
                  fontWeight="600"
                  marginTop="20px"
                  boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                  borderRadius="20px"
                >
                  Learn more
                </CustomButton>
              </Hidden>
            </ColumnBox>
          </ColumnBox>
        </Box>
      </Box>
    </Dialog>
  );
};

WalletDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default WalletDialog;
