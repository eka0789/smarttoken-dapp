import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-hot-toast';
import { Networks } from 'src/utils';
import { addNetwork, switchToNetwork } from 'src/utils/wallet';
import 'src/theme/animations.css';

/**
 * Guard jaringan global. Jika wallet terhubung ke chain selain BSC
 * (56 mainnet / 97 testnet), tampilkan banner permanen dengan tombol
 * switch satu-klik, karena semua kontrak hanya ada di BSC.
 */
const NetworkGuard = () => {
  const { account, chainId, library } = useWeb3React();
  const [switching, setSwitching] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const wrongNetwork =
    !!account && !!chainId && chainId !== Networks.MainNet && chainId !== Networks.Testnet;

  useEffect(() => {
    setDismissed(false);
  }, [chainId]);

  if (!wrongNetwork || dismissed) return null;

  const handleSwitch = async () => {
    setSwitching(true);
    try {
      await switchToNetwork({ library, chainId: Networks.MainNet });
      toast.success('Wallet switched to BSC Mainnet');
    } catch (error: any) {
      try {
        await addNetwork({ library, chainId: Networks.MainNet });
      } catch (addError) {
        toast.error(
          error?.code === 4001
            ? 'Switch request was rejected in your wallet'
            : 'Could not switch network. Please switch to BSC manually.'
        );
      }
    } finally {
      setSwitching(false);
    }
  };

  return (
    <Box
      role="alert"
      className="animate-slide-down"
      sx={{
        position: 'fixed',
        top: { xs: 92, lg: 96 },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1300,
        width: 'min(720px, calc(100% - 32px))',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 2.5,
        py: 1.5,
        borderRadius: '14px',
        background: 'rgba(26, 12, 12, 0.92)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255, 82, 82, 0.45)',
        boxShadow: '0 12px 34px rgba(0, 0, 0, 0.55), 0 0 22px rgba(255, 82, 82, 0.18)'
      }}
    >
      <WarningAmberRoundedIcon
        sx={{ color: '#FF5252', fontSize: 30, animation: 'smt-wiggle 2.4s ease-in-out infinite' }}
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ color: '#FF8A80', fontWeight: 700, fontSize: 14 }}>
          Wrong network detected
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: 12.5 }}>
          Smart Ecosystem runs on BNB Smart Chain. Your wallet is on chain&nbsp;
          {chainId}. All contract actions will fail until you switch.
        </Typography>
      </Box>
      <Button
        onClick={handleSwitch}
        disabled={switching}
        size="small"
        className="btn-shine hover-press"
        sx={{
          flexShrink: 0,
          px: 2,
          py: 0.75,
          borderRadius: '20px',
          fontWeight: 700,
          color: '#212121',
          background: 'linear-gradient(135deg, #FFCB00 0%, #E0A501 100%)',
          '&:hover': { background: 'linear-gradient(135deg, #FFCB00 0%, #E0A501 100%)' },
          '&:disabled': { color: 'rgba(33,33,33,0.55)' }
        }}
      >
        {switching ? 'Switching…' : 'Switch to BSC'}
      </Button>
    </Box>
  );
};

export default NetworkGuard;
