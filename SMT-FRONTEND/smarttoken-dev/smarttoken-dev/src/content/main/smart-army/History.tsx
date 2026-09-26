import { Box, Typography } from '@mui/material';
import CustomCard from 'src/components/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customOutBoxStyle: {
    paddingRight: '30px',
    marginTop: '30px',
    '@media (max-width: 968px)': {
      paddingRight: '0px'
    }
  }
}));

const historyTitle = [
  'You purchased Trial License',
  'You purchased Opportunist License',
  'You purchased Runner License ',
  'You extended Runner License',
  'You extended Runner License',
  'You purchased Visionary License'
];

const History = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CustomCard width="100%" height="380px" borderRadius="20px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              marginTop="20px"
              marginLeft="20px"
              color="#E0A501"
              fontSize="36px"
              fontWeight="700"
            >
              History
            </Typography>
            <Box position="absolute" bottom="0" width="100%">
              <CustomCard width="100%" height="296px" borderRadius="20px">
                <Box
                  padding="20px"
                  display="flex"
                  flexDirection="column"
                  height="100%"
                >
                  {historyTitle.length>0 ? historyTitle.map((con, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#EDEDED',
                        marginBottom: '20px',
                        lineHeight: '100%'
                      }}
                    >
                      {con}
                    </Typography>
                  )) : (<Typography variant='h4'>There are no histories</Typography>)}
                </Box>
              </CustomCard>
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default History;
