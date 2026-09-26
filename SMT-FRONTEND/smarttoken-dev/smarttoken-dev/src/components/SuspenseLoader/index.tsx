import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box } from '@mui/material';
import 'src/theme/animations.css';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
      }}
    >
      <Box sx={{ position: 'relative', width: 74, height: 74 }}>
        {/* rotating gold ring */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid rgba(224, 165, 1, 0.15)',
            borderTopColor: '#E0A501',
            borderRightColor: '#FFCB00',
            animation: 'smt-spin-slow 1.1s linear infinite'
          }}
        />
        {/* counter-rotating dashed ring */}
        <Box
          sx={{
            position: 'absolute',
            inset: '9px',
            borderRadius: '50%',
            border: '2px dashed rgba(224, 165, 1, 0.35)',
            animation: 'smt-spin-slow 2.4s linear infinite reverse'
          }}
        />
        {/* glowing core */}
        <Box
          sx={{
            position: 'absolute',
            inset: '26px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, #FFCB00 0%, #E0A501 55%, transparent 100%)',
            animation: 'smt-glow-breathe 1.6s ease-in-out infinite'
          }}
        />
      </Box>
      <Box
        className="gradient-text-gold"
        sx={{
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}
      >
        Smart Ecosystem
      </Box>
    </Box>
  );
}

export default SuspenseLoader;
