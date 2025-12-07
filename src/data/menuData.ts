import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
   {
    id: '1',
    name: 'Double Truffle Cheeseburger',
    description: 'Double smashed beef patties...',
    price: 14.99,
    category: 'Twisted London',
    subcategory: 'Drinks',
    image: '...',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Twisted Cheeseburger',
    description: 'Single smashed beef patty...',
    price: 9.99,
    category: 'Twisted London',
    subcategory: 'Drinks',
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
  
  "Twisted London",
  "WTF",
  "Kuro Smash",
  "Koreatown",
  "Winning Wings",
  "Wings Of Nature",
  "Vegan Vibes",
  "Bamboo Garden",
  "Plan Party",
  "Vegan Caribbean",
  "Soft Drinks",
  "Alcohol"
];

// Strong typing for categoryTree
export type CategoryTreeType = {
  [key: string]: string[];
};

// Export correctly
export const categoryTree: CategoryTreeType = {
  "Twisted London": ["Smashed Patty Beef Burgers", "TRIPLE Stack Beef Burger", "Anything But Beef Burgers","Chicken Wings,Tenders & More","Bites","Sides","Dips","Drinks"],
  "WTF": ["Vegan Beef Burgers", "Vegan Chicken Burgers", "Loaded Sides", "Sides", "Dips", "Drinks"],
  "Kuro Smash": ["Umami Smash Burgers", "Fried Chicken Burgers","Kuro Wings,Tenders & Bites", "Sides", "Dips", "Drinks"],
  "Koreatown": ["Korean Rice Bowles","Korean Chicken Burger","KFC-Korean Fried Chicken","Sides","Dips","Drinks"],
  "Winning Wings": ["Winning Wings", "Chicken Buns","Chicken Tender","Chicken Bites","", "Sides", "Sauces", "Drinks"],
  "Wings Of Nature": ["Meal Deals","Tenders","Bites","DrumSticks","Vegan Chicken Buns","Sides","Dips","Drinks","Alcohol","Milkshakes","Desserts"],
  "Vegan Vibes": ["Vegan Oriental Cuisine","Vegan American Cuisine","Vegan Caribbean Cuisine","Meal Deals","Vegan Mexican Cuisine","Vegan Indian Cuisine","Vegan Desserts","Vegan MilkShakes","Drinks","Alcohol"],
  "Bamboo Garden": ["Meal Deals","Oriental Starters","Mains","KidsMenu","Sides","Desserts","Vegan MilkShakes","Soft Drinks","Alcohol","Non Vegan Milkshakes"],
  "Plan Party": ["Meal Deals","Mains","Sides","Dips","Drinks","Dessearts","Alcohol","Milkshakes"],
  "Vegan Caribbean": ["Starters","Mains","Sides","Soft Drinks","Desserts","Alcohol","Vegan Milkshakes"],
 
};
