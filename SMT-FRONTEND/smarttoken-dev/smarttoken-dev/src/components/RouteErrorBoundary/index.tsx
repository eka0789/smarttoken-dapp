import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import 'src/theme/animations.css';

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary tingkat-rute: dipasang di dalam PageTransition sehingga
 * satu halaman yang gagal render hanya mematikan halaman itu — shell
 * (sidebar/header) tetap hidup, dan pindah rute otomatis meng-reset state.
 */
class RouteErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Route render error:', error, info?.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          className="animate-zoom-in"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 10,
            px: 3,
            gap: 1.5
          }}
        >
          <Box
            className="animate-glow-breathe"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 84,
              height: 84,
              borderRadius: '50%',
              color: '#E0A501',
              mb: 1,
              background:
                'radial-gradient(circle, rgba(224,165,1,0.16) 0%, transparent 70%)',
              border: '1px solid rgba(224, 165, 1, 0.3)',
              '& svg': { fontSize: 40 }
            }}
          >
            <ErrorOutlineRoundedIcon />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            This page failed to load
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 460, mb: 1 }}
          >
            {this.state.error?.message ||
              'An unexpected error occurred while rendering this page.'}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Button
              variant="contained"
              color="primary"
              className="btn-shine hover-press"
              onClick={this.handleRetry}
            >
              Try Again
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="hover-press"
              onClick={() => {
                window.location.href = '/main/dashboard';
              }}
            >
              Back to Dashboard
            </Button>
          </Box>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default RouteErrorBoundary;
