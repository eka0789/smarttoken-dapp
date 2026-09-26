import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface CustomBoxProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingRight?: string;
  paddingLeft?: string;
  className?: string;
  maxWidth?: string;
  textAlign?: string;
  background?: string;
}

const ColumnBox = (props: CustomBoxProps) => {
  const { children, textAlign, background, ...rest } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        {...textAlign}
        {...rest}
        sx={{
          position: 'relative',
          background: background
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default ColumnBox;
