import { Box, Typography, Tooltip, Hidden } from '@mui/material';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomCard from 'src/components/Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customOutBoxStyle: {
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  },
  customHeadingStyle: {
    padding: '0 70px',
    color: '#E0A501',
    fontSize: '18px !important',
    fontWeight: '700 !important',
    lineHeight: '100% !important',
    marginBottom: '10px !important',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      padding: '0 50px'
    }
  }
}));

const rewardContent = [
  {
    name: 'farmer',
    path: '/static/img/main_golden/farmer.svg',
    content: '0.01 SMTC on #1st Phase',
    status: 'Claimed'
  },
  {
    name: 'noble',
    path: '/static/img/main_golden/noble.svg',
    content: '0.1 SMTC on #1st Phase',
    status: 'Claimed'
  },
  {
    name: 'farmer',
    path: '/static/img/main_golden/farmer.svg',
    content: '0.01 SMTC on #2nd Phase',
    status: 'Claimed'
  },
  {
    name: 'noble',
    path: '/static/img/main_golden/noble.svg',
    content: '0.1 SMTC on #2nd Phase',
    status: 'Claimed'
  },
  {
    name: 'farmer',
    path: '/static/img/main_golden/farmer.svg',
    content: '0.5 SMTC on #3rd Phase',
    status: 'Claimed'
  },
  {
    name: 'noble',
    path: '/static/img/main_golden/noble.svg',
    content: '5 SMTC on #3rd Phase',
    status: 'Claimed'
  },
  {
    name: 'farmer',
    path: '/static/img/main_golden/farmer.svg',
    content: '0.5 SMTC on #4th Phase',
    status: 'Claimed'
  },
  {
    name: 'noble',
    path: '/static/img/main_golden/noble.svg',
    content: '5 SMTC on #4th Phase',
    status: 'Claimed'
  },
  {
    name: 'farmer',
    path: '/static/img/main_golden/farmer.svg',
    content: '1 SMTC on #5th Phase',
    status: 'Upcoming'
  },
  {
    name: 'noble',
    path: '/static/img/main_golden/noble.svg',
    content: '10 SMTC on #5th Phase',
    status: 'Upcoming'
  }
];

const TreeReward = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CustomCard
          width="100%"
          height="302px"
          background="linear-gradient(180deg, #212121 0%, #000000 100%)"
        >
          <Box padding="9px 18px">
            <Typography className={classes.customHeadingStyle}>
              Your current & upcoming rewards from Golden Tree
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              {rewardContent.map((con, idx) => {
                return (
                  <Box
                    key={idx}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    height="20px"
                    width="100%"
                    marginBottom="2px"
                  >
                    <Box display="flex" alignItems="center" height="100%">
                      <Hidden mdDown>
                        <Tooltip
                          arrow
                          title={
                            <Box
                              component="img"
                              width="100%"
                              height="100%"
                              alt={con.name}
                              src={con.path}
                            />
                          }
                          placement="top"
                          componentsProps={{
                            tooltip: {
                              sx: {
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                background: '#EDEDED',
                                borderRadius: '10px',
                                width: '110px',
                                height: '110px',
                                padding: '5px',
                                zIndex: '9999'
                              }
                            }
                          }}
                        >
                          <Box
                            component="img"
                            sx={{ width: '20px', height: '20px' }}
                            alt={con.name}
                            src={con.path}
                          />
                        </Tooltip>
                      </Hidden>
                      <Typography
                        style={{
                          color: '#EDEDED',
                          fontSize: '14px',
                          marginLeft: '5px'
                        }}
                      >
                        &#8226; {con.content}
                      </Typography>
                    </Box>
                    <CustomTitle
                      width="120px"
                      height="100%"
                      fontSize="12px"
                      color={con.status === 'Claimed' ? '#EDEDED' : '#212121'}
                      background={
                        con.status === 'Claimed' ? '#5A5A5A' : '#E0A501'
                      }
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                      title={con.status}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default TreeReward;
