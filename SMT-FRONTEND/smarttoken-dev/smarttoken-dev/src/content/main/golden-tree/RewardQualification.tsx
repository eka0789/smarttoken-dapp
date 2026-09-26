import { Box, Typography } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';

const rewardImage = [
  {
    name: 'reward0',
    path: '/static/img/main_golden/reward0.svg',
    desc: 'reward0'
  },
  {
    name: 'reward1',
    path: '/static/img/main_golden/reward1.svg',
    desc: 'reward1'
  }
];

const RewardQualification = () => {
  return (
    <>
      <Box sx={{ paddingLeft: '20px', marginTop: '20px' }}>
        <CustomCard width="100%" height="328px" borderRadius="20px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              marginTop="10px"
              marginLeft="20px"
              color="#E0A501"
              fontSize="24px"
              fontWeight="700"
            >
              Rewards Qualification
            </Typography>
            <Box position="absolute" bottom="0" width="100%">
              <CustomCard width="100%" height="269px" borderRadius="20px">
                <Box
                  padding="20px 20px 30px 20px"
                  display="flex"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    width="160px"
                    height="100%"
                  >
                    <Box
                      component="img"
                      alt={rewardImage[0].name}
                      src={rewardImage[0].path}
                      width="130px"
                      height="130px"
                    />
                    <Typography variant="h4">Farm ≥ 100 SMT</Typography>
                    <CustomTitle
                      width="100%"
                      height="30px"
                      color="#212121"
                      title="Available"
                      fontSize="14px"
                      background="#E0A501"
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    width="160px"
                    height="100%"
                  >
                    <Box
                      component="img"
                      alt={rewardImage[1].name}
                      src={rewardImage[1].path}
                      width="130px"
                      height="130px"
                    />
                    <Typography
                      variant="h4"
                      padding="0 30px"
                      textAlign="center"
                    >
                      Achieve Nobility Title
                    </Typography>
                    <CustomTitle
                      width="100%"
                      height="30px"
                      color="#212121"
                      title="Unavailable"
                      fontSize="14px"
                      background="#5A5A5A"
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </Box>
              </CustomCard>
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

export default RewardQualification;
