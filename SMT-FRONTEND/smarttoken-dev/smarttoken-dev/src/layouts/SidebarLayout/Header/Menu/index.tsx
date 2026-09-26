import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  activeButton: {
    color: '#E0A501'
  },
  deactiveButton: {
    color: '#EDEDED'
  },
  menuItemStyle: {
    padding: '8px 20px !important',
    borderRadius: '0px !important',
    borderRight: '3px solid #EDEDED !important',
    height: '26px'
  }
});

const ListWrapper = styled(Box)(
  ({ theme }) => `
    .MuiTouchRipple-root {
        display: none;
    }
    
    .MuiListItem-root {
      transition: ${theme.transitions.create(['color', 'fill'])};
      
      &.MuiListItem-indicators {
        padding: ${theme.spacing(1, 2)};
    
        .MuiListItemText-root {
            .MuiTypography-root {
                font-size: 18px;
                font-style: normal;
                letter-spacing: 0.7px;
                height: 22px;
                line-height: initial;
                transition: all .2s;
            }
        }

        &.active,
        &:active,
        &:hover {
          background: transparent;
      
          .MuiListItemText-root {
            .MuiTypography-root {
              &:before {
                opacity: 1;
                visibility: visible;
                bottom: 0px;
              }
            }
          }
        }
      }
    }
`
);

const HeaderMenu = () => {
  const classes = useStyles();
  const [activeMenu, setActiveMenu] = useState<string>('Main');

  return (
    <>
      <ListWrapper>
        <List disablePadding component={Box} display="flex" alignItems="center">
          <ListItem
            onClick={() => setActiveMenu('Main')}
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/main"
            className={classes.menuItemStyle}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Main"
              className={
                activeMenu === 'Main'
                  ? classes.activeButton
                  : classes.deactiveButton
              }
            />
          </ListItem>
          <ListItem
            onClick={() => setActiveMenu('Academy')}
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="#"
            className={classes.menuItemStyle}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Academy"
              className={
                activeMenu === 'Academy'
                  ? classes.activeButton
                  : classes.deactiveButton
              }
            />
          </ListItem>
          <ListItem
            onClick={() => setActiveMenu('Living')}
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="#"
            className={classes.menuItemStyle}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Living"
              className={
                activeMenu === 'Living'
                  ? classes.activeButton
                  : classes.deactiveButton
              }
            />
          </ListItem>
          <ListItem
            onClick={() => setActiveMenu('Utilities')}
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="#"
            className={classes.menuItemStyle}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Utilities"
              className={
                activeMenu === 'Utilities'
                  ? classes.activeButton
                  : classes.deactiveButton
              }
            />
          </ListItem>
          <ListItem
            onClick={() => setActiveMenu('Wealth')}
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/wealth"
            sx={{
              padding: '8px 20px !important',
              borderRadius: '0px',
              height: '26px'
            }}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Wealth"
              className={
                activeMenu === 'Wealth'
                  ? classes.activeButton
                  : classes.deactiveButton
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
    </>
  );
};

export default HeaderMenu;
