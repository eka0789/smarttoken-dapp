import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CardContent,
  Collapse,
  CardActions
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomButton from 'src/components/Button';
import RowBox from 'src/components/Box/RowBox';
import { ExpandMore } from 'src/models/main/achievement/StyledStyle';

const useStyles = makeStyles({
  outBoxStyle: {
    width: "93% !important", 
    height: "25px", 
    marginTop: "20px", 
    marginBottom: "30px",
    '@media (max-width: 968px)': {
      width: '100% !important',
    }
  }
});

const QuestControll = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <RowBox className={classes.outBoxStyle}>
      <RowBox height="100%" justifyContent='flex-start'>
        <Typography variant="h4" width="52px">
          Sort by
        </Typography>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            zIndex: '1',
            marginLeft: '10px'
          }}
        >
          <CardActions
            sx={{
              background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
              border: '2px solid #323232',
              boxSizing: 'border-box',
              borderRadius: '10px',
              height: '100%',
              padding: '0 10px',
              position: 'relative',
              width: '106px',
              cursor: 'pointer'
            }}
            onClick={handleExpandClick}
          >
            <Typography variant="h4" component="span" textAlign="center">
              Type
            </Typography>
            <ExpandMore expand={expanded}>
              <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent
              sx={{
                padding: '33px 10px 10px 17px',
                width: '106px',
                background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
                border: '2px solid #323232',
                boxSizing: 'border-box',
                borderRadius: '10px',
                overflow: 'hidden',
                marginTop: '-25px'
              }}
            >
              <Typography variant="h4">All</Typography>
              <Typography variant="h4">One-time</Typography>
              <Typography variant="h4">Monthly</Typography>
            </CardContent>
          </Collapse>
        </Box>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            zIndex: '1',
            marginLeft: '10px'
          }}
        >
          <CardActions
            sx={{
              background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
              border: '2px solid #323232',
              boxSizing: 'border-box',
              borderRadius: '10px',
              height: '100%',
              padding: '0 10px',
              position: 'relative',
              width: '106px',
              cursor: 'pointer'
            }}
            onClick={handleExpandClick1}
          >
            <Typography variant="h4" component="span" textAlign="center">
              Person
            </Typography>
            <ExpandMore expand={expanded1}>
              <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <CardContent
              sx={{
                padding: '33px 10px 10px 17px',
                width: '106px',
                background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
                border: '2px solid #323232',
                boxSizing: 'border-box',
                borderRadius: '10px',
                overflow: 'hidden',
                marginTop: '-25px'
              }}
            >
              <Typography variant="h4">All</Typography>
              <Typography variant="h4">Person</Typography>
              <Typography variant="h4">Team</Typography>
            </CardContent>
          </Collapse>
        </Box>
      </RowBox>

      <CustomButton
        width="152px"
        height="100%"
        background="#E0A501"
        color="#212121"
        borderRadius="20px"
        fontSize="12px"
        fontWeight="600"
        onHandleClick={() => navigate('/main/achievement/distribution')}
      >
        Rewards Distribution
      </CustomButton>
    </RowBox>
  );
};

export default QuestControll;
