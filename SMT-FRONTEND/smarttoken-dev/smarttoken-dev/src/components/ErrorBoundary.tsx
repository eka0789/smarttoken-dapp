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
          bgcolor="#141414"
          color="#fff"
          textAlign="center"
          p={4}
        >
          <Typography variant="h4" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </Typography>
          <Button variant="contained" color="primary" onClick={this.handleReset}>
            Reload Application
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;