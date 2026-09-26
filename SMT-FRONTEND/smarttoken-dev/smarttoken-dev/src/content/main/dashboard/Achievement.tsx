import { Typography, Box } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import PageTitle from './PageTitle';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { AchieveStyle } from 'src/models/main/dashboard/CustomStyles';
import { collectedBadge } from 'src/models/ImageUrl';
import { achievedTitle } from 'src/models/SampleData';
import { titleStyle } from 'src/models/StyledData';

const Achievement = () => {
  const theme: Theme = useTheme();
  const classes = AchieveStyle(theme);

  const seeMore = () => {
    window.open('https://smarttoken.finance/docTutorial.html');
  };

  return (
    <>
      <ColumnBox marginTop="20px" alignItems="flex-start">
        <PageTitle
          title={'Your Achievemnet'}
          content={'Your current Achievement in Smart Ecosystem'}
        />
        <RowBox className={classes.customOutBoxStyle}>
          <Box className={classes.customInnerBoxStyle}>
            <Typography variant="h4" paddingLeft="10px" marginTop="10px">
              Last achieved
            </Typography>
            <CustomCard height="auto" marginTop="10px" className="hover-lift">
              <Box className={classes.titleBoxStyle}>
                {achievedTitle.map((title, idx) => (
                  <RowBox key={idx} className={classes.titleInnerBoxStyle}>
                    <Typography className={classes.achievedDotStyle}>
                      &#8226;
                    </Typography>
                    <Typography
                      variant="h4"
                      className={classes.achievedTitleStyle}
                    >
                      {title.name}
                    </Typography>
                  </RowBox>
                ))}
              </Box>
            </CustomCard>
            <Typography
              variant="h4"
              className={classes.seeMoreCustomStyle}
              onClick={seeMore}
            >
              See more &gt;&gt;
            </Typography>
          </Box>

          <Box className={classes.customInnerBoxStyle}>
            <Typography variant="h4" margin="10px 0 0 10px">
              Collected Badges
            </Typography>
            <CustomCard height="auto" marginTop="10px" className="hover-lift">
              <Box className={classes.badgeCustomBoxStyle}>
                {collectedBadge.map((badge, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    alt={badge.name}
                    src={badge.path}
                    className={classes.customBadgeStyle}
                  />
                ))}
              </Box>
            </CustomCard>
            <Typography
              variant="h4"
              className={classes.seeMoreCustomStyle}
              onClick={seeMore}
            >
              See more &gt;&gt;
            </Typography>

            <Typography variant="h4" margin="11px 0 0 10px">
              Collected Titles
            </Typography>
            <CustomTitle {...titleStyle} title="Prince" />
            <CustomTitle {...titleStyle} title="Duke" />

            <Typography
              variant="h4"
              className={classes.seeMoreCustomStyle}
              onClick={seeMore}
            >
              See more &gt;&gt;
            </Typography>
          </Box>
        </RowBox>
      </ColumnBox>
    </>
  );
};

export default Achievement;
