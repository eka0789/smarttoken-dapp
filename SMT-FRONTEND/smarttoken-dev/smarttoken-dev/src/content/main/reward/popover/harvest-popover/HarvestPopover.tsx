import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import RowBox from 'src/components/Box/RowBox';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';
import { HarvestPopoverStyle } from 'src/models/main/reward/CustomStyle';
import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { calculatePercent } from 'src/utils/percent';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import useRewards from 'src/hooks/useRewards';
import { utils } from 'ethers';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleHarvestClose: (e: React.MouseEvent) => void;
  onHandleHarvestNext: (value: string, smtVal: number) => void;
  title: string;
}

const percentValues = ['10%', '25%', '50%', '75%', '100%'];

const HarvestPopover = (props: ParentProps) => {
  const theme: Theme = useTheme();
  const classes = HarvestPopoverStyle(theme);
  const { account, chainId } = useWeb3React();
  const {
    fetchNobleRewardAmount,
    fetchFarmerRewardAmount,
    fetchPassiveRewardsAmount,
    fetchSellRewardsAmount,
    fetchQuestRewards
  } = useRewards();

  const [smtVal, setSmtVal] = useState<string>('');
  const [harvestVal, setHarvestVal] = useState<string>('');
  const [farmPercent, setFarmPercent] = useState(0);

  const onHandleChange = (e) => {
    setSmtVal(e.target.value);
    setFarmPercent((parseFloat(e.target.value) / parseFloat(harvestVal)) * 100);
  };

  const onHandleHarvest = useCallback(() => {
    if (!smtVal || Number(smtVal) === 0) {
      toast.error('Please input an amount');
      return;
    }
    if (parseFloat(harvestVal) < parseFloat(smtVal)) {
      toast.error('Not enough balance');
      return;
    }
    props.onHandleHarvestNext('receive', Number(smtVal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [smtVal]);

  useEffect(() => {
    async function init() {
      if (!account) return;

      switch (props.title) {
        case 'daily':
          let smtFarmingContract = await getContract('SmartFarm', chainId);
          let rewards = await smtFarmingContract.earned(account);
          setHarvestVal(formatDecimalNumber(rewards, 18));
          break;
        case 'sell':
          let sellRewardsInfo = await fetchSellRewardsAmount(account);
          if (sellRewardsInfo) {
            setHarvestVal(formatDecimalNumber(sellRewardsInfo[1], 18));
          } else {
            setHarvestVal(formatDecimalNumber('0', 18));
          }
          break;
        case 'farmer':
          let farmerRewardsAmount = await fetchFarmerRewardAmount(account);
          if (farmerRewardsAmount) {
            setHarvestVal(formatDecimalNumber(farmerRewardsAmount[1], 18));
          } else {
            setHarvestVal(formatDecimalNumber('0', 18));
          }
          break;
        case 'passive':
          let passiveRewardsAmount = await fetchPassiveRewardsAmount(account);
          if (passiveRewardsAmount) {
            setHarvestVal(formatDecimalNumber(passiveRewardsAmount[1], 18));
          } else {
            setHarvestVal(formatDecimalNumber('0', 18));
          }
          break;
        case 'noble':
          let nobleRewardsAmount = await fetchNobleRewardAmount(account);
          if (nobleRewardsAmount) {
            setHarvestVal(formatDecimalNumber(nobleRewardsAmount[1], 18));
          } else {
            setHarvestVal(formatDecimalNumber('0', 18));
          }
          break;
        case 'quest': {
          const questRewards = await fetchQuestRewards(account);
          if (questRewards) {
            setHarvestVal(String(questRewards.unclaimed));
          } else {
            setHarvestVal(formatDecimalNumber('0', 18));
          }
          break;
        }
        default:
          smtFarmingContract = await getContract('SmartFarm', chainId);
          rewards = await smtFarmingContract.rewardsOf(account);
          setHarvestVal(utils.formatEther(rewards));
          break;
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <Box className={classes.outBoxStyle}>
      <CloseIcon
        onClick={props.onHandleHarvestClose}
        className={classes.closeIconStyle}
      />
      <Typography variant="h2" className={classes.headingTitle}>
        Enjoy your rewards!
      </Typography>
      <Divider
        sx={{
          border: '2px solid #323232'
        }}
      />
      <Box className={classes.innerBoxStyle}>
        <Typography variant="h3" className={classes.contentHeadingTitle}>
          How much do you want to harvest?
        </Typography>
        <RowBox marginTop="20px">
          <Box className={classes.cardBoxStyle}>
            <CustomCard
              width="100%"
              height="100%"
              background={theme.colors.gradients.grey}
              border="none"
            >
              <Box className={classes.cardInnerBoxStyle}>
                <Typography variant="h4" className={classes.cardHeadingStyle}>
                  Harvestable amount
                </Typography>
                <Typography className={classes.cardContentTitleStyle}>
                  {harvestVal}
                </Typography>
                <Typography
                  variant="h4"
                  color="#E0A501"
                  fontWeight="700"
                  className={classes.cardHeadingStyle}
                >
                  {props.title === 'noble' || props.title === 'farmer'
                    ? 'SMTC'
                    : 'SMT'}
                </Typography>
              </Box>
            </CustomCard>
          </Box>
          <Box width="57%" display="flex" flexDirection="column">
            <FormControl
              variant="outlined"
              className={classes.searchCustomStyle}
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                placeholder="990"
                className={classes.innerInputStyle}
                value={smtVal}
                onChange={onHandleChange}
              />
              <Typography variant="h3" className={classes.innerInputTitleStyle}>
                {props.title === 'noble' || props.title === 'farmer'
                  ? 'SMTC'
                  : 'SMT'}
              </Typography>
            </FormControl>
            <Hidden mdDown>
              <RowBox marginTop="10px">
                {percentValues.map((con, idx) => (
                  <CustomTitle
                    key={idx}
                    title={con}
                    background={calculatePercent(farmPercent, con)}
                    borderRadius="20px"
                    padding="8px 12px"
                    color="#EDEDED"
                    fontSize="14px"
                  />
                ))}
              </RowBox>
            </Hidden>
            <Hidden mdUp>
              <RowBox marginTop="10px">
                {percentValues.map((con, idx) => (
                  <CustomTitle
                    key={idx}
                    title={con}
                    background={calculatePercent(farmPercent, con)}
                    borderRadius="20px"
                    padding="5px"
                    color="#EDEDED"
                    fontSize="8px"
                  />
                ))}
              </RowBox>
            </Hidden>
          </Box>
        </RowBox>
        <Typography variant="h4" className={classes.noteStyle}>
          *standard BSC fee will be charged
        </Typography>
        <Hidden mdDown>
          <RowBox marginTop="48px" height="50px">
            <CustomButton
              width="240px"
              height="100%"
              background="#E0A501"
              color="#212121"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={onHandleHarvest}
            >
              Harvest
            </CustomButton>
            <CustomButton
              width="240px"
              height="100%"
              background="#936900"
              color="#FFFFFF"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleHarvestClose}
            >
              Cancel
            </CustomButton>
          </RowBox>
        </Hidden>
        <Hidden mdUp>
          <RowBox justifyContent="space-around" marginTop="29px" height="30px">
            <CustomButton
              width="150px"
              height="100%"
              background="#E0A501"
              color="#212121"
              fontSize="13px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={onHandleHarvest}
            >
              Harvest
            </CustomButton>
            <CustomButton
              width="150px"
              height="100%"
              background="#936900"
              color="#FFFFFF"
              fontSize="13px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleHarvestClose}
            >
              Cancel
            </CustomButton>
          </RowBox>
        </Hidden>
      </Box>
    </Box>
  );
};

export default HarvestPopover;
