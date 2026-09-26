import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import { WalletButtonProvider } from './contexts/WalletButtonContext';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { AuthProvider } from './contexts/auth/authContext';
import ToastContainer from './components/Toast/ToastContainer';
import ErrorBoundary from './components/ErrorBoundary';

// Error tracking (opsional): aktif hanya jika REACT_APP_SENTRY_DSN diisi.
if (process.env.REACT_APP_SENTRY_DSN) {
  import('@sentry/react').then((Sentry) => {
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRY_DSN,
      environment: process.env.NODE_ENV
    });
  });
}

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <HelmetProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <SidebarProvider>
          <WalletButtonProvider>
            <BrowserRouter>
              <ToastContainer />
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </BrowserRouter>
          </WalletButtonProvider>
        </SidebarProvider>
      </AuthProvider>
    </Web3ReactProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
