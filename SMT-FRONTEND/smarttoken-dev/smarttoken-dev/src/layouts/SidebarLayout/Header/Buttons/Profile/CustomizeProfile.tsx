import { useState, useCallback } from 'react';
import { Box, Popover, Button, Typography, Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // CUSTOM SEARCH BAR STYLE
  searchBarStyle: {
    width: '100%',
    height: '42px',
    position: 'relative',
    justifyContent: 'center'
  },
  outBoxStyle: {
    padding: '50px 25px 40px 25px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
  },
  disabledNameBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '42px',
    borderRadius: '11px',
    border: '2.26096px solid #323232',
    background: '#5A5A5A'
  },
  inputStyle: {
    padding: '9px 6px',
    height: '100%',
    width: '100%',
    borderRadius: '11px',
    border: '2.26096px solid #323232',
    background: '#EDEDED',
    color: '#C4C4C4',
    fontSize: '20px'
  }
}));

const ProfileButtonGroup = styled(Button)({
  padding: '7px 10px',
  background: 'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)',
  borderRadius: '10px',
  width: '280px',
  height: '30px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#EDEDED',
  marginTop: '10px',
  '&:hover': {
    background: '#E0A501'
  }
});

const UploadPhotoButton = styled(Button)({
  padding: '9px 20px',
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  border: '3px solid #323232',
  borderRadius: '20px',
  height: '42px',
  fontSize: '20px',
  textAlign: 'center',
  color: '#E0A501',
  marginTop: '6px',
  '&:hover': {
    background: '#E0A501'
  }
});

const SaveButton = styled(Button)({
  padding: '9px 20px',
  background: '#E0A501',
  boxShadow: '21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)',
  borderRadius: '35px',
  width: '240px',
  height: '50px',
  fontSize: '24px',
  textAlign: 'center',
  color: '#212121',
  marginTop: '60px',
  '&:hover': {
    background: '#E0A501'
  }
});

const profileImage = {
  name: 'profileImage',
  path: '/static/img/header/profileImage.svg',
  desc: 'profileImage'
};

const useToogleCustomProfileButton = (initialState) => {
  const [isCustoProfile, setCustoProfile] = useState<boolean>(initialState);
  const onHandleCustoProfileClick = useCallback(
    () => setCustoProfile(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCustoProfile]
  );
  const onHandleCustoClose = useCallback(
    () => setCustoProfile(false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCustoProfile]
  );

  return [
    isCustoProfile,
    onHandleCustoProfileClick,
    onHandleCustoClose
  ] as const;
};

const CustomizeProfile = () => {
  const classes = useStyles();

  const [isCustoProfile, onHandleCustoProfileClick, onHandleCustoClose] =
    useToogleCustomProfileButton(false);

  return (
    <>
      <ProfileButtonGroup onClick={onHandleCustoProfileClick}>
        Customize Profile
      </ProfileButtonGroup>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isCustoProfile}
      >
        <Popover
          anchorReference={'none'}
          classes={{
            root: classes.popoverRoot
          }}
          onClose={onHandleCustoClose}
          open={isCustoProfile}
          PaperProps={{
            style: {
              width: '450px',
              boxShadow: 'none'
            }
          }}
        >
          <Box className={classes.outBoxStyle}>
            <CloseIcon
              onClick={onHandleCustoClose}
              sx={{
                cursor: 'pointer',
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: '#EDEDED'
              }}
            />
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: '#E0A501',
                  padding: '0 30px'
                }}
              >
                Customize Profile
              </Typography>
              <Box
                component="img"
                src={profileImage.path}
                alt={profileImage.name}
                width="150px"
                height="150px"
                marginTop="30px"
              />
              <Typography variant="h4">Customize Profile</Typography>
              <UploadPhotoButton onClick={onHandleCustoProfileClick}>
                Upload photo
              </UploadPhotoButton>
            </Box>
            <Box width="100%">
              <Box textAlign="left" marginTop="16px">
                <Typography
                  component="span"
                  sx={{
                    fontSize: '13px',
                    height: '16px',
                    color: '#EDEDED',
                    textAlign: 'center'
                  }}
                >
                  Username
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '13px',
                    height: '16px',
                    color: '#F84343',
                    textAlign: 'center',
                    marginLeft: '5px'
                  }}
                >
                  (cannot be modified)
                </Typography>
                <Box className={classes.disabledNameBox}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '20px',
                      height: '25px',
                      color: '#EDEDED',
                      textAlign: 'center',
                      marginLeft: '20px'
                    }}
                  >
                    Mark77
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="left" marginTop="16px">
                <Typography
                  component="span"
                  sx={{
                    fontSize: '13px',
                    height: '16px',
                    color: '#EDEDED',
                    textAlign: 'center'
                  }}
                >
                  Your telegram account
                </Typography>
                <FormControl
                  variant="outlined"
                  className={classes.searchBarStyle}
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="t.me/mark77 or @mark77"
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight'
                    }}
                    className={classes.inputStyle}
                  />
                </FormControl>
              </Box>
            </Box>
            <SaveButton onClick={onHandleCustoClose}>Save</SaveButton>
          </Box>
        </Popover>
      </Backdrop>
    </>
  );
};

export default CustomizeProfile;
