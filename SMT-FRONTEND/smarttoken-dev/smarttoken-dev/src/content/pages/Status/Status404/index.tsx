import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  Grid
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Status404() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - 404</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center" className="stagger-children">
            <img alt="404" height={180} src="/static/images/status/404.svg" className="animate-pop" />
            <Typography
              variant="h2"
              sx={{ my: 2, color: '#FFFFFF' }}
              className="animate-fade-up delay-200"
            >
              The page you were looking for doesn't exist.
            </Typography>
            <Typography
              variant="h4"
              fontWeight="normal"
              sx={{ mb: 4, color: 'rgba(255,255,255,0.72)' }}
              className="animate-fade-up delay-400"
            >
              It may have been moved or the link is outdated. Here are some
              helpful places to go instead:
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }} className="glass card-shine hover-glow">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Button
                    href="/main/dashboard"
                    variant="contained"
                    fullWidth
                    startIcon={<HomeRoundedIcon />}
                    className="btn-shine hover-press"
                  >
                    Dashboard
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    href="/main/rewards"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<EmojiEventsRoundedIcon />}
                    className="hover-press"
                  >
                    Rewards
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    href="/main/smt"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<PaidRoundedIcon />}
                    className="hover-press"
                  >
                    SMT Token
                  </Button>
                </Grid>
              </Grid>
              <Divider sx={{ my: 3 }}>OR</Divider>
              <Button href="/" variant="text" className="animate-fade-in delay-600">
                Go to homepage
              </Button>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
