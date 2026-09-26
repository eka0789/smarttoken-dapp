import { Box, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomCard from 'src/components/Card';
import CustomTooltip from 'src/components/Tooltip';
import { CurrentTaxStyle } from 'src/models/main/dashboard/CustomStyles';
import { sellContent } from 'src/models/SampleData';

const Sell = (props) => {
  const theme: Theme = useTheme();
  const classes = CurrentTaxStyle(theme);
  const { info } = props;

  return (
    <>
      <Box display="flex" width="100%">
        <ColumnBox width="35%" padding="0 5px">
          <CustomCard
            height="48%"
            width="100%"
            border="none"
            background="linear-gradient(180deg, #C59100 -5%, #4B3C00 72%)"
          >
            <Box padding="12px 0 10px 0">
              <Typography variant="h1" className={classes.numTitleStyle}>
                {info?._sellTaxFee?.toString() || '15'}%
              </Typography>
              <RowBox width="48px" margin="1px auto" height="13px">
                <Typography variant="h4" color="#FF0000">
                  15%
                </Typography>
                <CustomTooltip
                  content={
                    'Emergency tax is set to be active in certain condition: Price impact on SMT ≥ 25% within 24 hours Increase tax +10% Emergency tax duration: 24 hours'
                  }
                  width="220px"
                />
              </RowBox>
              <Typography variant="h3" className={classes.totalTaxTitleStyle1}>
                Total tax
              </Typography>
            </Box>
          </CustomCard>
          <CustomCard
            height="48%"
            width="100%"
            border="none"
            background="linear-gradient(180deg, #5A5A5A 0%, #212121 100%)"
          >
            <Box padding="20px 3px 10px 3px">
              <Typography variant="h1" className={classes.numTitleStyle}>
                {info?.SELL_FARMING_FEE?.toString() || '20'}%
              </Typography>
              <Typography variant="h5" className={classes.descTitleStyle}>
                Goes to sell tax distribution for farming rewards
              </Typography>
            </Box>
          </CustomCard>
        </ColumnBox>

        <Box className={classes.outBoxStyle2}>
          {sellContent.map((rows, idx) => (
            <ColumnBox key={idx} width="50%" padding="0 5px">
              {rows.map((row, index) => (
                <CustomCard
                  key={index}
                  height="48%"
                  width="100%"
                  border="none"
                  background={theme.colors.gradients.grey}
                >
                  <Box padding="20px 3px 10px 3px">
                    <Typography variant="h1" className={classes.numTitleStyle}>
                      {info?.[row.key]?.toString() || row.num} %
                    </Typography>
                    <Typography variant="h5" className={classes.descTitleStyle}>
                      {row.desc}
                    </Typography>
                  </Box>
                </CustomCard>
              ))}
            </ColumnBox>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sell;
