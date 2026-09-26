import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomCard from 'src/components/Card';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import RowBox from 'src/components/Box/RowBox';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';
import MultiTabButton from 'src/components/MultiTab';
import { HarvestPopoverStyle } from 'src/models/main/reward/CustomStyle';
import { calculatePercent } from 'src/utils/percent';
import { useWeb3React } from '@web3-react/core';
import useRewards from 'src/hooks/useRewards';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleClaimClose: (e: React.MouseEvent) => void;
  onHandleClaimNext: (value: string, amount: number) => void;
  rewardTitle: string;
}

const percentValues = ['10%', '25%', '50%', '75%', '100%'];

const DoubleClaimPopover = (props: ParentProps) => {
  const theme: Theme = useTheme();
  const classes = HarvestPopoverStyle(theme);
  const { account } = useWeb3React();
  const {
    fetchChestSMTRewards,
    fetchChestSMTCRewards,
    fetchSurpriseSMTRewards,
    fetchSurpriseSMTCRewards
  } = useRewards();

  const [tabValue, tabSetState] = useState<string>('Claim SMT');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

  const [harvestableAmount, setHarvestableAmount] = useState<string>('');
  const [claimAmount, setClaimAmount] = useState<string>('');
  const [percent, setPercent] = useState<number>(0);
  const onHandleChange = (e) => {
    setClaimAmount(e.target.value);
    setPercent(
      Number(parseFloat(claimAmount) / parseFloat(harvestableAmount)) * 100
    );
  };

  const onHandleClaim = () => {
    if (Number(harvestableAmount) - Number(claimAmount) < 0) {
      toast.error('Not enough value');
      return;
    }
    if (!Number(claimAmount)) {
      toast.error('Please input the value you want to harvest');
      return;
    }
    tabValue === 'Claim SMT'
      ? props.onHandleClaimNext('SMT', Number(claimAmount))
      : props.onHandleClaimNext('SMTC', Number(claimAmount));
  };

  useEffect(() => {
    async function init() {
      if (!account) return;
      if (props.rewardTitle === 'chest') {
        if (tabValue === 'Claim SMT') {
          let chestSMTAmount = await fetchChestSMTRewards(account);
          setHarvestableAmount(formatDecimalNumber(chestSMTAmount, 18));
        } else {
          let chestSMTCAmount = await fetchChestSMTCRewards(account);
          setHarvestableAmount(formatDecimalNumber(chestSMTCAmount, 18));
        }
      } else {
        if (tabValue === 'Claim SMT') {
          let surSMTAmount = await fetchSurpriseSMTRewards(account);
          setHarvestableAmount(formatDecimalNumber(surSMTAmount, 18));
        } else {
          let surSMTCAmount = await fetchSurpriseSMTCRewards(account);
          setHarvestableAmount(formatDecimalNumber(surSMTCAmount, 18));
        }
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue, account]);

  return (
    <Box className={classes.outBoxStyle}>
      <CloseIcon
        onClick={props.onHandleClaimClose}
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
        <Box
          display="flex"
          alignItems="center"
          sx={{
            height: '32px',
            background: '#695400',
            borderRadius: '10px',
            textAlign: 'center',
            width: 'fit-content',
            margin: '0 auto'
          }}
        >
          <MultiTabButton
            titles="Claim SMT, Claim SMTC"
            currentValue={tabValue}
            onHandleClick={handleClickTab}
          />
        </Box>
        <Typography
          variant="h2"
          marginTop="20px"
          className={classes.contentHeadingTitle}
        >
          How much do you want to claim?
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
                  Claimable amount
                </Typography>
                <Typography className={classes.cardContentTitleStyle}>
                  {harvestableAmount}
                </Typography>
                <Typography
                  variant="h4"
                  color="#E0A501"
                  fontWeight="700"
                  className={classes.cardHeadingStyle}
                >
                  {tabValue === 'Claim SMT' ? 'SMT' : 'SMTC'}
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
                value={claimAmount}
                onChange={onHandleChange}
              />
              <Typography variant="h3" className={classes.innerInputTitleStyle}>
                {tabValue === 'Claim SMT' ? 'SMT' : 'SMTC'}
              </Typography>
            </FormControl>
            <Hidden mdDown>
              <RowBox marginTop="10px">
                {percentValues.map((con, idx) => (
                  <CustomTitle
                    key={idx}
                    title={con}
                    background={calculatePercent(percent, con)}
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
                    background={calculatePercent(percent, con)}
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
              onHandleClick={onHandleClaim}
            >
              Claim
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
              onHandleClick={props.onHandleClaimClose}
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
              borderRadius="20px"
              onHandleClick={onHandleClaim}
            >
              Claim
            </CustomButton>
            <CustomButton
              width="150px"
              height="100%"
              background="#936900"
              color="#FFFFFF"
              fontSize="13px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="20px"
              onHandleClick={props.onHandleClaimClose}
            >
              Cancel
            </CustomButton>
          </RowBox>
        </Hidden>
      </Box>
    </Box>
  );
};

export default DoubleClaimPopover;
