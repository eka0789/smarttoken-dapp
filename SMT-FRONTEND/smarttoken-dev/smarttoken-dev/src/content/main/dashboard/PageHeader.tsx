import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface UserType {
  name: string;
  avatar: string;
}

const useStyles = makeStyles({
  mainHeadingStyle: {
    '@media (max-width: 968px)': {
      fontSize: '35px !important'
    }
  }
});

const welcomTitleStyle = {
  fontSize: '46px',
  color: '#EDEDED',
  fontWeight: '700'
};
const nameTitleStyle = {
  fontSize: '46px',
  color: '#E0A501',
  marginLeft: '10px',
  fontWeight: '700'
};

const PageHeader = () => {
  const classes = useStyles();

  const user: UserType = {
    name: 'Smart Army',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <Box marginTop="10px" className="animate-fade-up">
      <Typography
        variant="h3"
        component="span"
        className={classes.mainHeadingStyle}
        style={welcomTitleStyle}
      >
        Welcome,
      </Typography>
      <Typography
        variant="h3"
        component="span"
        className={`${classes.mainHeadingStyle} animate-pop delay-200`}
        style={nameTitleStyle}
      >
        {user.name}
      </Typography>
      <Typography
        variant="h3"
        component="span"
        className={classes.mainHeadingStyle}
        style={welcomTitleStyle}
      >
        !
      </Typography>
    </Box>
  );
};

export default PageHeader;
