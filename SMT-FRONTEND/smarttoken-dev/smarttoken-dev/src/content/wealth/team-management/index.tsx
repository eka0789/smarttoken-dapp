import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomCard from 'src/components/Card';
import { Container, Grid, Typography, Box } from '@mui/material';
import { TeamManagementStyle } from 'src/models/wealth/team/CustomStyle';
import { teamInfo } from 'src/models/wealth/team/SampleData';

const Team = () => {
  const classes = TeamManagementStyle();

  return (
    <>
      <Helmet>
        <title>Wealth | Team Management</title>
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
            <Typography variant="h3" className={classes.headingTitleStyle}>
              Team Ladder Overview
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.contentScrollStyle}
            >
              {Array(7)
                .fill(0)
                .map((con, idx) => (
                  <Box
                    display={'flex'}
                    key={idx}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                    className={classes.contentPaddingStyle}
                  >
                    <CustomCard height={250 + idx * 50 + 'px'} width={'150px'}>
                      <Box
                        padding={'10px'}
                        height={'100%'}
                        display={'flex'}
                        flexDirection={'column'}
                      >
                        {teamInfo.map((con, idx) => {
                          return (
                            <Box
                              key={idx}
                              display={'flex'}
                              flexDirection={'column'}
                              marginBottom={'10px'}
                            >
                              <Typography
                                color={'#EDEDED'}
                                fontSize={'12px'}
                                fontWeight={'600'}
                                lineHeight={'100%'}
                              >
                                {con.name}
                              </Typography>
                              <Typography
                                color={'#E0A501'}
                                fontSize={'18px'}
                                fontWeight={'700'}
                                lineHeight={'110%'}
                              >
                                {con.value}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </CustomCard>
                    <CustomTitle
                      width={'120px'}
                      height={'40px'}
                      color={'#212121'}
                      background={'#E0A501'}
                      title={'Lv. ' + (idx + 1)}
                      fontSize={'24px'}
                      fontWeight={'700'}
                      marginTop={'10px'}
                    />
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Team;
