import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import useTokenBalances from 'src/hooks/useTokenBalances';
import useGoldenTree from 'src/hooks/useGoldenTree';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import { getContractAddress } from 'src/utils';
import { utils } from 'ethers';
import { calculatePercent } from 'src/utils/percent';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleSellSmtcClose: (e: React.MouseEvent) => void;
  onHandleSellSmtcClick: (e: React.MouseEvent) => void;
}

const useStyles = makeStyles((theme) => ({
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '100%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {}
  }
}));

const percentValues = ['10%', '25%', '50%', '75%', '100%'];

const SellSmtcPopover = (props: ParentProps) => {
  const classes = useStyles();
  const { balances: tokenBalances } = useTokenBalances();
  const { sellSmtc } = useGoldenTree();
  const [smtcVal, setSmtcVal] = useState('');
  const [farmPercent, setFarmPercent] = useState(0);

  const handleChange = (e) => {
    setSmtcVal(e.target.value);
    let amountIn = Number(
      utils.formatEther(tokenBalances?.[getContractAddress('SmartTokenCash')])
    );
    setFarmPercent((parseFloat(e.target.value) / amountIn) * 100);
  };


  const onHandleSell = async (e) => {
    if (!smtcVal || Number(smtcVal) === 0) {
      toast.error('Please input an amount');
      return;
    }
    let amountIn = Number(
      utils.formatEther(tokenBalances?.[getContractAddress('SmartTokenCash')])
    );
    if (amountIn - parseFloat(smtcVal) < 0) {
      toast.error('Not enough balance to add farm');
      return;
    }

    /** sell smtc */
    if (await sellSmtc(smtcVal)) {
      props.onHandleSellSmtcClick(e);
    }
  };

  return (
    <Box
      sx={{
        padding: '30px 30px 50px 30px !important',
        position: 'relative',
        background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <CloseIcon
        onClick={props.onHandleSellSmtcClose}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '31px',
          right: '31px',
          color: '#EDEDED'
        }}
      />
      <Typography
        variant="h2"
        color="#E0A501"
        fontWeight="700"
        marginBottom="20px"
      >
        How many SMTC that you want to sell?
      </Typography>
      <Divider
        sx={{
          border: '2px solid #323232'
        }}
      />
      <Box padding="20px 55px 0 55px">
        <Typography variant="h4" padding="0 82px">
          Selling SMTC at threshold price will burn the SMTC and be removed from
          circulation
        </Typography>
        <RowBox marginTop="20px" height="143px">
          <CustomCard
            width="200px"
            height="100%"
            background="linear-gradient(180deg, #5A5A5A 0%, #212121 100%)"
            border="none"
          >
            <Box padding="20px 5px">
              <Typography variant="h4" textAlign="center" height="17px">
                Your balance
              </Typography>
              <Typography
                color="#E0A501"
                fontSize="48px"
                textAlign="center"
                fontWeight="700"
                height="59px"
                lineHeight="100%"
                marginTop="10px"
              >
                {formatDecimalNumber(
                  tokenBalances?.[getContractAddress('SmartTokenCash')],
                  18
                )}
              </Typography>
              <Typography
                variant="h4"
                color="#E0A501"
                textAlign="center"
                height="17px"
              >
                SMTC
              </Typography>
            </Box>
          </CustomCard>
          <ColumnBox width="300px" alignItems="flex-start">
            <Typography variant="h4" marginBottom="5px" textAlign="left">
              Amount to sell
            </Typography>
            <FormControl
              variant="outlined"
              className={classes.searchCustomStyle}
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                placeholder="500"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight'
                }}
                sx={{
                  padding: '9px 60px 9px 20px',
                  height: '100%',
                  borderRadius: '10px',
                  background: '#EDEDED',
                  color: '#5A5A5A',
                  fontSize: '18px',
                  fontWeight: '600'
                }}
                value={smtcVal}
                onChange={handleChange}
              />
              <Typography
                sx={{
                  margin: '0 auto',
                  position: 'absolute',
                  right: '20px',
                  height: '22px',
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: '#323232'
                }}
              >
                SMTC
              </Typography>
            </FormControl>
            <RowBox marginTop="10px">
              {percentValues.map((con, idx) => (
                <CustomTitle
                  key={idx}
                  title={con}
                  background={calculatePercent(farmPercent, con)}
                  borderRadius="20px"
                  width="50px"
                  height="32px"
                  color="#EDEDED"
                  fontSize="14px"
                />
              ))}
            </RowBox>
          </ColumnBox>
        </RowBox>
        <ColumnBox padding="0 115px" marginTop="20px">
          <RowBox>
            <Typography variant="h4">Amount to receive:</Typography>
            <Typography variant="h4" color="#E0A501">
              500 BUSD
            </Typography>
          </RowBox>
          <RowBox>
            <Typography variant="h4">Current threshold price:</Typography>
            <Typography variant="h4" color="#E0A501">
              100 BUSD
            </Typography>
          </RowBox>
          <RowBox>
            <Typography variant="h4">Price on DEX:</Typography>
            <Typography variant="h4" color="#E0A501">
              120 BUSD
            </Typography>
          </RowBox>
        </ColumnBox>
        <RowBox marginTop="48px" height="50px">
          <CustomButton
            width="240px"
            height="100%"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={(e) => onHandleSell(e)}
          >
            Sell now
          </CustomButton>
          <CustomButton
            width="240px"
            height="100%"
            background="#936900"
            color="#FFFFFF"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={props.onHandleSellSmtcClose}
          >
            Cancel
          </CustomButton>
        </RowBox>
      </Box>
    </Box>
  );
};

export default SellSmtcPopover;
