import { ReactNode } from 'react';
import { Box, Tooltip } from '@mui/material';

interface CustomTooltipProps {
  children?: ReactNode;
  content: string | ReactNode;
  placement?: any;
  height?: string;
  width?: string;
  iconWidth?: string;
  iconHeight?: string;
  padding?: string;
  background?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

const tooltipIcon = {
  name: 'tooltipIcon',
  path: '/static/img/main_dashboard/tooltipIcon.svg',
  desc: 'tooltipIcon'
};

const CustomTooltip = (props: CustomTooltipProps) => {
  return (
    <>
      <Tooltip
        arrow
        title={props.content}
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: props.fontSize || '12px',
              color: props.color || '#212121',
              fontWeight: props.fontWeight || '500',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              background: props.background || '#EDEDED',
              borderRadius: props.borderRadius || '10px',
              width: props.width || '200px',
              padding: props.padding || '10px',
              zIndex: '9998'
            }
          }
        }}
      >
        <Box
          sx={{
            width: props.iconWidth || '13.34px',
            height: props.iconHeight || '13.34px',
            zIndex: '1',
            marginLeft: '8px'
          }}
          component="img"
          alt={tooltipIcon.name}
          src={tooltipIcon.path}
        />
      </Tooltip>
    </>
  );
};

export default CustomTooltip;
