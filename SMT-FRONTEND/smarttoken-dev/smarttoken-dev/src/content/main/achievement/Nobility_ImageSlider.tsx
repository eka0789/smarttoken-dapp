import { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const sliderImages = [
  {
    name: 'folks',
    path: '/static/img/main_achievement/folks.png'
  },
  {
    name: 'baron',
    path: '/static/img/main_achievement/baron.png'
  },
  {
    name: 'count',
    path: '/static/img/main_achievement/count.png'
  },
  {
    name: 'viscount',
    path: '/static/img/main_achievement/viscount.png'
  },
  {
    name: 'earl',
    path: '/static/img/main_achievement/earl.png'
  },
  {
    name: 'duke',
    path: '/static/img/main_achievement/duke.png'
  },
  {
    name: 'prince',
    path: '/static/img/main_achievement/prince.png'
  },
  {
    name: 'king',
    path: '/static/img/main_achievement/king.png'
  }
];

const NobilityImageSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {sliderImages.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 7 ? (
                <Box
                  component="img"
                  sx={{
                    height: '269px',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%'
                  }}
                  src={step.path}
                  alt={step.name}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </>
  );
};

export default NobilityImageSlider;
