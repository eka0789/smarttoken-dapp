import React from 'react';
import { Typography } from '@mui/material';

interface ParentProps {
  title: string;
  height?: string;
  width?: string;
  color?: string;
  background: string;
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  boxShadow?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  onClick?: () => void;
  sx?: any;
}

const BadgeTitle = (props: ParentProps) => {
  const { title, onClick, sx, ...styleProps } = props;

  return (
    <>
      <Typography
        variant="h4"
        component="span"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign={'center'}
        padding={'3px 5px'}
        borderRadius={'20px'}
        onClick={onClick}
        sx={{ ...styleProps, ...sx }}
      >
        {title}
      </Typography>
    </>
  );
};

export default BadgeTitle;
