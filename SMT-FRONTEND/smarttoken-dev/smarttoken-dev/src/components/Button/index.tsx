import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
  children?: ReactNode;
  title?: string;
  boxShadow?: string;
  border?: string;
  padding?: string;
  hoverBackground?: string;
  hoverColor?: string;
  height: string;
  width: string;
  background: string;
  color: string;
  borderRadius: string;
  marginTop?: string;
  fontSize: string;
  fontWeight: string;
  onHandleClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    value?: string
  ) => void;
}

const CustomButton = (props: CustomButtonProps) => {
  const StyledButton = styled(Button)({
    ...props,
    lineHeight: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    position: 'relative',
    overflow: 'hidden',
    transition:
      'all .3s cubic-bezier(0.22, 1, 0.36, 1), background .3s ease, box-shadow .3s ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '40%',
      height: '100%',
      background:
        'linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
      transform: 'translateX(-130%) skewX(-18deg)',
      transition: 'transform .8s ease',
      pointerEvents: 'none'
    },
    '&:hover': {
      background: props.hoverBackground || '#695400',
      color: props.hoverColor || '#EDEDED',
      transform: 'translateY(-2px)',
      boxShadow:
        props.background && props.background.indexOf('#E0A501') !== -1
          ? '0 6px 18px rgba(224, 165, 1, 0.45)'
          : '0 6px 18px rgba(0, 0, 0, 0.35)'
    },
    '&:hover::before': {
      transform: 'translateX(320%) skewX(-18deg)'
    },
    '&:active': {
      transform: 'translateY(0) scale(0.97)'
    }
  });

  return (
    <StyledButton onClick={props.onHandleClick} type="submit">
      {props.children || props.title}
    </StyledButton>
  );
};

export default CustomButton;
