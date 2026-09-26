import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Button, Box, Tab } from '@mui/material';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

// STYLED CUSTOM BUTTON
export const LearnMoreButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '130px',
  height: '26px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#212121',
  position: 'absolute',
  bottom: '20px',
  left: '30px',
  overflow: 'hidden',
  transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    backgroundColor: '#FFCB00',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 18px rgba(224, 165, 1, 0.45)'
  },
  '@media (max-width: 968px)': {
    height: '20px',
    width: '100px',
    fontSize: '10px',
    bottom: '15px'
  }
});

// OPEN BUTTON CUSTOMIZE
export const OpenButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '35px',
  padding: '0 20px',
  height: '100%',
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'center',
  color: '#212121',
  transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    backgroundColor: '#FFCB00',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 18px rgba(224, 165, 1, 0.45)'
  }
});

// MARK AS READ BUTTON CUSTOMIZE
export const MarkButton = styled(Button)({
  backgroundColor: '#C4C4C4',
  borderRadius: '35px',
  marginLeft: '10px',
  padding: '0 20px',
  height: '100%',
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'center',
  color: '#212121',
  transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    backgroundColor: '#E0A501',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 18px rgba(224, 165, 1, 0.45)'
  }
});

export const TabCustom = styled(Tab)({
  height: '36px !important',
  minHeight: '36px !important',
  minWidth: '0 !important',
  paddingTop: '10px',
  paddingLeft: '0px !important',
  paddingRight: '10px !important'
});

// GET MORE SMTC BUTTON
export const GetMoreSmtcButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '100%',
  height: '26px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  padding: '0 !important',
  margin: '10px 0px 0px  0px !important',
  transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    backgroundColor: '#FFCB00',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 18px rgba(224, 165, 1, 0.45)'
  },
  '@media (max-width: 968px)': {
    fontSize: '13px'
  }
});

// ACHIEVEMENT
export const titleStyle = {
  marginTop: '10px',
  fontWeight: '600',
  width: '100%',
  height: '40px',
  color: '#E0A501',
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  borderRadius: '20px',
  border: '2px solid #323232',
  '@media (max-width: 968px)': {
    height: '30px',
    fontSize: '10px !important'
  }
};
export const mobileTitleStyle = {
  marginTop: '10px',
  fontWeight: '400',
  height: '40px',
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  borderRadius: '20px',
  border: '2px solid #323232'
};

// CHART
export const periods = [
  {
    value: '1d',
    text: 'one day'
  },
  {
    value: '1w',
    text: 'one week'
  },
  {
    value: '1mo',
    text: 'one month'
  },
  {
    value: '1y',
    text: 'one year'
  }
];

// gorw tree
export const growTreetabTitleStyle = {
  color: '#EDEDED',
  cursor: 'pointer',
  marginBottom: '0px',
  width: '55px',
  height: '53px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s',
  background: 'linear-gradient(180deg, #323232 0%, #212121 100%)',
  border: '2px solid #5A5A5A'
};
export const growTreetabTitleStyle1 = {
  color: '#EDEDED',
  cursor: 'pointer',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
  marginBottom: '0px',
  width: '55px',
  height: '53px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s',
  background: 'linear-gradient(180deg, #323232 0%, #212121 100%)',
  border: '2px solid #5A5A5A'
};
export const growTreetabTitleStyle2 = {
  color: '#EDEDED',
  cursor: 'pointer',
  borderBottomRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  marginBottom: '0px',
  width: '55px',
  height: '53px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s',
  background: 'linear-gradient(180deg, #323232 0%, #212121 100%)',
  border: '2px solid #5A5A5A'
};
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '20px',
  borderRadius: '5px',
  border: '2px solid #323232',
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 50%, #FFCB00 100%)',
    backgroundSize: '200% 100%',
    borderRadius: '8px 0px 0px 8px',
    animation: 'smt-gradient-shift 2.8s linear infinite',
    boxShadow: '0 0 12px rgba(224, 165, 1, 0.5)'
  }
}));

// SmtCashMonitor
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

/** Side bar */
export const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    width: 300px;
    color: ${theme.sidebar.textColor};
    background: linear-gradient(180deg, #323232 0%, #000000 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.values.lg}px) {
        position: fixed;
        z-index: 10;
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
        height: 100%;
    }

    @media (max-width: 1024px) {
      width: 280px;
      height: 200%;
    }

    /* gold edge light on the right */
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(224, 165, 1, 0) 0%,
        rgba(224, 165, 1, 0.55) 30%,
        rgba(255, 203, 0, 0.75) 55%,
        rgba(224, 165, 1, 0.35) 80%,
        rgba(224, 165, 1, 0) 100%
      );
      pointer-events: none;
      z-index: 5;
    }
`
);

export const TopSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
`
);

export const DownSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    z-index: -1;
    margin-top: 20px;
    width: 100%;
    background: linear-gradient(180deg, #212121 0%, #000000 100%);
    border: 2px solid #323232;
    box-sizing: border-box;
    border-radius: 0px 20px 0px 0px;
  `
);

export const LightModeButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: '#695400',
  borderRadius: '17px',
  width: '146px',
  height: '34px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#EDEDED',
  transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    backgroundColor: '#8a6d00',
    boxShadow: '0 0 16px rgba(224, 165, 1, 0.4)',
    transform: 'translateY(-2px)'
  }
});