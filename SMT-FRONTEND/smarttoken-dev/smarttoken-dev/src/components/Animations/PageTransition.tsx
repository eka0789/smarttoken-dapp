import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import 'src/theme/animations.css';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Re-mounts (and therefore re-animates) its children every time the
 * route pathname changes. Wrap the app's <Outlet /> with it.
 */
const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Box key={location.pathname} className="page-enter">
      {children}
    </Box>
  );
};

export default PageTransition;
