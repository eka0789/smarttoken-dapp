import { Box, Typography, Tooltip } from '@mui/material';
import NobilityTooltip from './Nobility_Tooltip';
import RowBox from 'src/components/Box/RowBox';
import CustomCard from 'src/components/Card';
import { BorderLinearProgress } from 'src/models/main/achievement/StyledStyle';

const maxImage = {
  name: 'maxImage',
  path: '/static/img/main_achievement/max.svg',
  desc: 'maxImage'
};

const NobilityProgress = (props) => {
  return (
    <RowBox height="60px" marginTop="20px">
      <CustomCard width="80%" height="100%">
        <BorderLinearProgress variant="determinate" value={70} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="3px 10px"
        >
          <Typography variant="h4" color="#E0A501">
            100
          </Typography>
          <Typography variant="h4">growth to achieve</Typography>
          <Typography variant="h4" color="#E0A501">
            King
          </Typography>
        </Box>
      </CustomCard>
      <Box width="60px" height="100%" position="relative">
        <Tooltip
          arrow
          title={<NobilityTooltip />}
          placement="right"
          componentsProps={{
            tooltip: {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
                borderRadius: '10px',
                width: '255px',
                height: '378px',
                padding: '20px',
                zIndex: '9999'
              }
            }
          }}
        >
          <Box
            component="img"
            src={maxImage.path}
            alt={maxImage.name}
            width="100%"
            height="100%"
          />
        </Tooltip>
      </Box>
    </RowBox>
  );
};

export default NobilityProgress;
