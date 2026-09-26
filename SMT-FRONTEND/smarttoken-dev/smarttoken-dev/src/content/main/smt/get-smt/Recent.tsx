import { useState } from 'react';
import { Box, Divider, Popover, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// REFRESH ICON IMAGE
const refreshIcon = {
  name: 'refresh',
  path: '/static/img/main_smt/get_smt/refresh.svg',
  desc: 'refreshIcon'
};

const Recent = () => {
  const [isRecentOpen, setRecentOpen] = useState<boolean>(false);
  // RECENT BUTTON CLICK EVENT
  const onHandleRecentClick = (): void => {
    setRecentOpen(true);
  };
  const handleRecentClose = (): void => {
    setRecentOpen(false);
  };

  return (
    <>
      <Box
        component="img"
        sx={{ float: 'right', cursor: 'pointer' }}
        width="21px"
        height="21px"
        alt={refreshIcon.name}
        src={refreshIcon.path}
        onClick={onHandleRecentClick}
      ></Box>
      <Popover
        anchorReference="anchorPosition"
        anchorPosition={{ top: 280, left: 500 }}
        onClose={handleRecentClose}
        open={isRecentOpen}
      >
        <Box
          sx={{
            padding: '20px 20px 30px 20px !important',
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            border: '2px solid #5A5A5A',
            boxSizing: 'border-box',
            borderRadius: '10px',
            height: '445px',
            width: '445px'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: '24px',
                fontWeight: '700',
                height: '29px',
                color: '#E0A501'
              }}
            >
              Recent
            </Typography>
            <CloseIcon
              onClick={handleRecentClose}
              sx={{ cursor: 'pointer', color: '#EDEDED' }}
            />
          </Box>
          <Divider
            sx={{
              border: '2px solid #323232',
              height: '2px',
              marginTop: '10px'
            }}
          />
          <Box
            position="relative"
            sx={{
              height: '16px',
              marginTop: '30px'
            }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontSize: '18px',
                color: '#EDEDED',
                lineHeight: '0px !important',
                letterSpacing: '1px'
              }}
            >
              No recent transaction...
            </Typography>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Recent;
