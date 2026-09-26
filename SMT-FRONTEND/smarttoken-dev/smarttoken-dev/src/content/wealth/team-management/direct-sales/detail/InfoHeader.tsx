import { Typography, Box } from '@mui/material';
import CustomTitle from '../../../../../components/Title/BadgeTitle';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // SORT BY CUSTOME STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },

  // CUSTOM INFO HEADER BOX STYLE
  customBoxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '86px',
    width: '100%'
  }
}));

const prevIcon = {
  name: 'prev',
  path: '/static/img/wealth_team/general/prev.svg',
  desc: 'prevIcon'
};

const InfoHeader = ({ userName, ladderLevel }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.customBoxStyle}>
      <CustomTitle
        width="147px"
        height="34px"
        background="#E0A501"
        color="#212121"
        title={'Lv. ' + ladderLevel}
        fontSize="18px"
        fontWeight="600"
        boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
      />
      <Box
        component="img"
        src={prevIcon.path}
        alt={prevIcon.name}
        sx={{ width: '34px', height: '34px', cursor: 'pointer' }}
        onClick={() => navigate('/wealth/team/direct')}
      />
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h2"
          color="#E0A501"
          fontWeight="700"
          height="24px"
          lineHeight="100%"
        >
          {userName}’s
        </Typography>
        <Typography
          variant="h3"
          color="#EDEDED"
          fontSize="18px"
          fontWeight="600"
          height="22px"
          lineHeight="100%"
        >
          Direct Sales
        </Typography>
        <Typography
          variant="h3"
          color="#EDEDED"
          fontSize="18px"
          fontWeight="600"
          height="22px"
          lineHeight="100%"
        >
          History
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoHeader;
