import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import RowBox from 'src/components/Box/RowBox';
import Hero from './Hero';
import { buySmtStyle } from 'src/models/main/get-smt/CustomStyle';
import useTokenPrices from 'src/hooks/useTokenPrices';
import { nFormatter } from 'src/utils/formatBalance';

// SMT BOX IMAGE
const smtImage = {
  name: 'smtImage',
  path: '/static/img/main_smt/smt.svg',
  desc: 'smtImage'
};
// SMTC BOX IMAGE
const smtcImage = {
  name: 'smtcImage',
  path: '/static/img/main_smt/smtc.svg',
  desc: 'smtcImage'
};

const BuySmt = () => {
  const classes = buySmtStyle();
  const { prices } = useTokenPrices();

  return (
    <>
      <Helmet>
        <title>Main | Get SMT / SMTC</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          {/* Header Title */}
          <Grid item md={11} xs={11} display="flex" justifyContent="center">
            <Typography variant="h3" className={classes.headerTypoStyle}>
              SMT and SMTC have both different specification and rarity. Finding
              SMTC could be much harder than SMT. However, by extra effort and
              struggle, nothing is impossible!
            </Typography>
          </Grid>

          {/* LEFT SIDE OF DASHBOARD */}
          <Grid item xs={10} md={6} className={classes.customLeftSpacing}>
            {/* CURRENT SMT PRICE */}
            <RowBox justifyContent="center">
              <RowBox className={classes.currentSmtPriceStyle}>
                <Typography
                  variant="h3"
                  className={classes.currentSmtTypoLeftStyle}
                >
                  Current SMT Price
                </Typography>
                <Typography
                  variant="h3"
                  className={classes.currentSmtTypoRightStyle}
                >
                  $ {nFormatter(prices?.smt || 0, 4)}
                </Typography>
              </RowBox>
            </RowBox>
            {/* GET SMT */}
            <Grid item xs={12} position="relative" textAlign="center">
              <Button
                component={NavLink}
                to="/main/smt/getSmt"
                sx={{ padding: '0px' }}
              >
                <Box
                  component="img"
                  className={classes.mainImageStyle}
                  sx={{}}
                  src={smtImage.path}
                  alt={smtImage.name}
                />
                <Typography component="span" className={classes.smtTitleStyle}>
                  Get SMT
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* RIGHT SIDE OF DASHBOARD */}
          <Grid item xs={10} md={6} className={classes.customRightSpacing}>
            {/* CURRENT SMT PRICE */}
            <RowBox justifyContent="center">
              <RowBox className={classes.currentSmtPriceStyle}>
                <Typography
                  variant="h3"
                  className={classes.currentSmtTypoLeftStyle}
                >
                  Current SMTC Price
                </Typography>
                <Typography
                  variant="h3"
                  className={classes.currentSmtTypoRightStyle}
                >
                  $ {nFormatter(prices?.smtc || 0, 4)}
                </Typography>
              </RowBox>
            </RowBox>
            {/* GET SMTC */}
            <Grid item xs={12} position="relative" textAlign="center">
              <Button
                component={NavLink}
                to="/main/smt/getSmtc"
                sx={{ padding: '0px' }}
              >
                <Box
                  component="img"
                  className={classes.mainImageStyle}
                  sx={{}}
                  src={smtcImage.path}
                  alt={smtcImage.name}
                />
                <Typography component="span" className={classes.smtTitleStyle}>
                  Get SMTC
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BuySmt;
