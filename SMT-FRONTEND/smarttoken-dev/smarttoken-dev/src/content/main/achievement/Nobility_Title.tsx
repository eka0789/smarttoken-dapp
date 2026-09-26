import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { tooltipImages } from 'src/models/main/achievement/SampleData';

const useStyles = makeStyles({
  cardOutBoxStyle: {
    padding: '20px',
    height: '100%',
    alignItems: 'flex-start !important'
  },
  cardInnerBoxStyle: {
    paddingRight: '20px',
    borderRight: '2px solid #323232',
    justifyContent: 'flex-start !important'
  }
});

const NobilityTitle = (props) => {
  const classes = useStyles();

  return (
    <CustomCard width="100%" height="334px" marginTop="20px">
      {props.titles && (
        <RowBox className={classes.cardOutBoxStyle}>
          <ColumnBox className={classes.cardInnerBoxStyle}>
            <Typography textAlign="center" variant="h4">
              Current title
            </Typography>
            <Box
              component="img"
              src={tooltipImages[props.titles].path}
              alt={tooltipImages[props.titles].name}
              width="105px"
              height="100px"
              marginTop="20px"
            />
            <Typography
              textAlign="center"
              variant="h3"
              color="#E0A501"
              marginTop="10px"
            >
              {tooltipImages[props.titles].name}
            </Typography>
          </ColumnBox>

          <Box paddingLeft="20px" width="100%">
            <Typography variant="h4">Privileges</Typography>
            <RowBox marginTop="10px">
              <ColumnBox width="110px" height="130px">
                <Box
                  component="img"
                  src={tooltipImages['tree'].path0}
                  alt={tooltipImages['tree'].name}
                  width="60px"
                  height="71px"
                />
                <Box
                  component="img"
                  src={tooltipImages['tree'].path1}
                  alt={tooltipImages['tree'].name}
                  width="34px"
                  height="34px"
                  sx={{
                    position: 'absolute',
                    top: '45px',
                    right: '22px'
                  }}
                />
                <Typography textAlign="center" variant="h4" marginTop="5px">
                  {tooltipImages['tree'].desc0}
                </Typography>
                <Typography textAlign="center" variant="h3" color="#E0A501">
                  {tooltipImages[props.titles].smtc}
                </Typography>
              </ColumnBox>
              <ColumnBox width="110px" height="130px">
                <Box
                  component="img"
                  src={tooltipImages['share'].path}
                  alt={tooltipImages['share'].name}
                  width="92px"
                  height="74px"
                />
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#EDEDED',
                    lineHeight: '100%',
                    marginTop: '5px'
                  }}
                >
                  {tooltipImages['share'].desc0}
                </Typography>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#E0A501',
                    lineHeight: '100%'
                  }}
                >
                  {tooltipImages[props.titles].passive}
                </Typography>
              </ColumnBox>
            </RowBox>
            <ColumnBox width="110px" height="130px" margin="10px auto">
              <Box
                component="img"
                src={tooltipImages['reward'].path}
                alt={tooltipImages['reward'].name}
                width="78px"
                height="76px"
              />
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#EDEDED',
                  lineHeight: '100%',
                  marginTop: '5px'
                }}
              >
                {props.titles === '' || props.titles === 'Folks'
                  ? ''
                  : tooltipImages[props.titles] + ' Chest Reward'}
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#E0A501',
                  lineHeight: '100%'
                }}
              >
                {props.titles === '' || props.titles === 'Folks'
                  ? ''
                  : tooltipImages['reward'].desc1}
              </Typography>
            </ColumnBox>
          </Box>
        </RowBox>
      )}
    </CustomCard>
  );
};

export default React.memo(NobilityTitle);
