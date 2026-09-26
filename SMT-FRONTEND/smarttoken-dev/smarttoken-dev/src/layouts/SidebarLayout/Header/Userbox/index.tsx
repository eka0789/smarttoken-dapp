import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { nonProfileImage } from 'src/models/ImageUrl';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
`
);

const user = {
  name: 'Mark 77',
  avatar: '/static/img/header/mobileprofile.svg',
  jobtitle: 'Project Manager'
};

const HeaderUserbox = () => {
  const { toggleRightSidebar } = useContext(SidebarContext);
  const { account, chainId } = useWeb3React();
  const [pictureUrl, setPictureUrl] = useState<string>('');

  useEffect(() => {
    async function init() {
      if (!account) return;
      const smartArmyContract = await getContract('SmartArmy', chainId);
      let licenseInfo = await smartArmyContract.licenseOf(account);
      setPictureUrl(licenseInfo.tokenUri);
    }
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <UserBoxButton color="secondary" onClick={toggleRightSidebar}>
      <Avatar
        variant="rounded"
        alt={user.name}
        src={pictureUrl ? pictureUrl : nonProfileImage.avatar}
        sx={{
          width: '28px',
          height: '28px'
        }}
      />
    </UserBoxButton>
  );
};

export default HeaderUserbox;
