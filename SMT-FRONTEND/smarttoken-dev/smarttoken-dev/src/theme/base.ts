import React from 'react';

import { Theme } from '@mui/material';
import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
        black2: string;
        black3: string;
        black4: string;
        grey: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
        secondary: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };

      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primaryDark: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      white: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      trueWhite: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      grey: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      greyAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      black: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      blackAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rewards: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      pendingAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      pending: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rejected: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      inActive: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      announcement: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      global: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      closed: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      claimed: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      license: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      active: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      infoAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      successAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      red: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      redDark: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      yellowAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rewardsAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };
    general: {
      reactFrameworkColor: React.CSSProperties['color'];
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
    };
    sidebar: {
      background: React.CSSProperties['color'];
      boxShadow: React.CSSProperties['color'];
      width: string;
      textColor: React.CSSProperties['color'];
      dividerBg: React.CSSProperties['color'];
      menuItemColor: React.CSSProperties['color'];
      menuItemColorActive: React.CSSProperties['color'];
      menuItemBg: React.CSSProperties['color'];
      menuItemBgActive: React.CSSProperties['color'];
      menuItemIconColor: React.CSSProperties['color'];
      menuItemIconColorActive: React.CSSProperties['color'];
      menuItemHeadingColor: React.CSSProperties['color'];
    };
    header: {
      height: string;
      background: React.CSSProperties['color'];
      boxShadow: React.CSSProperties['color'];
      textColor: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
        black2: string;
        black3: string;
        black4: string;
        grey: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
        secondary: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primaryDark: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      white: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      trueWhite: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      grey: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      greyAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      black: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      blackAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rewards: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rewardsAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      pendingAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      pending: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      rejected: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      inActive: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      announcement: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      global: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      closed: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      claimed: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      license: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      active: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      infoAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      successAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      red: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      redDark: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      yellowAlt: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };

    general: {
      reactFrameworkColor: React.CSSProperties['color'];
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
    };
    sidebar: {
      background: React.CSSProperties['color'];
      boxShadow: React.CSSProperties['color'];
      width: string;
      textColor: React.CSSProperties['color'];
      dividerBg: React.CSSProperties['color'];
      menuItemColor: React.CSSProperties['color'];
      menuItemColorActive: React.CSSProperties['color'];
      menuItemBg: React.CSSProperties['color'];
      menuItemBgActive: React.CSSProperties['color'];
      menuItemIconColor: React.CSSProperties['color'];
      menuItemIconColorActive: React.CSSProperties['color'];
      menuItemHeadingColor: React.CSSProperties['color'];
    };
    header: {
      height: string;
      background: React.CSSProperties['color'];
      boxShadow: React.CSSProperties['color'];
      textColor: React.CSSProperties['color'];
    };
  }
}

const themeMap: { [key: string]: Theme } = {
  NebulaFighterTheme
};
