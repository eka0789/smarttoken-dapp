import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import CustomCard from 'src/components/Card';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { toast } from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '41px 110px !important',
    '@media (max-width: 1280px)': {
      padding: '30px !important'
    }
  },
  contentOutBox: {
    width: '85%',
    marginBottom: '20px',
    '@media (max-width: 968px)': {
      width: '100%'
    }
  },
  rightContentPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      flexDirection: 'column'
    }
  },
  contentHeading: {
    color: '#E0A501',
    fontSize: '24px !important',
    fontWeight: '700 !important',
    '@media (max-width: 968px)': {
      fontSize: '20px !important'
    }
  },
  contentTitle: {
    '@media (max-width: 968px)': {
      textAlign: 'center'
    }
  }
}));

const toolsInfo = [
  {
    name: 'Crossline Breaker',
    path: '/static/img/wealth_tools/tools0.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices condimentum ligula, ac porttitor odio commodo sit amet. Nullam at ullamcorper turpis. Cras accumsan euismod purus, vitae viverra nisi mollis non. Sed mollis auctor turpis, et finibus dui.'
  },
  {
    name: 'Event Setup',
    path: '/static/img/wealth_tools/tools1.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices condimentum ligula, ac porttitor odio commodo sit amet. Nullam at ullamcorper turpis. Cras accumsan euismod purus, vitae viverra nisi mollis non. Sed mollis auctor turpis, et finibus dui.'
  },
  {
    name: 'Raise Flag',
    path: '/static/img/wealth_tools/tools2.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices condimentum ligula, ac porttitor odio commodo sit amet. Nullam at ullamcorper turpis. Cras accumsan euismod purus, vitae viverra nisi mollis non. Sed mollis auctor turpis, et finibus dui.'
  },
  {
    name: 'Challenge Team Member',
    path: '/static/img/wealth_tools/tools3.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices condimentum ligula, ac porttitor odio commodo sit amet. Nullam at ullamcorper turpis. Cras accumsan euismod purus, vitae viverra nisi mollis non. Sed mollis auctor turpis, et finibus dui.'
  },
  {
    name: 'Presentation Tools',
    path: '/static/img/wealth_tools/tools4.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices condimentum ligula, ac porttitor odio commodo sit amet. Nullam at ullamcorper turpis. Cras accumsan euismod purus, vitae viverra nisi mollis non. Sed mollis auctor turpis, et finibus dui.'
  }
];

const ToolButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '160px',
  height: '40px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const Tools = () => {
  const classes = useStyles();

  const onHandleTool = (toolName: string): void => {
    toast.info(`${toolName} — coming soon`);
  };

  return (
    <>
      <Helmet>
        <title>Wealth | Tools</title>
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
          <Grid item xs={12} display="flex" justifyContent="flex-start">
            <Typography
              variant="h1"
              color="#E0A501"
              height="44px"
              fontWeight="700"
              marginBottom="30px"
            >
              Tools
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection={'column'}
            justifyContent="flex-start"
          >
            {toolsInfo.map((content, idx) => {
              return (
                <Box key={idx} className={classes.contentOutBox}>
                  <CustomCard height={'auto'} width={'100%'}>
                    <Box
                      display="flex"
                      justifyContent={'space-between'}
                      padding="20px"
                      height="100%"
                    >
                      <Box
                        width="160px"
                        height="160px"
                        border="2px solid #323232"
                        textAlign="center"
                        display="flex"
                        borderRadius={'50%'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Box
                          component="img"
                          src={content.path}
                          alt={content.name}
                        />
                      </Box>
                      <Box display="flex" flexDirection={'column'} width="70%">
                        <Box className={classes.rightContentPart}>
                          <Typography className={classes.contentHeading}>
                            {content.name}
                          </Typography>
                          <ToolButton
                            onClick={() => onHandleTool(content.name)}
                          >
                            [button]
                          </ToolButton>
                        </Box>
                        <Box marginTop={'20px'}>
                          <Typography
                            variant="h4"
                            className={classes.contentTitle}
                          >
                            {content.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CustomCard>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Tools;
