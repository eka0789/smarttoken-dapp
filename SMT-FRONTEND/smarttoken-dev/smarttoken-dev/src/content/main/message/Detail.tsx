import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Hero from './Hero';
import { Container, Grid, Box, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '50px 70px 220px 58px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },

  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important'
  },

  // MESSAGE CONTENT STYLE
  contentStyle: {
    marginBottom: '15px !important',
    lineHeight: '100% !important',
    fontSize: '18px !important',
    fontWeight: '500 !important',
    color: '#EDEDED !important'
  },

  // MESSAGE DETAIL HEADER STYLE
  messageHeaderStyle: {
    padding: '13px 30px 15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#212121',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px'
  },

  // MESSAGE DETAIL BODY STYLE
  messageBodyStyle: {
    padding: '20px 30px',
    background: '#212121',
    minHeight: '403px',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  }
}));

const Detail = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Main | Messages</title>
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
          <Grid item xs={12}>
            <Box width="100%">
              <Box className={classes.messageHeaderStyle}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <IconButton
                    aria-label="vehicles"
                    sx={{ padding: '0px' }}
                    component={NavLink}
                    to="/main/messages"
                  >
                    <ArrowBackIcon className={classes.headerTypoStyle} />
                  </IconButton>
                  <Typography color="#E0A501" fontSize="24px" marginLeft="26px">
                    Lorem ipsum
                  </Typography>
                </Box>
                <Typography sx={{ float: 'right' }}>
                  13.30 10/22/2021
                </Typography>
              </Box>
              <Divider sx={{ background: '#000' }} />
              <Box className={classes.messageBodyStyle}>
                <Typography className={classes.contentStyle}>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className={classes.contentStyle}>
                  Duis vitae lacus vel tellus mattis vestibulum. Nunc eleifend
                  tincidunt consequat. Ut sit amet quam blandit, luctus diam
                  non, fringilla nulla. Praesent metus nisl, tristique a orci a,
                  cursus bibendum mi. Etiam sagittis justo ut lorem lacinia
                  blandit. Pellentesque quis porttitor magna.
                </Typography>
                <Typography className={classes.contentStyle}>
                  Aliquam imperdiet accumsan augue eget maximus. Vestibulum eu
                  lacinia enim, aliquet lobortis massa. Suspendisse consectetur
                  nibh placerat, tincidunt nibh eu, egestas enim. Donec libero
                  dolor, tristique at nib semper, ultricies lacinia ipsum.
                  Nullam gravida malesuada pellentesque. Fusce in libero eget
                  risus pulvinar ultricies. Vestibulum ictum nisi vel ante
                  finibus faucibus eget eu turpis. Maecenas cursus dui eget
                  libero consectetur, at vestibulum nibh efficitur.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;
