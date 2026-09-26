import { alpha, createTheme, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';

const themeColors = {
  primary: '#E0A501',
  yellow: '#E0A501',

  primaryDark: '#695400',
  yellowDark: '#695400',

  primaryAlt: '#936900',
  yellowAlt: '#936900',

  secondary: '#EDEDED',
  white: '#EDEDED',
  trueWhite: '#ffffff',

  black: '#212121',
  blackAlt: '#323232',
  trueBlack: '#000000',

  grey: '#5A5A5A',
  greyAlt: '#C4C4C4',

  warning: '#F84343',
  red: '#F84343',
  redDark: '#7E0000',

  success: '#00649C',
  successAlt: '#76CEFF',

  info: '#1E9450',
  infoAlt: '#39FF8E',

  claimed: '#24AE5F',
  license: '#24AE5F',
  active: '#24AE5F',

  pending: '#E8B500',
  pendingAlt: '#EECA41',
  rewards: '#EECA41',
  rewardsAlt: '#4B3C00',

  rejected: '#F84343',
  inActive: '#F84343',

  announcement: '#C285FF',

  global: '#76CEFF',

  closed: '#8F8F8F',

  error: '#FF1943'
};

const colors = {
  gradients: {
    blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
    blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
    orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
    orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
    purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
    pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
    pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
    green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',

    black1: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    black4: 'linear-gradient(180deg, #323232 0%, #000000 100%)',
    black2: 'linear-gradient(180deg, #212121 0%, rgba(33, 33, 33, 0) 100%)',
    black3: 'linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #000000 40.18%)',
    grey: 'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'
  },
  shadows: {
    success:
      '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
    error:
      '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
    info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
    primary:
      '4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)',
    secondary: '21px 21px 10px rgba(0, 0, 0, 0.5)',
    warning:
      '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
    card: '0px 0px 2px #6A7199',
    cardSm: '0px 0px 2px #6A7199',
    cardLg:
      '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)'
  },
  layout: {
    general: {
      bodyBg: '#070C27'
    },
    sidebar: {
      background: 'linear-gradient(180deg, #323232 0%, #000000 100%)',
      textColor: themeColors.black,
      dividerBg: '#323232',
      menuItemColor: '#9EA4C1',
      menuItemColorActive: '#ffffff',
      menuItemBg: 'transparent',
      menuItemBgActive: 'rgba(43, 48, 77, .6)',
      menuItemIconColor: '#444A6B',
      menuItemIconColorActive: '#ffffff',
      menuItemHeadingColor: darken(themeColors.secondary, 0.3)
    }
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    trueWhite: {
      5: alpha(themeColors.trueWhite, 0.02),
      10: alpha(themeColors.trueWhite, 0.1),
      30: alpha(themeColors.trueWhite, 0.3),
      50: alpha(themeColors.trueWhite, 0.5),
      70: alpha(themeColors.trueWhite, 0.7),
      100: themeColors.trueWhite
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black
    }
  },
  secondary: {
    lighter: alpha(themeColors.secondary, 0.85),
    light: alpha(themeColors.secondary, 0.3),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: alpha(themeColors.primary, 0.85),
    light: alpha(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  primaryDark: {
    lighter: alpha(themeColors.primaryDark, 0.85),
    light: alpha(themeColors.primaryDark, 0.3),
    main: themeColors.primaryDark,
    dark: darken(themeColors.primaryDark, 0.2)
  },
  success: {
    lighter: alpha(themeColors.success, 0.85),
    light: alpha(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: alpha(themeColors.warning, 0.85),
    light: alpha(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: alpha(themeColors.error, 0.85),
    light: alpha(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: alpha(themeColors.info, 0.85),
    light: alpha(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  },
  white: {
    lighter: alpha(themeColors.white, 0.85),
    light: alpha(themeColors.white, 0.3),
    main: themeColors.white,
    dark: alpha(themeColors.white, 0.2)
  },
  trueWhite: {
    lighter: alpha(themeColors.trueWhite, 0.85),
    light: alpha(themeColors.trueWhite, 0.3),
    main: themeColors.trueWhite,
    dark: alpha(themeColors.trueWhite, 0.2)
  },
  grey: {
    lighter: alpha(themeColors.grey, 0.85),
    light: alpha(themeColors.grey, 0.3),
    main: themeColors.grey,
    dark: alpha(themeColors.grey, 0.2)
  },
  greyAlt: {
    lighter: alpha(themeColors.greyAlt, 0.85),
    light: alpha(themeColors.greyAlt, 0.3),
    main: themeColors.greyAlt,
    dark: alpha(themeColors.greyAlt, 0.2)
  },
  black: {
    lighter: alpha(themeColors.black, 0.85),
    light: alpha(themeColors.black, 0.3),
    main: themeColors.black,
    dark: alpha(themeColors.black, 0.2)
  },
  blackAlt: {
    lighter: alpha(themeColors.blackAlt, 0.85),
    light: alpha(themeColors.blackAlt, 0.3),
    main: themeColors.blackAlt,
    dark: alpha(themeColors.blackAlt, 0.2)
  },
  rewards: {
    lighter: alpha(themeColors.rewards, 0.85),
    light: alpha(themeColors.rewards, 0.3),
    main: themeColors.rewards,
    dark: alpha(themeColors.rewards, 0.2)
  },
  rewardsAlt: {
    lighter: alpha(themeColors.rewardsAlt, 0.85),
    light: alpha(themeColors.rewardsAlt, 0.3),
    main: themeColors.rewardsAlt,
    dark: alpha(themeColors.rewardsAlt, 0.2)
  },
  pendingAlt: {
    lighter: alpha(themeColors.pendingAlt, 0.85),
    light: alpha(themeColors.pendingAlt, 0.3),
    main: themeColors.pendingAlt,
    dark: alpha(themeColors.pendingAlt, 0.2)
  },
  pending: {
    lighter: alpha(themeColors.pending, 0.85),
    light: alpha(themeColors.pending, 0.3),
    main: themeColors.pending,
    dark: alpha(themeColors.pending, 0.2)
  },
  rejected: {
    lighter: alpha(themeColors.rejected, 0.85),
    light: alpha(themeColors.rejected, 0.3),
    main: themeColors.rejected,
    dark: alpha(themeColors.rejected, 0.2)
  },
  inActive: {
    lighter: alpha(themeColors.inActive, 0.85),
    light: alpha(themeColors.inActive, 0.3),
    main: themeColors.inActive,
    dark: alpha(themeColors.inActive, 0.2)
  },
  announcement: {
    lighter: alpha(themeColors.announcement, 0.85),
    light: alpha(themeColors.announcement, 0.3),
    main: themeColors.announcement,
    dark: alpha(themeColors.announcement, 0.2)
  },
  global: {
    lighter: alpha(themeColors.global, 0.85),
    light: alpha(themeColors.global, 0.3),
    main: themeColors.global,
    dark: alpha(themeColors.global, 0.2)
  },
  closed: {
    lighter: alpha(themeColors.closed, 0.85),
    light: alpha(themeColors.closed, 0.3),
    main: themeColors.closed,
    dark: alpha(themeColors.closed, 0.2)
  },
  claimed: {
    lighter: alpha(themeColors.claimed, 0.85),
    light: alpha(themeColors.claimed, 0.3),
    main: themeColors.claimed,
    dark: alpha(themeColors.claimed, 0.2)
  },
  license: {
    lighter: alpha(themeColors.license, 0.85),
    light: alpha(themeColors.license, 0.3),
    main: themeColors.license,
    dark: alpha(themeColors.license, 0.2)
  },
  active: {
    lighter: alpha(themeColors.active, 0.85),
    light: alpha(themeColors.active, 0.3),
    main: themeColors.active,
    dark: alpha(themeColors.active, 0.2)
  },
  infoAlt: {
    lighter: alpha(themeColors.infoAlt, 0.85),
    light: alpha(themeColors.infoAlt, 0.3),
    main: themeColors.infoAlt,
    dark: alpha(themeColors.infoAlt, 0.2)
  },
  successAlt: {
    lighter: alpha(themeColors.successAlt, 0.85),
    light: alpha(themeColors.successAlt, 0.3),
    main: themeColors.successAlt,
    dark: alpha(themeColors.successAlt, 0.2)
  },
  red: {
    lighter: alpha(themeColors.red, 0.85),
    light: alpha(themeColors.red, 0.3),
    main: themeColors.red,
    dark: alpha(themeColors.red, 0.2)
  },
  redDark: {
    lighter: alpha(themeColors.redDark, 0.85),
    light: alpha(themeColors.redDark, 0.3),
    main: themeColors.redDark,
    dark: alpha(themeColors.redDark, 0.2)
  },
  yellowAlt: {
    lighter: alpha(themeColors.yellowAlt, 0.85),
    light: alpha(themeColors.yellowAlt, 0.3),
    main: themeColors.yellowAlt,
    dark: alpha(themeColors.yellowAlt, 0.2)
  }
};

export const NebulaFighterTheme = createTheme({
  // direction: i18n.dir(),
  colors: {
    gradients: {
      blue1: colors.gradients.blue1,
      blue2: colors.gradients.blue2,
      blue3: colors.gradients.blue3,
      orange1: colors.gradients.orange1,
      orange2: colors.gradients.orange2,
      purple1: colors.gradients.purple1,
      pink1: colors.gradients.pink1,
      pink2: colors.gradients.pink2,
      green1: colors.gradients.green1,
      black1: colors.gradients.black1,
      black2: colors.gradients.black2,
      black3: colors.gradients.black3,
      black4: colors.gradients.black4,
      grey: colors.gradients.grey
    },
    shadows: {
      success: colors.shadows.success,
      error: colors.shadows.error,
      primary: colors.shadows.primary,
      secondary: colors.shadows.secondary,
      warning: colors.shadows.warning
    },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
      },
      trueWhite: {
        5: alpha(themeColors.trueWhite, 0.02),
        10: alpha(themeColors.trueWhite, 0.1),
        30: alpha(themeColors.trueWhite, 0.3),
        50: alpha(themeColors.trueWhite, 0.5),
        70: alpha(themeColors.trueWhite, 0.7),
        100: themeColors.trueWhite
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black
      }
    },
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: alpha(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2)
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: alpha(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2)
    },
    primaryDark: colors.primaryDark,
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: alpha(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2)
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: alpha(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2)
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: alpha(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2)
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: alpha(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2)
    },
    white: colors.white,
    trueWhite: colors.trueWhite,
    grey: colors.grey,
    greyAlt: colors.greyAlt,
    black: colors.black,
    blackAlt: colors.blackAlt,
    rewards: colors.rewards,
    rewardsAlt: colors.rewardsAlt,
    pendingAlt: colors.pendingAlt,
    pending: colors.pending,
    rejected: colors.rejected,
    inActive: colors.inActive,
    announcement: colors.announcement,
    global: colors.global,
    closed: colors.closed,
    claimed: colors.claimed,
    license: colors.license,
    active: colors.active,
    infoAlt: colors.infoAlt,
    successAlt: colors.successAlt,
    red: colors.red,
    redDark: colors.redDark,
    yellowAlt: colors.yellowAlt
  },
  general: {
    reactFrameworkColor: '#00D8FF',
    borderRadiusSm: '4px',
    borderRadius: '6px',
    borderRadiusLg: '10px',
    borderRadiusXl: '18px'
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    boxShadow: '1px 0 0 #272C48',
    width: '280px'
  },
  header: {
    height: '88px',
    background: themeColors.primaryAlt,
    boxShadow: '0px 1px 0px #272C48',
    textColor: colors.secondary.main
  },
  spacing: 8,
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100]
    },
    mode: 'dark',
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: themeColors.trueWhite
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: themeColors.trueWhite
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: themeColors.trueWhite
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: themeColors.trueWhite
    },
    grey: {
      50: '#FBFBFB',
      100: '#F3F5F6',
      200: '#E8EAED',
      300: '#DCE0E5',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    text: {
      primary: colors.alpha.black[100],
      secondary: colors.alpha.black[70],
      disabled: colors.alpha.black[50]
    },
    background: {
      paper: colors.gradients.black1,
      default: colors.layout.general.bodyBg
    },
    action: {
      active: colors.alpha.black[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.black[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.black[50],
      disabledBackground: colors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.black[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 2840
    }
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken('#070C27', 0.5), 0.4),
          backdropFilter: 'blur(2px)',

          '&.MuiBackdrop-invisible': {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(1px)'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          animation: 'smt-zoom-in .35s cubic-bezier(0.22, 1, 0.36, 1)'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginLeft: 8,
          marginRight: 8,
          fontWeight: 'bold'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          width: '100%',
          height: '100%'
        },
        html: {
          scrollBehavior: 'smooth'
        },
        body: {
          overflowX: 'hidden'
        },
        ':root': {
          '--swiper-theme-color': colors.gradients.black1,
          colorScheme: 'dark'
        },
        '#nprogress .bar': {
          background: themeColors.pending
        },
        '#nprogress .spinner-icon': {
          borderTopColor: themeColors.pending,
          borderLeftColor: themeColors.pending
        },
        '#nprogress .peg': {
          boxShadow:
            '0 0 10px ' +
            themeColors.pending +
            ', 0 0 5px' +
            themeColors.pending
        },
        code: {
          background: colors.info.lighter,
          color: colors.alpha.black[100],
          borderRadius: 4,
          padding: 4
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(2.8)',
            opacity: 0
          }
        },
        '@keyframes float': {
          '0%': {
            transform: 'translate(0%, 0%)'
          },
          '100%': {
            transform: 'translate(3%, 3%)'
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: colors.alpha.black[50]
        },
        icon: {
          top: 'calc(50% - 14px)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
            paddingRight: 6
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.alpha.black[50]
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary.main
          }
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          fontWeight: 'bold',
          lineHeight: '40px',
          fontSize: 13,
          background: colors.alpha.black[5],
          color: colors.alpha.black[70]
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          position: 'relative',
          transition:
            'transform .3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .3s ease, border-color .3s ease',

          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow:
              '0 14px 34px rgba(0, 0, 0, 0.45), 0 0 24px rgba(224, 165, 1, 0.16)'
          }
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: -5,
          marginBottom: -5
        },
        title: {
          fontSize: 15
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: '50px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'all .25s ease'
        },
        colorSecondary: {
          background: colors.alpha.black[5],
          color: colors.alpha.black[100],

          '&:hover': {
            background: colors.alpha.black[10]
          }
        },
        deleteIcon: {
          color: colors.alpha.black[50],

          '&:hover': {
            color: colors.alpha.black[70]
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',

          '&.Mui-expanded': {
            margin: 0
          },
          '&::before': {
            display: 'none'
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 'bold'
        },
        colorDefault: {
          background: colors.alpha.black[30],
          color: colors.alpha.trueWhite[100]
        }
      }
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          alignItems: 'center'
        },
        avatar: {
          background: colors.alpha.black[10],
          fontSize: 13,
          color: colors.alpha.black[70],
          fontWeight: 'bold',

          '&:first-of-type': {
            border: 0,
            background: 'transparent'
          }
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        alignItemsFlexStart: {
          marginTop: 0
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: 'bold',
          transition: 'all .2s'
        },
        textPrimary: {
          '&.Mui-selected': {
            boxShadow: colors.shadows.primary
          },
          '&.MuiButtonBase-root:hover': {
            background: colors.alpha.black[5]
          },
          '&.Mui-selected.MuiButtonBase-root:hover': {
            background: colors.primary.main
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,
          transition:
            'all .25s cubic-bezier(0.22, 1, 0.36, 1), background-color .25s ease, box-shadow .25s ease',

          '&:hover': {
            transform: 'translateY(-2px)'
          },
          '&:active': {
            transform: 'translateY(0) scale(0.97)'
          },

          '.MuiSvgIcon-root': {
            transition: 'all .2s'
          }
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FFCB00 0%, #E0A501 55%, #C68C00 100%)',
          boxShadow:
            '0 4px 14px rgba(224, 165, 1, 0.35), inset -1px -3px 4px rgba(0, 0, 0, 0.18)',

          '&:hover': {
            background: 'linear-gradient(135deg, #FFD633 0%, #FFB700 55%, #D89B00 100%)',
            boxShadow:
              '0 6px 22px rgba(224, 165, 1, 0.55), inset -1px -3px 4px rgba(0, 0, 0, 0.18)'
          }
        },
        endIcon: {
          marginRight: -8
        },
        containedSecondary: {
          backgroundColor: colors.secondary.main,
          color: colors.alpha.white[100],
          border: '1px solid ' + colors.alpha.black[30]
        },
        outlinedSecondary: {
          backgroundColor: colors.alpha.white[100],

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.alpha.black[5],
            color: colors.alpha.black[100]
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          color: colors.primary.main,
          background: colors.alpha.white[100],
          transition: 'all .2s',

          '&:hover, &.Mui-selected, &.Mui-selected:hover': {
            color: themeColors.trueWhite,
            background: colors.primary.main
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          transition: 'all .25s cubic-bezier(0.34, 1.56, 0.64, 1)',

          '&:hover': {
            transform: 'scale(1.08)'
          },
          '&:active': {
            transform: 'scale(0.94)'
          },

          '& .MuiTouchRipple-root': {
            borderRadius: 6
          }
        },
        sizeSmall: {
          padding: 4
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.alpha.black[10],
          border: 0,
          height: 1
        },
        vertical: {
          height: 'auto',
          width: 1,

          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto'
          },
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%'
          }
        },
        withChildren: {
          '&:before, &:after': {
            border: 0
          }
        },
        wrapper: {
          background: colors.alpha.white[100],
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          marginTop: -12,
          color: 'inherit',
          textTransform: 'uppercase'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          padding: 0,
          transition: 'box-shadow .3s ease, transform .3s ease'
        },
        elevation0: {
          boxShadow: 'none'
        },
        elevation: {
          boxShadow: colors.shadows.card
        },
        elevation2: {
          boxShadow: colors.shadows.cardSm
        },
        elevation24: {
          boxShadow: colors.shadows.cardLg
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6
        },
        bar: {
          backgroundSize: '200% 100%',
          animation: 'smt-gradient-shift 2.6s ease infinite'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
            transform: 'none'
          },
          '& .MuiSlider-valueLabel': {
            borderRadius: 6,
            background: colors.alpha.black[100],
            color: colors.alpha.white[100]
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,

          '& .MuiListItem-button': {
            transition: 'all .2s',

            '& > .MuiSvgIcon-root': {
              minWidth: 34
            },

            '& .MuiTouchRipple-root': {
              opacity: 0.2
            }
          },
          '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
            backgroundColor: colors.alpha.black[10]
          }
        },
        padding: {
          padding: '12px',

          '& .MuiListItem-button': {
            borderRadius: 6,
            margin: '1px 0'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 38,
          minHeight: 38,
          overflow: 'visible'
        },
        indicator: {
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          border: '1px solid ' + colors.primary.dark,
          boxShadow: '0px 2px 10px ' + colors.primary.light
        },
        scrollableX: {
          overflow: 'visible !important'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          transition: 'color .2s',
          textTransform: 'capitalize',

          '&.MuiButtonBase-root': {
            minWidth: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 4
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            color: colors.alpha.trueWhite[100],
            zIndex: 5
          },
          '&:hover': {
            color: colors.alpha.trueWhite[70]
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: 12,
          animation: 'smt-slide-down-fade .28s cubic-bezier(0.22, 1, 0.36, 1)',
          borderRadius: 10
        },
        list: {
          padding: 12,

          '& .MuiMenuItem-root.MuiButtonBase-root': {
            fontSize: 14,
            marginTop: 1,
            marginBottom: 1,
            transition: 'all .2s',
            color: colors.alpha.black[70],

            '& .MuiTouchRipple-root': {
              opacity: 0.2
            },

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: colors.alpha.black[100],
              background: alpha(colors.primary.lighter, 0.2)
            }
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            color: colors.secondary.main,

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: colors.alpha.black[100],
              background: alpha(colors.primary.lighter, 0.2)
            }
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          margin: 1
        },
        root: {
          '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment':
            {
              right: 14
            }
        },
        clearIndicator: {
          background: alpha(colors.error.lighter, 0.2),
          color: colors.error.main,
          marginRight: 8,

          '&:hover': {
            background: alpha(colors.error.lighter, 0.3)
          }
        },
        popupIndicator: {
          color: colors.alpha.black[70],

          '&:hover': {
            background: alpha(colors.primary.lighter, 0.2)
          }
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          '& .MuiIconButton-root': {
            padding: 8
          }
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important',
          padding: '0 !important'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: colors.alpha.black[5]
        },
        root: {
          transition: 'background-color .2s',

          '&.MuiTableRow-hover:hover': {
            backgroundColor: alpha(colors.alpha.black[5], 0.05)
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: colors.alpha.black[10],
          fontSize: 14
        },
        head: {
          textTransform: 'uppercase',
          fontSize: 13,
          fontWeight: 'bold',
          color: colors.alpha.black[70]
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          lineHeight: 1.5,
          fontSize: 14
        },
        standardInfo: {
          color: colors.info.main
        },
        action: {
          color: colors.alpha.black[70]
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          margin: 0,
          zIndex: 5,
          position: 'absolute',
          top: '50%',
          marginTop: -6,
          left: -6
        },
        outlined: {
          backgroundColor: colors.alpha.white[100],
          boxShadow: '0 0 0 6px ' + colors.alpha.white[100]
        },
        outlinedPrimary: {
          backgroundColor: colors.alpha.white[100],
          boxShadow: '0 0 0 6px ' + colors.alpha.white[100]
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          position: 'absolute',
          height: '100%',
          top: 0,
          borderRadius: 50,
          backgroundColor: colors.alpha.black[10]
        }
      }
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          minHeight: 0,
          padding: '8px 0',

          '&:before': {
            display: 'none'
          }
        },
        missingOppositeContent: {
          '&:before': {
            display: 'none'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(colors.alpha.black['100'], 0.95),
          padding: '8px 16px',
          fontSize: 13,
          animation: 'smt-zoom-in .2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        },
        arrow: {
          color: alpha(colors.alpha.black['100'], 0.95)
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: 33,
          overflow: 'visible',

          '& .MuiButtonBase-root': {
            position: 'absolute',
            padding: 6,
            transition:
              'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
          },
          '& .MuiIconButton-root': {
            borderRadius: 100
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            opacity: 0.3
          }
        },
        thumb: {
          backgroundColor: colors.alpha.white[100],
          border: '1px solid ' + colors.alpha.black[30],
          boxShadow:
            '0px 9px 14px ' +
            colors.alpha.black[10] +
            ', 0px 2px 2px ' +
            colors.alpha.black[10]
        },
        track: {
          backgroundColor: colors.alpha.black[5],
          border: '1px solid ' + colors.alpha.black[10],
          boxShadow: 'inset 0px 1px 1px ' + colors.alpha.black[10],
          opacity: 1
        },
        colorPrimary: {
          '& .MuiSwitch-thumb': {
            backgroundColor: colors.alpha.white[100]
          },

          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: colors.primary.main
          }
        }
      }
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          paddingTop: 20,
          paddingBottom: 20,
          background: colors.alpha.black[5]
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.MuiStepIcon-completed': {
            color: colors.success.main
          }
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div'
        }
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7
        }
      }
    }
  },
  shape: {
    borderRadius: 6
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
    fontSize: 14,
    htmlFontSize: 15,
    h1: {
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '100%'
    },
    h2: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '100%'
    },
    h3: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '100%'
    },
    h4: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '100%',
      color: themeColors.white
    },
    h5: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '100%'
    },
    h6: {
      fontSize: 10
    },
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 14
    },
    button: {
      fontSize: 14,
      fontWeight: 700
    },
    caption: {
      fontSize: 13,
      textTransform: 'uppercase',
      color: colors.alpha.black[50]
    },
    subtitle1: {
      fontSize: 14,
      color: colors.alpha.black[70]
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: colors.alpha.black[70]
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ]
});
