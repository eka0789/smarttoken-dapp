import React, { useContext, useRef, useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  Hidden,
  Typography,
  Popover,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useWeb3React } from '@web3-react/core';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from 'src/components/Logo';
import SidebarMenu from './SidebarMenu';
import WealthSidebarMenu from './WealthSidebarMenu';
import MobileSideBarMenu from './MobileSidebarMenu';
import MobileRightSideBarMenu from './MobileRightSidebarMenu';
import CustomTitle from 'src/components/Title/BadgeTitle';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { ExpandMore } from 'src/models/StyledData';
import {
  userAvatar,
  profileMark,
  privateViewImage,
  telegramView,
  markDown,
  settingImage,
  nonProfileImage
} from 'src/models/ImageUrl';
import {
  SidebarWrapper,
  TopSection,
  DownSection,
  LightModeButton
} from 'src/models/StyledData';
import useSmartArmy from 'src/hooks/useSmartArmy';
import useSmartAchievement from 'src/hooks/useSmartAchievement';
import { UserInfoProps } from 'src/utils/interfaces';
import { privilege } from 'src/models/layout/SampleData';
import { tooltipImages } from 'src/models/main/achievement/SampleData';
import { toast } from 'react-hot-toast';

const handleClickOpen = () => {
  toast.info('Light mode is coming soon');
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef<any>(null);

  const { account } = useWeb3React();
  const {
    initActivate,
    fetchLicense,
    fetchLicenseType,
    fetchUserInfo,
    isLoading,
    setIsLoading
  } = useSmartArmy();
  const { getNobilityTypeOf } = useSmartAchievement();

  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const { rightSidebarToggle, toggleRightSidebar } = useContext(SidebarContext);
  const closeRightSidebar = () => toggleRightSidebar();

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const [isActivate, setIsActivate] = useState<boolean>(false);
  const [lStatus, setLstatus] = useState<number>(0);
  const [licenseExpireAt, setLicenseExpireAt] = useState<number>(0);
  const [now, setNow] = useState<number>(Date.now());
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    userName: '',
    telegram: '',
    pictureUrl: '',
    licenseName: '',
    licenseLevel: '0',
    nobilityTitle: ''
  });

  /** live countdown tick: refresh setiap 60 detik */
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  const licenseCountdown = (() => {
    if (!licenseExpireAt) return '';
    const diff = licenseExpireAt - now;
    if (diff <= 0) return 'Expired';
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    return `${days}d : ${hours}h`;
  })();

  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  const onHandleActivate = () => {
    setIsActivate(true);
  };

  const onGotoSmartArmyPage = () => {
    navigate('/main/smart');
  };

  useEffect(() => {
    if (!account) return;
    /** check license info */
    async function getStatusOfLicense() {
      let licenseInfo = await fetchLicense(account);
      let licenseTypeInfo = await fetchLicenseType(licenseInfo.level);
      let user = await fetchUserInfo(account);
      let titleOfValues = await getNobilityTypeOf();
      setLstatus(licenseInfo.status);
      setLicenseExpireAt(
        licenseInfo.expireAt ? Number(licenseInfo.expireAt) * 1000 : 0
      );
      setUserInfo({
        userName: user.username,
        telegram: user.telegram,
        pictureUrl: licenseInfo.tokenUri,
        licenseName: licenseTypeInfo.name,
        licenseLevel: licenseInfo.level,
        nobilityTitle: titleOfValues
      });
    }
    getStatusOfLicense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lStatus, account]);

  useEffect(() => {
    /** activate license when button is clicked */
    async function initActivateCall() {
      setIsLoading(true);
      await initActivate();
      setLstatus(2);
      setIsLoading(false);
    }
    if (isActivate && account && lStatus < 2) {
      initActivateCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActivate, account]);

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Logo />
              <Box
                marginTop="20px"
                width="260px"
                height="328px"
                padding="0 10px"
              >
                <Box
                  sx={{
                    position: 'relative',
                    margin: '0 auto',
                    width: '150px'
                  }}
                >
                  {lStatus === 0 || !account ? (
                    <Box
                      component="img"
                      alt={nonProfileImage.name}
                      src={nonProfileImage.avatar}
                      sx={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        margin: 'auto'
                      }}
                    />
                  ) : (
                    <>
                      <Box
                        component="img"
                        alt={userAvatar.name}
                        src={userInfo.pictureUrl}
                        className="animate-pulse-gold"
                        sx={{
                          width: '150px',
                          height: '150px',
                          cursor: 'pointer',
                          margin: 'auto',
                          borderRadius: '50%'
                        }}
                      />
                      {userInfo.nobilityTitle !== '' && (
                        <Box
                          component="img"
                          alt={profileMark.name}
                          src={tooltipImages[userInfo.nobilityTitle]}
                          sx={{
                            width: '72px',
                            height: '76px',
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '88px',
                            right: '0'
                          }}
                        />
                      )}
                    </>
                  )}
                </Box>
                <Box sx={{ position: 'relative', marginTop: '16px' }}>
                  {lStatus !== 0 && (
                    <>
                      <Box
                        component="img"
                        alt={privateViewImage.name}
                        src={privateViewImage.avatar}
                        sx={{
                          width: '15px',
                          height: '15px',
                          position: 'absolute',
                          top: '0',
                          bottom: '0',
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          right: '29.49px'
                        }}
                      />
                      <Box
                        component="img"
                        alt={telegramView.name}
                        src={telegramView.avatar}
                        sx={{
                          width: '18px',
                          height: '18px',
                          position: 'absolute',
                          top: '0',
                          bottom: '0',
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          right: '0'
                        }}
                      />
                    </>
                  )}
                  <Typography variant="h2" textAlign="center" color="#EDEDED">
                    {lStatus === 0 || !account
                      ? 'User Name'
                      : userInfo.userName}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '25px',
                    marginTop: '13px',
                    background: '#5A5A5A',
                    borderRadius: '20px',
                    display: 'flex'
                  }}
                >
                  {(lStatus === 0 || !account) && (
                    <Typography
                      component="span"
                      variant="h5"
                      sx={{
                        textAlign: 'center',
                        padding: '5px 10px',
                        color: '#212121',
                        background: '#5A5A5A',
                        borderRadius: '20px',
                        height: '100%',
                        width: '100%',
                        cursor: 'pointer'
                      }}
                      onClick={onGotoSmartArmyPage}
                    >
                      Please exchange license
                    </Typography>
                  )}
                  {lStatus === 1 && account && (
                    <Typography
                      component="span"
                      variant="h5"
                      sx={{
                        textAlign: 'center',
                        padding: '5px 10px',
                        color: '#212121',
                        background: '#E0A501',
                        borderRadius: '20px',
                        height: '100%',
                        width: '100%',
                        cursor: 'pointer'
                      }}
                      onClick={onHandleActivate}
                    >
                      Activate License{' '}
                      {isLoading && (
                        <Box
                          component="img"
                          sx={{
                            width: '20px',
                            height: '20px'
                          }}
                          src="/static/img/loading.gif"
                        />
                      )}
                    </Typography>
                  )}
                  {lStatus >= 2 && account && (
                    <>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '11px',
                          textAlign: 'center',
                          padding: '7px 10px',
                          color: '#212121',
                          background: '#E0A501',
                          borderRadius: '20px',
                          height: '100%',
                          width: '60%'
                        }}
                      >
                        {userInfo.licenseName} License
                      </Typography>
                      <Typography
                        component="span"
                        variant="h5"
                        sx={{
                          textAlign: 'center',
                          padding: '7px 15px',
                          color: '#fff',
                          width: '40%'
                        }}
                      >
                        {licenseCountdown || '--'}
                      </Typography>
                    </>
                  )}
                </Box>
                {lStatus > 1 && account && (
                  <ColumnBox height="25px">
                    <RowBox marginTop="10px">
                      <CustomTitle
                        title="Elon’s Eye"
                        width="110px"
                        height="25px"
                        color="#76CEFF"
                        fontSize="12px"
                        fontWeight="600"
                        background="#00649C"
                      />
                      <CustomTitle
                        title="The Prince"
                        width="110px"
                        height="25px"
                        color="#4B3C00"
                        fontSize="12px"
                        fontWeight="600"
                        background="#E8B500"
                      />
                    </RowBox>
                    <Box
                      component="img"
                      alt={markDown.name}
                      src={markDown.avatar}
                      sx={{
                        width: '10px',
                        height: '5px',
                        cursor: 'pointer',
                        margin: 'auto',
                        marginTop: '8px'
                      }}
                      ref={ref}
                      onClick={handleOpen}
                    />
                    <Popover
                      anchorEl={ref.current}
                      onClose={handleClose}
                      open={isOpen}
                      anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                      }}
                      transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                      }}
                      PaperProps={{
                        style: {
                          width: '260px',
                          height: '105px',
                          padding: '10px',
                          background:
                            'linear-gradient(180deg, #323232 0%, #000000 100%)',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          marginTop: '4px'
                        }
                      }}
                    >
                      <Box display="flex" justifyContent="space-between">
                        <CustomTitle
                          title="Elon’s Eye"
                          width="110px"
                          height="25px"
                          color="#76CEFF"
                          fontSize="12px"
                          fontWeight="600"
                          background="#00649C"
                          marginBottom="4px"
                        />
                        <CustomTitle
                          title="The Prince"
                          width="110px"
                          height="25px"
                          color="#4B3C00"
                          fontSize="12px"
                          fontWeight="600"
                          background="#E8B500"
                          marginBottom="4px"
                        />
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <CustomTitle
                          title="Loyal Army"
                          width="110px"
                          height="25px"
                          color="#39FF8E"
                          fontSize="12px"
                          fontWeight="600"
                          background="#1E9450"
                          marginBottom="4px"
                        />
                        <CustomTitle
                          title="Early Run"
                          width="110px"
                          height="25px"
                          color="#EDEDED"
                          fontSize="12px"
                          fontWeight="600"
                          background="#5A5A5A"
                          marginBottom="4px"
                        />
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <CustomTitle
                          title="Forever Army"
                          width="110px"
                          height="25px"
                          color="#7E0000"
                          fontSize="12px"
                          fontWeight="600"
                          background="#F84343"
                          marginBottom="4px"
                        />
                        <CustomTitle
                          title="The Duke"
                          width="110px"
                          height="25px"
                          color="#310062"
                          fontSize="12px"
                          fontWeight="600"
                          background="#C285FF"
                          marginBottom="4px"
                        />
                      </Box>
                    </Popover>

                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '32px',
                        marginTop: '7px',
                        zIndex: '1'
                      }}
                    >
                      <CardActions
                        disableSpacing
                        sx={{
                          background:
                            'linear-gradient(180deg, #212121 0%, #000000 100%)',
                          border: '2px solid #323232',
                          boxSizing: 'border-box',
                          borderRadius: '10px',
                          height: '100%',
                          padding: '0 66px',
                          position: 'relative',
                          cursor: 'pointer'
                        }}
                        onClick={handleExpandClick}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            textAlign: 'center',
                            width: '110px',
                            height: '25px',
                            color: '#EDEDED',
                            letterSpacing: '1px'
                          }}
                        >
                          Privilege
                        </Typography>
                        <ExpandMore
                          expand={expanded}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent
                          sx={{
                            padding: '42px 10px 12px 10px !important',
                            width: '100%',
                            background:
                              'linear-gradient(180deg, #212121 0%, #000000 100%)',
                            border: '2px solid #323232',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            marginTop: '-32px'
                          }}
                        >
                          <Typography variant="h5" color="#E0A501">
                            &#8226; Teamwork ladder lv.
                            {userInfo.licenseLevel !== '0' &&
                              privilege[Number(userInfo.licenseLevel) - 1][
                                'ladder'
                              ]}
                          </Typography>
                          <Typography variant="h5" color="#E0A501">
                            &#8226; Entitled to be an SMT intermediary
                          </Typography>
                          <Typography variant="h5" color="#E0A501">
                            &#8226; Farming rewards:
                          </Typography>
                          {userInfo.licenseLevel !== '0' &&
                            privilege[Number(userInfo.licenseLevel) - 1][
                              'rewards'
                            ]}
                          <Typography variant="h5" color="#E0A501">
                            &#8226; Access to Smart Academy, Smart Living, Smart
                            Utilities, Smart Wealth (
                            {userInfo.licenseLevel !== '0' &&
                              privilege[Number(userInfo.licenseLevel) - 1][
                                'title'
                              ]}
                            )
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Box>
                  </ColumnBox>
                )}
              </Box>
            </TopSection>

            <DownSection>
              {location.pathname.includes('/wealth') ? (
                <>
                  <WealthSidebarMenu />
                  <RowBox
                    padding="0 30px"
                    margin="265px 0"
                    justifyContent="space-evenly"
                  >
                    <Box
                      component="img"
                      alt={settingImage.name}
                      src={settingImage.avatar}
                      sx={{
                        width: '28.88px',
                        height: '29.67px',
                        cursor: 'pointer'
                      }}
                    />
                    <LightModeButton
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      Light Mode
                    </LightModeButton>
                  </RowBox>
                </>
              ) : (
                <>
                  <SidebarMenu />
                  <RowBox
                    padding="0 30px"
                    margin="25px 0"
                    justifyContent="space-evenly"
                  >
                    <Box
                      component="img"
                      alt={settingImage.name}
                      src={settingImage.avatar}
                      sx={{
                        width: '28.88px',
                        height: '29.67px',
                        cursor: 'pointer'
                      }}
                    />
                    <LightModeButton
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      Light Mode
                    </LightModeButton>
                  </RowBox>
                </>
              )}
            </DownSection>
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>

      {/* LEFT SIDE BAR IN THE MOBILE */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper sx={{ paddingTop: '200px' }}>
            <MobileSideBarMenu />
          </SidebarWrapper>
        </Drawer>
      </Hidden>

      {/* RIGHT SIDE BAR IN THE MOBILE */}
      <Hidden lgUp>
        <Drawer
          anchor="right"
          open={rightSidebarToggle}
          onClose={closeRightSidebar}
          variant="temporary"
          elevation={9}
        >
          <MobileRightSideBarMenu />
        </Drawer>
      </Hidden>
    </>
  );
};

export default React.memo(Sidebar);
