import CustomCard from '../../../../../components/Card';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM LINK BOX STYLE
  customLinkBoxStyle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '0px'
    }
  },

  // CUSTOM LINK BOX STYLE
  customLinkOutBoxStyle: {
    width: '47%',
    '@media (max-width: 968px)': {
      width: '90%',
      marginTop: '20px'
    }
  }
}));

const LinkSection = ({ userAccount }) => {
  const classes = useStyles();

  return (
    <Box className={classes.customLinkBoxStyle}>
      <Box className={classes.customLinkOutBoxStyle}>
        <CustomCard width={'100%'} height={'100%'}>
          <Box padding={'20px'}>
            <Typography variant="h3" component="span" color="#EDEDED">
              Account ID :
            </Typography>
            <Typography
              variant="h3"
              component="span"
              color="#E0A501"
              marginLeft="10px"
            >
              7b10Ex257V03yr
            </Typography>
          </Box>
        </CustomCard>
      </Box>

      <Box className={classes.customLinkOutBoxStyle}>
        <CustomCard width="100%" height="100%">
          <Box padding="20px">
            <Typography variant="h3" component="span" color="#EDEDED">
              Ref link :
            </Typography>
            <Typography
              variant="h3"
              component="span"
              color="#E0A501"
              marginLeft="10px"
            >
              {userAccount
                ? `Smart-Ecosystem/p-id=${userAccount.slice(0, 8)}`
                : ''}
            </Typography>
          </Box>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default LinkSection;
