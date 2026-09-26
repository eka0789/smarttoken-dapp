import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import { Tab, Badge, Button } from '@mui/material';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

// Achievement - Nobility style
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '28px',
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


// Achievement - Quest style
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