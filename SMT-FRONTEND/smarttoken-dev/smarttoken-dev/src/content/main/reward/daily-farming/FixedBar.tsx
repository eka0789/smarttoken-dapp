import { useState, useEffect } from 'react';
import { Box, Typography, Popover, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import AmountPopover from '../popover/add-popover/AmountPopover';
import ProceedPopover from '../popover/add-popover/ProceedPopover';
import SurePopover from '../popover/add-popover/SurePopover';

import HarvestPopover from '../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../popover/harvest-popover/ReceivePopover';
import HarvestSurePopover from '../popover/harvest-popover/SurePopover';
import { FixedBarStyles } from 'src/models/main/reward/CustomStyle';
import { useWeb3React } from '@web3-react/core';
import useFarmHarvest from 'src/hooks/useFarmHarvest';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { utils } from 'ethers';

const FixedBar = () => {
  const theme: Theme = useTheme();
  const classes = FixedBarStyles(theme);
  const { account } = useWeb3React();
  const { fetchFarmUserInfo, fetchEarned, fetchEarnedPassive } =
    useFarmHarvest();
  const { fetchLicense } = useSmartArmy();

  // ADD POPOVER FUNCTINOS
  const [isAddOpen, setAddOpen] = useState<boolean>(false);
  const onHandleAdd = (): void => {
    if (lStatus < 2) return;
    setAddOpen(true);
    setPopoverStatus({
      target: 'amount',
      value: 0
    });
  };
  const onHandleAddClose = (): void => {
    setAddOpen(false);
  };
  const [popoverStatus, setPopoverStatus] = useState({
    target: 'amount',
    value: 0
  });
  const onHandleAddNext = (value: string, smtVal: number = 0): void => {
    setPopoverStatus({
      target: value,
      value: smtVal
    });
  };

  // HARVEST POPOVER FUNCTIONS
  const [isHarvestOpen, setHarvestOpen] = useState<boolean>(false);
  const onHandleHarvest = (): void => {
    setHarvestOpen(true);
    setPopoverHarvestStatus({
      target: 'harvest',
      value: 0
    });
  };
  const onHandleHarvestClose = (): void => {
    setHarvestOpen(false);
  };

  const [popoverHarvestStatus, setPopoverHarvestStatus] = useState({
    target: 'harvest',
    value: 0
  });
  const onHandleHarvestNext = (value: string, smtVal: number): void => {
    setPopoverHarvestStatus({
      target: value,
      value: smtVal
    });
  };

  const [farmValue, setFarmValue] = useState('');
  const [harvestStatus, setHarvestStatus] = useState({
    harvested: '',
    remain: ''
  });
  const [lStatus, setLstatus] = useState<number>(0);

  useEffect(() => {
    async function init() {
      if (!account) return;
      let farmUserInfo = await fetchFarmUserInfo(account);
      let userStackedSmt = formatDecimalNumber(farmUserInfo.tokenBalance, 18);
      setFarmValue(userStackedSmt);

      let earnedPassive = await fetchEarnedPassive(account);
      let earned = await fetchEarned(account);
      setHarvestStatus({
        harvested: formatDecimalNumber('', 18),
        remain: formatDecimalNumber(earned, 18)
      });

      // check if licesen if activate
      let licenseInfo = await fetchLicense(account);
      setLstatus(licenseInfo.status);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <Box className={classes.customInnerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="19px 0 10px 0" height="100%">
              <Typography variant="h3" className={classes.farmedSmtStyle}>
                Your farmed SMT
              </Typography>
              <Typography className={classes.valueSmtStyle}>
                {farmValue} SMT
              </Typography>
              <Hidden mdDown>
                <CustomButton
                  width="auto"
                  padding="0 10px !important"
                  height="20px"
                  borderRadius="20px"
                  background={lStatus < 2 ? '#5A5A5A' : '#E0A501'}
                  color={lStatus < 2 ? '#EDEDED' : '#212121'}
                  fontSize="12px"
                  fontWeight="400"
                  onHandleClick={onHandleAdd}
                >
                  {lStatus < 2 ? 'Activate License' : 'Add'}
                </CustomButton>
              </Hidden>
              <Hidden mdUp>
                <CustomButton
                  width="70px"
                  height="20px"
                  borderRadius="20px"
                  background={lStatus < 2 ? '#5A5A5A' : '#E0A501'}
                  color={lStatus < 2 ? '#EDEDED' : '#212121'}
                  fontSize="12px"
                  fontWeight="400"
                  onHandleClick={onHandleAdd}
                >
                  {lStatus === 2 ? 'Add' : 'Activate License'}
                </CustomButton>
              </Hidden>
            </ColumnBox>
          </CustomCard>
        </Box>

        <Box className={classes.customInnerBoxBottomStyle}>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard
              width="100%"
              height="100%"
              background="#E0A501"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
              border="none"
            >
              <Box className={classes.customHarvestProgressOutBoxStyle}>
                <Box className={classes.harverstProgressInnerBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harverstTitleStyle}
                  >
                    Not-harvested / Harvested Reward {harvestStatus.remain} / 10
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  className={classes.harvestButtonTitle}
                  onClick={onHandleHarvest}
                >
                  Harvest
                </Typography>
              </Box>
            </CustomCard>
          </Box>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard width="100%" height="100%">
              <RowBox height="100%">
                <Box className={classes.remainingSmtCusotmBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harverstTitleStyle}
                    color="#212121"
                  >
                    Remaining SMT in Farming Supply 5,000,000 / 6,000,000 (4
                    years)
                  </Typography>
                </Box>
              </RowBox>
            </CustomCard>
          </Box>
        </Box>
      </Box>

      {/* ADD POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isAddOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {popoverStatus.target === 'amount' ? (
          <AmountPopover
            onHandleAddClose={onHandleAddClose}
            onHandleAddNext={(value, smtVal) => onHandleAddNext(value, smtVal)}
          />
        ) : popoverStatus.target === 'proceed' ? (
          <ProceedPopover
            onHandleAddClose={onHandleAddClose}
            onHandleAddNext={(value, smtVal) => onHandleAddNext(value, smtVal)}
            smtVal={popoverStatus.value}
          />
        ) : (
          <SurePopover
            onHandleAddClose={onHandleAddClose}
            smtVal={popoverStatus.value}
          />
        )}
      </Popover>

      {/* HARVEST POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isHarvestOpen}
        PaperProps={{
          style: {
            width: '100%',
            boxShadow: 'none'
          }
        }}
      >
        {popoverHarvestStatus.target === 'harvest' ? (
          <HarvestPopover
            onHandleHarvestClose={onHandleHarvestClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleHarvestNext(value, smtVal)
            }
            title="daily"
          />
        ) : popoverHarvestStatus.target === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleHarvestClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleHarvestNext(value, smtVal)
            }
            smtVal={popoverHarvestStatus.value}
            title="daily"
          />
        ) : (
          <HarvestSurePopover
            onHandleHarvestClose={onHandleHarvestClose}
            smtVal={popoverHarvestStatus.value}
          />
        )}
      </Popover>
    </>
  );
};

export default FixedBar;
