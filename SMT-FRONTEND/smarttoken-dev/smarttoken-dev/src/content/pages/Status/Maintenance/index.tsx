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

function StatusMaintenance() {
  return (
    <>
      <Helmet>
        <title>Under Maintenance</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center" className="stagger-children">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }} className="animate-fade-up delay-200">
                The site is currently down for maintenance
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                We apologize for any inconveniences caused
              </Typography>
            </Container>
            <img
              alt="Maintenance"
              height={250}
              src="/static/images/status/maintenance.svg"
              className="animate-float-slow"
            />
          </Box>
          <Box textAlign="center" mt={4}>
            <Button
              href="/main/dashboard"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<HomeRoundedIcon />}
              className="btn-shine hover-press animate-fade-up delay-600"
            >
              Go to Dashboard
            </Button>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusMaintenance;
