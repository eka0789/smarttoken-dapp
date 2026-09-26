import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { useWeb3React } from '@web3-react/core';
import useFarmingStakeSMT from 'src/hooks/useFarmingStakeSMT';
import ColumnBox from 'src/components/Box/ColumnBox';
import { loadingBar } from 'src/utils/loadingBar';

interface ParentProps {
  onHandleAddClose: (e: React.MouseEvent) => void;
  onHandleAddNext: (value: string, smtVal: number) => void;
  smtVal: number;
}

const ProceedPopover = (props: ParentProps) => {
  const { fetchAddSMT, isLoading } = useFarmingStakeSMT();
  const { account } = useWeb3React();
  const [proceed, setProceed] = useState<boolean>(false);

  useEffect(() => {
    async function init() {
      if (!account || !proceed) return;
      if (await fetchAddSMT(props.smtVal))
        props.onHandleAddNext('sure', props.smtVal);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, proceed, props.smtVal]);

  const onHandleProceed = () => {
    setProceed(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        padding: '130px 30px 50px 70px !important',
        position: 'relative',
        background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%',
        textAlign: 'center',
        height: '527px'
      }}
    >
      <CloseIcon
        onClick={props.onHandleAddClose}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '31px',
          right: '31px',
          color: '#EDEDED'
        }}
      />
      <Box>
        <Typography
          variant="h3"
          color="#EDEDED"
          textAlign="center"
          height="22px"
        >
          Are you sure to add
        </Typography>
        <Typography
          color="#E0A501"
          fontSize="48px"
          textAlign="center"
          fontWeight="700"
        >
          {props.smtVal} SMT
        </Typography>
        <Typography
          variant="h3"
          color="#EDEDED"
          textAlign="center"
          height="22px"
        >
          to your farmed amount?
        </Typography>
      </Box>
      <ColumnBox height="120px" marginTop="102px">
        <CustomButton
          width="240px"
          height="50px"
          background="#936900"
          color="#FFFFFF"
          fontSize="22px"
          fontWeight="600"
          boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
          borderRadius="35px"
          onHandleClick={() => props.onHandleAddNext('amount', props.smtVal)}
        >
          No, take me back
        </CustomButton>
        <CustomButton
          width="254px"
          height="50px"
          background="#E0A501"
          color="#212121"
          fontSize="22px"
          fontWeight="600"
          boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
          borderRadius="35px"
          onHandleClick={() => onHandleProceed()}
        >
          Yes, proceed to add{' '}
          {isLoading && <Box component="img" src={loadingBar} />}
        </CustomButton>
      </ColumnBox>
    </Box>
  );
};

export default ProceedPopover;
