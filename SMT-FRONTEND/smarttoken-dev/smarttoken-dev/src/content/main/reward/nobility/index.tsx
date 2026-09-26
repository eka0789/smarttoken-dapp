import { Helmet } from 'react-helmet-async';
import { useNavigate, NavLink } from 'react-router-dom';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Hero from '../Hero';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomButton from 'src/components/Button';
import CustomTooltip from 'src/components/Tooltip';
import { StyledBadge } from 'src/models/main/reward/StyledStyle';
import { NobilityStyle } from 'src/models/main/reward/CustomStyle';
import { NobilityList, COLOR_LIST } from 'src/models/main/reward/SampleData';

const Nobility = () => {
  const theme: Theme = useTheme();
  const classes = NobilityStyle(theme);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Main | Rewards</title>
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
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Nobility Title Rewards
            </Typography>
          </Grid>

          <Grid item xs={12} marginTop="40px">
            <RowBox className={classes.outBoxStyle}>
              {NobilityList.map((row, index) => {
                return (
                  <ColumnBox key={index} marginBottom="50px" width="240px">
                    <RowBox
                      justifyContent="center"
                      textAlign="center"
                      marginBottom="20px"
                    >
                      <Typography
                        variant="h2"
                        className={classes.cardHeadintStyle}
                      >
                        {row.title}
                      </Typography>
                      <CustomTooltip
                        content={row.tooltip}
                        iconWidth="16px"
                        iconHeight="16px"
                        width="250px"
                        height="86px"
                      />
                    </RowBox>
                    <Box component="img" src={row.path} alt={row.title} className="animate-float hover-scale" />
                    {row.badge !== 'none' && (
                      <StyledBadge badgeContent={row.badge} />
                    )}
                    <CustomButton
                      width="160px"
                      height="30px"
                      background={COLOR_LIST[row.buttonName].background}
                      color="#212121"
                      fontSize="14px"
                      fontWeight="600"
                      borderRadius="20px"
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                      marginTop="20px"
                      onHandleClick={() => navigate(`${row.url}`)}
                    >
                      {row.buttonName}
                    </CustomButton>
                  </ColumnBox>
                );
              })}
            </RowBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Nobility;
