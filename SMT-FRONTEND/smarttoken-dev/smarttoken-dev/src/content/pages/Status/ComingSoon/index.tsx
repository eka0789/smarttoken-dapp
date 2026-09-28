import { Box, Typography, Container, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Logo from 'src/components/LogoSign';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { styled } from '@mui/material/styles';

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

function StatusComingSoon() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center" mb={3} className="stagger-children">
            <Container maxWidth="xs">
              <Typography variant="h1" sx={{ mt: 4, mb: 2 }} className="gradient-text-gold animate-pop">
                Coming Soon
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                We're working on implementing the last features before our
                launch!
              </Typography>
            </Container>
            <img
              alt="Coming Soon"
              height={200}
              src="/static/images/status/coming-soon.svg"
              className="animate-float"
            />
          </Box>

          <Box textAlign="center" className="animate-fade-up delay-600">
            <Button
              href="/main/dashboard"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<HomeRoundedIcon />}
              className="btn-shine hover-press"
            >
              Explore the App
            </Button>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusComingSoon;
