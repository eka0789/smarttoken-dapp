import ScatterChartPanel from './ScatterChart';
import { Box, Typography, Hidden } from '@mui/material';
import CustomCard from 'src/components/Card';
import SpanTitle from './SpanTitle';
import { makeStyles } from '@mui/styles';
import randomInteger from 'random-int';

const useStyles = makeStyles((theme) => ({
  // CUSTOM OUTBOX STYLE
  customOutBoxStyle: {
    marginTop: '30px',
    width: '100%',
    height: '510px',
    '@media (max-width: 960px)': {
      height: '570px'
    }
  },
  // CARD BOX CUSTOM STYLE
  customCardBox: {
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      flexDirection: 'column'
    }
  },
  // CARD CONTENT BOX CUSTOM STYLE
  customCardContentBox1: {
    width: '7%',
    '@media (max-width: 960px)': {
      width: 'auto'
    }
  },
  customCardContentBox2: {
    width: '93%',
    paddingLeft: '10px',
    '@media (max-width: 960px)': {
      width: '100%',
      paddingLeft: '0px',
      marginTop: '10px'
    }
  },
  // MOBILE TITLE
  customMobileTitle: {
    padding: '11px 17px',
    color: '#EDEDED !important',
    fontSize: '18px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    letterSpacing: '1px',
    textAlign: 'center'
  },
  // DESCTOP TITLE
  customDesctopTitle: {
    padding: '15px !important',
    color: '#EDEDED !important',
    fontSize: '30px !important',
    height: '100%',
    lineHeight: '100% !important',
    transform: 'rotate(-180deg)',
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    textAlign: 'center'
  }
}));

// CHART DATA
const generateData = (): any => {
  let nameData = [];
  let data = [];
  for (let i = 0; i < 30; i++) {
    // let objData = [randomInteger(1, 100), randomInteger(1, 100)];
    let objData = randomInteger(1, 100);
    data.push(objData);
  }
  nameData.push({
    name: 'One',
    data
  });
  data = [];
  for (let i = 0; i < 30; i++) {
    // let objData = [randomInteger(1, 100), randomInteger(1, 100)];
    let objData = randomInteger(1, 100);
    data.push(objData);
  }
  nameData.push({
    name: 'Two',
    data
  });
  data = [];
  for (let i = 0; i < 30; i++) {
    // let objData = [randomInteger(1, 100), randomInteger(1, 100)];
    let objData = randomInteger(1, 100);
    data.push(objData);
  }
  nameData.push({
    name: 'Three',
    data
  });

  return nameData;
};

// CHART GROUP DATA
const groupData = [
  {
    value: 5,
    levelName: 'Lv .1'
  },
  {
    value: 8,
    levelName: 'Lv .2'
  },
  {
    value: 70,
    levelName: 'Lv .3'
  },
  {
    value: 150,
    levelName: 'Lv .4'
  },
  {
    value: 300,
    levelName: 'Lv .5'
  },
  {
    value: 700,
    levelName: 'Lv .6'
  },
  {
    value: 1000,
    levelName: 'Lv .7'
  }
];

const ScatterChartGroup = () => {
  const classes = useStyles();
  let chartData = generateData();

  return (
    <Box className={classes.customOutBoxStyle}>
      <CustomCard
        height="100%"
        borderRadius="20px"
        background="linear-gradient(180deg, #212121 0%, #000000 100%)"
      >
        <Box className={classes.customCardBox}>
          <Box className={classes.customCardContentBox1}>
            <Hidden mdDown>
              <CustomCard height="490px" borderRadius="20px !important">
                <Typography
                  component="div"
                  className={classes.customDesctopTitle}
                >
                  Your current team heat map
                </Typography>
              </CustomCard>
            </Hidden>
            <Hidden mdUp>
              <CustomCard height="50px" borderRadius="12px !important">
                <Typography
                  variant="h3"
                  component="div"
                  className={classes.customMobileTitle}
                >
                  Your current team heat map
                </Typography>
              </CustomCard>
            </Hidden>
          </Box>
          <Box className={classes.customCardContentBox2}>
            {groupData.map((con, idx) => (
              <CustomCard
                key={idx}
                height="70px"
                borderRadius="0px !important"
                border="none !important"
                boxShadow="none"
              >
                <Box
                  display="flex"
                  padding="0 10px"
                  height="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h3"
                    component="div"
                    fontSize="18px"
                    height="30px"
                    width="8%"
                    lineHeight="100%"
                    marginLeft="20px"
                    color="#EDEDED"
                  >
                    {con.value}
                  </Typography>
                  <Box width="70%" padding="0 10px">
                    <ScatterChartPanel data={chartData} />
                  </Box>
                  <SpanTitle
                    width="20%"
                    height="40px"
                    background="#E0A501"
                    borderRadius="20px"
                    fontWeight="700"
                    color="#212121"
                    fontSize="24px"
                    title={con.levelName}
                  />
                </Box>
              </CustomCard>
            ))}
          </Box>
        </Box>
      </CustomCard>
    </Box>
  );
};

export default ScatterChartGroup;
