import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Hidden } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomCard from 'src/components/Card';
import CustomTitle from 'src/components/Title/BadgeTitle';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { ProfileInfoStyle } from 'src/models/wealth/team/CustomStyle';
import {
  userAvatar,
  profileMark,
  prevIcon,
  privateViewImage,
  telegramView,
  nonProfileImage
} from 'src/models/ImageUrl';
import useSmartArmy from 'src/hooks/useSmartArmy';

const ProfileInfo = ({ userAccount, userLadderLevel }) => {
  const classes = ProfileInfoStyle();
  const navigate = useNavigate();
  const { fetchLicense, fetchLicenseType, fetchUserInfo } = useSmartArmy();
  const [userLicenseInfo, setUserLicenseInfo] = useState({
    userName: '',
    licenseLevel: '',
    licenseName: '',
    userAvatar: ''
  });

  useEffect(() => {
    async function init() {
      let licenseInfo = await fetchLicense(userAccount);
      let licenseTypeInfo = await fetchLicenseType(licenseInfo.level);
      let userInfo = await fetchUserInfo(userAccount);

      setUserLicenseInfo({
        userName: userInfo.username,
        licenseLevel: licenseInfo.level,
        licenseName: licenseTypeInfo.name,
        userAvatar: licenseInfo.tokenUri
      });
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAccount, userLadderLevel]);

  return (
    <Box className={classes.customBoxStyle}>
      {/* TOP SECTION */}
      <Box className={classes.customInnerBoxStyle}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <CustomTitle
            width="147px"
            height="34px"
            background="#E0A501"
            color="#212121"
            title={'Lv. ' + userLadderLevel}
            fontSize="18px"
            fontWeight="600"
            boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
          />
          <Box
            component="img"
            src={prevIcon.path}
            alt={prevIcon.name}
            sx={{ width: '34px', height: '34px', cursor: 'pointer' }}
            onClick={() => navigate('/wealth/team/general')}
          />
        </Box>
        <Box width="100%" height="100%" position="relative" margin="20px auto">
          <Box
            component="img"
            alt={userAvatar.name}
            src={
              userLicenseInfo.userAvatar
                ? userLicenseInfo.userAvatar
                : nonProfileImage.avatar
            }
            sx={{
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              margin: '0 auto',
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
              bottom: '0',
              right: '0'
            }}
          />
        </Box>
        <Box sx={{ position: 'relative', marginTop: '16px' }}>
          <Typography variant="h2" color="#EDEDED" textAlign="center">
            {userLicenseInfo.userName ? userLicenseInfo.userName : 'User Name'}
          </Typography>
          <Box
            component="img"
            alt={privateViewImage.name}
            src={privateViewImage.avatar}
            sx={{
              width: '15px',
              height: '15px',
              cursor: 'pointer',
              position: 'absolute',
              top: '0',
              bottom: '0',
              right: '29px',
              marginTop: 'auto',
              marginBottom: 'auto'
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
              right: '0',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          />
        </Box>
        <ColumnBox marginTop="20px">
          <RowBox>
            <CustomTitle
              title={userLicenseInfo.licenseName + ' License'}
              width="120px"
              height="20px"
              fontSize="10px"
              fontWeight="600"
              color="#212121"
              background="#E0A501"
            />
            <CustomTitle
              title=""
              width="75px"
              height="20px"
              color="#EDEDED"
              fontSize="12px"
              fontWeight="600"
              background="#5A5A5A"
            />
          </RowBox>
          <RowBox marginTop="10px">
            <CustomTitle
              title=""
              width="85px"
              height="20px"
              fontSize="12px"
              fontWeight="600"
              color="#EDEDED"
              background="#5A5A5A"
            />
            <CustomTitle
              title=""
              width="105px"
              height="20px"
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
              height: '26px',
              marginTop: '10px',
              zIndex: '1'
            }}
          >
            <CardActions
              disableSpacing
              sx={{
                background: '#464646',
                borderRadius: '16px',
                height: '100%',
                padding: '0 30px',
                position: 'relative',
                cursor: 'pointer',
                justifyContent: 'space-evenly'
              }}
            >
              <Typography
                component="span"
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '15px',
                  color: '#EDEDED',
                  letterSpacing: '1px'
                }}
              >
                Privilege
              </Typography>
              <ArrowDropDownIcon sx={{ color: '#EDEDED' }} />
            </CardActions>
          </Box>
        </ColumnBox>
      </Box>

      {/* DOWN SECTION */}
      <Box className={classes.customInnerBoxStyle}>
        <Box className={classes.customnNoteBoxStyle}>
          <Box
            sx={{
              position: 'absolute',
              top: '-12px',
              left: 0,
              right: 0,
              zIndex: '999',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <CustomTitle
              title="Note"
              width="70%"
              height="24px"
              fontSize="18px"
              fontWeight="700"
              color="#E0A501"
              background="#5A5A5A"
              padding="3px 50px"
              borderRadius="5px"
            />
          </Box>
          <CustomCard height="215px" width="100%">
            <Box
              padding="32px 20px 10px 20px"
              display="flex"
              flexDirection="column"
            >
              <Typography
                variant="h3"
                height="120px"
                color="#EDEDED"
                textAlign="center"
                display="flex"
                alignItems="center"
              >
                This team member is Outperform!
              </Typography>
              <Typography
                variant="h5"
                height="26px"
                color="#676767"
                marginTop="27px"
                lineHeight="100%"
              >
                Last activity 03:13 27/09/2021
              </Typography>
            </Box>
          </CustomCard>
        </Box>

        <Hidden mdUp>
          <CustomCard width="100%" height="130px">
            <Box padding="20px">
              <Typography
                variant="h4"
                component="div"
                height="16px"
                textAlign="center"
                sx={{
                  letterSpacing: '1px'
                }}
              >
                Current Nobility Title
              </Typography>
              <Box
                height="55px"
                marginTop="15px"
                display="flex"
                alignItems="center"
                justifyContent="space-around"
              >
                <Box
                  sx={{
                    width: '55px',
                    height: '53px'
                  }}
                  component="img"
                  src={profileMark.avatar}
                  alt={profileMark.name}
                />
                <Typography
                  variant="h2"
                  component="div"
                  color="#E0A501"
                  fontWeight="700"
                  sx={{
                    letterSpacing: '1px'
                  }}
                >
                  Prince
                </Typography>
              </Box>
            </Box>
          </CustomCard>
        </Hidden>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
