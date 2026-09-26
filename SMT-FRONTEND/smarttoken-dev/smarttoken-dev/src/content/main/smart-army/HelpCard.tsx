import { Box, Typography } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';

const helpImages = [
  {
    name: 'echoTree',
    path: '/static/img/main_smart/nftTree.svg',
    desc: 'echoTree'
  },
  {
    name: 'tutor',
    path: '/static/img/main_smart/tutor.svg',
    desc: 'tutor'
  }
];

const HelpCard = () => {

  const openTutorial = () => {
    window.open('https://smarttoken.finance/docTutorial.html');
  }

  const openSmartPaper = () => {
    window.open('https://smarttoken.finance/docPaper.html');
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        marginTop="30px"
        height="380px"
      >
        <CustomCard height="180px" width="100%" borderRadius="20px">
          <Box
            sx={{
              padding: '30px',
              height: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box height="48px">
              <Box>
                <Typography
                  component="span"
                  sx={{
                    textAlign: 'left',
                    fontSize: '30px',
                    fontWeight: '600',
                    lineHeight: '100%',
                    color: '#EDEDED'
                  }}
                >
                  New to
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '30px',
                    fontWeight: '600',
                    lineHeight: '100%',
                    color: '#E0A501',
                    marginLeft: '7px'
                  }}
                >
                  Smart
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  textAlign: 'left',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '100%',
                  color: '#E0A501'
                }}
              >
                Ecosystem
              </Typography>
              <Typography
                component="span"
                sx={{
                  textAlign: 'left',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '100%',
                  color: '#EDEDED'
                }}
              >
                ?
              </Typography>
            </Box>
            <CustomButton
              width="168px"
              height="30px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              borderRadius="20px"
              onHandleClick={() => {openSmartPaper()}}
            >
              Read Whitepaper
            </CustomButton>
            <Box
              component="img"
              src={helpImages[0].path}
              alt={helpImages[0].name}
              sx={{
                width: '134px',
                height: '168px',
                position: 'absolute',
                bottom: '0px',
                right: '30px'
              }}
            />
          </Box>
        </CustomCard>

        <CustomCard height="180px" width="100%" borderRadius="20px">
          <Box
            sx={{
              padding: '30px',
              height: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box height="48px">
              <Typography
                component="div"
                sx={{
                  textAlign: 'left',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '100%',
                  color: '#EDEDED'
                }}
              >
                Check our
              </Typography>
              <Typography
                component="span"
                sx={{
                  textAlign: 'left',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '100%',
                  color: '#E0A501'
                }}
              >
                tutorials
              </Typography>
              <Typography
                component="span"
                sx={{
                  textAlign: 'left',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '100%',
                  color: '#EDEDED'
                }}
              >
                !
              </Typography>
            </Box>
            <CustomButton
              width="168px"
              height="30px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              borderRadius="20px"
              onHandleClick={() => {openTutorial()}}
            >
              Check it out!
            </CustomButton>
            <Box
              component="img"
              src={helpImages[1].path}
              alt={helpImages[1].name}
              sx={{
                width: '134px',
                height: '168px',
                position: 'absolute',
                bottom: '0px',
                right: '30px'
              }}
            />
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default HelpCard;
