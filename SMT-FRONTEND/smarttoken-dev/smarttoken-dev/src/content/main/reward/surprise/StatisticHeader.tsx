import CustomCard from 'src/components/Card';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import CustomTooltip from 'src/components/Tooltip';
import BuyCard from './BuyCard';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { SupriseStatisticStyle } from 'src/models/main/reward/CustomStyle';

const StatisticHeader = () => {
  const classes = SupriseStatisticStyle();

  return (
    <RowBox className={classes.outBoxStyle}>
      <RowBox className={classes.leftInnerBoxStyle}>
        <Box className={classes.cardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.firstCardBoxStyle}>
              <Typography
                variant="h4"
                textAlign="center"
                className={classes.titleStyle1}
              >
                Your total SMT buy transaction
              </Typography>
              <Typography
                fontSize="30px"
                color="#E0A501"
                fontWeight="700"
                lineHeight="100%"
                marginTop="10px"
                className={classes.titleStyle2}
              >
                177,900
              </Typography>
              <Typography
                variant="h4"
                color="#E0A501"
                fontWeight="700"
                className={classes.titleStyle1}
              >
                USD
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>
        <Box className={classes.cardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.secondCardBoxStyle}>
              <Typography
                variant="h4"
                textAlign="center"
                className={classes.titleStyle1}
              >
                Buy transaction left to get next rewards
              </Typography>
              <RowBox className={classes.secondCardInnerBoxStyle}>
                <ColumnBox width="auto">
                  <Typography
                    variant="h2"
                    color="#E0A501"
                    fontWeight="700"
                    className={classes.titleStyle2}
                  >
                    100
                  </Typography>
                  <Typography
                    variant="h4"
                    color="#E0A501"
                    fontWeight="700"
                    className={classes.titleStyle1}
                  >
                    USD
                  </Typography>
                </ColumnBox>
                <Divider
                  orientation="vertical"
                  sx={{
                    border: '2px solid #EDEDED',
                    height: '100%',
                    transform: 'rotate(20deg)'
                  }}
                />
                <ColumnBox width="auto">
                  <Typography
                    variant="h2"
                    color="#E0A501"
                    fontWeight="700"
                    className={classes.titleStyle2}
                  >
                    1,000
                  </Typography>
                  <Typography
                    variant="h4"
                    color="#E0A501"
                    fontWeight="700"
                    className={classes.titleStyle1}
                  >
                    USD
                  </Typography>
                </ColumnBox>
              </RowBox>
            </ColumnBox>
          </CustomCard>
        </Box>
        <Box className={classes.cardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="20px 10px 24px 10px">
              <RowBox>
                <Typography
                  variant="h4"
                  textAlign="center"
                  className={classes.titleStyle1}
                >
                  Rewards claimed
                </Typography>
                <CustomTooltip content="Total surprise rewards supply 2,222,222,220 rewards" />
              </RowBox>
              <Typography variant="h1" className={classes.titleStyle3}>
                177
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>
      </RowBox>

      <Hidden mdUp>
        <BuyCard />
      </Hidden>
    </RowBox>
  );
};

export default StatisticHeader;
