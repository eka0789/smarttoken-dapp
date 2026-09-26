import { useState, useRef, useEffect } from 'react';
import { Box, Popover, Typography } from '@mui/material';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import CustomProgress from './popover-group/CustomProgress';

// Exchange Popover Components Import
import ExchangeIntroducePopover from './popover-group/exchange/IntroducePopover';
import ExchangeConfirmPopover from './popover-group/exchange/ConfirmPopover';
import ExchangeFinalPopover from './popover-group/exchange/FinalPopover';

// No Balance Components Import
import NoBalanceFinalPopover from './popover-group/no-balance/FinalPopover';

// Upgrade now Popover Componetns Import
import UpgradePopover from './popover-group/upgrade/UpgradePopover';
import GotPopover from './popover-group/upgrade/GotPopover';
import ThankPopover from './popover-group/upgrade/ThankPopover';

// Active/(Liquidate/Extend) Popover Components Import
import ChoosePopover from './popover-group/active/ChoosePopover';
import LiqStartPopover from './popover-group/active/LiqStartPopover';
import LiqNowPopover from './popover-group/active/LiqNowPopover';
import LiqGotPopover from './popover-group/active/LiqGotPopover';

import ExtNowPopover from './popover-group/active/ExtNowPopover';
import ExtThankPopover from './popover-group/active/ExtThankPopover';

// Custom Style Import
import { SmartArmyStyle } from 'src/models/main/smart-army/CustomStyle';
// Sample Data Import
import {
  menuLists,
  licenseDetail
} from 'src/models/main/smart-army/SampleData';
import { TRIAL, OPPORTUNIST, RUNNER, VISIONARY } from 'src/utils/licenseInfo';

import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { getRealValue } from 'src/utils/formatBalance';
import { utils } from 'ethers';

const LicenseMenu = () => {
  const classes = SmartArmyStyle();
  const timer: any = useRef();
  const { account, chainId } = useWeb3React();
  const [licenseStatus, setLicenseStatus] = useState({
    licenseName: '',
    licenseTime: '',
    licenseLevel: 0
  });
  const [curLicenseName, setCurLicenseName] = useState(TRIAL);
  const [isActive, setIsActive] = useState(false);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [desireLicense, setDesireLicense] = useState<string>('');

  /** Timer clear */
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  /** Get license info */
  useEffect(() => {
    async function getLicenseInfo() {
      if (!account) return;
      const smartArmyContract = await getContract('SmartArmy', chainId);
      let licenseInfo = await smartArmyContract.licenseOf(account);
      let licenseLevel = getRealValue(licenseInfo.level, 18);
      let licenseName = 'null';
      switch (licenseLevel) {
        case 0:
          licenseName = 'null';
          break;
        case 1:
          licenseName = TRIAL;
          break;
        case 2:
          licenseName = OPPORTUNIST;
          break;
        case 3:
          licenseName = RUNNER;
          break;
        case 4:
          licenseName = VISIONARY;
          break;
        default:
          licenseName = 'null';
          break;
      }
      setLicenseStatus({
        ...licenseStatus,
        licenseName,
        licenseTime: 'start',
        licenseLevel
      });
      const smartTokenContract = await getContract('SmartToken', chainId);
      let balance = await smartTokenContract.balanceOf(account);
      setUserBalance(parseFloat(utils.formatEther(balance)));
    }
    getLicenseInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const getLicenseButton = (licenseName: string, number: number): string => {
    let level = 0;
    switch (licenseName) {
      case TRIAL:
        level = 1;
        break;
      case OPPORTUNIST:
        level = 2;
        break;
      case RUNNER:
        level = 3;
        break;
      case VISIONARY:
        level = 4;
        break;
      default:
        level = 1;
        break;
    }
    if (
      licenseStatus.licenseName === licenseName &&
      licenseStatus.licenseTime === 'start'
    ) {
      return 'Locked';
    } else if (
      licenseStatus.licenseName === licenseName &&
      licenseStatus.licenseTime === 'end'
    ) {
      return 'Active';
    } else if (
      (licenseStatus.licenseLevel === number &&
        licenseStatus.licenseLevel !== 0) ||
      (licenseStatus.licenseLevel < level && licenseStatus.licenseLevel !== 0)
    ) {
      return 'Upgrade now';
    } else {
      return 'Exchange';
    }
  };

  // Progress setting
  const [isProgress, setProgress] = useState(false);
  const onHandleProgressClick = (): void => {
    setProgress(true);
  };
  const onHandleProgressClose = (): void => {
    setProgress(false);
  };

  // No Balance setting
  const [isNoBalance, setIsNoBalance] = useState<boolean>(false);
  const onHandleNoBalanceClick = (): void => {
    setIsNoBalance(true);
  };
  const onHandleNoBalanceClose = (): void => {
    setIsNoBalance(false);
  };

  // Exchange progress
  const [isExchange, setIsExchange] = useState<boolean>(false);
  const onHandleExchangeClick = (licenseName): void => {
    setDesireLicense(licenseName);
    setExchangeStatus('trial_introduce');
    setIsExchange(true);
  };
  const onHandleExchangeClose = (): void => {
    setIsExchange(false);
  };
  const [exchangeStatus, setExchangeStatus] =
    useState<string>('trial_introduce');
  const onHandleExchangeNext = (value: string): void => {
    setExchangeStatus(value);
  };

  // Liquidate progress
  const [isLiquidate, setIsLiquidate] = useState<boolean>(false);
  const onHandleLiquidateClick = (licenseName): void => {
    setLiquidateStatus('runner_choose');
    setIsLiquidate(true);
  };
  const onHandleLiquidateClose = (): void => {
    setIsLiquidate(false);
  };
  const [liquidateStatus, setLiquidateStatus] =
    useState<string>('runner_choose');
  const onHandleLiquidateNext = (e: any, value: string): void => {
    setLiquidateStatus(value);
  };

  // Upgrade now progress
  const [isUpgrade, setIsUpgrade] = useState<boolean>(false);
  const onHandleUpgradeClick = (licenseName): void => {
    setUpgradeStatus('visionary_upgrade');
    setDesireLicense(licenseName);
    setIsUpgrade(true);
  };
  const onHandleUpgradeClose = (): void => {
    setIsUpgrade(false);
  };
  const [upgradeStatus, setUpgradeStatus] =
    useState<string>('visionary_upgrade');
  const onHandleUpgradeNext = (e: any, value: string): void => {
    setUpgradeStatus(value);
  };

  // When button is Active event
  const onHandleActive = (licenseName) => {
    setIsActive(true);
  };

  const openModal = (licenseType: string, licenseName: string) => {
    if (licenseType === 'Liquidate') {
      onHandleLiquidateClick(licenseName);
      return;
    }
    if (!isProgress) {
      onHandleProgressClick();
      timer.current = window.setTimeout(async () => {
        onHandleProgressClose();
        if (Number(licenseDetail[licenseName].require) > userBalance) {
          onHandleNoBalanceClick();
          return;
        }
        switch (licenseType) {
          case 'Exchange':
            onHandleExchangeClick(licenseName);
            break;
          case 'Upgrade now':
            onHandleUpgradeClick(licenseName);
            break;
          default:
            onHandleLiquidateClick(licenseName);
            break;
        }
      }, 2000);
    }
  };

  // When button is Liquidate/Extend event
  const onHandleLiquidate = (licenseName) => {
    openModal('Liquidate', licenseName);
  };

  // When button is Exchange event
  const onHandleExchange = (licenseName) => {
    openModal('Exchange', licenseName);
  };

  // When button is Upgrade now event
  const onHandleUpgrade = (licenseName) => {
    openModal('Upgrade now', licenseName);
  };

  // INITIAL BUTTON CLICK
  const onHandleClick = (lscName: string, lscType: string) => {
    setCurLicenseName(lscName);
    switch (lscType) {
      case 'Locked':
        return;
      case 'Active':
        onHandleActive(lscName);
        return;
      case 'Exchange':
        onHandleExchange(lscName);
        break;
      case 'Upgrade now':
        onHandleUpgrade(lscName);
        break;
      default:
        onHandleLiquidate(lscName);
        break;
    }
  };

  // Exchange progress list
  const ExchangeProgress = {
    trial_introduce: (
      <ExchangeIntroducePopover
        onHandleTrialNext={(value) => onHandleExchangeNext(value)}
        onHandleTrialClose={onHandleExchangeClose}
        licenseName={desireLicense}
      />
    ),
    trial_confirm: (
      <ExchangeConfirmPopover
        onHandleTrialNext={(value) => onHandleExchangeNext(value)}
        onHandleTrialClose={onHandleExchangeClose}
        licenseName={curLicenseName}
      />
    ),
    trial_final: (
      <ExchangeFinalPopover onHandleTrialClose={onHandleExchangeClose} />
    )
  };

  // Upgrade progress list
  const UpgradeProgress = {
    visionary_upgrade: (
      <UpgradePopover
        onHandleVisionaryNext={(e, value) => onHandleUpgradeNext(e, value)}
        onHandleVisionaryClose={onHandleUpgradeClose}
        desireLicense={desireLicense}
        curLicense={licenseStatus.licenseName}
      />
    ),
    visionary_got: (
      <GotPopover
        onHandleVisionaryNext={(e, value) => onHandleUpgradeNext(e, value)}
        onHandleVisionaryClose={onHandleUpgradeClose}
      />
    ),
    visionary_thank: (
      <ThankPopover onHandleVisionaryClose={onHandleUpgradeClose} />
    )
  };

  // Liquidate/Extends progress list
  const LiquidateProgress = {
    runner_choose: (
      <ChoosePopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_start: (
      <LiqStartPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_now: (
      <LiqNowPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_got: <LiqGotPopover onHandleLiquidateClose={onHandleLiquidateClose} />,
    ext_now: (
      <ExtNowPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    ext_thank: (
      <ExtThankPopover onHandleLiquidateClose={onHandleLiquidateClose} />
    )
  };

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        {menuLists.map((con, idx) => (
          <Box key={idx} className={classes.customInnerBoxStyle}>
            <CustomCard>
              <Box className={classes.customCardBoxStyle}>
                {getLicenseButton(con.name, idx) === 'Active' && isActive && (
                  <Typography
                    variant="h4"
                    sx={{
                      position: 'absolute',
                      top: '5px'
                    }}
                  >
                    Grace period
                  </Typography>
                )}
                <Box
                  component="img"
                  src={con.path}
                  alt={con.name}
                  width="100%"
                  height="283px"
                />
                <CustomButton
                  width="160px"
                  height="30px"
                  background={
                    getLicenseButton(con.name, idx) === 'Locked'
                      ? '#5A5A5A'
                      : '#E0A501'
                  }
                  color="#212121"
                  fontSize="14px"
                  fontWeight="600"
                  borderRadius="20px"
                  boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                  title={
                    getLicenseButton(con.name, idx) === 'Active' && isActive
                      ? 'Liquidate/Extend'
                      : getLicenseButton(con.name, idx)
                  }
                  onHandleClick={() =>
                    onHandleClick(
                      con.name,
                      getLicenseButton(con.name, idx) === 'Active' && isActive
                        ? 'Liquidate/Extend'
                        : getLicenseButton(con.name, idx)
                    )
                  }
                />
              </Box>
            </CustomCard>
          </Box>
        ))}
      </Box>

      <Popover
        anchorReference="none"
        classes={{
          root: classes.popoverRoot
        }}
        open={
          isProgress || isLiquidate || isExchange || isUpgrade || isNoBalance
        }
        PaperProps={{
          style: {
            boxShadow: 'none'
          }
        }}
      >
        {isProgress && <CustomProgress />}
        {isLiquidate && LiquidateProgress[liquidateStatus]}
        {isExchange && ExchangeProgress[exchangeStatus]}
        {isUpgrade && UpgradeProgress[upgradeStatus]}
        {isNoBalance && (
          <NoBalanceFinalPopover onHandleOppClose={onHandleNoBalanceClose} />
        )}
      </Popover>
    </>
  );
};

export default LicenseMenu;
