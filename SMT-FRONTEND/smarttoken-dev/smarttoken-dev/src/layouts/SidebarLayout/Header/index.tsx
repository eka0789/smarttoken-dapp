import { useContext } from 'react';
import { Box, Hidden, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SidebarContext } from 'src/contexts/SidebarContext';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import HeaderMenu from './Menu';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import Logo from 'src/components/Logo';

const useStyles = makeStyles({
  headerRightPadding: {
    paddingRight: '34px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1280px)': {
      paddingRight: '4px'
    }
  }
});

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 2)};
    right: 0;
    z-index: 5;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background: #2f2f2f;
    display: flex;
    align-items: center;
    @media (min-width: 1280px) {
      width: auto;
      left: 300px;
      height: 90px;
      background: linear-gradient(180deg, rgba(20, 20, 20, 0.72) 0%, rgba(33, 33, 33, 0) 100%);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    @media (max-width: 1280px) {
      padding-top: 50px;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(224, 165, 1, 0) 0%,
        rgba(224, 165, 1, 0.65) 35%,
        rgba(255, 203, 0, 0.9) 50%,
        rgba(224, 165, 1, 0.65) 65%,
        rgba(224, 165, 1, 0) 100%
      );
      background-size: 200% 100%;
      animation: smt-gradient-shift 6s ease infinite;
      pointer-events: none;
    }
`
);

const Header = () => {
  const classes = useStyles();
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper>
      <Box display="flex" alignItems="center" paddingLeft='3px'>
        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton
              color="primary"
              onClick={toggleSidebar}
              sx={{ color: '#E0A501' }}
            >
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden lgDown>
          <HeaderMenu />
        </Hidden>
      </Box>

      <Hidden lgUp>
        <Box display="flex" alignItems="center">
          <Logo />
        </Box>
      </Hidden>

      <Box className={classes.headerRightPadding}>
        <HeaderButtons />
        <Hidden lgUp>
          <HeaderUserbox />
        </Hidden>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
