import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Hidden } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomCard from 'src/components/Card';
import CustomTooltip from 'src/components/Tooltip';
import GrowTreeDetail from './GrowTreeDetail';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { m_d_growTreeImage } from 'src/models/ImageUrl';
import { GrowTreeStyle } from 'src/models/main/dashboard/CustomStyles';
import {
  growTreetabTitleStyle,
  growTreetabTitleStyle1,
  growTreetabTitleStyle2,
  BorderLinearProgress
} from 'src/models/StyledData';

const growNum = 9876543210;

const GrowTree = () => {
  const theme = useTheme();
  const classes = GrowTreeStyle(theme);

  const [tabValue, tabSetState] = useState<Number>(9);
  const handleClickTab = (value: Number): void => {
    tabSetState(value);
  };

  // Tree grow details button click event
  const [expandedGrowTreeDetail, setExpandedGrowTreeDetail] =
    useState<boolean>(false);
  const handleExpandGrowTreeDetailClick = () => {
    setExpandedGrowTreeDetail(
      (expandedGrowTreeDetail) => !expandedGrowTreeDetail
    );
  };

  return (
    <>
      <Box className={classes.outBoxCustomStyle}>
        <CustomCard height="100%" className="hover-lift card-shine">
          <ColumnBox padding="20px 20px 15px 20px" height="100%">
            <RowBox justifyContent="flex-start">
              <Typography
                variant="h2"
                color={theme.colors.primary.main}
                width="180px"
              >
                Smart Army's Golden Tree
              </Typography>
              <CustomTooltip content={'Golden Tree’s Phases of Growth'} />
            </RowBox>
            <Typography variant="h4" className={classes.growthTitleStyle}>
              Growth
            </Typography>
            <Box className={classes.growTreeButtonGroupBox}>
              {growNum
                .toString()
                .split('')
                .map((num, idx) => {
                  switch (idx) {
                    case 0:
                      return (
                        <Typography
                          key={idx}
                          className={tabValue === idx ? classes.activeTab : ''}
                          style={growTreetabTitleStyle1}
                          onClick={() => handleClickTab(idx)}
                        />
                      );
                    case 9:
                      return (
                        <Typography
                          key={idx}
                          className={tabValue === idx ? classes.activeTab : ''}
                          style={growTreetabTitleStyle2}
                          onClick={() => handleClickTab(idx)}
                        />
                      );
                    default:
                      return (
                        <Typography
                          key={idx}
                          className={tabValue === idx ? classes.activeTab : ''}
                          style={growTreetabTitleStyle}
                          onClick={() => handleClickTab(idx)}
                        />
                      );
                  }
                })}
            </Box>
            {growNum
              .toString()
              .split('')
              .map((num, idx) => {
                return (
                  tabValue === idx && (
                    <Box key={idx} sx={{ height: '100%' }}>
                      <Box className={classes.treeCustomBoxStyle}>
                        <Box
                          component="img"
                          className={classes.treeCustomStyle}
                          alt={m_d_growTreeImage[idx].name}
                          src={m_d_growTreeImage[idx].path}
                        />
                      </Box>
                      <Box className={classes.treeStatusBoxStyle}>
                        <Typography variant="h3" color="#EDEDED">
                          #{9 - idx} Phase
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={0} />
                        <Typography variant="h4" textAlign="right">
                          9,500/63,745,062 Growth
                        </Typography>
                      </Box>
                    </Box>
                  )
                );
              })}
            <Typography variant="h4" className={classes.treeDetailCustomStyle}>
              You have been contributing 0,000 Growth (00%) so far. Click the
              arrow below to see why Golden Tree is amazing!
            </Typography>
          </ColumnBox>
        </CustomCard>

        <Hidden mdUp>
          <GrowTreeDetail
            expanded={expandedGrowTreeDetail}
            onHandleClick={handleExpandGrowTreeDetailClick}
          />
        </Hidden>
      </Box>

      {/* Grow Tree detail icon */}
      <ArrowDropDownIcon
        className={classes.dropdownIconStyle}
        onClick={handleExpandGrowTreeDetailClick}
      />

      <Hidden mdDown>
        <GrowTreeDetail
          expanded={expandedGrowTreeDetail}
          onHandleClick={handleExpandGrowTreeDetailClick}
        />
      </Hidden>
    </>
  );
};

export default GrowTree;
