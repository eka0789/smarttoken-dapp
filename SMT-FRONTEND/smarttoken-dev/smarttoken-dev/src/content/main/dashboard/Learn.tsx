import { Typography, Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import { LearnMoreButton } from 'src/models/StyledData';
import { m_d_ecoTreeImage } from 'src/models/ImageUrl';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';

const Learn = () => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  const onHandleLearnMore = () => {
    window.open('https://smtdapp.vercel.app/docPaper.html');
  };

  return (
    <>
      <CustomCard className={`${classes.learnCardStyle} hover-lift card-shine`}>
        <Box className={classes.learnMoreOutBoxStyle}>
          <Typography
            variant="h2"
            textAlign="left"
            color={theme.colors.white.main}
            className={classes.learnTitleStyle}
          >
            New to
          </Typography>
          <Typography
            variant="h2"
            component="span"
            textAlign="left"
            color={theme.colors.primary.main}
            className={classes.learnTitleStyle}
          >
            Smart Ecosystem
          </Typography>
          <Typography
            variant="h2"
            component="span"
            textAlign="left"
            color={theme.colors.white.main}
            className={classes.learnTitleStyle}
          >
            ?
          </Typography>
          <LearnMoreButton onClick={onHandleLearnMore}>
            Learn more
          </LearnMoreButton>
          <Box
            component="img"
            src={m_d_ecoTreeImage.path}
            alt={m_d_ecoTreeImage.name}
            className={`${classes.learnMoreTreeStyle} animate-float-slow`}
          />
        </Box>
      </CustomCard>
    </>
  );
};

export default Learn;
