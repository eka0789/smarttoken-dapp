import { Typography } from "@mui/material";

export const binanceIcon = {
  name: 'binance',
  path: '/static/img/header/binance.svg',
  desc: 'binance icon'
};
export const trustIcon = {
  name: 'trust',
  path: '/static/img/header/trust.svg',
  desc: 'trust icon'
};
export const metamaskIcon = {
  name: 'metamask',
  path: '/static/img/header/metamask.svg',
  desc: 'metamask icon'
};
export const walletConnectIcon = {
  name: 'walletConect',
  path: '/static/img/header/walletConnect.svg',
  desc: 'walletConect icon'
};

// Public Profile Sample Data
// MIDDLE SECTION BUTTON NAMES
export const middleButtons = ['Portofolio', 'Achievement', 'Growth', 'Wealth'];

export const userAvatar = {
  name: 'userAvatar',
  avatar: '/static/img/sidebar/profileImage.svg',
  desc: 'userAvatarImage'
};
export const profileMark = {
  name: 'profileMark',
  avatar: '/static/img/sidebar/profileMark.svg',
  desc: 'profileMarkImage'
};
export const publicUserInfo = {
  name: 'Mark77'
};
export const privateViewImage = {
  name: 'privateView',
  avatar: '/static/img/sidebar/privateProfileView.svg',
  desc: 'privateProfileView'
};
export const publicViewImage = {
  name: 'publicView',
  avatar: '/static/img/sidebar/publicProfileView.svg',
  desc: 'publicProfileView'
};
export const telegramView = {
  name: 'telegramView',
  avatar: '/static/img/sidebar/telegramView.svg',
  desc: 'telegramView'
};
export const shareIcon = {
  name: 'shareIcon',
  path: '/static/img/header/share.svg',
  desc: 'shareIcon'
};
export const makePublic = ['Make Public', 'Make Private'];

export const privilege = [
  {
    ladder: 1,
    rewards: (
      <>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; 0.17% Fee as a liquidity provider
        </Typography>
      </>
    ),
    title: 'trial'
  },
  {
    ladder: 3,
    rewards: (
      <>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; 0.17% Fee as a liquidity provider
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Fixed 0.1% /day
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Sell tax distribution *1
        </Typography>
      </>
    ),
    title: 'opportunist'
  },
  {
    ladder: 5,
    rewards: (
      <>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; 0.17% Fee as a liquidity provider
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Fixed 0.1% /day
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Sell tax distribution *2
        </Typography>
      </>
    ),
    title: 'runner'
  },
  {
    ladder: 7,
    rewards: (
      <>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; 0.17% Fee as a liquidity provider
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Fixed 0.1% /day
        </Typography>
        <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
          &#8226; Sell tax distribution *4
        </Typography>
      </>
    ),
    title: 'visionary'
  }
];
