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
import { NobleStyle } from 'src/models/main/reward/CustomStyle';
import useRewards from 'src/hooks/useRewards';
import useGoldenTree from 'src/hooks/useGoldenTree';
import { useWeb3React } from '@web3-react/core';
import { PortionInfo } from 'src/utils/nobilityInfo';
import { utils } from 'ethers';
import { formatDecimalNumber } from 'src/utils/formatBalance';

const Noble = () => {
  const theme: Theme = useTheme();
  const classes = NobleStyle(theme);
  const { account } = useWeb3React();
  const { fetchNobilityTitle, fetchNobleRewardAmount } = useRewards();
  const { fetchGlobalGrowth } = useGoldenTree();

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

  // const [nobleTitle, setNobleTitle] = useState<string>('');
  const [portion, setPortion] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [globalGrowth, setGlobalGrowth] = useState<string>('');
  const [nobleRewards, setNobleRewards] = useState({
    harvested: '',
    notHarvested: ''
  });

  useEffect(() => {
    async function init() {
      if (!account) return;
      let nobilityTitle = await fetchNobilityTitle(account);
      let globalGrowth = await fetchGlobalGrowth();
      let nobleRewardsAmount = await fetchNobleRewardAmount(account);
      let intGlobalGrowth = utils.formatEther(globalGrowth);
      if (nobleRewardsAmount) {
        setNobleRewards({
          notHarvested: formatDecimalNumber(nobleRewardsAmount[1], 18),
          harvested: formatDecimalNumber(nobleRewardsAmount[0], 18)
        });
      } else {
        setNobleRewards({
          notHarvested: formatDecimalNumber('0', 18),
          harvested: formatDecimalNumber('0', 18)
        });
      }
      setGlobalGrowth(intGlobalGrowth);
      setPortion(PortionInfo[nobilityTitle] ? PortionInfo[nobilityTitle] : 0);
      // setNobleTitle(nobilityTitle);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <CustomCard width="25%" height="100%">
          <ColumnBox padding="7px 10px" height="100%">
            <Typography variant="h4" className={classes.cardHeadingStyle}>
              Portion
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitleStyle}>
              {portion}x
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
            <RowBox padding="0 23px 0 30px" height="100%">
              <Box className={classes.progressInnerBox}>
                <Typography variant="h4" className={classes.progressTitle}>
                  Claimed / Unclaimed amount {nobleRewards.harvested} SMTC /{' '}
                  {nobleRewards.notHarvested} SMTC
                </Typography>
              </Box>
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
            title="noble"
          />
        ) : popoverClaimStatus.target === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleClaimClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleClaimNext(value, smtVal)
            }
            smtVal={popoverClaimStatus.value}
            title="noble"
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

export default Noble;
