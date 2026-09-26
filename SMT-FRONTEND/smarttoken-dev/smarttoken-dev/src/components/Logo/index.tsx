import { Hidden, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
        transition: filter .35s ease, transform .35s cubic-bezier(0.22, 1, 0.36, 1);

        &:hover {
          filter: drop-shadow(0 0 12px rgba(224, 165, 1, 0.65));
          transform: scale(1.03);
        }

        @media (min-width: 1280px) {
          padding-top: 20px;
        }
`
);

function Logo() {
  const LogoImage = {
    name: 'logo',
    avatar: '/static/img/sidebar/logo.svg',
    desc: 'LogoImage'
  };
  const LogoImageMobile = {
    name: 'logoMobile',
    avatar: '/static/img/sidebar/logo_mobile.svg',
    desc: 'LogoImageMobile'
  };

  return (
    <LogoWrapper to="/main/dashboard">
      <Hidden lgUp>
        <Avatar
          variant="square"
          alt={LogoImageMobile.name}
          src={LogoImageMobile.avatar}
          sx={{ width: '190px', height: '30px', cursor: 'pointer' }}
        />
      </Hidden>
      <Hidden lgDown>
        <Avatar
          alt={LogoImage.name}
          variant="square"
          src={LogoImage.avatar}
          sx={{ width: '188px', height: '60px', cursor: 'pointer' }}
        />
      </Hidden>
    </LogoWrapper>
  );
}

export default Logo;
