import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RouteErrorBoundary from 'src/components/RouteErrorBoundary';
import 'src/theme/animations.css';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Re-mounts (and therefore re-animates) its children every time the
 * route pathname changes. Wrap the app's <Outlet /> with it.
 * Juga membungkus RouteErrorBoundary: error render satu halaman tidak
 * mematikan shell, dan berpindah rute otomatis meng-reset error state.
 */
const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Box key={location.pathname} className="page-enter">
      <RouteErrorBoundary>{children}</RouteErrorBoundary>
    </Box>
  );
};

export default PageTransition;
