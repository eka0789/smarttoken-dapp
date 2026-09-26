import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Switch } from '@mui/material';

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

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 32,
  padding: 0,
  borderRadius: '20px',
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 32,
      color: '#FFF',
      backgroundColor: '#FFF'
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
      color: '#FFF',
      backgroundColor: '#FFF'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#E0A501' : '#695400'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 32,
    height: 32,
    borderRadius: 16,
    color: '#FFF',
    backgroundColor: '#FFF',
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#695400' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box'
  }
}));
