import React from 'react';
import { useTheme, Theme } from '@mui/material';
import { Typography } from '@mui/material';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import CustomTooltip from 'src/components/Tooltip';

interface MultiTabProps {
  tooltipContent?: Array<string>;
  titles: string;
  currentValue: string;
  padding?: string;
  onHandleClick: (e: React.MouseEvent, value: string) => void;
}

const MultiTabButton: React.FC<MultiTabProps> = (props) => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <>
      {props.titles.split(',').map((con, idx) => (
        <Typography
          key={idx}
          variant="h4"
          padding={props.padding}
          sx={{ transition: 'all .25s ease' }}
          className={
            props.currentValue === con.trim()
              ? classes.activeTab
              : classes.tabTitleStyle
          }
          onClick={(e) => props.onHandleClick(e, con.trim())}
        >
          {con.trim()}
          {props.tooltipContent ? (
            <CustomTooltip content={props.tooltipContent[idx]} />
          ) : (
            ''
          )}
        </Typography>
      ))}
    </>
  );
};

export default MultiTabButton;
