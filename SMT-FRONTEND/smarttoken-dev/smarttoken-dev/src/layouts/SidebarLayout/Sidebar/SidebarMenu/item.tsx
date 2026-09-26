import { FC, ReactNode, useState, useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { SidebarContext } from 'src/contexts/SidebarContext';
import PropTypes from 'prop-types';
import { Button, Badge, Collapse, ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { styled } from '@mui/material/styles';
interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

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

  if (children) {
    return (
      <>
        <ListItem component="div" className="Mui-children" key={name} {...rest}>
          <Button
            className={clsx({ 'Mui-active': menuToggle })}
            startIcon={Icon && <Icon />}
            endIcon={
              menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
            }
            onClick={toggleMenu}
          >
            {name}
          </Button>
          <Collapse in={menuToggle}>{children}</Collapse>
        </ListItem>
      </>
    );
  }

  return (
    <>
      <ListItem component="div" key={name} {...rest}>
        <Button
          activeClassName="Mui-active"
          component={RouterLink}
          onClick={toggleSidebar}
          to={link}
          endIcon={
            name === 'Messages' ? (
              <StyledBadge badgeContent={4} />
            ) : name === 'Rewards' ? (
              <StyledBadge badgeContent={12} />
            ) : (
              ''
            )
          }
          sx={{ paddingRight: '0', paddingLeft: '0' }}
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
