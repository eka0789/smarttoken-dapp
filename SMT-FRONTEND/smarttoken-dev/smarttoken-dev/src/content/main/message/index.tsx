import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Hero from './Hero';
import AllTable from './AllTable';
import PersonalTable from './PersonalTable';
import GlobalTable from './GlobalTable';
import AnnouncementTable from './AnnouncementTable';
import MultiTabButton from 'src/components/MultiTab';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 70px 40px 58px !important',
    '@media (max-width: 1280px)': {
      padding: '30px 20px !important'
    }
  },
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important',
    marginBottom: '0px !important'
  }
}));

const TableInfo = {
  All: <AllTable />,
  Personal: <PersonalTable />,
  Global: <GlobalTable />,
  Announcement: <AnnouncementTable />
};

const Message = () => {
  const classes = useStyles();

  const [tabValue, tabSetState] = useState<string>('All');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

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
            <Box
              display="flex"
              alignItems="center"
              sx={{
                height: '32px',
                background: '#695400',
                borderRadius: '10px',
                textAlign: 'center',
                width: 'fit-content'
              }}
            >
              <MultiTabButton 
                titles='All, Personal, Global, Announcement'
                currentValue={tabValue}
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

export default Message;
