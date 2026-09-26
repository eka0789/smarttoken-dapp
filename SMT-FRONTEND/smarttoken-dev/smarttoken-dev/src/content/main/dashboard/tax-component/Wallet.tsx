import { Box, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomCard from 'src/components/Card';
import { CurrentTaxStyle } from 'src/models/main/dashboard/CustomStyles';
import { walletContent } from 'src/models/SampleData';

const Wallet = (props) => {
  const theme: Theme = useTheme();
  const classes = CurrentTaxStyle(theme);
  const { info } = props;

  return (
    <>
      <Box className={classes.outBoxStyle1}>
        <CustomCard
          height="100%"
          width="100%"
          border="none"
          background="linear-gradient(180deg, #C59100 -5%, #4B3C00 72%)"
        >
          <Box className={classes.innerBoxStyle1}>
            <Typography className={classes.percentTitleStyle}>15%</Typography>
            <Typography variant="h3" className={classes.totalTaxTitleStyle}>
              Total tax
            </Typography>
          </Box>
        </CustomCard>
      </Box>
      <Box className={classes.outBoxStyle2}>
        {walletContent.map((rows, idx) => (
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
    </>
  );
};

export default Wallet;
