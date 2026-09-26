import { FC, ReactNode, useState, useContext } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { SidebarContext } from 'src/contexts/SidebarContext';

import PropTypes from 'prop-types';
import { Button, Collapse, ListItem, Box, Badge, styled } from '@mui/material';
import Divider from '@mui/material/Divider';
interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

// DETAIL ICONS
const generalDetail = {
  name: 'generalDetail',
  path: '/static/img/wealth_team/detail.svg',
  desc: 'generalDetailIcon'
};
const generalMember = {
  name: 'generalMember',
  path: '/static/img/wealth_team/member.svg',
  desc: 'generalMemberIcon'
};
const directDetail = {
  name: 'directDetail',
  path: '/static/img/wealth_team/direct.svg',
  desc: 'directDetailIcon'
};

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    color: '#212121 !important',
    background: '#F84343 !important',
    boxShadow:
      '6.4px 6.4px 6.4px rgba(0, 0, 0, 0.25), inset -1.6px -4.8px 6.4px rgba(0, 0, 0, 0.25)',
    width: '32px',
    height: '32px',
    borderRadius: '32px',
    fontSize: '14px !important',
    zIndex: '0'
  },
  right: '15px !important'
});

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(openParent);

  const { toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  const location = useLocation();

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        {link !== '#' ? (
          <Button
            className={clsx({ 'Mui-active': menuToggle })}
            onClick={toggleMenu}
            component={RouterLink}
            to={link}
          >
            {name}
          </Button>
        ) : (
          <Button
            className={clsx({ 'Mui-active': menuToggle })}
            onClick={toggleMenu}
          >
            {name}
          </Button>
        )}
        <Collapse in={menuToggle}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <>
      <ListItem component="div" key={name} {...rest} sx={{ width: '100%' }}>
        <Button
          activeClassName="Mui-active"
          component={RouterLink}
          to={link}
          onClick={toggleSidebar}
          sx={{ paddingRight: '0', paddingLeft: '0' }}
          endIcon={
            location.pathname.includes('/wealth/team/general/detail') &&
            name === 'General' ? (
              <Box
                component="img"
                src={generalDetail.path}
                alt={generalDetail.name}
              />
            ) : location.pathname.includes('/wealth/team/general/member') &&
              name === 'General' ? (
              <Box
                component="img"
                src={generalMember.path}
                alt={generalMember.name}
              />
            ) : location.pathname.includes('/wealth/team/direct/detail') &&
              name === 'Direct Sales' ? (
              <Box
                component="img"
                src={directDetail.path}
                alt={directDetail.name}
              />
            ) : name === 'Messages' ? (
              <StyledBadge badgeContent={4} />
            ) : name === 'Rewards' ? (
              <StyledBadge badgeContent={12} />
            ) : (
              ''
            )
          }
        >
          {name}
        </Button>
      </ListItem>
      <Divider
        style={{ background: '#323232', width: '100%', height: '2px' }}
      />
    </>
  );
};

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired
};

SidebarMenuItem.defaultProps = {
  open: false,
  active: false
};

export default SidebarMenuItem;
