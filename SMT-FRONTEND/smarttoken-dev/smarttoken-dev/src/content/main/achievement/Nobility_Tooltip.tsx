import { Box, Typography, Divider } from '@mui/material';

const tooltipImages = {
  king: {
    name: 'king',
    path: '/static/img/main_achievement/tooltip/king.png',
    desc0: `King's`,
    desc1: 'Privileges'
  },
  tree: {
    name: 'tree_cash',
    path0: '/static/img/main_achievement/tooltip/tree.svg',
    path1: '/static/img/main_achievement/tooltip/cash.svg',
    desc0: 'Golden Tree SMTC Rewards',
    desc1: 'x 5'
  },
  share: {
    name: 'share',
    path: '/static/img/main_achievement/tooltip/share.svg',
    desc0: 'Passive Global Share',
    desc1: 'x 700'
  },
  reward: {
    name: 'reward',
    path: '/static/img/main_achievement/tooltip/reward.svg',
    desc0: 'King Chest Reward',
    desc1: 'weekly'
  }
};

const NobilityTooltip = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          component="img"
          width="71px"
          height="53px"
          alt={tooltipImages['king'].name}
          src={tooltipImages['king'].path}
        />
        <Box textAlign="left" width="100%" marginLeft="10px">
          <Typography
            component="div"
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#E0A501',
              lineHeight: '100%'
            }}
          >
            {tooltipImages['king'].desc0}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#EDEDED',
              lineHeight: '100%'
            }}
          >
            {tooltipImages['king'].desc1}
          </Typography>
          <Divider sx={{ border: '2px solid #323232', marginTop: '6px' }} />
        </Box>
      </Box>

      <Box marginTop="20px">
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
            width="110px"
            height="130px"
          >
            <Box
              component="img"
              src={tooltipImages['tree'].path0}
              alt={tooltipImages['tree'].name}
              width="60px"
              height="71px"
            />
            <Box
              component="img"
              src={tooltipImages['tree'].path1}
              alt={tooltipImages['tree'].name}
              width="34px"
              height="34px"
              sx={{
                position: 'absolute',
                top: '45px',
                right: '22px'
              }}
            />
            <Typography
              textAlign="center"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#EDEDED',
                lineHeight: '100%'
              }}
            >
              {tooltipImages['tree'].desc0}
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#E0A501',
                lineHeight: '100%'
              }}
            >
              {tooltipImages['tree'].desc1}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width="110px"
            height="130px"
          >
            <Box
              component="img"
              src={tooltipImages['share'].path}
              alt={tooltipImages['share'].name}
              width="92px"
              height="74px"
            />
            <Typography
              textAlign="center"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#EDEDED',
                lineHeight: '100%'
              }}
            >
              {tooltipImages['share'].desc0}
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#E0A501',
                lineHeight: '100%'
              }}
            >
              {tooltipImages['share'].desc1}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box marginTop="4px">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          width="110px"
          height="130px"
        >
          <Box
            component="img"
            src={tooltipImages['reward'].path}
            alt={tooltipImages['reward'].name}
            width="78px"
            height="76px"
          />
          <Typography
            textAlign="center"
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#EDEDED',
              lineHeight: '100%'
            }}
          >
            {tooltipImages['reward'].desc0}
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#E0A501',
              lineHeight: '100%'
            }}
          >
            {tooltipImages['reward'].desc1}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NobilityTooltip;
