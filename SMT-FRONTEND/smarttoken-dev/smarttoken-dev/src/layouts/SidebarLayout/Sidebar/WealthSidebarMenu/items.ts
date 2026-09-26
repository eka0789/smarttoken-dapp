import { ReactNode } from 'react';

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
        link: '/wealth/dashboard'
      }
    ]
  },
  {
    heading: '',
    items: [
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
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Tools',
        link: '/wealth/tools'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'History',
        link: '/wealth/history'
      }
    ]
  }
];

export default menuItems;
