import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CardActions from '@mui/material/CardActions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import CustomTitle from 'src/components/Title/BadgeTitle';
import ColumBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { ExpandMore, AntSwitch } from 'src/models/layout/StyledData';
import {
  middleButtons,
  shareIcon,
  makePublic,
  privateViewImage,
  publicViewImage
} from 'src/models/layout/SampleData';
import {
  userAvatar,
  profileMark,
  telegramView,
  nonProfileImage
} from 'src/models/ImageUrl';
import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import useSmartArmy from 'src/hooks/useSmartArmy';
import { UserInfoProps } from 'src/utils/interfaces';
import { privilege } from 'src/models/layout/SampleData';

interface ParentProps {
  onHandleCustoClose: (e: React.MouseEvent<SVGElement>) => void;
  onHandleShareClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  outBoxStyle: {
    padding: '50px 44px 40px 44px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '16px',
    right: '16px',
    color: '#EDEDED'
  },
  visionaryBoxStyle: {
    height: '25px',
    marginTop: '13px',
    background: '#5A5A5A',
    borderRadius: '20px'
  }
}));

const useToogleButton = () => {
  // Make public or private
  const [isPublic, setPublic] = useState<number>(0);
  const changeSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.checked ? setPublic(1) : setPublic(0);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = useCallback(
    () => setExpanded(!expanded),
    [expanded]
  );

  return [isPublic, expanded, changeSwitch, handleExpandClick] as const;
};

const PublicProfileContent = (props: ParentProps) => {
  const classes = useStyles();
  const [isPublic, expanded, changeSwitch, handleExpandClick] =
    useToogleButton();
  const navigate = useNavigate();
  const { account, chainId } = useWeb3React();
  const { initActivate } = useSmartArmy();

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
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleCustoClose}
          className={classes.closeIconStyle}
        />
        <Box padding="0 20px">
          <Typography variant="h2" color="#E0A501">
            Public Profile
          </Typography>
          {/* TOP SECTION */}
          <Box marginTop="20px" padding="0 30px">
            <Box width="150px" sx={{ position: 'relative', margin: '0 auto' }}>
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
                    component="img"
                    alt={profileMark.name}
                    src={profileMark.avatar}
                    sx={{
                      width: '72px',
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
            <Box sx={{ position: 'relative', marginTop: '16px' }}>
              <Typography
                variant="h2"
                color="#EDEDED"
                sx={{
                  textAlign: 'center'
                }}
              >
                {lStatus === 0 || !account ? 'User Name' : userInfo.userName}
              </Typography>
              {lStatus !== 0 && (
                <>
                  <Box
                    component="img"
                    alt={
                      makePublic[isPublic] === 'Make Private'
                        ? publicViewImage.name
                        : privateViewImage.name
                    }
                    src={
                      makePublic[isPublic] === 'Make Private'
                        ? publicViewImage.avatar
                        : privateViewImage.avatar
                    }
                    sx={{
                      width: '15px',
                      height: '15px',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '0',
                      bottom: '0',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      right: '29px'
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
            </Box>
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
                    component="span"
                    sx={{
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '12px',
                      lineHeight: '100%',
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
                    component="span"
                    sx={{
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '12px',
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
              <ColumBox>
                <RowBox marginTop="10px">
                  <CustomTitle
                    title="Elon’s Eye"
                    width="110px"
                    height="25px"
                    fontSize="12px"
                    fontWeight="600"
                    color="#EDEDED"
                    background="#5A5A5A"
                  />
                  <CustomTitle
                    title="The Prince"
                    width="110px"
                    height="25px"
                    color="#EDEDED"
                    fontSize="12px"
                    fontWeight="600"
                    background="#5A5A5A"
                  />
                </RowBox>
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
                    sx={{
                      background:
                        'linear-gradient(180deg, #212121 0%, #000000 100%)',
                      border: '2px solid #323232',
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      height: '100%',
                      padding: '0 66px',
                      position: 'relative',
                      cursor: 'pointer',
                      justifyContent: 'center'
                    }}
                    onClick={handleExpandClick}
                  >
                    <Typography variant="h3" component="span" color="#EDEDED">
                      Privilege
                    </Typography>
                    <ExpandMore expand={expanded}>
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
                        marginTop: '-32px',
                        textAlign: 'left'
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
              </ColumBox>
            )}
          </Box>
          {/* MIDDLE SECTION */}
          <Box marginTop="30px">
            {middleButtons.map((con, idx) => (
              <CardActions
                key={idx}
                sx={{
                  background:
                    'linear-gradient(180deg, #212121 0%, #000000 100%)',
                  border: '2px solid #323232',
                  boxSizing: 'border-box',
                  borderRadius: '10px',
                  height: '40px',
                  width: '100%',
                  padding: '0 50px',
                  position: 'relative',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  marginTop: '10px'
                }}
              >
                <Typography
                  component="span"
                  variant='h3'
                  sx={{
                    textAlign: 'center',
                    height: '25px',
                    color: '#EDEDED',
                  }}
                >
                  {con}
                </Typography>
                <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
              </CardActions>
            ))}
          </Box>
        </Box>
        {/* BOTTOM SETION */}
        <RowBox marginTop="195px" justifyContent="center">
          <RowBox width="50%">
            <AntSwitch
              inputProps={{ 'aria-label': 'setted' }}
              onChange={(e) => changeSwitch(e)}
            />
            <Typography fontSize="14px" color="#E0A501">
              {makePublic[isPublic]}
            </Typography>
          </RowBox>
          {makePublic[isPublic] === 'Make Private' && (
            <RowBox width="40%" marginLeft="30px">
              <Typography fontSize="14px" color="#E0A501">
                Share Profile
              </Typography>
              <Box
                component="img"
                src={shareIcon.path}
                alt={shareIcon.name}
                onClick={props.onHandleShareClick}
                sx={{
                  cursor: 'pointer'
                }}
              />
            </RowBox>
          )}
        </RowBox>
      </Box>
    </>
  );
};

export default PublicProfileContent;
