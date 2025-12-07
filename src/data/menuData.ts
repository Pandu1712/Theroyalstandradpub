import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
   {
    id: '1',
    name: 'Double Truffle Cheeseburger',
    description: 'Double smashed beef patties...',
    price: 14.99,
    category: 'American Cuisine',
    subcategory: 'Burgers',
    image: '...',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Twisted Cheeseburger',
    description: 'Single smashed beef patty...',
    price: 9.99,
    category: 'American Cuisine',
    subcategory: 'Burgers',
    image: '...',
  },
  {
    id: '3',
    name: 'Chipotle Bacon BBQ',
    description: 'Single smashed beef...',
    price: 10.99,
    category: 'American Cuisine',
    subcategory: 'Burgers',
    image: '...',
  },

  {
    id: '59',
    name: 'Szechuan Chicken Fried Rice',
    description: 'Wok-fried jasmine rice...',
    price: 12.90,
    category: 'Oriental Cuisine',
    subcategory: 'Rice',
    image: '...',
  },

  {
    id: '116',
    name: 'Diet Coke 330ml',
    description: 'Diet Coca Cola...',
    price: 2.5,
    category: 'Soft Drinks',
    subcategory: 'Cans',
    image: '...',
  },
  {
    id: '117',
    name: 'Coke Zero Can',
    description: 'Coca Cola Zero...',
    price: 2.5,
    category: 'Soft Drinks',
    subcategory: 'Cans',
    image: '...',
  }
];

export const categories: string[] = [
  
  "American Cuisine",
  "Oriental Cuisine",
  "Indian Cuisine",
  "Desserts",
  "Soft Drinks",
  "Alcohol",
];

// Strong typing for categoryTree
export type CategoryTreeType = {
  [key: string]: string[];
};

// Export correctly
export const categoryTree: CategoryTreeType = {
  "American Cuisine": ["Burgers", "Sides", "Fries", "Wings"],
  "Oriental Cuisine": ["Rice", "Noodles", "Starters"],
  "Indian Cuisine": ["Curries", "Biryani", "Snacks"],
  "Desserts": ["Cakes", "Ice Cream", "Pastries"],
  "Soft Drinks": ["Cans", "Bottles"],
  "Alcohol": ["Beer", "Wine", "Whisky"],
};
