import { useState, useEffect } from 'react';
import { Box, Typography, Divider, Popover } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import ClaimPopover from '../../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../../popover/harvest-popover/ReceivePopover';
import SurePopover from '../../popover/harvest-popover/SurePopover';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { BorderLinearProgress } from 'src/models/main/reward/StyledStyle';
import { FarmerStyle } from 'src/models/main/reward/CustomStyle';
import { useWeb3React } from '@web3-react/core';
import useRewards from 'src/hooks/useRewards';
import useFarmHarvest from 'src/hooks/useFarmHarvest';
import useGoldenTree from 'src/hooks/useGoldenTree';
import { formatDecimalNumber } from 'src/utils/formatBalance';

const Farmer = () => {
  const theme: Theme = useTheme();
  const classes = FarmerStyle(theme);
  const { account } = useWeb3React();
  const { fetchFarmerRewardAmount } = useRewards();
  const { fetchFarmUserInfo } = useFarmHarvest();

  // HARVEST POPOVER FUNCTIONS
  const [isClaimOpen, setClaimOpen] = useState<boolean>(false);
  const onHandleClaim = (): void => {
    setClaimOpen(true);
    setPopoverClaimStatus({
      ...popoverClaimStatus,
      target: 'claim'
    });
  };
  const onHandleClaimClose = (): void => {
    setClaimOpen(false);
  };

  const [popoverClaimStatus, setPopoverClaimStatus] = useState<any>({
    target: 'claim',
    value: 0
  });
  const onHandleClaimNext = (value: string, smtVal: number): void => {
    setPopoverClaimStatus({
      target: value,
      value: smtVal
    });
  };

  const [farmRewards, setFarmRewards] = useState({
    harvested: '',
    notHarvested: ''
  });
  const [farmedAmount, setFarmedAmount] = useState<string>('0');

  useEffect(() => {
    async function init() {
      if (!account) return;
      let amount = await fetchFarmerRewardAmount(account);
      if (amount) {
        setFarmRewards({
          notHarvested: formatDecimalNumber(amount[1], 18),
          harvested: formatDecimalNumber(amount[0], 18)
        });
      } else {
        setFarmRewards({
          notHarvested: formatDecimalNumber('0', 18),
          harvested: formatDecimalNumber('0', 18)
        });
      }
      // let farmUserInfo = await fetchFarmUserInfo(account);
      // let userStackedSmt = formatDecimalNumber(farmUserInfo.tokenBalance, 18);
      // setFarmedAmount(userStackedSmt);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <CustomCard width="28%" height="100%">
          <ColumnBox padding="7px" height="100%">
            <Typography variant="h4" className={classes.cardHeadingStyle}>
              Farming amount
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitleStyle}>
              {farmedAmount}
            </Typography>
            <Typography
              variant="h4"
              className={classes.cardHeadingStyle}
              color="#E0A501"
              fontWeight="700"
            >
              SMT
            </Typography>
            <Divider
              sx={{
                border: '2px solid #323232',
                width: '100%',
                marginBottom: '7px'
              }}
            />
            <Typography variant="h4" className={classes.cardHeadingStyle}>
              Global Share
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitleStyle}>
              7%
            </Typography>
          </ColumnBox>
        </CustomCard>

        <ColumnBox width="75%" height="100%" paddingLeft="10px">
          <CustomCard height="50%" width="100%">
            <BorderLinearProgress variant="determinate" value={90} />
            <RowBox justifyContent="center" padding="6px">
              <Typography variant="h4" className={classes.progressTitle}>
                30 Growth remaining to pass
              </Typography>
            </RowBox>
          </CustomCard>

          <CustomCard
            width="100%"
            height="43%"
            background="#E0A501"
            boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
            border="none"
          >
            <RowBox paddingRight="23px" height="100%">
              <Typography variant="h4" className={classes.progressTitle1}>
                Claimed / Unclaimed amount {farmRewards.harvested} SMTC /{' '}
                {farmRewards.notHarvested} SMTC
              </Typography>
              <Box className={classes.progressInnerBox} />
              <Typography
                variant="h3"
                className={classes.claimTitleStyle}
                onClick={onHandleClaim}
              >
                Claim
              </Typography>
            </RowBox>
          </CustomCard>
        </ColumnBox>
      </RowBox>

      {/* Claim POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isClaimOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {popoverClaimStatus.target === 'claim' ? (
          <ClaimPopover
            onHandleHarvestClose={onHandleClaimClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleClaimNext(value, smtVal)
            }
            title="farmer"
          />
        ) : popoverClaimStatus.target === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleClaimClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleClaimNext(value, smtVal)
            }
            smtVal={popoverClaimStatus.value}
            title="farmer"
          />
        ) : (
          <SurePopover
            onHandleHarvestClose={onHandleClaimClose}
            smtVal={popoverClaimStatus.value}
          />
        )}
      </Popover>
    </>
  );
};

export default Farmer;
