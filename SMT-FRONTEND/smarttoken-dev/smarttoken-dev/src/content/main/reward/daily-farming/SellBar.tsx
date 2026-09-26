import { useState, useEffect } from 'react';
import { Box, Typography, Popover } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';

import HarvestPopover from '../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../popover/harvest-popover/ReceivePopover';
import HarvestSurePopover from '../popover/harvest-popover/SurePopover';

import { SellBarStyle } from 'src/models/main/reward/CustomStyle';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { useWeb3React } from '@web3-react/core';
import useSmartArmy from 'src/hooks/useSmartArmy';
import useRewards from 'src/hooks/useRewards';
import { formatDecimalNumber } from 'src/utils/formatBalance';

const SellBar = () => {
  const theme: Theme = useTheme();
  const classes = SellBarStyle(theme);
  const { account } = useWeb3React();
  const { fetchLicense } = useSmartArmy();
  const { fetchSellRewardsAmount } = useRewards();

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
  const onHandleHarvestNext = (value: string, amount: number): void => {
    setPopoverHarvestStatus({
      target: value,
      value: amount
    });
  };

  const [sellPortion, setSellPortion] = useState<number>(0);
  const [userAmount, setUserAmount] = useState({
    harvested: '',
    notHarvested: ''
  });

  useEffect(() => {
    async function init() {
      if (!account) return;
      let licenseInfo = await fetchLicense(account);
      let licenseLevel = licenseInfo.level.toString();
      if (licenseLevel) {
        switch (licenseLevel) {
          case 1:
            setSellPortion(0);
            break;
          case 2:
            setSellPortion(1);
            break;
          case 3:
            setSellPortion(2);
            break;
          case 4:
            setSellPortion(4);
            break;
          default:
            setSellPortion(0);
            break;
        }

        let sellRewardsInfo = await fetchSellRewardsAmount(account);
        if (sellRewardsInfo) {
          setUserAmount({
            harvested: formatDecimalNumber(sellRewardsInfo[1], 18),
            notHarvested: formatDecimalNumber(sellRewardsInfo[0], 18)
          });
        } else {
          setUserAmount({
            harvested: formatDecimalNumber('0', 18),
            notHarvested: formatDecimalNumber('0', 18)
          });
        }
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <Box className={classes.firstCardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.cardInnerBoxStyle}>
              <Typography variant="h3" className={classes.customCardTitle}>
                Sell tax portion
              </Typography>
              <Typography className={classes.customCareNumTitle}>
                {sellPortion}x
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>

        <ColumnBox className={classes.cardInnerBoxStyle1}>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard
              width="100%"
              height="100%"
              background="#E0A501"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
              border="none"
            >
              <RowBox padding="0 11px" height="100%">
                <Box className={classes.harvestBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harvestTitleStyle}
                  >
                    Not-harvested / Harvested Reward {userAmount.harvested} / {userAmount.notHarvested}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  className={classes.harvestButtonTitleStyle}
                  onClick={onHandleHarvest}
                >
                  Harvest
                </Typography>
              </RowBox>
            </CustomCard>
          </Box>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard width="100%" height="100%">
              <RowBox height="100%">
                <Box width="35%" paddingLeft="10px">
                  <Typography
                    variant="h4"
                    component="span"
                    className={classes.harvestTitleStyle}
                  >
                    Your global portion of sell tax:
                  </Typography>
                  <Typography
                    component="span"
                    variant="h4"
                    color="#E0A501"
                    marginLeft="5px"
                    className={classes.harvestTitleStyle}
                  >
                    6%
                  </Typography>
                </Box>
                <ColumnBox width="65%" height="100%">
                  <Box
                    sx={{
                      height: '50%',
                      width: '100%',
                      background: '#5A5A5A',
                      borderTopRightRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 10px'
                    }}
                  >
                    <Typography
                      variant="h4"
                      className={classes.harvestTitleStyle}
                    >
                      Today’s distribution:
                    </Typography>
                    <Typography
                      variant="h4"
                      className={classes.harvestTitleStyle}
                    >
                      1,000 SMT
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: '50%',
                      width: '100%',
                      background:
                        'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
                      borderBottomRightRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 10px'
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="#212121"
                      className={classes.harvestTitleStyle}
                    >
                      Total distributed:
                    </Typography>
                    <Typography
                      variant="h4"
                      color="#212121"
                      className={classes.harvestTitleStyle}
                    >
                      100,000 SMT
                    </Typography>
                  </Box>
                </ColumnBox>
              </RowBox>
            </CustomCard>
          </Box>
        </ColumnBox>
      </Box>

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
            onHandleHarvestNext={(value, amount) =>
              onHandleHarvestNext(value, amount)
            }
            title="sell"
          />
        ) : popoverHarvestStatus.target === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleHarvestClose}
            onHandleHarvestNext={(value, amount) =>
              onHandleHarvestNext(value, amount)
            }
            smtVal={popoverHarvestStatus.value}
            title="sell"
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

export default SellBar;
