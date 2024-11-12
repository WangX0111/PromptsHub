import { NavItem } from '@/types';

export type Prompt = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_birth: string; // Consider using a proper date type if possible
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    longitude?: number; // Optional field
    latitude?: number; // Optional field
    job: string;
    profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
  };


  export const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      url: '/dashboard/overview',
      icon: 'dashboard',
      isActive: false,
      shortcut: ['d', 'd'],
      items: [] // Empty array as there are no child items for Dashboard
    },
    {
      title: 'Employee',
      url: '/dashboard/employee',
      icon: 'user',
      shortcut: ['e', 'e'],
      isActive: false,
      items: [] // No child items
    },
    {
      title: 'Product',
      url: '/dashboard/product',
      icon: 'product',
      shortcut: ['p', 'p'],
      isActive: false,
      items: [] // No child items
    },
    {
      title: 'Account',
      url: '#', // Placeholder as there is no direct link for the parent
      icon: 'billing',
      isActive: true,
  
      items: [
        {
          title: 'Profile',
          url: '/dashboard/profile',
          icon: 'userPen',
          shortcut: ['m', 'm']
        },
        {
          title: 'Login',
          shortcut: ['l', 'l'],
          url: '/',
          icon: 'login'
        }
      ]
    },
    {
      title: 'Kanban',
      url: '/dashboard/kanban',
      icon: 'kanban',
      shortcut: ['k', 'k'],
      isActive: false,
      items: [] // No child items
    }
  ];
  