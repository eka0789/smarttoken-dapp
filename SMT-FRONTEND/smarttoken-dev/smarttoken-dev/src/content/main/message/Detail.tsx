import { Helmet } from 'react-helmet-async';
import { NavLink, useLocation } from 'react-router-dom';
import Hero from './Hero';
import { Container, Grid, Box, Typography, Divider, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import EmptyState from 'src/components/EmptyState';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

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
    lineHeight: '150% !important',
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

interface MessageRow {
  category?: string;
  tags?: string;
  message?: string;
  status?: string;
}

const Detail = () => {
  const classes = useStyles();
  const location = useLocation();
  const row: MessageRow | undefined = (location.state as any)?.row;

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
                    aria-label="back to messages"
                    sx={{ padding: '0px' }}
                    component={NavLink}
                    to="/main/messages"
                  >
                    <ArrowBackIcon className={classes.headerTypoStyle} />
                  </IconButton>
                  <Typography color="#E0A501" fontSize="24px" marginLeft="26px">
                    {row?.category || 'Message'}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  {row?.tags && (
                    <Chip
                      size="small"
                      label={row.tags}
                      sx={{
                        color: '#E0A501',
                        borderColor: 'rgba(224,165,1,0.4)',
                        background: 'rgba(224,165,1,0.08)'
                      }}
                      variant="outlined"
                    />
                  )}
                  {row?.status && (
                    <Typography
                      sx={{
                        color: row.status === 'unread' ? '#FFCB00' : '#9e9e9e',
                        fontWeight: 600,
                        textTransform: 'capitalize'
                      }}
                    >
                      {row.status}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Divider sx={{ background: '#000' }} />
              <Box className={classes.messageBodyStyle}>
                {row?.message ? (
                  <>
                    <Typography className={classes.contentStyle} fontWeight="700">
                      {row.message}
                    </Typography>
                    <Typography className={classes.contentStyle}>
                      This notification was delivered through the Smart
                      Ecosystem messages center. Personal notifications relate
                      to your account (achievements, rewards, license state),
                      while Global and Announcement messages are broadcast to
                      all members.
                    </Typography>
                    <Typography className={classes.contentStyle}>
                      Rewards and on-chain actions referenced in a message can
                      always be verified on BscScan using the transaction
                      history of your own wallet. If a message mentions a reward
                      you believe is missing, check the relevant page (Rewards,
                      Golden Tree, Achievement) before contacting support.
                    </Typography>
                  </>
                ) : (
                  <EmptyState
                    icon={<MailOutlineRoundedIcon />}
                    title="No message selected"
                    description="Open the messages list and click a row to read its full content here."
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;
