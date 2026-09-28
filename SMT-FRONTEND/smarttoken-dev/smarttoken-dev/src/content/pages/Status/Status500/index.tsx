import { useState } from 'react';
import {
  Box,
  Typography,
  Hidden,
  Container,
  Button,
  Grid
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoadingButton from '@mui/lab/LoadingButton';

import { styled } from '@mui/material/styles';

const GridWrapper = styled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`
);

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

function Status500() {
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
    window.location.reload();
  }

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
          className="stagger-children"
        >
          <Grid
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img
                  alt="500"
                  height={260}
                  src="/static/images/status/500.svg"
                  className="animate-pop"
                />
                <Typography
                  variant="h2"
                  sx={{ my: 2, color: '#FFFFFF' }}
                  className="animate-fade-up delay-200"
                >
                  Something went wrong
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="normal"
                  sx={{ mb: 4, color: 'rgba(255,255,255,0.72)' }}
                  className="animate-fade-up delay-400"
                >
                  An unexpected error occurred on our side. Try refreshing the
                  page — if the problem persists, please come back later.
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoToneIcon />}
                >
                  Refresh view
                </LoadingButton>
                <Button
                  href="/main/dashboard"
                  variant="contained"
                  startIcon={<HomeRoundedIcon />}
                  className="btn-shine hover-press"
                  sx={{ ml: 1 }}
                >
                  Go to Dashboard
                </Button>
              </Box>
            </Container>
          </Grid>
          <Hidden mdDown>
            <GridWrapper
              xs={12}
              md={6}
              alignItems="center"
              display="flex"
              justifyContent="center"
              item
            >
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <TypographyPrimary variant="h1" sx={{ my: 2 }} className="gradient-text-gold">
                    Smart Ecosystem
                  </TypographyPrimary>
                  <TypographySecondary
                    variant="h4"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    The next-generation Web3 rewards ecosystem on BNB Smart
                    Chain — farming, nobility ranks, golden tree pools and a
                    7-level referral network, all fully on-chain.
                  </TypographySecondary>
                  <Button
                    href="/main/dashboard"
                    size="large"
                    variant="contained"
                    className="btn-shine hover-press"
                  >
                    Back to Dashboard
                  </Button>
                </Box>
              </Container>
            </GridWrapper>
          </Hidden>
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;
