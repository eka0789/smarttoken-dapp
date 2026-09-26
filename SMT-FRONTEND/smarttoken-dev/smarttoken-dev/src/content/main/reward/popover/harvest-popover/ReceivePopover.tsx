import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { ReceivePopoverStyle } from 'src/models/main/reward/CustomStyle';
import { useWeb3React } from '@web3-react/core';
import useFarmHarvest from 'src/hooks/useFarmHarvest';
import useRewards from 'src/hooks/useRewards';
import { loadingBar } from 'src/utils/loadingBar';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleHarvestClose: (e: React.MouseEvent) => void;
  onHandleHarvestNext: (value: string, smtVal: number) => void;
  smtVal: number;
  title: string;
}

const ReceivePopover = (props: ParentProps) => {
  const theme: Theme = useTheme();
  const classes = ReceivePopoverStyle(theme);

  const { account } = useWeb3React();
  const { fetchHarvest } = useFarmHarvest();
  const {
    claimNobleReward,
    claimFarmReward,
    claimPassiveReward,
    claimSellTaxReward,
    claimQuestReward
  } = useRewards();
  const [proceed, setProceed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function init() {
      if (!account || !proceed) return;
      setIsLoading(true);
      try {
        switch (props.title) {
          case 'daily':
            await fetchHarvest(props.smtVal);
            break;
          case 'sell':
            await claimSellTaxReward(props.smtVal);
            break;
          case 'farmer':
            await claimFarmReward(props.smtVal);
            break;
          case 'passive':
            await claimPassiveReward(props.smtVal);
            break;
          case 'noble':
            await claimNobleReward(props.smtVal);
            break;
          case 'quest':
            await claimQuestReward(account, props.smtVal);
            break;
          default:
            await fetchHarvest(props.smtVal);
            break;
        }
      } catch (e) {
        setIsLoading(false);
        setProceed(false);
        toast.error(
          e?.response?.data?.message ||
            e?.message ||
            'Claim failed. Please try again.'
        );
        return;
      }
      setIsLoading(false);
      props.onHandleHarvestNext('sure', props.smtVal);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, proceed, props.smtVal]);

  const onHandleProceed = () => {
    setProceed(true);
  };

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
      <ColumnBox className={classes.innerBoxStyle}>
        <ColumnBox className={classes.innerBoxStyle1}>
          <Typography variant="h2" className={classes.contentHeadingTitle}>
            You will receive
          </Typography>
          <Typography className={classes.contentMiddleTitleStyle}>
            {props.smtVal}{' '}
            {props.title === 'noble' || props.title === 'farmer'
              ? 'SMTC'
              : 'SMT'}
          </Typography>
          <Typography variant="h3" className={classes.contentBottomTitleStyle}>
            This amount of rewards will be deducted from your reward
            accumulation. Are you sure to continue?
          </Typography>
        </ColumnBox>
        <Hidden mdDown>
          <RowBox marginTop="72px">
            <CustomButton
              width="240px"
              height="50px"
              background="#E0A501"
              color="#212121"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={onHandleProceed}
            >
              Yes {isLoading && <Box component="img" src={loadingBar} />}
            </CustomButton>
            <CustomButton
              width="240px"
              height="50px"
              background="#936900"
              color="#FFFFFF"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleHarvestClose}
            >
              No
            </CustomButton>
          </RowBox>
        </Hidden>
        <Hidden mdUp>
          <RowBox justifyContent="space-around" marginTop="45px">
            <CustomButton
              width="150px"
              height="30px"
              background="#E0A501"
              color="#212121"
              fontSize="13px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={onHandleProceed}
            >
              Yes {isLoading && <Box component="img" src={loadingBar} />}
            </CustomButton>
            <CustomButton
              width="150px"
              height="30px"
              background="#936900"
              color="#FFFFFF"
              fontSize="13px"
              fontWeight="600"
              boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleHarvestClose}
            >
              No
            </CustomButton>
          </RowBox>
        </Hidden>
      </ColumnBox>
    </Box>
  );
};

export default ReceivePopover;
