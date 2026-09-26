import React, { useState } from 'react';
import { Button, Card, Box, CardHeader, CardContent, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import ReactButtonSlider from '@gunawanedy/react-button-slider';
import MultiTabButton from 'src/components/MultiTab';
import ChartDetail from './ChartDetail';
import PageTitle from './PageTitle';
import RowBox from 'src/components/Box/RowBox';
import { state } from 'src/models/SampleData';
import { periods } from 'src/models/StyledData';
import { ChartStyle } from 'src/models/main/dashboard/CustomStyles';

const LineChart = () => {
  const theme: Theme = useTheme();
  const classes = ChartStyle(theme);

  const [chartValue, setChartValue] = useState<number>(0);
  // Portofolio multitab click event
  const [tabPortValue, tabPortSetState] = useState<string>('Summary');
  const handleClickPortTab = (e: React.MouseEvent, value: string): void => {
    tabPortSetState(value);
    if (value === 'Summary' || value === 'Teamwork' || value === 'Nobility') {
      setChartValue(0);
    } else {
      setChartValue(1);
    }
  };

  const [activeMenu, setActive] = useState<string>(periods[0].value);

  return (
    <>
      <Box marginTop="20px">
        <PageTitle
          title={'Your Portofolio'}
          content={'Your real-time profitability in Smart Ecosystem'}
        />
        <Typography
          variant="caption"
          sx={{ color: '#9e9e9e', fontStyle: 'italic' }}
        >
          * Data chart masih demo — riwayat on-chain menyusul
        </Typography>
      </Box>

      <Box className={classes.multiTabCustomStyle}>
        <RowBox className={classes.innerBoxStyle}>
          <ReactButtonSlider>
            <MultiTabButton
              titles="Summary, LP Token, Teamwork, Farming Rewards, Nobility Rewards, Other Rewards"
              currentValue={tabPortValue}
              onHandleClick={handleClickPortTab}
            />
          </ReactButtonSlider>
        </RowBox>

        <Card
          className="hover-lift card-shine"
          sx={{
            borderRadius: '10px',
            marginTop: '20px',
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            border: '2px solid #323232',
            boxSizing: 'border-box'
          }}
        >
          <CardHeader
            sx={{ padding: '20px 20px' }}
            action={
              <>
                {periods.map((_period, idx) => (
                  <Button
                    key={idx}
                    onClick={() => {
                      setActive(_period.value);
                    }}
                    sx={{
                      '&.MuiButtonBase-root:hover': {
                        bgcolor: 'transparent'
                      }
                    }}
                    className={
                      activeMenu === '1d' && _period.value === '1d'
                        ? classes.activeButton
                        : activeMenu === '1w' && _period.value === '1w'
                        ? classes.activeButton
                        : activeMenu === '1mo' && _period.value === '1mo'
                        ? classes.activeButton
                        : activeMenu === '1y' && _period.value === '1y'
                        ? classes.activeButton
                        : classes.deactiveButton
                    }
                  >
                    {_period.value}
                  </Button>
                ))}
              </>
            }
          />
          <CardContent sx={{ pt: 0, height: '340px' }}>
            <Box height={'100%'} width={'100%'}>
              <ReactApexChart
                options={state[chartValue].options}
                series={state[chartValue].series}
                height="100%"
                width="100%"
                type="line"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Chart Detail */}
      <ChartDetail tabValue={tabPortValue} />
    </>
  );
};

export default LineChart;
