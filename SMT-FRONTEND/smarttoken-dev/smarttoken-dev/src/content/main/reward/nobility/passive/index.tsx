import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Hero from '../../Hero';
import {
  Container,
  Grid,
  Box,
  Typography,
  CardContent,
  Divider,
  Popover,
  Hidden,
  IconButton,
  CardActions,
  Collapse
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import EarningHistoryTable from './EarningHistoryTable';
import LearnCard from './Learn';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import ClaimPopover from '../../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../../popover/harvest-popover/ReceivePopover';
import SurePopover from '../../popover/harvest-popover/SurePopover';
import { ExpandMore } from 'src/models/main/reward/StyledStyle';
import { PassiveStyle } from 'src/models/main/reward/CustomStyle';
import { PortionInfo } from 'src/utils/passiveGlobalShareInfo';
import { privilege } from 'src/models/layout/SampleData';
import useSmartArmy from 'src/hooks/useSmartArmy';
import useRewards from 'src/hooks/useRewards';
import { useWeb3React } from '@web3-react/core';
import { formatDecimalNumber } from 'src/utils/formatBalance';

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/nobilityReward/passive/welcome.png',
  desc: 'welcomeImage'
};

const PassivePhase = () => {
  const theme: Theme = useTheme();
  const classes = PassiveStyle(theme);
  const { account } = useWeb3React();
  const { fetchLicense, fetchUserInfo } = useSmartArmy();
  const { fetchNobilityTitle, fetchPassiveRewardsAmount } = useRewards();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // HARVEST POPOVER FUNCTIONS
  const [isClaimOpen, setClaimOpen] = useState<boolean>(false);
  const onHandleClaim = (): void => {
    setClaimOpen(true);
    setPopoverClaimStatus({
      ...popoverClaimStatus,
      target: 'claim'
    });
  };
  const onHandleClaimClose = (): void => {
    setClaimOpen(false);
  };

  const [popoverClaimStatus, setPopoverClaimStatus] = useState<any>({
    target: 'claim',
    value: 0
  });
  const onHandleClaimNext = (value: string, smtVal: number): void => {
    setPopoverClaimStatus({
      target: value,
      value: smtVal
    });
  };

  const [licenseLevel, setLicenseLevel] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [passiveAmount, setPassiveAmount] = useState({
    harvested: '',
    notHarvested: ''
  });

  useEffect(() => {
    async function init() {
      if (!account) return;
      let licenseInfo = await fetchLicense(account);
      setLicenseLevel(licenseInfo.level);
      let title = await fetchNobilityTitle(account);
      setTitle(title);
      let userInfo = await fetchUserInfo(account);
      setUserName(userInfo.username);
      let amount = await fetchPassiveRewardsAmount(account);
      if (amount) {
        setPassiveAmount({
          harvested: formatDecimalNumber(amount[0], 18),
          notHarvested: formatDecimalNumber(amount[1], 18)
        });
      } else {
        setPassiveAmount({
          harvested: formatDecimalNumber('0', 18),
          notHarvested: formatDecimalNumber('0', 18)
        });
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <>
      <Helmet>
        <title>Main | Rewards</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          className="stagger-children"
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              aria-label="vehicles"
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards/nobility"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h1"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Passive Global Share
            </Typography>
          </Grid>

          <Box className={classes.bscscanButtonStyle}>
            <Hidden mdDown>
              <CustomButton
                width="152px"
                height="25px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="12px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
            <Hidden mdUp>
              <CustomButton
                width="113px"
                height="18px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="8px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
          </Box>

          <RowBox className={classes.outBoxStyle}>
            <ColumnBox className={classes.leftInnerBox}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Typography
                  sx={{
                    color: '#EDEDED',
                    fontSize: '36px',
                    fontWeight: '700',
                    lineHeight: '100%'
                  }}
                >
                  Welcome {userName}
                </Typography>
                <Typography
                  sx={{
                    color: '#E0A501',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}
                >
                  Our {title}
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="10px"
                position="relative"
              >
                <Box
                  component="img"
                  src={welcomeImage.path}
                  alt={welcomeImage.name}
                  className="animate-float-slow"
                />
                <Box
                  position="absolute"
                  bottom="0"
                  width="100%"
                  textAlign="center"
                >
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-around"
                    height="36px"
                  >
                    <Box textAlign="center">
                      <Typography variant="h3" color="#EDEDED">
                        Share Portion
                      </Typography>
                      <Typography variant="h3" color="#E0A501">
                        {PortionInfo[title]}
                      </Typography>
                    </Box>
                    <Divider
                      sx={{ border: '2px solid #E0A501' }}
                      orientation="vertical"
                    />
                    <Box textAlign="center">
                      <Typography variant="h3" color="#EDEDED">
                        Global Share
                      </Typography>
                      <Typography variant="h3" color="#E0A501">
                        10%
                      </Typography>
                    </Box>
                  </Box>
                  <CustomButton
                    background="#E0A501"
                    borderRadius="20px"
                    width="200px"
                    height="40px"
                    fontSize="14px"
                    fontWeight="600"
                    color="#212121"
                    marginTop="10px"
                    onHandleClick={onHandleClaim}
                  >
                    Claim your share
                  </CustomButton>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="120px"
                marginTop="10px"
              >
                <CustomCard width="47%" height="100%">
                  <ColumnBox padding="15px">
                    <Typography variant="h3" color="#EDEDED">
                      Claimed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px',
                        color: '#E0A501',
                        fontWeight: '700'
                      }}
                    >
                      {passiveAmount.harvested}
                    </Typography>
                    <Typography variant="h4" color="#E0A501">
                      SMT
                    </Typography>
                  </ColumnBox>
                </CustomCard>
                <CustomCard width="47%" height="100%">
                  <ColumnBox padding="15px">
                    <Typography variant="h3" color="#EDEDED">
                      Unclaimed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px',
                        color: '#E0A501',
                        fontWeight: '700'
                      }}
                    >
                      {passiveAmount.notHarvested}
                    </Typography>
                    <Typography variant="h4" color="#E0A501">
                      SMT
                    </Typography>
                  </ColumnBox>
                </CustomCard>
              </Box>
              <CardActions
                className={classes.cardActionStyle}
                onClick={handleExpandClick}
              >
                <Typography variant="h4" component="span" textAlign="center">
                  Statistic
                </Typography>
                <ExpandMore expand={expanded}>
                  <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Teamwork ladder lv.
                    {licenseLevel !== '0' &&
                      privilege[Number(licenseLevel) - 1]['ladder']}
                  </Typography>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Entitled to be an SMT intermediary
                  </Typography>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Farming rewards:
                  </Typography>
                  {licenseLevel !== '0' &&
                    privilege[Number(licenseLevel) - 1]['rewards']}
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Access to Smart Academy, Smart Living, Smart
                    Utilities, Smart Wealth (
                    {licenseLevel !== '0' &&
                      privilege[Number(licenseLevel) - 1]['title']}
                    )
                  </Typography>
                </CardContent>
              </Collapse>
            </ColumnBox>

            <ColumnBox className={classes.rightInnerBox}>
              <LearnCard />
              <EarningHistoryTable />
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>

      {/* Claim POPOVER */}
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
        {popoverClaimStatus.target === 'claim' ? (
          <ClaimPopover
            onHandleHarvestClose={onHandleClaimClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleClaimNext(value, smtVal)
            }
            title="passive"
          />
        ) : popoverClaimStatus.target === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleClaimClose}
            onHandleHarvestNext={(value, smtVal) =>
              onHandleClaimNext(value, smtVal)
            }
            smtVal={popoverClaimStatus.value}
            title="passive"
          />
        ) : (
          <SurePopover
            onHandleHarvestClose={onHandleClaimClose}
            smtVal={popoverClaimStatus.value}
          />
        )}
      </Popover>
    </>
  );
};

export default PassivePhase;
