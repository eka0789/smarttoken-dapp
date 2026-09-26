import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import CustomCard from 'src/components/Card';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 40px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },

  // CARD BOX PADDING
  CardBoxPadding: {
    padding: '50px 80px',
    '@media (max-width: 968px)': {
      padding: '20px'
    }
  },

  // CUSTOME WIDHT OF LEVEL STYLE
  customButtonGroupStyle: {
    width: '680px',
    marginBottom: '30px'
  },

  // CUSTOM SCROLL STYLE
  customScrollStyle: {
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '5px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid #323232',
      cursor: 'pointer',
      borderRadius: '10px'
    }
  }
}));

const LegalButton = styled(Button)({
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  borderRadius: '50px',
  border: '2px solid #323232',
  width: '160px',
  height: '30px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#E8B500',
  '&:hover': {
    background: 'linear-gradient(180deg, #FFCB00 0%, #936900 100%)',
    color: '#212121'
  }
});

const Legal = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Main | Legal Agreement</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          <Grid item xs={12} className={classes.customScrollStyle}>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.customButtonGroupStyle}
            >
              <LegalButton>Information</LegalButton>
              <LegalButton>Term of Service</LegalButton>
              <LegalButton>Privacy Policy</LegalButton>
              <LegalButton>Disclaimer</LegalButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CustomCard width={'100%'} height={'auto'} borderRadius={'20px'}>
              <Box className={classes.CardBoxPadding}>
                {Array(5)
                  .fill(0)
                  .map((con, idx) => {
                    return (
                      <Typography
                        key={idx}
                        marginBottom="20px"
                        fontSize="18px"
                        color="#EDEDED"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent elementum dolor id tristique egestas. In
                        feugiat, eros ut dignissim porta, enim dolor sodales
                        sapien, ac sollicitudin augue diam a massa. Phasellus
                        vestibulum, libero vel tincidunt vulputate, massa lacus
                        eleifend ligula, sed luctus purus nunc eu massa. Donec
                        pharetra iaculis nulla, imperdiet tempor eros ultrices
                        accumsan. Etiam eget nisi sit amet mauris laoreet
                        tincidunt.
                      </Typography>
                    );
                  })}
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Legal;
