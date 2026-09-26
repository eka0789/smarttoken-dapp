import React, { ReactNode, useState } from 'react';
import { Box, Typography, Badge, Fade, CardActions } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import CustomTitle from 'src/components/Title/BadgeTitle';
import RowBox from 'src/components/Box/RowBox';
import { NotiStyles } from 'src/models/main/dashboard/CustomStyles';
import { m_d_notiIcons } from 'src/models/ImageUrl';
import { OpenButton, MarkButton, TabCustom } from 'src/models/StyledData';

interface ParentProps {
  children: ReactNode;
  content: number;
}

const Notification = () => {
  const theme: Theme = useTheme();
  const classes = NotiStyles(theme);

  const CustomBadge = (props: ParentProps) => {
    return (
      <Badge
        badgeContent={props.content}
        max={999}
        color="error"
        className={classes.customBadgeStyle}
      >
        {props.children}
      </Badge>
    );
  };

  const notiInfo = [
    {
      value: '0',
      heading: {
        num: 1,
        path: m_d_notiIcons[0].path
      },
      info: [
        {
          path: m_d_notiIcons[3].path,
          heading: 'New incoming message #1',
          customTitle: 'Achievement',
          background: theme.colors.grey.main,
          color: theme.colors.white.main,
          mainTitle: 'Mark77 has successfully achieved King title!'
        }
      ]
    },

    {
      value: '1',
      heading: {
        num: 2,
        path: m_d_notiIcons[1].path
      },
      info: [
        {
          path: m_d_notiIcons[3].path,
          heading: 'New incoming message #1',
          customTitle: 'Golden Tree',
          background: theme.colors.blackAlt.main,
          color: theme.colors.primary.main,
          mainTitle: 'Golden Tree achieves a new Growth Phase!'
        },
        {
          path: m_d_notiIcons[3].path,
          heading: 'New incoming message #1',
          customTitle: 'Rewards',
          background: theme.colors.rewardsAlt.main,
          color: theme.colors.rewards.main,
          mainTitle: 'John opened Prince Chest rewards and found 1,000 SMTC'
        }
      ]
    },

    {
      value: '2',
      heading: {
        num: 1,
        path: m_d_notiIcons[2].path
      },
      info: [
        {
          path: m_d_notiIcons[3].path,
          heading: 'New incoming message #1',
          customTitle: 'Licenses',
          background: theme.colors.blackAlt.main,
          color: theme.colors.license.main,
          mainTitle: 'License upgrade for Smart Army'
        }
      ]
    }
  ];

  // NOTIFICATION BUTTON CLICK EVENT
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  const [value, setValue] = useState<string>('0');
  const handleChange = (e, newValue) => {
    setValue(newValue);
    setSubValue(0);
  };

  const [subValue, setSubValue] = useState<number>(0);
  const handleArrowClick = (curValue: number, totalValue?: number): void => {
    let value = subValue + curValue;
    if (value < 0) {
      setSubValue(0);
    } else if (value >= totalValue) {
      setSubValue(totalValue - 1);
    } else {
      setSubValue(value);
    }
  };

  return (
    <Box className={`${classes.notiBoxStyle} animate-fade-down`}>
      <CardActions
        className={classes.cardActionBtnStyle}
        onClick={handleExpandClick}
      >
        <Typography variant="h4" className={classes.mobileNotiTitle}>
          You have 1 personal, 2 global, and 1 announcement notification
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#9e9e9e',
            fontStyle: 'italic',
            marginRight: '8px',
            whiteSpace: 'nowrap'
          }}
        >
          (demo)
        </Typography>
        <ArrowDropDownIcon sx={{ color: theme.colors.primary.main }} />
      </CardActions>
      <Fade in={expanded}>
        <Box className={classes.cardContentStyle}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              sx={{ minHeight: '36px' }}
              TabIndicatorProps={{
                style: {
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }
              }}
            >
              {notiInfo.map((con, idx) => (
                <TabCustom
                  key={idx}
                  value={con.value}
                  icon={
                    <CustomBadge content={con.heading.num}>
                      <Box component="img" src={con.heading.path} />
                    </CustomBadge>
                  }
                  sx={{ marginRight: '20px !important' }}
                />
              ))}
            </TabList>
            {notiInfo.map((rows, idx) => (
              <TabPanel
                key={idx}
                value={rows.value}
                className={classes.tabPanelCustomStyle}
              >
                {rows.info.map((row, index) => (
                  <Box
                    key={index}
                    className={
                      subValue === index ? '' : classes.tabSubPanelHide
                    }
                  >
                    <RowBox height="41px" justifyContent="flex-start">
                      <Box component="img" src={m_d_notiIcons[3].path} />
                      <Box sx={{ marginLeft: '10px' }}>
                        <Typography
                          variant="h4"
                          color={theme.colors.primary.main}
                        >
                          {row.heading}
                        </Typography>
                        <CustomTitle
                          title={row.customTitle}
                          fontSize="12px"
                          background={row.background}
                          color={row.color}
                          width="100px"
                          height="20px"
                          marginTop="4px"
                        />
                      </Box>
                    </RowBox>
                    <Typography variant="h4" marginTop="20px">
                      {row.mainTitle}
                    </Typography>

                    <RowBox marginTop="41px" height="24px">
                      <Box sx={{ float: 'left' }}>
                        <OpenButton>Open</OpenButton>
                        <MarkButton>Mark As Read</MarkButton>
                      </Box>
                      <Box sx={{ float: 'right' }}>
                        <ArrowLeftIcon
                          className={
                            subValue === 0
                              ? classes.arrowDeActiveStyle
                              : classes.arrowActiveStyle
                          }
                          onClick={() => handleArrowClick(-1)}
                        />
                        <ArrowRightIcon
                          className={
                            subValue < rows.info.length - 1 &&
                            rows.info.length >= 1
                              ? classes.arrowActiveStyle
                              : classes.arrowDeActiveStyle
                          }
                          onClick={() => handleArrowClick(1, rows.info.length)}
                        />
                      </Box>
                    </RowBox>
                  </Box>
                ))}
              </TabPanel>
            ))}
          </TabContext>
          <CloseIcon
            className={classes.cardContentCloseStyle}
            onClick={handleExpandClick}
          />
        </Box>
      </Fade>
    </Box>
  );
};

export default Notification;
