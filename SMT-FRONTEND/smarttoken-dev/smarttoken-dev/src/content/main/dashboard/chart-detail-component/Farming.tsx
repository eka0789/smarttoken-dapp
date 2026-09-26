import { Box, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import { chartDetailArrayFarming } from 'src/models/SampleData';

const Farming = () => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.chartDetailArrayContentStyle}
      >
        {chartDetailArrayFarming.map((content, idx) => (
          <Box key={idx} display="flex" flexDirection="row">
            <Typography
              component="div"
              style={{ color: content.color }}
              className={classes.chartDetailArrayValueStyle}
            >
              {content.name_key}
            </Typography>
            <Typography
              component="div"
              style={{ color: content.color }}
              className={classes.chartDetailArrayValueStyle}
            >
              : {content.name_value}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Farming;
