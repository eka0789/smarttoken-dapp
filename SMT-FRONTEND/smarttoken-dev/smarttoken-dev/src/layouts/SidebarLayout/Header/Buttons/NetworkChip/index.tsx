import { Box, Typography, Tooltip } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { Networks } from 'src/utils';
import 'src/theme/animations.css';

const NetworkChip = () => {
  const { account, chainId } = useWeb3React();

  if (!account) return null;

  const isMainnet = chainId === Networks.MainNet;
  const isTestnet = chainId === Networks.Testnet;
  const isWrong = !!chainId && !isMainnet && !isTestnet;

  const label = isMainnet
    ? 'BSC Mainnet'
    : isTestnet
    ? 'BSC Testnet'
    : `Chain ${chainId}`;

  const dotColor = isMainnet ? '#31D0AA' : isTestnet ? '#FFCB00' : '#FF5252';

  return (
    <Tooltip arrow title="Active wallet network">
      <Box
        className="animate-slide-down"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          px: 1.5,
          py: 0.5,
          borderRadius: '20px',
          border: '1px solid rgba(224, 165, 1, 0.25)',
          background: 'rgba(0, 0, 0, 0.35)'
        }}
      >
        <Box
          component="span"
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: dotColor,
            boxShadow: `0 0 8px ${dotColor}`,
            ...(isWrong && { animation: 'smt-pulse-gold 1.6s ease-in-out infinite' })
          }}
        />
        <Typography
          sx={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: '0.4px',
            color: isWrong ? '#FF8A80' : 'rgba(255,255,255,0.85)',
            whiteSpace: 'nowrap'
          }}
        >
          {label}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default NetworkChip;
