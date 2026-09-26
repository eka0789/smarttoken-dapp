import React from 'react';
import { Typography } from '@mui/material';

interface ParentProps {
  title: string;
  width: string;
  height: string;
  color: string;
  background: string;
  fontSize: string;
  fontWeight: string;
  borderRadius: string;
  boxShadow?: string;
}

const SpanTitle: React.FC<ParentProps> = (props) => {
  return (
    <Typography
      width={props.width}
      textAlign={'center'}
      height={props.height}
      borderRadius={props.borderRadius}
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      sx={{ background: props.background, boxShadow: props.boxShadow }}
    >
      {props.title}
    </Typography>
  );
};

export default SpanTitle;
