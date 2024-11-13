import { NavItem } from '@/types';

export type Prompt = {
    id: number;
    title: string;
    description: string;
    content: string;
    rating: string; 
    tags: string[];
    input_requirements: string[];
    example_inputs: string[];
    example_outputs: string[];
    category_id: number;
    author_id: number;
    license: string;
    views: number;
    likes: number;
    status: string;
    created_at: string;
    updated_at: string;
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
      title: 'Prompts',
      url: '/prompt',
      icon: 'kanban',
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
    }
  ];
  