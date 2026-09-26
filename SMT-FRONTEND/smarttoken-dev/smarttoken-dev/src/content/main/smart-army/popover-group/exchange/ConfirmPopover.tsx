import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form';
import useSmartArmy from 'src/hooks/useSmartArmy';
import RowBox from 'src/components/Box/RowBox';
import { nonProfileImage } from 'src/models/ImageUrl';
import { uploadToIPFS, isIPFSConfigured } from 'src/utils/ipfs';
import { ConfirmPopoverStyle } from 'src/models/main/smart-army/CustomStyle';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
  onHandleTrialNext: (value: string) => void;
  licenseName: string;
}

const ConfirmPopover = (props: ParentProps) => {
  const classes = ConfirmPopoverStyle();
  const inputRef = useRef(null);
  const { exchangeLicense, isLoading, setIsLoading } = useSmartArmy();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [fileUrl, setFileUrl] = useState({
    realUrl: '',
    virtualUrl: ''
  });
  const [formInput, setFormInput] = useState({
    userName: '',
    telegramId: '',
    sponsorAddress: '',
    pictureUrl: ''
  });

  const triggerPreviewImage = () => {
    inputRef.current?.click();
  };
  const onPreviewImage = async (evt) => {
    const file = evt.target.files[0];
    setFileUrl({ realUrl: file, virtualUrl: URL.createObjectURL(file) });
  };
  const onSubmit = async (regData) => {
    setFormInput({ ...regData, pictureUrl: fileUrl.realUrl });
  };

  useEffect(() => {
    async function uploadToIPFS() {
      const { userName, telegramId, sponsorAddress, pictureUrl } = formInput;
      if (!userName || !telegramId || !sponsorAddress || !pictureUrl) return;
      try {
        setIsLoading(true);
        const picAdded = await (client as IPFSHTTPClient).add(pictureUrl, {
          progress: () => {}
        });
        const ipfsPicUrl = `https://ipfs.infura.io/ipfs/${picAdded.path}`;
        if (
          await exchangeLicense(
            userName,
            telegramId,
            sponsorAddress,
            props.licenseName,
            ipfsPicUrl
          )
        ) {
          setIsLoading(false);
          /** Go to the next step when wallet is confirmed */
          props.onHandleTrialNext('trial_final');
        }
      } catch (error) {
        setIsLoading(false);
      }
    }

    uploadToIPFS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInput]);

  return (
    <Box className={classes.customOutBoxStyle}>
      <CloseIcon
        onClick={props.onHandleTrialClose}
        className={classes.closeIconStyle}
      />
      <Typography fontSize="24px" color="#E0A501" fontWeight="600">
        Almost done..
      </Typography>
      <Typography variant="h2" color="#E0A501" lineHeight="100%">
        We need a little bit information to be able to reach you
      </Typography>
      <Typography fontSize="13px" color="#EDEDED">
        Your Best Photo
      </Typography>
      <Box
        component="img"
        src={fileUrl.virtualUrl ? fileUrl.virtualUrl : nonProfileImage.avatar}
        sx={{
          width: '150px',
          height: '150px',
          cursor: 'pointer',
          margin: 'auto'
        }}
      />
      <input type="file" ref={inputRef} onChange={onPreviewImage} hidden />
      <CustomButton
        width="240px"
        height="50px"
        background="linear-gradient(180deg, #212121 0%, #000000 100%)"
        color="#E0A501"
        fontSize="22px"
        fontWeight="600"
        boxShadow="10px 10px 10px rgba(0, 0, 0, 0.5)"
        border="3px solid #323232"
        borderRadius="20px"
        marginTop="6px"
        onHandleClick={triggerPreviewImage}
      >
        Upload Photo
      </CustomButton>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box textAlign="left" width="100%">
          <Typography fontSize="13px" color="#EDEDED" marginTop="16px">
            Your telegram account
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.searchCustomStyle}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="t.me/mark77 or @mark77"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
                padding: '0'
              }}
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#212121',
                fontSize: '18px',
                fontWeight: '600'
              }}
              name="telegramId"
              {...register('telegramId', { required: true })}
            />
          </FormControl>
          {errors.telegramId && (
            <p
              className="error-msg"
              style={{ padding: '0', margin: '0', color: 'red' }}
            >
              Telegram account is required.
            </p>
          )}
        </Box>
        <Box textAlign="left" width="100%">
          <Typography fontSize="13px" color="#EDEDED" marginTop="16px">
            Your Smart Army username
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.searchCustomStyle}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Mark77"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#212121',
                fontSize: '18px',
                fontWeight: '600'
              }}
              name="userName"
              {...register('userName', { required: true })}
            />
          </FormControl>
          {errors.userName && (
            <p
              className="error-msg"
              style={{ padding: '0', margin: '0', color: 'red' }}
            >
              Smart Army username is required.
            </p>
          )}
        </Box>
        <Box textAlign="left" width="100%">
          <Typography fontSize="13px" color="#EDEDED" marginTop="16px">
            Sponsor wallet address
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.searchCustomStyle}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="0x9d92dA89c4970eFad9837D263057512F197564F9"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              value={
                localStorage.getItem('sponsor') ||
                '0xf8f7Ce8Ba0580f31774A00E7E0cd78D557661cE2'
              }
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#212121',
                fontSize: '18px',
                fontWeight: '600'
              }}
              name="sponsorAddress"
              {...register('sponsorAddress', { required: true })}
            />
          </FormControl>
          {errors.walletAddress && (
            <p
              className="error-msg"
              style={{ padding: '0', margin: '0', color: 'red' }}
            >
              Wallet address is required.
            </p>
          )}
        </Box>

        <RowBox justifyContent="space-evenly" marginTop="50px">
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
          >
            Confirm{' '}
            {isLoading && (
              <Box component="img" src="/static/img/loading.gif" />
            )}
          </CustomButton>
          <CustomButton
            width="240px"
            height="50px"
            background="#936900"
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={props.onHandleTrialClose}
          >
            Cancel
          </CustomButton>
        </RowBox>
      </form>
    </Box>
  );
};

export default ConfirmPopover;
