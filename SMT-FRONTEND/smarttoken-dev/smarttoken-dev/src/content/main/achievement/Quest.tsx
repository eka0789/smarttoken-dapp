import { useState } from 'react';
import { Grid, Box, Typography, Popover, Hidden } from '@mui/material';
import CustomCard from 'src/components/Card';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';
import QuestControll from './Quest_Controll';
import QuestList from './Quest_Json';

import ClaimRewardPopover from './ClaimRewardPopover';
import ClaimRewardSentPopover from './ClaimRewardSentPopover';
import { QuestStyle } from 'src/models/main/achievement/CustomStyle';

const sword = {
  name: 'sword',
  path: '/static/img/main_achievement/sword.svg',
  desc: 'sword'
};

const colorList = {
  team: {
    color: '#212121',
    background: '#EECA41'
  },
  monthly: {
    color: '#EDEDED',
    background: '#7C4AAE'
  },
  personal: {
    color: '#EDEDED',
    background: '#936900'
  },
  Active: {
    color: '#EDEDED',
    background: '#24AE5F'
  },
  Pending: {
    color: '#212121',
    background: '#EECA41'
  },
  Inactive: {
    color: '#212121',
    background: '#F84343'
  },
  Closed: {
    color: '#212121',
    background: '#8F8F8F'
  }
};

const Quest = () => {
  
  const classes = QuestStyle();

  // CLAIM POPOVER FUNCTIONS
  const [isClaimOpen, setClaimOpen] = useState<boolean>(false);
  const onHandleClaimClick = (): void => {
    setClaimOpen(true);
    setPopoverClaimStatus(false);
  };
  const onHandleClaimClose = (): void => {
    setClaimOpen(false);
  };

  const [popoverClaimStatus, setPopoverClaimStatus] = useState<boolean>(false);
  const onHandleClaimNext = (): void => {
    setPopoverClaimStatus(true);
  };

  return (
    <>
      <Grid item xs={12} md={11}>
        <QuestControll />

        {QuestList.map((row, idx) => {
          return (
            <Box key={idx} className={classes.claimOutBoxCustomStyle}>
              <CustomCard height="auto" width="100%">
                <RowBox className={classes.cardInnerBoxStyle}>
                  <ColumnBox
                    paddingRight="20px"
                    alignItems="stretch"
                    width="70%"
                  >
                    <RowBox>
                      <Typography
                        variant="h2"
                        className={classes.cardHeadingStyle}
                      >
                        {row.title}
                      </Typography>
                      <Hidden mdDown>
                        <CustomTitle
                          title={row.status}
                          width="86px"
                          height="21px"
                          color={colorList[row.status].color}
                          background={colorList[row.status].background}
                          borderRadius="20px"
                          fontSize="14px"
                          fontWeight="600"
                        />
                      </Hidden>
                      <Hidden mdUp>
                        <CustomTitle
                          title={row.status}
                          width="58px"
                          height="14px"
                          color={colorList[row.status].color}
                          background={colorList[row.status].background}
                          borderRadius="13px"
                          fontSize="9px"
                          fontWeight="600"
                        />
                      </Hidden>
                    </RowBox>
                    <Typography
                      variant="h4"
                      className={classes.customContentStyle}
                    >
                      {row.content}
                    </Typography>
                    <RowBox marginTop="10px" justifyContent="flex-start">
                      <Typography
                        variant="h4"
                        component="span"
                        color="#E0A501"
                        marginRight="10px"
                        className={classes.commonTitle}
                      >
                        Requirement:
                      </Typography>
                      <Typography
                        variant="h4"
                        component="span"
                        fontWeight="400"
                        className={classes.commonTitle}
                      >
                        {row.requirement}
                      </Typography>
                    </RowBox>
                    <RowBox marginTop="10px" justifyContent="flex-start">
                      <Typography
                        variant="h4"
                        component="span"
                        color="#E0A501"
                        marginRight="10px"
                        className={classes.commonTitle}
                      >
                        Type of quest:
                      </Typography>
                      <Hidden mdDown>
                        <CustomTitle
                          title={row.type[0]}
                          width="86px"
                          height="21px"
                          color={
                            row.type[0] === 'one-time'
                              ? '#212121'
                              : colorList[row.type[0]].color
                          }
                          background={
                            row.type[0] === 'one-time'
                              ? '#C4C4C4'
                              : colorList[row.type[0]].background
                          }
                          borderRadius="20px"
                          fontSize="14px"
                          fontWeight="500"
                          marginRight="10px"
                        />
                        <CustomTitle
                          title={row.type[1]}
                          width="86px"
                          height="21px"
                          color={colorList[row.type[1]].color}
                          background={colorList[row.type[1]].background}
                          borderRadius="20px"
                          fontSize="14px"
                          fontWeight="500"
                        />
                      </Hidden>
                      <Hidden mdUp>
                        <CustomTitle
                          title={row.type[0]}
                          color={
                            row.type[0] === 'one-time'
                              ? '#212121'
                              : colorList[row.type[0]].color
                          }
                          background={
                            row.type[0] === 'one-time'
                              ? '#C4C4C4'
                              : colorList[row.type[0]].background
                          }
                          borderRadius="13px"
                          fontSize="9px"
                          fontWeight="500"
                          marginRight="10px"
                        />
                        <CustomTitle
                          title={row.type[1]}
                          color={colorList[row.type[1]].color}
                          background={colorList[row.type[1]].background}
                          borderRadius="20px"
                          fontSize="9px"
                          fontWeight="500"
                        />
                      </Hidden>
                    </RowBox>
                    <RowBox marginTop="10px" justifyContent="flex-start">
                      <Typography
                        variant="h4"
                        component="span"
                        color="#E0A501"
                        marginRight="10px"
                        className={classes.commonTitle}
                      >
                        Rewards:
                      </Typography>
                      <RowBox justifyContent="flex-start">
                        {row.reward.map((rw, index) => {
                          return (
                            <RowBox
                              key={index}
                              className={classes.rewardImageBox}
                            >
                              <Box
                                component="img"
                                src={rw.path}
                                alt={rw.name}
                                className={classes.rewardImageStyle}
                              />
                              <Typography
                                variant="h4"
                                component="span"
                                fontWeight="500"
                                marginLeft="5px"
                                className={classes.commonTitle}
                              >
                                {rw.title}
                              </Typography>
                            </RowBox>
                          );
                        })}
                      </RowBox>
                    </RowBox>
                  </ColumnBox>

                  <ColumnBox className={classes.customSwordOutBoxStyle}>
                    <Box className={classes.customSwordInnerBoxStyle}>
                      <CustomCard
                        width="100%"
                        height="100%"
                        marginBottom="10px"
                      >
                        <Box className={classes.customSwordPaddingStyle}>
                          <Box
                            component="img"
                            src={sword.path}
                            alt={sword.name}
                            className={classes.customSwordStyle}
                          />
                        </Box>
                      </CustomCard>
                      <Hidden mdDown>
                        <CustomButton
                          width="100%"
                          height="40px"
                          color="#212121"
                          background="#E0A501"
                          borderRadius="20px"
                          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                          fontSize="18px"
                          fontWeight="600"
                          onHandleClick={onHandleClaimClick}
                        >
                          Claim
                        </CustomButton>
                      </Hidden>
                      <Hidden mdUp>
                        <CustomButton
                          width="100%"
                          height="27px"
                          color="#212121"
                          background="#E0A501"
                          borderRadius="13px"
                          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                          fontSize="12px"
                          fontWeight="600"
                          onHandleClick={onHandleClaimClick}
                        >
                          Claim
                        </CustomButton>
                      </Hidden>
                      <RowBox marginTop="10px" justifyContent="space-evenly">
                        <Typography
                          variant="h4"
                          component="span"
                          className={classes.commonTitle}
                        >
                          {row.available}
                        </Typography>
                        <Typography
                          variant="h4"
                          component="span"
                          color="#E0A501"
                          className={classes.commonTitle}
                        >
                          Quests Available
                        </Typography>
                      </RowBox>
                    </Box>
                  </ColumnBox>
                </RowBox>
              </CustomCard>
            </Box>
          );
        })}
      </Grid>

      {/* ClAIM REWARDS POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isClaimOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {popoverClaimStatus ? (
          <ClaimRewardSentPopover onHandleClaimClose={onHandleClaimClose} />
        ) : (
          <ClaimRewardPopover
            onHandleClaimClose={onHandleClaimClose}
            onHandleClaimNext={onHandleClaimNext}
          />
        )}
      </Popover>
    </>
  );
};

export default Quest;
