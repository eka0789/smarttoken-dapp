import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Popover,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomButtom from 'src/components/Button';
import CustomTitle from 'src/components/Title/BadgeTitle';
import WalletDialog from '../../wallet-modal';
import { useWeb3React } from '@web3-react/core';
import { shorter } from 'src/utils';
import {
  userAvatar,
  profileMark,
  // publicUserInfo,
  privateViewImage,
  telegramView,
  markDown,
  // settingImage,
  nonProfileImage
} from 'src/models/ImageUrl';
import { ExpandMore } from 'src/models/layout/StyledData';
import { getContract } from 'src/utils';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { getRealValue } from 'src/utils/formatBalance';
import { UserInfoProps } from 'src/utils/interfaces';
import { privilege } from 'src/models/layout/SampleData';

const useStyles = makeStyles({
  visionaryBoxStyle: {
    height: '25px',
    marginTop: '13px',
    background: '#5A5A5A',
    borderRadius: '20px'
  },
  customOutBoxStyle: {
    padding: '60px 20px 50px 20px',
    width: '280px !important',
    height: '100vh',
    background: 'linear-gradient(180deg, #323232 0%, #000000 100%)',
    borderRadius: '20px 0px 0px 20px'
  }
});

const MobileRightSidebarMenu = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const ref = useRef<any>(null);
  const { account, chainId } = useWeb3React();
  const { initActivate } = useSmartArmy();

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  // Wallet Dialog
  const [walletOpen, setWalletOpen] = useState(false);
  const handleWalletClickOpen = () => {
    if (!account) setWalletOpen(true);
  };
  const handleWalletClose = () => {
    setWalletOpen(false);
  };

  const onHandleActivate = () => {
    setIsActivate(true);
  };

  const onGotoSmartArmyPage = () => {
    navigate('/main/smart');
  };

  const [isActivate, setIsActivate] = useState<boolean>(false);
  const [lStatus, setLstatus] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    userName: '',
    telegram: '',
    pictureUrl: '',
    licenseName: '',
    licenseLevel: '0'
  });

  useEffect(() => {
    if (!account) return;
    /** check license info */
    async function getStatusOfLicense() {
      const smartArmyContract = await getContract('SmartArmy', chainId);
      let licenseInfo = await smartArmyContract.licenseOf(account);
      let licenseTypeInfo = await smartArmyContract.licenseTypeOf(
        licenseInfo.level
      );
      let user = await smartArmyContract.userInfo(account);
      setLstatus(licenseInfo.status);
      setUserInfo({
        userName: user.username,
        telegram: user.telegram,
        pictureUrl: licenseInfo.tokenUri,
        licenseName: licenseTypeInfo.name,
        licenseLevel: licenseInfo.level
      });
    }
    getStatusOfLicense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lStatus, account]);

  useEffect(() => {
    /** activate license when button is clicked */
    async function initActivateCall() {
      await initActivate();
      setLstatus(2);
    }
    if (isActivate && account) {
      initActivateCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActivate, account]);

  return (
    <>
      <ColumnBox className={classes.customOutBoxStyle}>
        <ColumnBox>
          <CustomButtom
            width="132px"
            height="32px"
            background="#E0A501"
            color="#212121"
            borderRadius="20px"
            fontSize="14px"
            fontWeight="600"
            padding="7px"
            onHandleClick={handleWalletClickOpen}
          >
            {account ? shorter(account) : 'Connect Wallet'}
          </CustomButtom>

          <Box
            width="150px"
            sx={{ position: 'relative', margin: '30px auto 0 auto' }}
          >
            {lStatus === 0 || !account ? (
              <Box
                component="img"
                alt={userAvatar.name}
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
                  sx={{
                    width: '150px',
                    height: '150px',
                    cursor: 'pointer',
                    margin: 'auto',
                    borderRadius: '50%'
                  }}
                />
                <Box
                  alt={profileMark.name}
                  component="img"
                  src={profileMark.avatar}
                  sx={{
                    width: '72.92px',
                    height: '76px',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '88px',
                    right: '0',
                    borderRadius: '0px !important'
                  }}
                />
              </>
            )}
          </Box>
          <RowBox marginTop="16px" justifyContent="center">
            <Typography variant="h2" color="#EDEDED">
              {lStatus === 0 || !account ? 'User Name' : userInfo.userName}
            </Typography>
            {lStatus !== 0 && (
              <>
                <Box
                  component="img"
                  alt={privateViewImage.name}
                  src={privateViewImage.avatar}
                  sx={{
                    width: '15.72px',
                    height: '15.05px',
                    cursor: 'pointer',
                    marginLeft: '20px'
                  }}
                />
                <Box
                  component="img"
                  alt={telegramView.name}
                  src={telegramView.avatar}
                  sx={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer',
                    marginLeft: '10px'
                  }}
                />
              </>
            )}
          </RowBox>
          <RowBox className={classes.visionaryBoxStyle}>
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
                Activate License
              </Typography>
            )}
            {lStatus >= 2 && account && (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    padding: '5px 10px',
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
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    padding: '5px 15px',
                    color: '#fff',
                    width: '40%'
                  }}
                >
                  364d : 20h
                </Typography>
              </>
            )}
          </RowBox>

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
                    width: 'auto',
                    height: 'auto',
                    padding: '10px',
                    background:
                      'linear-gradient(180deg, #323232 0%, #000000 100%)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginTop: '10px'
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
                    component="span"
                    variant="h3"
                    sx={{
                      textAlign: 'center',
                      width: '110px',
                      height: '25px',
                      color: '#EDEDED'
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
                        privilege[Number(userInfo.licenseLevel) - 1]['ladder']}
                    </Typography>
                    <Typography variant="h5" color="#E0A501">
                      &#8226; Entitled to be an SMT intermediary
                    </Typography>
                    <Typography variant="h5" color="#E0A501">
                      &#8226; Farming rewards:
                    </Typography>
                    {userInfo.licenseLevel !== '0' &&
                      privilege[Number(userInfo.licenseLevel) - 1]['rewards']}
                    <Typography variant="h5" color="#E0A501">
                      &#8226; Access to Smart Academy, Smart Living, Smart
                      Utilities, Smart Wealth (
                      {userInfo.licenseLevel !== '0' &&
                        privilege[Number(userInfo.licenseLevel) - 1]['title']}
                      )
                    </Typography>
                  </CardContent>
                </Collapse>
              </Box>
            </ColumnBox>
          )}
        </ColumnBox>

        <Box display="flex" flexDirection="column" alignItems="center">
          <CustomButtom
            width="154px"
            height="34px"
            background="#695400"
            color="#EDEDED"
            borderRadius="20px"
            fontSize="18px"
            fontWeight="600"
          >
            Light Mode
          </CustomButtom>

          <CustomButtom
            width="154px"
            height="34px"
            background="#5A5A5A"
            color="#EDEDED"
            borderRadius="20px"
            fontSize="18px"
            fontWeight="600"
            marginTop="10px"
          >
            Settings
          </CustomButtom>
        </Box>
      </ColumnBox>

      <WalletDialog open={walletOpen} onClose={handleWalletClose} />
    </>
  );
};

export default MobileRightSidebarMenu;
