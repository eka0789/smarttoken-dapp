import { useRef, useState, useCallback } from 'react';
import { Box, Popover, Typography } from '@mui/material';
import CustomCard from 'src/components/Card';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import useTokenBalances from 'src/hooks/useTokenBalances';
import { formatDecimalNumber } from 'src/utils/formatBalance';
import { getContractAddress } from 'src/utils';

const assetButton = {
  name: 'asset',
  avatar: '/static/img/header/asset.svg',
  desc: 'assetIconButton'
};

const keyIcon = {
  name: 'keyIcon',
  path: '/static/img/header/key.svg',
  desc: 'LP Token Key Icon'
};

const useToogleAssetButton = (initialState) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOpen = useCallback(() => setOpen(true), [isOpen]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = useCallback(() => setOpen(false), [isOpen]);

  return [isOpen, handleOpen, handleClose] as const;
};

const HeaderNotifications = () => {
  const ref = useRef<any>(null);
  const { balances: tokenBalances } = useTokenBalances();
  const [isOpen, handleOpen, handleClose] = useToogleAssetButton(false);

  return (
    <>
      <Box
        component="img"
        alt={assetButton.name}
        src={assetButton.avatar}
        sx={{ width: '24px', height: '23px', cursor: 'pointer' }}
        ref={ref}
        onClick={handleOpen}
      />
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        PaperProps={{
          style: {
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            borderRadius: '20px',
            marginTop: '10px'
          }
        }}
      >
        <ColumnBox padding="20px">
          <Typography variant="h2" height="29px" color="#E0A501">
            Asset
          </Typography>
          <ColumnBox marginTop="20px">
            <CustomCard
              height="auto"
              width="280px"
              background="linear-gradient(180deg, #5A5A5A 0%, #212121 100%)"
              border="none"
            >
              <ColumnBox padding="10px">
                <Typography variant="h4" height="17px">
                  SMT Balance
                </Typography>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="40px"
                  fontWeight="700"
                >
                  {formatDecimalNumber(
                    tokenBalances?.[getContractAddress('SmartToken')],
                    18
                  )}
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMT
                </Typography>
              </ColumnBox>
            </CustomCard>

            <CustomCard
              height="auto"
              width="280px"
              background="linear-gradient(180deg, #5A5A5A 0%, #212121 100%)"
              border="none"
              marginTop="10px"
            >
              <ColumnBox padding="10px">
                <Typography variant="h4" height="17px">
                  SMTC Balance
                </Typography>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="40px"
                  fontWeight="700"
                >
                  {formatDecimalNumber(
                    tokenBalances?.[getContractAddress('SmartTokenCash')],
                    18
                  )}
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMTC
                </Typography>
              </ColumnBox>
            </CustomCard>

            <CustomCard
              height="auto"
              width="280px"
              background="linear-gradient(180deg, #5A5A5A 0%, #212121 100%)"
              border="none"
              marginTop="10px"
            >
              <ColumnBox padding="10px">
                <RowBox justifyContent="center">
                  <Typography variant="h4" height="17px">
                    LP Token
                  </Typography>
                  <Box
                    component="img"
                    src={keyIcon.path}
                    alt={keyIcon.name}
                    marginLeft="10px"
                  />
                </RowBox>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="48px"
                  fontWeight="700"
                >
                  {formatDecimalNumber(
                    tokenBalances?.[getContractAddress('SMT_BNB_LP')],
                    18
                  )}
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMT - BNB LP
                </Typography>
              </ColumnBox>
            </CustomCard>
          </ColumnBox>
        </ColumnBox>
      </Popover>
    </>
  );
};

export default HeaderNotifications;
