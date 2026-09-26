import { useState } from 'react';
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RowBox from 'src/components/Box/RowBox';
import { ExpandMore } from 'src/models/main/achievement/StyledStyle';

const useStyles = makeStyles({
  cardActionStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '28px',
    padding: '0 10px',
    position: 'relative',
    width: '106px',
    cursor: 'pointer',
    top: '55%',
    transform: 'translateY(-50%)'
  },
  cardContentStyle: {
    padding: '33px 10px 10px 17px !important',
    width: '106px',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '-25px'
  },
  questTitleStyle: {
    width: '140px',
    color: '#C4C4C4 !important',
    textAlign: 'right',
    marginRight: '3px !important',
    '@media (max-width: 968px)': {
      fontSize: '9px !important',
      width: 'auto'
    }
  },
  commonTitle: {
    '@media (max-width: 968px)': {
      fontSize: '9px !important'
    }
  },
  cardActionOutBoxStyle: {
    position: 'relative',
    height: '100%',
    zIndex: '1',
    marginLeft: '10px'
  }
});

const questionIcon = {
  name: 'question',
  path: '/static/img/main_achievement/question.svg',
  desc: 'questionIcon'
};

const ControllBar = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <>
      <RowBox height="34px" marginTop="20px">
        <RowBox height="100%" justifyContent="flex-start">
          <Typography variant="h4" className={classes.commonTitle}>
            Sort by
          </Typography>
          <Box className={classes.cardActionOutBoxStyle}>
            <CardActions
              className={classes.cardActionStyle}
              onClick={handleExpandClick}
            >
              <Typography variant="h4" component="span" textAlign="center">
                Type
              </Typography>
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContentStyle}>
                <Typography variant="h4">All</Typography>
                <Typography variant="h4">One-time</Typography>
                <Typography variant="h4">Monthly</Typography>
              </CardContent>
            </Collapse>
          </Box>

          <Box className={classes.cardActionOutBoxStyle}>
            <CardActions
              className={classes.cardActionStyle}
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
              <CardContent className={classes.cardContentStyle}>
                <Typography variant="h4">All</Typography>
                <Typography variant="h4">Person</Typography>
                <Typography variant="h4">Team</Typography>
              </CardContent>
            </Collapse>
          </Box>
        </RowBox>

        <RowBox height="100%" width="auto" justifyContent="flex-end">
          <Typography variant="h4" className={classes.questTitleStyle}>
            How quest rewards distribution work
          </Typography>
          <Box
            component="img"
            src={questionIcon.path}
            alt={questionIcon.name}
          />
        </RowBox>
      </RowBox>
    </>
  );
};

export default ControllBar;
