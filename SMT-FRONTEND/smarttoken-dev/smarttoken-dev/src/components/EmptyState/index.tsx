import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import 'src/theme/animations.css';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}

/**
 * Tampilan konsisten untuk kondisi "tidak ada data" — dipakai di tabel,
 * daftar reward, pesan, dsb. Sudah dianimasikan & mengikuti tema gold.
 */
const EmptyState: FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  compact = false
}) => (
  <Box
    className="animate-fade-in"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 1,
      px: 2,
      py: compact ? 3 : 6
    }}
  >
    {icon && (
      <Box
        className="animate-float"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: compact ? 48 : 72,
          height: compact ? 48 : 72,
          borderRadius: '50%',
          mb: 0.5,
          color: '#E0A501',
          background: 'radial-gradient(circle, rgba(224,165,1,0.14) 0%, transparent 70%)',
          border: '1px solid rgba(224, 165, 1, 0.25)',
          '& svg': { fontSize: compact ? 24 : 34 }
        }}
      >
        {icon}
      </Box>
    )}
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: compact ? 14 : 16,
        color: 'text.primary'
      }}
    >
      {title}
    </Typography>
    {description && (
      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', maxWidth: 420 }}
      >
        {description}
      </Typography>
    )}
    {action && <Box sx={{ mt: 1.5 }}>{action}</Box>}
  </Box>
);

export default EmptyState;
