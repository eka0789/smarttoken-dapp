import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Hero from '../Hero';
import RowBox from 'src/components/Box/RowBox';
import { currentSmtcImage } from 'src/models/main/get-smt/SampleData';
import { getSmtcStyle } from 'src/models/main/get-smt/CustomStyle';
import { toast } from 'react-hot-toast';

// VISIT BUTTON CUSTOMIZE
const VisitButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '160px',
  height: '40px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#695400'
  }
});

// TOOLTIP ICON IMAG
const tooltipIcon = {
  name: 'tooltipIcon',
  path: '/static/img/main_dashboard/tooltipIcon.svg',
  desc: 'tooltipIcon'
};

// VISIT BUTTON CLICKE EVENT
const onHandleVisit = (_visitNum: Number) => {
  toast.info('This section is coming soon');
};

const GetSmtc = () => {
  const classes = getSmtcStyle();

  const [curActiveTab, setActiveTab] = useState<Number>(0);
  // CURRENT SELECTED TAB
  const onHandleSelectTab = (curNum: Number) => {
    setActiveTab(curNum);
  };

  return (
    <>
      <Helmet>
        <title>Main | Get SMT / SMTC</title>
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
          {/* Header Title */}
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/smt"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Get SMT Cash
            </Typography>
          </Grid>

          {/* LEFT SIDE OF DASHBOARD */}
          <Grid item xs={12} sm={5} className={classes.customLeftSpacing}>
            {/* CURRENT SELECED ITEM DISPLAY */}
            <Grid item xs={12} position="relative">
              {currentSmtcImage.map((content, idx) => {
                return curActiveTab === idx ? (
                  <Box key={idx} sx={{ padding: '0', margin: '0' }}>
                    <Box
                      component="img"
                      sx={{
                        height: '570px',
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%'
                      }}
                      src={content.path}
                      alt={content.name}
                    />
                    <Box className={classes.currentSmtInfoStyle}>
                      <Typography
                        className={classes.currentSmtInfoHeadingStyle}
                      >
                        {content.name}
                      </Typography>
                      <Typography
                        className={classes.currentSmtInfoContentStyle}
                      >
                        {content.desc}
                      </Typography>
                      <RowBox marginTop="20px">
                        <VisitButton onClick={() => onHandleVisit(idx)}>
                          Visit
                        </VisitButton>
                        <Box
                          component="img"
                          sx={{
                            ml: 2,
                            width: '30px',
                            height: '30px',
                            marginRight: '10px'
                          }}
                          alt={tooltipIcon.name}
                          src={tooltipIcon.path}
                        />
                      </RowBox>
                    </Box>
                  </Box>
                ) : (
                  ''
                );
              })}
            </Grid>
          </Grid>

          {/* RIGHT SIDE OF DASHBOARD */}
          <Grid item xs={12} sm={7} className={classes.customRightSpacing}>
            <Box
              position="relative"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {currentSmtcImage.map((content, idx) => (
                <Box
                  key={idx}
                  sx={{
                    marginBottom: '20px',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => onHandleSelectTab(idx)}
                >
                  <Box
                    component="img"
                    sx={{}}
                    alt={content.name}
                    src={content.targetPath}
                    className={
                      curActiveTab === idx
                        ? classes.targetSmtBoxActiveStyle
                        : classes.targetSmtBoxStyle
                    }
                  ></Box>
                  <Typography
                    variant="h3"
                    className={classes.targetSmtTitleStyle}
                  >
                    {content.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GetSmtc;
