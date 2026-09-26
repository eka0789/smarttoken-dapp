import { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import TreePhase from './TreePhase';
import TreeReward from './TreeReward';
import TreeLearn from './TreeLearn';

const useStyles = makeStyles((theme) => ({
  progressTitleStyle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '14px'
    }
  },
  treeCustomOutBoxStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      flexDirection: 'column'
    }
  },
  treeCustomInnerBoxStyle: {
    width: '50%',
    '@media (max-width: 968px)': {
      width: '100%'
    }
  },
  treeRewardOutStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    '@media (max-width: 968px)': {
      paddingLeft: '0'
    }
  }
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '28px',
  borderRadius: '14px',
  border: '2px solid #323232',
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
    borderRadius: '8px 0px 0px 8px'
  }
}));

const maxImage = {
  name: 'maxImage',
  path: '/static/img/main_golden/max.svg',
  desc: 'maxBackground'
};

const phaseInfo = [
  {
    phase: '#0 Phase',
    status: '0 / 1',
    progress: 0,
    buttonPhase: '#1st'
  },
  {
    phase: '#1st Phase',
    status: '0 / 19',
    progress: 0,
    buttonPhase: '#2nd'
  },
  {
    phase: '#2nd Phase',
    status: '0 / 271',
    progress: 0,
    buttonPhase: '#3rd'
  },
  {
    phase: '#3rd Phase',
    status: '0 / 999',
    progress: 0,
    buttonPhase: '#4th'
  },
  {
    phase: '#4th Phase',
    status: '0 / 5,786',
    progress: 0,
    buttonPhase: '#5th'
  },
  {
    phase: '#5th Phase',
    status: '0 / 38,547',
    progress: 0,
    buttonPhase: '#6th'
  },
  {
    phase: '#6th Phase',
    status: '0 / 774,503',
    progress: 0,
    buttonPhase: '#7th'
  },
  {
    phase: '#7th Phase',
    status: '0 / 1,855,700',
    progress: 0,
    buttonPhase: '#8th'
  },
  {
    phase: '#8th Phase',
    status: '0 / 33,579,113',
    progress: 0,
    buttonPhase: '#9th'
  },
  {
    phase: '#9th Phase',
    status: '1,874,303 / 63,745,062',
    progress: 10,
    buttonPhase: 'Max'
  }
];

const TreeSection = () => {
  const classes = useStyles();

  const [phase, setPhase] = useState<number>(0);
  const onHandlePhaseChange = (value: number): void => {
    setPhase(value);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box
          height="60px"
          marginTop="20px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box
            sx={{
              maxWidth: '800px',
              width: '80%',
              height: '100%',
              background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
              border: '2px solid #323232',
              borderRadius: '14px'
            }}
          >
            <BorderLinearProgress
              variant="determinate"
              value={phaseInfo[phase].progress}
            />
            <Box display="flex" justifyContent="space-between" padding="0 10px">
              <Typography className={classes.progressTitleStyle}>
                {phaseInfo[phase].phase}
              </Typography>
              <Typography className={classes.progressTitleStyle}>
                {phaseInfo[phase].status}
              </Typography>
            </Box>
          </Box>
          <Box width="80px" height="100%" position="relative">
            <Box component="img" src={maxImage.path} alt={maxImage.name} />
            <Typography
              sx={{
                position: 'absolute',
                fontSize: '24px',
                color: '#212121',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {phaseInfo[phase].buttonPhase}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Box className={classes.treeCustomOutBoxStyle}>
        <Box className={classes.treeCustomInnerBoxStyle}>
          <TreePhase
            onHandlePhaseChange={(value) => onHandlePhaseChange(value)}
          />
        </Box>
        <Box className={classes.treeCustomInnerBoxStyle}>
          <Box className={classes.treeRewardOutStyle}>
            <TreeReward />
            <TreeLearn />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TreeSection;
