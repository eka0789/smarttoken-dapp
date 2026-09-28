import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary global: menangkap error render di mana pun di dalam tree,
 * sehingga satu error tidak membuat seluruh aplikasi blank screen.
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Unhandled render error:', error, info?.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bgcolor="#070C27"
          color="#fff"
          textAlign="center"
          p={4}
          className="animate-fade-in"
        >
          <Typography variant="h4" gutterBottom className="gradient-text-gold">
            Something went wrong
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              color="primary"
              className="btn-shine hover-press"
              onClick={this.handleReset}
            >
              Reload Application
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="hover-press"
              onClick={() => {
                window.location.href = '/main/dashboard';
              }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;