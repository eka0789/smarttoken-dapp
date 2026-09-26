import React, { useState } from 'react';
import {
  CardContent,
  Typography,
  Box,
  Collapse,
  CardActions
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomCard from 'src/components/Card';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import PageTitle from './PageTitle';
import MultiTabButton from 'src/components/MultiTab';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import { cashMonitorDetail, circulationDetail } from 'src/models/SampleData';
import { upImage, key, nokey } from 'src/models/ImageUrl';
import { ExpandMore } from 'src/models/StyledData';
import useTokenPrices from 'src/hooks/useTokenPrices';
import { formatDecimalNumber } from 'src/utils/formatBalance';


const SmtCashMonitor = () => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);
  const { prices, fetchStatus } = useTokenPrices();

  /** harga live dari PancakeSwap router (SMT→WBNB→BUSD);
   *  tanpa wallet terhubung, tampil placeholder bukan angka palsu */
  const smtPriceUsd =
    fetchStatus === 'success' && prices?.smt
      ? `$ ${formatDecimalNumber(prices.smt, 6)}`
      : '--';

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Smt multitab click event
  const [tabSmtValue, tabSmtSetState] = useState<string>('SMT');
  const handleClickSmtTab = (e: React.MouseEvent, value: string): void => {
    tabSmtSetState(value);
  };

  return (
    <>
      {/* SMT & SMT Cash Monitor Header*/}
      <RowBox marginTop="20px">
        {/* SMT & SMT Cash monitor page title */}
        <PageTitle
          title={'SMT & SMT Cash Monitor'}
          content={
            'Monitor & track SMT & SMTC Cash to minimize the risk & maximize the profit'
          }
        />
        {/* Switch bar */}
        <Box className={classes.smtCashMonitorOutBoxStyle}>
          <RowBox className={classes.smtCashMonitorInnerBoxStyle}>
            <MultiTabButton
              titles="SMT, SMT Cash"
              currentValue={tabSmtValue}
              onHandleClick={handleClickSmtTab}
            />
          </RowBox>
        </Box>
      </RowBox>
      <CustomCard height={'auto'} marginTop={'10px'} className="hover-lift card-shine">
        <Box margin="20px 30px 26px 30px">
          <RowBox justifyContent="flex-end">
            <Typography variant="h2" className={classes.scmHeadingLeftTitleStyle}>
              {tabSmtValue === 'SMT' ? `SMT` : `SMTC`} -
              {tabSmtValue === 'SMT' ? `BNB` : `BUSD`}
            </Typography>
            <Box
              component="img"
              alt={upImage.name}
              src={upImage.path}
              sx={{ width: '16px', height: '16px', marginRight: '160px' }}
            />
            <Typography variant="h2" className={classes.scmHeadintRightTitleStyle}>
              {tabSmtValue === 'SMT Cash' ? '--' : smtPriceUsd}
            </Typography>
          </RowBox>

          <ColumnBox alignItems="stretch" marginTop="4px" width="100%">
            <Typography
              variant="caption"
              sx={{ color: '#9e9e9e', fontStyle: 'italic' }}
            >
              * Statistik berikut masih data demo — harga di atas diambil live
              dari PancakeSwap
            </Typography>
            {cashMonitorDetail.map((title, idx) => {
              return (
                <RowBox key={idx} className={classes.scmContentOutBoxStyle}>
                  <Typography variant="h4" className={classes.scmContentTitleLeftStyle}>
                    &#8226; {title.name_key}
                  </Typography>
                  <Typography variant="h4" className={classes.scmContentTitleRightStyle}>
                    :{' '}
                    {
                      tabSmtValue === 'SMT'
                        ? title.name_value
                        : title.name_value_c
                    }
                  </Typography>
                </RowBox>
              );
            })}
          </ColumnBox>
        </Box>
      </CustomCard>

      <Box className={classes.smcDetailOutBoxStyle}>
        <CardActions
          className={classes.smcDetailCAStyle}
          onClick={handleExpandClick}
        >
          <Typography variant="h4" className={classes.smcDetailCATitleStyle}>
            Token Circulation
          </Typography>
          <ExpandMore expand={expanded} aria-expanded={expanded}>
            <ArrowDropDownIcon sx={{ color: theme.colors.primary.main }} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.smcDetailCCStyle}>
            <ColumnBox alignItems="stretch" width="50%">
              {circulationDetail.left.map((rows, idx) => {
                return (
                  <RowBox key={idx} className={classes.scmContentOutBoxStyle}>
                    {rows.map((row, index) => {
                      return (
                        <RowBox
                          key={index}
                          justifyContent="flex-start"
                          width={row.width}
                        >
                          <Typography variant="h5" className={classes.smtCashDetailTitleStyle}>
                            {row.value}
                          </Typography>
                          <Box
                            component="img"
                            alt={nokey.name}
                            src={index % 2 ? nokey.path : key.path}
                            className={classes.scmDetailIconStyle}
                          />
                        </RowBox>
                      );
                    })}
                  </RowBox>
                );
              })}
            </ColumnBox>
            <ColumnBox alignItems="stretch" width="50%">
              {circulationDetail.right.map((rows, idx) => {
                return (
                  <RowBox key={idx} className={classes.scmContentOutBoxStyle}>
                    {rows.map((row, index) => {
                      return (
                        <RowBox
                          key={index}
                          justifyContent="flex-start"
                          width={row.width}
                        >
                          <Typography variant="h5" className={classes.smtCashDetailTitleStyle}>
                            {row.value}
                          </Typography>
                          <Box
                            component="img"
                            alt={key.name}
                            src={index % 2 ? nokey.path : key.path}
                            className={classes.scmDetailIconStyle}
                          />
                        </RowBox>
                      );
                    })}
                  </RowBox>
                );
              })}
            </ColumnBox>
          </CardContent>
        </Collapse>
      </Box>
    </>
  );
};

export default SmtCashMonitor;
