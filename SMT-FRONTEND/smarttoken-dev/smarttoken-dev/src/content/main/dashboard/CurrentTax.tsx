import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import { CurrentTaxStyle } from 'src/models/main/dashboard/CustomStyles';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import CustomTooltip from 'src/components/Tooltip';
import CustomCard from 'src/components/Card';
import MultiTabButton from 'src/components/MultiTab';
import BuyComponent from './tax-component/Buy';
import SellComponent from './tax-component/Sell';
import WalletComponent from './tax-component/Wallet';
import FarmingComponent from './tax-component/Farming';
import useSMTInfo from 'src/hooks/useSMTInfo';
import useSmartFarmInfo from 'src/hooks/useSmartFarmInfo';

const CurrentTax = () => {
  const theme: Theme = useTheme();
  const classes = CurrentTaxStyle(theme);
  const { info } = useSMTInfo();
  const { info: farmInfo } = useSmartFarmInfo();

  const Content = {
    Buy: <BuyComponent info={info} />,
    Sell: <SellComponent info={info} />,
    'Wallet transaction': <WalletComponent info={info} />,
    Farming: <FarmingComponent info={farmInfo} />
  };

  const [tabValue, tabSetState] = useState<string>('Buy');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

  return (
    <>
      <CustomCard height="auto" marginTop="20px" className="hover-lift card-shine">
        <ColumnBox padding="10px 5px 10px 5px" height="100%">
          <Box
            sx={{
              padding: '0px 5px 0px 5px',
              height: '70px',
              position: 'relative',
              width: '100%'
            }}
          >
            {/* Heading title */}
            <RowBox justifyContent="flex-start" height="28px">
              <Typography variant="h2" className={classes.taxHearingTitleStyle}>
                Current Tax
              </Typography>
              <CustomTooltip
                content={
                  'Sell tax & wallet tx tax can increase when emergency tax is triggered'
                }
              />
            </RowBox>
            {/* Heading tooltip */}
            <Box className={classes.headingTooltipBox}>
              <Typography
                variant="h5"
                component="span"
                className={classes.emergencyTitleStyle}
              >
                {info.emergency_tax
                  ? 'Emergency tax is active'
                  : 'Emergency tax is inactive'}
              </Typography>
              <CustomTooltip
                content={
                  'Emergency tax is set to be active in certain condition: Price impact on SMT ≥ 25% within 24 hours Increase tax +10% Emergency tax duration: 24 hours'
                }
                width="220px"
              />
            </Box>

            {/* Multi menu */}
            <Box className={classes.multiMenuBox}>
              <MultiTabButton
                titles="Buy, Sell, Wallet transaction, Farming"
                currentValue={tabValue}
                onHandleClick={handleClickTab}
              />
            </Box>
          </Box>
          <RowBox className={classes.taxMainContentStyle}>
            {Content[tabValue]}
          </RowBox>
        </ColumnBox>
      </CustomCard>
    </>
  );
};

export default CurrentTax;
