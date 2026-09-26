import { Box, Typography, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import { LPBarStyle } from 'src/models/main/reward/CustomStyle';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomCard from 'src/components/Card';

const LPBar = () => {
  const theme: Theme = useTheme();
  const classes = LPBarStyle(theme);

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <Box className={classes.firstCardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.firstCardBoxGroup}>
              <Typography variant="h3" className={classes.mobileTitleStyle}>
                Your LP Token value
              </Typography>
              <Typography
                fontSize="30px"
                className={classes.mobileTitleNumStyle}
                fontWeight="700"
                marginTop="11px"
              >
                100,000 USD
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>

        <Hidden mdDown>
          <ColumnBox width="30%" height="120px">
            <CustomCard width="100%" height="54px">
              <ColumnBox padding="10px">
                <Typography variant="h5" className={classes.mobileTitleStyle}>
                  Pooled SMT
                </Typography>
                <Typography
                  variant="h3"
                  className={classes.mobileTitleNumStyle}
                  fontWeight="700"
                >
                  $100,000
                </Typography>
              </ColumnBox>
            </CustomCard>

            <CustomCard width="100%" height="54px">
              <ColumnBox padding="10px">
                <Typography variant="h5" className={classes.mobileTitleStyle}>
                  Pooled BNB
                </Typography>
                <Typography
                  variant="h3"
                  className={classes.mobileTitleNumStyle}
                  fontWeight="700"
                >
                  $50,000
                </Typography>
              </ColumnBox>
            </CustomCard>
          </ColumnBox>
        </Hidden>

        <Box className={classes.lastCardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.lastCardBoxGroup}>
              <Typography variant="h3" className={classes.mobileTitleStyle}>
                Share of Pool
              </Typography>
              <Typography
                fontSize="30px"
                className={classes.mobileTitleNumStyle}
                fontWeight="700"
                marginTop="11px"
              >
                10%
              </Typography>
            </ColumnBox>
          </CustomCard>
        </Box>
      </RowBox>

      <Hidden mdUp>
        <RowBox justifyContent="space-evenly" marginTop="10px">
          <CustomCard width="45%" height="86px">
            <ColumnBox padding="20px 0">
              <Typography variant="h5" className={classes.mobileTitleStyle}>
                Pooled SMT
              </Typography>
              <Typography
                variant="h3"
                className={classes.mobileTitleNumStyle}
                fontWeight="700"
                marginTop="11px"
              >
                $100,000
              </Typography>
            </ColumnBox>
          </CustomCard>

          <CustomCard width="45%" height="86px">
            <ColumnBox padding="20px 0">
              <Typography variant="h5" className={classes.mobileTitleStyle}>
                Pooled BNB
              </Typography>
              <Typography
                variant="h3"
                className={classes.mobileTitleNumStyle}
                fontWeight="700"
                marginTop="11px"
              >
                $50,000
              </Typography>
            </ColumnBox>
          </CustomCard>
        </RowBox>
      </Hidden>
    </>
  );
};

export default LPBar;
