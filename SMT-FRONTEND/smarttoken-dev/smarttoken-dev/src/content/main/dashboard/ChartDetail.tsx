import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  CardActions,
  Fade,
  CardContent,
  Divider
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RowBox from 'src/components/Box/RowBox';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import SummaryComponent from './chart-detail-component/Summary';
import LPComponent from './chart-detail-component/LP';
import TeamworkComponent from './chart-detail-component/Teamwork';
import FarmingComponent from './chart-detail-component/Farming';

interface ParentProps {
  tabValue: string;
}

const ChartDetailContent = {
  Summary: <SummaryComponent />,
  'LP Token': <LPComponent />,
  Teamwork: <TeamworkComponent />,
  'Farming Rewards': <FarmingComponent />,
  'Nobility Rewards': <FarmingComponent />,
  'Other Rewards': <FarmingComponent />
};

const ChartDetail: React.FC<ParentProps> = (props) => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  // Chart detail button click event
  const [expandedChartDetail, setExpandedChartDetail] =
    useState<boolean>(false);
  const handleExpandChartDetailClick = (e: React.MouseEvent) => {
    setExpandedChartDetail((expandedChartDetail) => !expandedChartDetail);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box className={classes.chartDetailBoxStyle}>
          <CardActions
            className={classes.chartDetailCardActionStyle}
            onClick={handleExpandChartDetailClick}
          >
            <Typography variant="h4" className={classes.chartCardTypoStyle}>
              Detail
            </Typography>
            <ArrowDropDownIcon sx={{ color: theme.colors.primary.main }} />
          </CardActions>
          <Fade in={expandedChartDetail}>
            <CardContent className={classes.chartCardContentStyle}>
              <RowBox
                className={classes.cardContentBoxStyle}
                justifyContent="center"
                onHandleClick={handleExpandChartDetailClick}
              >
                <Typography variant="h4" className={classes.chartCardTypoStyle}>
                  Detail
                </Typography>
                <ArrowDropUpIcon sx={{ color: theme.colors.primary.main }} />
              </RowBox>
              <Divider className={classes.chartDetailDeviderStyle} />
              {ChartDetailContent[props.tabValue]}
            </CardContent>
          </Fade>
        </Box>
      </Grid>
    </>
  );
};

export default ChartDetail;
