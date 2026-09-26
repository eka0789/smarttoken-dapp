import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import 'nprogress/nprogress.css';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { useEagerConnect } from './hooks/useEagerConnect';
import { passUrl } from 'src/utils/ladder';

const App = () => {
  const content = useRoutes(routes);
  useEagerConnect();

  /** Get sponsor url and go to the smart army page */
  let sponsorUrl = passUrl(window.location.pathname);
  if (sponsorUrl) {
    localStorage.setItem('sponsor', sponsorUrl);
    return <Navigate to="main/smart" replace />;
  }

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default React.memo(App);
