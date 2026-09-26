import { FC, ReactNode, useState, useContext } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import PropTypes from 'prop-types';
import { Button, Badge, Collapse, ListItem, Box } from '@mui/material';
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
  const location = useLocation();

  const [menuToggle, setMenuToggle] = useState<boolean>(openParent);

  const { toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  if (children) {
    return (
      <>
        <ListItem component="div" className="Mui-children" key={name} {...rest}>
          <Button
            activeClassName="Mui-active"
            sx={{ paddingRight: '0', paddingLeft: '0' }}
            onClick={toggleMenu}
            component={RouterLink}
            to={link}
          >
            {name}
          </Button>
          <Collapse in={menuToggle}>{children}</Collapse>
        </ListItem>
        <Divider
          style={{ background: '#323232', width: '100%', height: '2px' }}
        />
      </>
    );
  }

  return (
    <>
      <ListItem component="div" key={name} {...rest}>
        <Button
          activeClassName="Mui-active"
          onClick={toggleSidebar}
          component={RouterLink}
          to={link}
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
            ) : (
              ''
            )
          }
        >
          {name}
          {badge && <Badge badgeContent={badge} />}
        </Button>
      </ListItem>
      {link.includes('/wealth/team') ? (
        ''
      ) : (
        <Divider
          style={{ background: '#323232', width: '100%', height: '2px' }}
        />
      )}
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
