import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customOutBoxStyle: {
    marginTop: '12px',
    width: '100%',
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  }
}));

const ecoTreeImage = [
  {
    name: 'nftTree',
    path: '/static/img/main_golden/nftTree.svg',
    desc: 'nftTree'
  },
  {
    name: 'coin0',
    path: '/static/img/main_golden/coin0.svg',
    desc: 'coin0'
  },
  {
    name: 'coin1',
    path: '/static/img/main_golden/coin1.svg',
    desc: 'coin1'
  },
  {
    name: 'coin2',
    path: '/static/img/main_golden/coin2.svg',
    desc: 'coin2'
  },
  {
    name: 'coin3',
    path: '/static/img/main_golden/coin3.svg',
    desc: 'coin3'
  },
  {
    name: 'radial',
    path: '/static/img/main_golden/radial.svg',
    desc: 'radial background'
  }
];

const TreeLearn = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CustomCard height="132px" width="100%">
          <Box position="relative" height="100%" width="100%">
            <Box sx={{ padding: '20px 40px 22px 40px', height: '100%' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#EDEDED',
                    lineHeight: '20px'
                  }}
                >
                  Learn how
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#E0A501',
                    lineHeight: '20px',
                    marginBottom: '20px'
                  }}
                >
                  Golden Tree Works
                </Typography>
                <CustomButton
                  width="152px"
                  height="34px"
                  title="Check now"
                  background="#E0A501"
                  color="#212121"
                  fontSize="18px"
                  fontWeight="600"
                  borderRadius="20px"
                  boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                />
              </Box>
            </Box>
            <Box
              component="img"
              src={ecoTreeImage[5].path}
              alt={ecoTreeImage[5].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '0'
              }}
            />
            <Box
              component="img"
              src={ecoTreeImage[0].path}
              alt={ecoTreeImage[0].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '40px'
              }}
            />
            <Box
              component="img"
              src={ecoTreeImage[1].path}
              alt={ecoTreeImage[1].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '0'
              }}
            />
            <Box
              component="img"
              src={ecoTreeImage[2].path}
              alt={ecoTreeImage[2].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '38px'
              }}
            />
            <Box
              component="img"
              src={ecoTreeImage[3].path}
              alt={ecoTreeImage[3].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '96px'
              }}
            />
            <Box
              component="img"
              src={ecoTreeImage[4].path}
              alt={ecoTreeImage[4].name}
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '134px'
              }}
            />
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default TreeLearn;
