import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        link: '/main/dashboard',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Rewards',
        link: '/main/rewards',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Achievement',
        link: '/main/achievement',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Smart Army License',
        link: '/main/smart',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Golden Tree',
        link: '/main/golden',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Get SMT / SMTC',
        link: '/main/smt',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Messages',
        link: '/main/messages',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Legal Agreement',
        link: '/main/legal',
        icon: DesignServicesTwoToneIcon
      }
    ]
  }
];

export default menuItems;
