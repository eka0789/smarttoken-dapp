import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CustomTitle from 'src/components/Title/BadgeTitle';
import RowBox from 'src/components/Box/RowBox';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-hot-toast';

interface ParentProps {
  onHandleCustoClose: (e: React.MouseEvent<SVGElement>) => void;
}

const useStyles = makeStyles({
  outBoxStyle: {
    padding: '50px 33px 70px 33px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
  }
});

const qrCodeImage = {
  name: 'qrCodeImage',
  path: '/static/img/header/qrcode.svg',
  desc: 'qrCodeImage'
};
const copyIcon = {
  name: 'copyIcon',
  path: '/static/img/header/copy.svg',
  desc: 'copyIcon'
};

const ShareProfile = (props: ParentProps) => {
  const classes = useStyles();
  const { account } = useWeb3React();
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => {
    if (account) {
      setReferralLink(`${window.location.origin}/p-id=${account}`);
    }
  }, [account]);

  const handleCopy = (): void => {
    toast.success('copied');
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleCustoClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#EDEDED'
          }}
        />
        <Box>
          <Typography variant="h2" color="#E0A501">
            Share your public profile
          </Typography>
          <Box marginTop="70px">
            <Box
              component="img"
              src={qrCodeImage.path}
              alt={qrCodeImage.name}
              margin="0 auto"
            />
            <Typography variant="h3" color="#E0A501" marginTop="30px">
              Share your public profile
            </Typography>
            <Typography variant="h4" marginTop="5px">
              or
            </Typography>
            <Typography
              variant="h3"
              color="#E0A501"
              marginTop="5px"
              marginBottom="20px"
            >
              Use link instead
            </Typography>
            <RowBox>
              <CustomTitle
                title={
                  account ? `Smart-Ecosystem/p-id=${account.slice(0, 8)}` : ''
                }
                width="90%"
                height="36px"
                color="#EDEDED"
                background="linear-gradient(180deg, #212121 0%, #000000 100%)"
                fontSize="14px"
                borderRadius="10px"
                padding="9px 25px"
                border="2px solid #323232"
              />
              <Box
                component="img"
                src={copyIcon.path}
                alt={copyIcon.name}
                sx={{ cursor: 'pointer' }}
                onClick={handleCopy}
              />
            </RowBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShareProfile;
