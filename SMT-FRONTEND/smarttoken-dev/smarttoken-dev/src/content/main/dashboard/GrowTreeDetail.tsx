import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  Box,
  CardContent,
  Fade
} from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomTooltip from 'src/components/Tooltip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { GetMoreSmtcButton } from 'src/models/StyledData';
import { GrowTreeStyle } from 'src/models/main/dashboard/CustomStyles';

interface ParentProps {
  expanded: boolean,
  onHandleClick: (e: React.MouseEvent) => void,
}


const GrowTreeDetail: React.FC<ParentProps> = (props) => {

  const theme = useTheme();
  const classes = GrowTreeStyle(theme);
  const navigate = useNavigate();

  return (
    <>
      <Fade in={props.expanded}>
        <CardContent className={classes.growTreeContentStyle}>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            onClick={props.onHandleClick}
            sx={{ cursor: "pointer" }}
          >
            <ArrowDropUpIcon sx={{ color: theme.colors.primary.main }} />
          </Box>
          <Typography
            variant="h4"
            component="div"
            className={classes.growTreeDetailTypoStyle}
          >
            As the Golden Tree passes & grows each phase, your SMTC asset will absolutely grow.
          </Typography>
          <RowBox alignItems="stretch" marginTop="20px">
            <Box width="35%">
              <CustomCard height='auto' background={theme.colors.gradients.grey}>
                <Box padding='10px 9px' height="auto" textAlign='center'>
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color={theme.colors.primary.main}
                  >
                    Your owned SMT Cash
                  </Typography>
                  <Typography
                    variant="h1"
                    marginTop='10px'
                    color={theme.colors.white.main}
                  >
                    30
                  </Typography>
                  <RowBox justifyContent="center" marginTop="1px">
                    <Typography variant="h4">
                      (0.3 USD)
                    </Typography>
                    <CustomTooltip content={'Your current SMTC asset value'} />
                  </RowBox>
                </Box>
              </CustomCard>
              <GetMoreSmtcButton onClick={() => navigate('/main/smt')}>
                Get more SMTC
              </GetMoreSmtcButton>
            </Box>
            <ColumnBox width="58%">
              <Typography
                variant="h4"
                textAlign="right"
                color={theme.colors.primary.main}
              >
                Future scenario of your SMTC asset value
              </Typography>
              <Box
                marginTop="5px"
                display="flex"
                flexWrap='wrap'
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                {
                  Array(9).fill(0).map((con, idx) => {
                    return (
                      <CustomCard
                        key={idx}
                        height={'40px'}
                        background={theme.colors.white.main}
                      >
                        <Box padding="5px 10px" textAlign="center">
                          <Typography
                            variant="h5"
                            fontWeight="700"
                            color={theme.colors.black.main}
                          >
                            $000
                          </Typography>
                          <Typography
                            variant="h5"
                            fontWeight="400"
                            color={theme.colors.black.main}
                          >
                            Phase {idx + 1}
                          </Typography>
                        </Box>
                      </CustomCard>
                    )
                  })
                }
              </Box>
            </ColumnBox>
          </RowBox>
        </CardContent>
      </Fade>
    </>
  )
}

export default GrowTreeDetail;