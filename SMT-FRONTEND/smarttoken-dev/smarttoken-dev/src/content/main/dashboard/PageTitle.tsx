import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomTooltip from 'src/components/Tooltip';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';

export interface UserType {
  name: string;
  avatar: string;
}

interface PageTitleWrapperProps {
  title: string;
  content?: string;
  width?: string;
}

const PageTitle = ({ title, content, width }: PageTitleWrapperProps) => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <Box {...width} display="flex" alignItems="center">
      <Typography variant="h2" className={classes.pageTitleStyle}>
        {title}
      </Typography>
      <CustomTooltip content={content} />
    </Box>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
