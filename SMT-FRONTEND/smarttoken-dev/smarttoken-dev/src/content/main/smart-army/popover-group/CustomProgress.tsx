import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customOutBoxStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '450px',
    textAlign: 'center',
    height: '352px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      width: '225px',
      height: '170px'
    }
  },

  customTitleStyle: {
    marginTop: '50px !important',
    fontSize: '24px !important',
    fontWeight: '600 !important',
    color: '#EDEDED',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginTop: '99px !important'
    }
  },

  customProgressStyle: {
    color: '#E8B500 !important',
    opacity: '0.5',
    position: 'absolute',
    top: '90px',
    '@media (max-width: 968px)': {
      top: '45px'
    }
  }
}));

const CustomProgress = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CircularProgress
          className={classes.customProgressStyle}
          size={50}
          value={25}
        />
        <CircularProgress
          className={classes.customProgressStyle}
          variant="determinate"
          size={50}
          value={100}
        />
        <Typography className={classes.customTitleStyle}>
          Checking your balance now...
        </Typography>
      </Box>
    </>
  );
};

export default CustomProgress;
