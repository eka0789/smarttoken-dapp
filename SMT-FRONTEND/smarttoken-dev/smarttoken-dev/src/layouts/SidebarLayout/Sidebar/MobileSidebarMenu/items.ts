import { ReactNode } from 'react';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

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
        name: 'Main',
        icon: AccountCircleTwoToneIcon,
        link: '#',
        items: [
          {
            name: 'Dashboard',
            link: '/main/dashboard'
          },
          {
            name: 'Rewards',
            link: '/main/rewards'
          },
          {
            name: 'Achievement',
            link: '/main/achievement'
          },
          {
            name: 'Exchange Smart License',
            link: '/main/smart'
          },
          {
            name: 'Golden Tree',
            link: '/main/golden'
          },
          {
            name: 'Get SMT / SMTC',
            link: '/main/smt'
          },
          {
            name: 'Messages',
            link: '/main/messages'
          },
          {
            name: 'Legal Agreement',
            link: '/main/legal'
          }
        ]
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Academy',
        icon: AccountCircleTwoToneIcon,
        link: '#',
        items: []
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Living',
        icon: AccountCircleTwoToneIcon,
        link: '#',
        items: []
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Utilities',
        icon: AccountCircleTwoToneIcon,
        link: '#',
        items: []
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Wealth',
        icon: AccountCircleTwoToneIcon,
        link: '#',
        items: [
          {
            name: 'Dashboard',
            link: '/wealth/dashboard'
          },
          {
            name: 'Team Management',
            link: '/wealth/team',
            items: [
              {
                name: 'General',
                link: '/wealth/team/general'
              },
              {
                name: 'Direct Sales',
                link: '/wealth/team/direct'
              }
            ]
          },
          {
            name: 'Tools',
            link: '/wealth/tools'
          },
          {
            name: 'History',
            link: '/wealth/history'
          }
        ]
      }
    ]
  }
];

export default menuItems;
