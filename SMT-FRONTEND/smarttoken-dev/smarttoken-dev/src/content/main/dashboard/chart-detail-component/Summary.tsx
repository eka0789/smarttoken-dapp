import { Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import { chartDetailArray, chartDetailArray1 } from 'src/models/SampleData';

const Teamwork = () => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <>
      <ColumnBox
        className={classes.chartDetailArrayContentStyle}
        alignItems="stretch"
      >
        {chartDetailArray.map((content, idx) => (
          <RowBox key={idx}>
            <Typography
              variant="h4"
              className={classes.chartDetailArrayValueStyle}
            >
              {content.name_key}
            </Typography>
            <Typography
              variant="h4"
              className={classes.chartDetailArrayValueStyle}
            >
              : {content.name_value}
            </Typography>
          </RowBox>
        ))}
        {chartDetailArray1.map((content, idx) => (
          <RowBox key={idx} marginTop={content.marginTop}>
            <Typography
              style={{ color: content.color }}
              className={classes.chartDetailArrayValueStyle}
            >
              {content.name_key}
            </Typography>
            <Typography
              style={{ color: content.color }}
              className={classes.chartDetailArrayValueStyle}
            >
              : {content.name_value}
            </Typography>
          </RowBox>
        ))}
      </ColumnBox>
    </>
  );
};

export default Teamwork;
