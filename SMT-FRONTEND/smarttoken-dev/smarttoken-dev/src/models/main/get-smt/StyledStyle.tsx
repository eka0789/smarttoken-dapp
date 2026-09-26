import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ExchangeButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '260px',
  height: '40px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#695400'
  }
});
