import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import useGoldenTree from 'src/hooks/useGoldenTree';
import { growNum, growTreeImage } from 'src/models/main/golden-tree/SampleData';
import { useWeb3React } from '@web3-react/core';

interface ParentProps {
  onHandlePhaseChange: (value: number) => void;
}

const useStyles = makeStyles((theme) => ({
  customCardOutBoxStyle: {
    padding: '10px 10px 10px 30px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      padding: '10px'
    }
  }
}));

const TreePhase = (props: ParentProps) => {
  const classes = useStyles();
  const { account } = useWeb3React();
  const { fetchGoldenTreePhase } = useGoldenTree();

  const [treePhase, setTreePhase] = useState<number>(0);
  useEffect(() => {
    async function init() {
      if (!account) return;
      let result = await fetchGoldenTreePhase();
      setTreePhase(result.toString());
      props.onHandlePhaseChange(result);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <CustomCard height="450px">
      <Box className={classes.customCardOutBoxStyle}>
        <Box width="70%" position="relative">
          {growNum
            .toString()
            .split('')
            .map(
              (num, idx) =>
                9 - treePhase === idx && (
                  <Box
                    key={idx}
                    sx={{
                      position: 'absolute',
                      top: '24px',
                      left: '0',
                      bottom: '24px',
                      right: '0',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: 'auto',
                        height: 'auto',
                        position: 'absolute',
                        bottom: '0',
                        alignItems: 'flex-end'
                      }}
                      alt={growTreeImage[idx].name}
                      src={growTreeImage[idx].path}
                    />
                  </Box>
                )
            )}
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          sx={{
            textAlign: 'center',
            maxWidth: '107px',
            width: '30%'
          }}
        >
          {growNum
            .toString()
            .split('')
            .map((num, idx) => (
              <CustomButton
                key={idx}
                width="100%"
                height="34px"
                title={'Phase ' + num}
                background={9 - treePhase === idx ? '#E0A501' : '#323232'}
                color={9 - treePhase === idx ? '#212121' : '#EDEDED'}
                borderRadius="20px"
                fontSize="18px"
                fontWeight="600"
              />
            ))}
        </Box>
      </Box>
    </CustomCard>
  );
};

export default React.memo(TreePhase);
