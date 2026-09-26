import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NobilityImageSlider from './Nobility_ImageSlider';
import NobilityProgress from './Nobility_Progress';
import NobilityTitle from './Nobility_Title';
import NobilityCollected from './Nobility_Collected';
import ColumnBox from 'src/components/Box/ColumnBox';
import useSmartAchievement from 'src/hooks/useSmartAchievement';

const useStyles = makeStyles({
  outBoxStyle: {
    paddingRight: '60px',
    '@media (max-width: 968px)': {
      paddingRight: '0px'
    }
  }
});

const Nobility = () => {
  const classes = useStyles();
  const { getNobilityTypeOf, account, getNobilityOf } = useSmartAchievement();

  const [nobilityTitles, setNobilityTitles] = useState('');

  useEffect(() => {
    if (!account) return;
    async function init() {
      try {
        let titleOfValues = await getNobilityTypeOf();
        setNobilityTitles(titleOfValues);
      } catch (err) {
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <Grid item xs={12} md={6} lg={6} marginTop="30px">
        <ColumnBox className={classes.outBoxStyle}>
          <NobilityImageSlider />

          <NobilityProgress titles={nobilityTitles} />

          <NobilityTitle titles={nobilityTitles} />
        </ColumnBox>
      </Grid>

      <Grid item xs={12} md={6} lg={6} marginTop="30px">
        <NobilityCollected titles={nobilityTitles} />
      </Grid>
    </>
  );
};

export default Nobility;
