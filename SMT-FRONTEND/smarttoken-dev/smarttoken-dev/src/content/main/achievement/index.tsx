import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box } from '@mui/material';
import MultiTabButton from 'src/components/MultiTab';
import Hero from './Hero';
import Nobility from './Nobility';
import Quest from './Quest';
import { AchievementStyle } from 'src/models/main/achievement/CustomStyle';


const TableInfo = {
  Nobility: <Nobility />,
  Quest: <Quest />
};


const Achievement = () => {

  const classes = AchievementStyle();

  const [tabValue, tabSetState] = useState<string>('Nobility');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

  return (
    <>
      <Helmet>
        <title>Main | Achievement</title>
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
            <Box className={classes.multiTabCustomStyle}>
              <MultiTabButton
                titles="Nobility, Quest"
                currentValue={tabValue}
                padding="0 25px"
                onHandleClick={handleClickTab}
              />
            </Box>
          </Grid>

          {TableInfo[tabValue]}
        </Grid>
      </Container>
    </>
  );
};

export default Achievement;
