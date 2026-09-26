import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

// Index page custom badge style
export const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    color: '#212121 !important',
    background: '#F84343 !important',
    boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.25), inset -1px -4px 6px rgba(0, 0, 0, 0.25)',
    width: '48px',
    height: '48px',
    borderRadius: '32px',
    fontSize: '24px !important',
    fontWeight: '500'
  },
  position: 'absolute',
  top: '77px',
  right: '10px'
});

// Rewards - Nobility - Chest style
export const StyledBadge1 = styled(Badge)({
  '& .MuiBadge-badge': {
    color: '#212121 !important',
    background: '#F84343 !important',
    boxShadow:
      '6.4px 6.4px 6.4px rgba(0, 0, 0, 0.25), inset -1.6px -4.8px 6.4px rgba(0, 0, 0, 0.25)',
    width: '32px',
    height: '32px',
    borderRadius: '32px',
    fontSize: '14px !important',
    fontWeight: '600'
  }
});

// Rewards - Nobility - Passive style
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// Rewards - GoldenTreePhase style
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '24px',
  borderRadius: '14px',
  border: '2px solid #323232',
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
    borderRadius: '8px 0px 0px 8px'
  }
}));
