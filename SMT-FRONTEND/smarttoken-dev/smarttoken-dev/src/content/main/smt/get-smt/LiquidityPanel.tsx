import { Box, Button, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import CustomCard from 'src/components/Card';
import Setting from './Setting';
import Recent from './Recent';
interface ChildProps {
  clickOpenHandler;
}

const useStyles = makeStyles((theme) => ({
  // SWAP TITLE STYLE
  swapTitleStyle: {
    float: 'left',
    fontWeight: '700 !important',
    fontSize: '24px !important',
    lineHeight: '29px !important',
    color: '#E0A501 !important'
  }
}));

// EXCHANGE BUTTON CUSTOMIZE
const ExchangeButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '260px',
  height: '40px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#695400'
  }
});

const LiquidityPanel = (props: ChildProps) => {
  const classes = useStyles();

  return (
    <CustomCard marginTop="30px" height="500px">
      <Box padding="20px" sx={{ height: '100%' }}>
        <Box position="relative" sx={{ height: '29px' }}>
          <Typography
            variant="h3"
            component="span"
            className={classes.swapTitleStyle}
          >
            Liquidity
          </Typography>
          <Box
            sx={{ float: 'right', width: '65px', height: '100%' }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* SETTING ICON */}
            <Setting />
            {/* RECENT ICON */}
            <Recent />
          </Box>
        </Box>
        <Box
          position="relative"
          sx={{ height: '16px', marginTop: '10px' }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#EDEDED',
              lineHeight: '0px !important'
            }}
          >
            Remove liquidity to receive the tokens back
          </Typography>
        </Box>
        <Divider
          sx={{ border: '2px solid #323232', height: '2px', marginTop: '30px' }}
        />
        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          sx={{ fontSize: '18px', marginTop: '50px', color: '#EDEDED' }}
        >
          No liquidity found
        </Typography>
        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          sx={{
            fontSize: '14px',
            color: '#E0A501',
            padding: '5px 20px',
            width: '200px',
            height: '37px',
            borderRadius: '10px',
            border: '2px solid #5A5A5A',
            margin: '30px auto'
          }}
        >
          Find other LP tokens
        </Typography>
        <Box sx={{ marginTop: '177px', textAlign: 'center' }}>
          <ExchangeButton variant="contained" onClick={props.clickOpenHandler}>
            Add Liquidity
          </ExchangeButton>
        </Box>
      </Box>
    </CustomCard>
  );
};

export default LiquidityPanel;
