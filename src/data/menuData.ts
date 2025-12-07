import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: "TL1",
    name: "Twisted Truffle Cheeseburger",
    description:
      "Double stack of smashed beef patties | melted cheese | Twisted Truffle Mustard | grilled onions | sliced pickles",
    price: 10.45,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    isPopular: true
  },
  {
    id: "TL2",
    name: "The Straight Up Cheeseburger",
    description:
      "Double smash patty | melted cheese | Twisted Burger sauce | sliced fresh pickles",
    price: 8.95,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image: "IMAGE_URL_HERE",
    // You may add: offer: "Buy 1 get 1 free"
  },
  {
    id: "TL3",
    name: "BBQ Bacon Cheeseburger",
    description:
      "Double smash patty | melted cheese | crispy bacon | Smokey BBQ sauce | grilled onions | creamy ranch | pickles",
    price: 10.45,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image:
      "https://images.pexels.com/photos/4109231/pexels-photo-4109231.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "TL4",
    name: "Spicy Jalapeño Cheeseburger",
    description:
      "Double smash patty | melted cheese | spicy Sriracha mayo | chopped jalapeños | fresh pickles",
    price: 9.45,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL5",
    name: "Smokey BBQ Cheeseburger",
    description:
      "Double smash patty | melted cheese | Smokey BBQ sauce | grilled onions | creamy ranch | pickles",
    price: 9.45,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL6",
    name: "Li’l Cheese",
    description:
      "Single smash patty | melted cheese | Twisted Burger sauce | fresh pickles",
    price: 5.95,
    category: "Twisted London",
    subcategory: "Smashed Patty Beef Burgers",
    image: "IMAGE_URL_HERE"
  },

  // --- TRIPLE Stack Beef Burgers ---
  {
    id: "TL7",
    name: "Triple Truffle Cheeseburger",
    description:
      "TRIPLE stack smash patties | melted cheese | Truffle Mustard | grilled onions | pickles",
    price: 12.95,
    category: "Twisted London",
    subcategory: "TRIPLE Stack Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL8",
    name: "Triple BBQ Bacon CheeseBurger",
    description:
      "TRIPLE smashed patties | melted cheese | bacon | Smokey BBQ sauce | grilled onions | creamy ranch | pickles",
    price: 12.95,
    category: "Twisted London",
    subcategory: "TRIPLE Stack Beef Burgers",
    image: "IMAGE_URL_HERE"
  },

  // --- Anything But Beef Burgers ---
  {
    id: "TL9",
    name: "Veggie Chick’n & Cheese (v)",
    description:
      "Veggie chick’n fillet | melted cheese | creamy ranch | fresh pickles | shredded lettuce",
    price: 8.95,
    category: "Twisted London",
    subcategory: "Anything But Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL10",
    name: "Hot Honey Buffalo Chicken",
    description:
      "Crispy fried chicken | melted cheese | Honey Buffalo sauce | creamy ranch | pickles | shredded lettuce",
    price: 8.45,
    category: "Twisted London",
    subcategory: "Anything But Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL11",
    name: "The OG Chicken",
    description:
      "Crispy chicken fillet | melted cheese | creamy ranch | pickles | shredded lettuce",
    price: 7.99,
    category: "Twisted London",
    subcategory: "Anything But Beef Burgers",
    image: "IMAGE_URL_HERE"
  },

  // --- Chicken Wings, Tenders & Bites ---
  {
    id: "TL12",
    name: "Honey Buffalo & Ranch Wings",
    description:
      "Crispy chicken wings | Honey Buffalo sauce | creamy ranch drizzle | sesame seeds & spring onions",
    price: 7.45,
    category: "Twisted London",
    subcategory: "Chicken Wings, Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL13",
    name: "Crunchy Chicken Tenders",
    description:
      "5 or 8 crispy chicken tenders | served with your choice of sauce on the side",
    price: 8.45,
    category: "Twisted London",
    subcategory: "Chicken Wings, Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL14",
    name: "Boneless Chicken Bites",
    description:
      "Boneless chicken bites | served with your choice of sauce on the side",
    price: 5.95,
    category: "Twisted London",
    subcategory: "Chicken Wings, Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL15",
    name: "Smokey BBQ & Ranch Wings",
    description:
      "Crispy wings | Smokey BBQ sauce | creamy ranch drizzle | sesame seeds & spring onions",
    price: 7.45,
    category: "Twisted London",
    subcategory: "Chicken Wings, Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL16",
    name: "Naked Wings",
    description:
      "Crispy chicken wings | served with your choice of sauce on the side",
    price: 7.45,
    category: "Twisted London",
    subcategory: "Chicken Wings, Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },

  // --- Sides ---
  {
    id: "TL17",
    name: "Skin-on Fries (ve)",
    description: "Crispy skin-on fries",
    price: 2.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL18",
    name: "Jalapeño Poppers (v)",
    description: "Cheesy jalapeño poppers | served with your choice of sauce",
    price: 4.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL19",
    name: "Truffle Loaded Fries (ve)",
    description:
      "Skin-on fries | Twisted Truffle Mustard | crispy onions | spring onions",
    price: 4.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL20",
    name: "Onion Rings (ve)",
    description: "Panko-breaded onion rings",
    price: 3.45,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL21",
    name: "Hot Jalapeño Smashburger Loaded Fries",
    description:
      "Skin-on fries | smashed beef patty | melted cheese | spicy Sriracha mayo | crushed jalapeños | crispy onions | spring onions",
    price: 6.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "TL22",
    name: "BBQ Bacon Loaded Fries",
    description:
      "Skin-on fries | Smokey BBQ sauce | crispy bacon | crispy onions | spring onions",
    price: 4.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL23",
    name: "Smashburger Loaded Fries",
    description:
      "Skin-on fries | smashed beef patty | melted cheese | Twisted Burger Sauce | crispy onions | spring onions",
    price: 6.95,
    category: "Twisted London",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // --- Dips ---
  {
    id: "TL24",
    name: "Twisted Burger Sauce (ve)",
    description: "Served in a sauce pot",
    price: 1.45,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL25",
    name: "Creamy Ranch (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL26",
    name: "Twisted Sauce Stack",
    description: "Choose any 4 sauces",
    price: 4.00,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL27",
    name: "Twisted Truffle Mustard (ve)",
    description: "Served in a sauce pot",
    price: 1.45,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL28",
    name: "Sriracha Mayo (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL29",
    name: "Honey Buffalo (v)",
    description: "Served in a sauce pot",
    price: 1.45,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL30",
    name: "Smokey BBQ (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "Twisted London",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },

  // --- Drinks ---
  {
    id: "TL31",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "Twisted London",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL32",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "Twisted London",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL33",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "Twisted London",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL34",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "Twisted London",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "TL35",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "Twisted London",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF1",
    name: "WTF! Bae-con Cheezeburger",
    description:
      "Miami beef patty, vegan cheeze, vegan bacon, smokey BBQ sauce, grilled onions, sliced pickles, creamy ranch",
    price: 10.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WTF2",
    name: "WTF! Truffle Cheezeburger",
    description:
      "Miami beef patty, vegan cheeze, House Truffle Mustard, grilled onions, sliced pickles",
    price: 10.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE",
   
  },
  {
    id: "WTF3",
    name: "WTF! Spicy Cheezeburger",
    description:
      "Miami beef patty, vegan cheeze, Sriracha Mayo, diced jalapenos, sliced pickles",
    price: 8.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE",
    
  },
  {
    id: "WTF4",
    name: "WTF! Classic Cheezeburger",
    description:
      "Miami beef patty, vegan cheeze, WTF! Burger Sauce, sliced pickles",
    price: 8.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE",
   
  },
  {
    id: "WTF5",
    name: "WTF! Double Bae-con Cheezeburger",
    description:
      "A double stack of Miami beef patty, 2 slices vegan cheeze, House Truffle Mustard, grilled onions, sliced pickles",
    price: 13.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF6",
    name: "WTF! Double Truffle Cheezeburger",
    description:
      "A double stack of Miami beef patty, 2 slices vegan cheeze, House Truffle Mustard, grilled onions, sliced pickles",
    price: 13.95,
    category: "WTF",
    subcategory: "Vegan Beef Burgers",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------
  // Vegan Chicken Burgers
  // -----------------------------------------
  {
    id: "WTF7",
    name: "WTF! OG Chick’n Burger",
    description:
      "Miami Chick’n patty, vegan cheeze, Creamy Ranch, shredded lettuce, sliced pickles",
    price: 10.95,
    category: "WTF",
    subcategory: "Vegan Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF8",
    name: "WTF! Korean Chick’n Burger",
    description:
      "Miami Chick’n patty, vegan cheeze, Korean BBQ sauce, creamy ranch, shredded lettuce, sliced pickles",
    price: 10.95,
    category: "WTF",
    subcategory: "Vegan Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF9",
    name: "WTF! BBQ Chick’n Bae-con Burger",
    description:
      "Miami Chick’n patty, vegan cheeze, bacon bits, Smokey BBQ sauce, creamy ranch, shredded lettuce, sliced pickles",
    price: 12.95,
    category: "WTF",
    subcategory: "Vegan Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------
  // Loaded Sides
  // -----------------------------------------
  {
    id: "WTF10",
    name: "WTF! Dirty Chick'n Fries",
    description:
      "Skin-on fries, chick’n bites, Spicy mayo, diced jalapenos, spring onions, crispy onions",
    price: 6.95,
    category: "WTF",
    subcategory: "Loaded Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WTF11",
    name: "WTF! Signature Fries",
    description:
      "Skin-on fries, WTF! Burger sauce, spring onions, crispy onions",
    price: 4.95,
    category: "WTF",
    subcategory: "Loaded Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF12",
    name: "WTF! Dirty Loaded BBQ Fries",
    description:
      "Skin-on fries, Smokey BBQ Sauce, bacon bits, spring onions, crispy onions",
    price: 6.95,
    category: "WTF",
    subcategory: "Loaded Sides",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------
  // Sides
  // -----------------------------------------
  {
    id: "WTF13",
    name: "Vegan Nuggetz",
    description:
      "Crispy chick'n vegan nuggetz served with your choice of dip",
    price: 4.95,
    category: "WTF",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF14",
    name: "Skin-on Fries",
    description: "Crispy skin-on fries",
    price: 2.95,
    category: "WTF",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF15",
    name: "Onion Rings (Ve)",
    description: "Panko breaded onion rings",
    price: 3.95,
    category: "WTF",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------
  // Dips
  // -----------------------------------------
  {
    id: "WTF16",
    name: "WTF! Burger Sauce (ve)",
    description: "Served in a sauce pot",
    price: 1.45,
    category: "WTF",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF17",
    name: "Creamy Ranch (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "WTF",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF18",
    name: "House Truffle Mustard (ve)",
    description: "Served in a sauce pot",
    price: 1.45,
    category: "WTF",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF19",
    name: "Smokey BBQ (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "WTF",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF20",
    name: "Sriracha Mayo (ve)",
    description: "Served in a sauce pot",
    price: 0.95,
    category: "WTF",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------
  // Drinks
  // -----------------------------------------
  {
    id: "WTF21",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "WTF",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF22",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "WTF",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF23",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "WTF",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF24",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "WTF",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WTF25",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "WTF",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  }, {
    id: "KS1",
    name: "Classic Miso Cheeseburger",
    description:
      "Double-smashed beef patties · Umami miso mayo · cheese · zingy pickles",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE",
    
  },
  {
    id: "KS2",
    name: "Gangnam Style Bulgogi Cheeseburger",
    description:
      "Double-smashed beef patties · Korean bulgogi · cheese · zingy pickles",
    price: 9.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KS3",
    name: "Sweet Bacon Teriyaki Cheeseburger",
    description:
      "Double-smashed beef patties · Teriyaki · bacon · grilled onions · cheese · zingy pickles",
    price: 9.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS4",
    name: "Sriracha Chilli Cheeseburger",
    description:
      "Double-smashed beef patties · Sriracha mayo · jalapeños · cheese · zingy pickles",
    price: 9.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KS5",
    name: "Sticky Teriyaki Cheeseburger",
    description:
      "Double-smashed beef patties · Teriyaki · cheese · zingy pickles",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE",
    
  },
  {
    id: "KS6",
    name: "Teriyaki Jalapeño Cheeseburger",
    description:
      "Double-smashed beef patties · Teriyaki · jalapeños · cheese · zingy pickles",
    price: 9.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS7",
    name: "Lil' Umami Cheeseburger",
    description:
      "Single smash patty · Umami miso mayo · cheese · zingy pickles",
    price: 5.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS8",
    name: "Veggie Kuro Burger (V)",
    description:
      "Plant-based patty · GMO-free soy · 0% palm oil · 0.8g saturated fat · served in your choice of style",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Umami Smash Burgers",
    image: "IMAGE_URL_HERE",
   
  },

  // ---------------------------------------------------
  // Fried Chicken Burgers
  // ---------------------------------------------------
  {
    id: "KS9",
    name: "OG Kuro Ranch Chicken Burger",
    description:
      "Crispy chicken fillet · Umami Miso Mayo · Tangy Ranch · slaw · pink onions · toasted bun",
    price: 8.49,
    category: "Kuro Smash",
    subcategory: "Fried Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS10",
    name: "Honey Garlic Soy Chicken Burger",
    description:
      "Crispy chicken fillet · Honey Garlic Soy · slaw · pink onions · toasted bun",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Fried Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS11",
    name: "Korean BBQ Chicken Burger",
    description:
      "Crispy chicken fillet · Sticky Korean BBQ · slaw · pink onions · toasted bun",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Fried Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS12",
    name: "Sriracha Chilli Chicken Burger",
    description:
      "Crispy chicken fillet · Sriracha Mayo · jalapeños · slaw · pink onions · toasted bun",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Fried Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS13",
    name: "Teriyaki Jalapeño Chicken Burger",
    description:
      "Crispy chicken fillet · Teriyaki · jalapeños · slaw · pink onions · toasted bun",
    price: 8.99,
    category: "Kuro Smash",
    subcategory: "Fried Chicken Burgers",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------------
  // Kuro Wings, Tenders & Bites
  // ---------------------------------------------------
  {
    id: "KS14",
    name: "Boneless Bites",
    description:
      "Boneless chicken bites · served with your choice of sauce",
    price: 6.99,
    category: "Kuro Smash",
    subcategory: "Kuro Wings,Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS15",
    name: "Wings",
    description:
      "Crispy chicken wings · choice of sauce · Kuro ranch drizzle · togarashi & spring onions",
    price: 7.49,
    category: "Kuro Smash",
    subcategory: "Kuro Wings,Tenders & Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS16",
    name: "Tenders",
    description:
      "Crispy chicken tenders · choice of sauce · Kuro ranch drizzle · togarashi & spring onions",
    price: 8.49,
    category: "Kuro Smash",
    subcategory: "Kuro Wings,Tenders & Bites",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },

  // ---------------------------------------------------
  // Sides
  // ---------------------------------------------------
  {
    id: "KS17",
    name: "Kuro Fries",
    description: "Fries seasoned with tōgarashi",
    price: 2.99,
    category: "Kuro Smash",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS18",
    name: "Sriracha Chilli Chicken Fries",
    description:
      "Skin-on fries · chopped chicken fillet · Sriracha mayo · jalapeños · spring onions",
    price: 6.99,
    category: "Kuro Smash",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KS19",
    name: "Regular Fries",
    description: "Skin-on fries",
    price: 2.99,
    category: "Kuro Smash",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS20",
    name: "TeriMiso Smash Fries",
    description:
      "Skin-on fries · smashed beef patty · melted cheese · Teriyaki sauce · Miso mayo · spring onions",
    price: 6.99,
    category: "Kuro Smash",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS21",
    name: "Vegetable Gyoza",
    description:
      "Fried vegetable gyozas with your choice of dip",
    price: 6.99,
    category: "Kuro Smash",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------------
  // Dips
  // ---------------------------------------------------
  {
    id: "KS22",
    name: "Sriracha Mayo Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS23",
    name: "Umami Miso Mayo Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS24",
    name: "Kuro Ranch Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS25",
    name: "Korean BBQ Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS26",
    name: "Honey Garlic Soy Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS27",
    name: "Gangnam Style Bulgogi Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS28",
    name: "Sticky Teriyaki Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Kuro Smash",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------------
  // Drinks
  // ---------------------------------------------------
  {
    id: "KS29",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "Kuro Smash",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS30",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "Kuro Smash",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS31",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "Kuro Smash",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS32",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "Kuro Smash",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KS33",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "Kuro Smash",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },{
    id: "KT1",
    name: "Honey Garlic Soy Rice Bowl",
    description:
      "Sweet honey garlic soy dressing with protein of choice on miso mayo rice, slaw, edamame, pickled onions & spring onions",
    price: 9.49,
    category: "Koreatown",
    subcategory: "Korean Rice Bowles",
    image: "IMAGE_URL_HERE",
   
  },
  {
    id: "KT2",
    name: "Korean BBQ Rice Bowl",
    description:
      "Korean BBQ sauce with protein of choice on miso mayo rice, slaw, edamame, pickled onions & spring onions",
    price: 9.49,
    category: "Koreatown",
    subcategory: "Korean Rice Bowles",
    image: "IMAGE_URL_HERE",
    
  },
  {
    id: "KT3",
    name: "Bulgogi Rice Bowl",
    description:
      "Korean Bulgogi with protein of choice on miso mayo rice, topped with slaw, edamame, pickled onions & spring onions",
    price: 9.49,
    category: "Koreatown",
    subcategory: "Korean Rice Bowles",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT4",
    name: "Miso Mayo Rice Bowl",
    description:
      "Umami Miso Mayo with protein of choice on miso mayo rice, slaw, edamame, pickled onions & spring onions",
    price: 9.49,
    category: "Koreatown",
    subcategory: "Korean Rice Bowles",
    image: "IMAGE_URL_HERE",
   
  },
  {
    id: "KT5",
    name: "Spicy Sriracha Mayo Rice Bowl",
    description:
      "Spicy Sriracha mayo with protein of choice on miso mayo rice, slaw, edamame, pickled onions & spring onions",
    price: 9.49,
    category: "Koreatown",
    subcategory: "Korean Rice Bowles",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Korean Chicken Burger
  // ---------------------------------------------
  {
    id: "KT6",
    name: "Korean Chicken Burger",
    description:
      "Crispy fried chicken with sauce of choice, slaw, pickled onions & miso mayo",
    price: 8.99,
    category: "Koreatown",
    subcategory: "Korean Chicken Burger",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT7",
    name: "Veggie Korean Chicken Burger",
    description:
      "Veggie chick’n fillet with sauce of choice, slaw, pickled onions & miso mayo",
    price: 8.99,
    category: "Koreatown",
    subcategory: "Korean Chicken Burger",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // KFC - Korean Fried Chicken
  // ---------------------------------------------
  {
    id: "KT8",
    name: "Tenders",
    description:
      "Crispy chicken tenders with sauce of choice, miso mayo drizzle, togarashi & spring onions",
    price: 8.49,
    category: "Koreatown",
    subcategory: "KFC-Korean Fried Chicken",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KT9",
    name: "Boneless Bites",
    description:
      "Boneless chicken bites served with sauce of choice",
    price: 7.49,
    category: "Koreatown",
    subcategory: "KFC-Korean Fried Chicken",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KT10",
    name: "Wings",
    description:
      "Crispy chicken wings with sauce of choice, miso mayo drizzle, togarashi & spring onions",
    price: 7.49,
    category: "Koreatown",
    subcategory: "KFC-Korean Fried Chicken",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Sides
  // ---------------------------------------------
  {
    id: "KT11",
    name: "Sriracha Loaded Chicken Fries",
    description:
      "Skin-on fries with chopped chicken fillet, Sriracha mayo, jalapeños & spring onions",
    price: 6.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KT12",
    name: "Bulgogi Beef Loaded Fries",
    description:
      "Skin-on fries · smashed beef patty · cheese · Teriyaki · Miso mayo · spring onions",
    price: 6.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "KT13",
    name: "Umami Miso Loaded Fries",
    description:
      "Skin-on fries with umami miso mayo drizzle, tōgarashi & spring onions",
    price: 4.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT14",
    name: "Korean Fries",
    description:
      "Skin-on fries seasoned with tōgarashi",
    price: 2.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT15",
    name: "Vegetable Gyoza",
    description:
      "Fried vegetable gyozas with choice of dip",
    price: 6.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT16",
    name: "Skin-on Fries",
    description: "Skin-on fries",
    price: 2.99,
    category: "Koreatown",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Dips
  // ---------------------------------------------
  {
    id: "KT17",
    name: "Sriracha Mayo Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Koreatown",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT18",
    name: "Umami Miso Mayo Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Koreatown",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT19",
    name: "Bulgogi Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Koreatown",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT20",
    name: "Korean BBQ Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Koreatown",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT21",
    name: "Honey Garlic Soy Dip",
    description: "Served in a sauce pot",
    price: 0.99,
    category: "Koreatown",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Drinks
  // ---------------------------------------------
  {
    id: "KT22",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "Koreatown",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT23",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "Koreatown",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT24",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "Koreatown",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT25",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "Koreatown",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "KT26",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "Koreatown",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
   {
    id: "WW1",
    name: "Hot Chick's Honey Buffalo & Ranch",
    description:
      "Award-winning crispy chicken wings with Hot Chick's Buffalo sauce, creamy ranch, sesame seeds, spring onions & Wing Fest flavour dust",
    price: 7.95,
    category: "Winning Wings",
    subcategory: "Winning Wings",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WW2",
    name: "Eat The Bird's Korean BBQ",
    description:
      "Crispy wings in Eat The Bird's Korean BBQ sauce, creamy ranch, sesame seeds, spring onions & Wing Fest flavour dust",
    price: 7.95,
    category: "Winning Wings",
    subcategory: "Winning Wings",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW3",
    name: "Wing Fest's Maple Sriracha",
    description:
      "Crispy wings in Wing Fest's maple Sriracha sauce, creamy ranch, sesame seeds, spring onions & Wing Fest flavour dust",
    price: 7.95,
    category: "Winning Wings",
    subcategory: "Winning Wings",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WW4",
    name: "Smokeshed's BBQ",
    description:
      "Award-winning Smokeshed BBQ crispy wings, creamy ranch, sesame seeds, spring onions & Wing Fest flavour dust",
    price: 7.95,
    category: "Winning Wings",
    subcategory: "Winning Wings",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Chicken Buns
  // ---------------------------------------------
  {
    id: "WW5",
    name: "The Wing Fest Chicken Bun",
    description:
      "Crispy chicken fillet, award-winning sauce of choice, flavour dust, cheese, ranch, pickles & lettuce",
    price: 8.50,
    category: "Winning Wings",
    subcategory: "Chicken Buns",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WW6",
    name: "The Wing Fest Veggie Chick'n Bun (v)",
    description:
      "Veggie chick’n, award-winning sauce, flavour dust, cheese, ranch, pickles & lettuce",
    price: 8.50,
    category: "Winning Wings",
    subcategory: "Chicken Buns",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Chicken Tender
  // ---------------------------------------------
  {
    id: "WW7",
    name: "Hot Chick's Honey Buffalo & Ranch Tenders",
    description:
      "Award-winning tenders in Hot Chick's Buffalo sauce, creamy ranch, sesame seeds, spring onions & flavour dust",
    price: 8.95,
    category: "Winning Wings",
    subcategory: "Chicken Tender",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WW8",
    name: "Wing Fest's Maple Sriracha Tenders",
    description:
      "Succulent tenders in Wing Fest's maple Sriracha sauce topped with sesame seeds & spring onions",
    price: 8.95,
    category: "Winning Wings",
    subcategory: "Chicken Tender",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW9",
    name: "Eat The Bird's Korean BBQ Tenders",
    description:
      "Award-winning tenders in Korean BBQ sauce topped with sesame seeds & spring onions",
    price: 8.95,
    category: "Winning Wings",
    subcategory: "Chicken Tender",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW10",
    name: "Smokeshed's BBQ Tenders",
    description:
      "Award-winning tenders in Smokeshed's sweet BBQ sauce, ranch drizzle & flavour dust",
    price: 8.95,
    category: "Winning Wings",
    subcategory: "Chicken Tender",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },

  // ---------------------------------------------
  // Chicken Bites
  // ---------------------------------------------
  {
    id: "WW11",
    name: "Hot Chick's Honey Buffalo & Ranch Bites",
    description:
      "Chicken bites coated in Hot Chick's Buffalo sauce, ranch drizzle, sesame seeds & spring onions",
    price: 6.95,
    category: "Winning Wings",
    subcategory: "Chicken Bites",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WW12",
    name: "Eat The Bird's Korean BBQ Bites",
    description:
      "Chicken bites coated in Korean BBQ sauce, creamy ranch, sesame seeds & spring onions",
    price: 6.95,
    category: "Winning Wings",
    subcategory: "Chicken Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW13",
    name: "Wing Fest's Maple Sriracha Bites",
    description:
      "Chicken bites coated in maple Sriracha sauce, ranch drizzle, sesame seeds & spring onions",
    price: 6.95,
    category: "Winning Wings",
    subcategory: "Chicken Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW14",
    name: "Smokeshed's BBQ Bites",
    description:
      "Award-winning BBQ bites with creamy ranch drizzle, sesame seeds & spring onions",
    price: 6.95,
    category: "Winning Wings",
    subcategory: "Chicken Bites",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Blank Subcategory (You requested to keep this)
  // ---------------------------------------------
  {
    id: "WW15",
    name: "Signature Fries (Award-Winning Sauce)",
    description:
      "Classic fries topped with award-winning sauce, ranch, crispy onions & spring onions",
    price: 4.95,
    category: "Winning Wings",
    subcategory: "",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Sides
  // ---------------------------------------------
  {
    id: "WW16",
    name: "Skin-on Fries",
    description: "Crispy skin-on fries",
    price: 2.95,
    category: "Winning Wings",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW17",
    name: "Signature Fries",
    description:
      "Fries drizzled in award-winning sauce, house ranch, crispy onions & spring onions",
    price: 4.95,
    category: "Winning Wings",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Sauces
  // ---------------------------------------------
  {
    id: "WW18",
    name: "House Ranch",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW19",
    name: "Creamy Ranch",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW20",
    name: "Hot Chick's Honey Buffalo",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW21",
    name: "Smokeshed's BBQ",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW22",
    name: "Wing Fest's Maple Sriracha",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW23",
    name: "Eat The Bird's Korean",
    description: "Served in a pot",
    price: 1.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW24",
    name: "The Award-Winning Sauce Stack",
    description:
      "Selection of 3 award-winning sauces: Smokeshed's BBQ, Korean BBQ & Honey Buffalo",
    price: 4.50,
    category: "Winning Wings",
    subcategory: "Sauces",
    image: "IMAGE_URL_HERE"
  },

  // ---------------------------------------------
  // Drinks
  // ---------------------------------------------
  {
    id: "WW25",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "Winning Wings",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW26",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "Winning Wings",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW27",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "Winning Wings",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW28",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "Winning Wings",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WW29",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "Winning Wings",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },{
    id: "WON1",
    name: "Meal Deal for 2",
    description:
      "Choose any 2 burgers – MOCK® Chicken Fillet or Beyond Meat® – served with 4 MOCK® vegan tenders and 6 MOCK® crispy vegan bites each, 2 sides of your choice, and 2 drinks. 100% plant-based goodness for two.",
    price: 40.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON2",
    name: "Burger & Bites Combo Meal",
    description:
      "Choose a MOCK® Chicken Fillet Burger or Beyond Meat® Burger + 6 vegan bites or 4 vegan tenders, a side and a drink.",
    price: 18.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON3",
    name: "Bite Sized Bundle",
    description:
      "6 vegan bites or 4 vegan tenders + a side & a drink. Fully plant-based.",
    price: 18.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON4",
    name: "Classsic Burger Meal Deal",
    description:
      "MOCK® Chicken Fillet or Beyond Meat® patties + favourite side + drink.",
    price: 15.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON5",
    name: "Ultimate Wing and Burger Combo",
    description:
      "MOCK® Chicken Fillet or Beyond Meat® Burger + 6 vegan bites or 3 vegan drumsticks + side + drink.",
    price: 28.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON6",
    name: "Family Style Feast (Feeds 3 - 4)",
    description:
      "3 burgers + 6 vegan bites + 4 vegan tenders + 3 sides + 3 drinks.",
    price: 54.99,
    category: "Wings Of Nature",
    subcategory: "Meal Deals",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Tenders
  // -----------------------------------------------------
  {
    id: "WON7",
    name: "Honey Garlic Soy - Tenders",
    description:
      "MOCK® vegan tenders tossed in tangy garlic soy, topped with sesame seeds, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON8",
    name: "Plain (Sauce on the Side) - Tenders",
    description: "Crispy vegan tenders served plain with sauce on the side.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON9",
    name: "Maple Sriracha - Tenders",
    description:
      "Vegan tenders coated in maple Sriracha, topped with crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON10",
    name: "Chipotle BBQ - Tenders",
    description:
      "Vegan tenders coated in Chipotle BBQ, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON11",
    name: "Hot Honey Buffalo - Tenders",
    description:
      "Hot Honey Buffalo vegan tenders topped with crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON12",
    name: "Hot Sweet Chilli - Tenders",
    description:
      "Hot Sweet Chilli tenders topped with sesame seeds, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON13",
    name: "Korean BBQ - Tenders",
    description:
      "Sticky Korean BBQ tenders topped with crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON14",
    name: "Creamy Ranch - Tenders",
    description:
      "Vegan tenders drizzled with creamy ranch, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Tenders",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Bites
  // -----------------------------------------------------
  {
    id: "WON15",
    name: "Plain (Sauce on the Side) - Bites",
    description:
      "Crispy vegan bites served plain with dip of your choice.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON16",
    name: "Honey Garlic Soy - Bites",
    description:
      "Vegan bites tossed in garlic soy, sesame seeds, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON17",
    name: "Creamy Ranch - Bites",
    description:
      "Vegan bites drizzled with creamy ranch & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON18",
    name: "Hot Honey Buffalo - Bites",
    description:
      "Vegan bites coated in Hot Honey Buffalo, crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON19",
    name: "Korean BBQ - Bites",
    description:
      "Vegan bites coated in sticky Korean BBQ sauce.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON20",
    name: "Maple Sriracha - Bites",
    description:
      "Vegan bites coated in maple Sriracha with crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON21",
    name: "Chipotle BBQ - Bites",
    description:
      "Crispy vegan bites coated in Chipotle BBQ with crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON22",
    name: "Hot Sweet Chilli - Bites",
    description:
      "Hot Sweet Chilli vegan bites topped with sesame seeds & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "Bites",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Drumsticks
  // -----------------------------------------------------
  {
    id: "WON23",
    name: "Maple Sriracha - Drumsticks",
    description:
      "3 vegan drumsticks coated in maple Sriracha with crispy onions & pickles.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON24",
    name: "Honey Garlic Soy - Drumsticks",
    description:
      "Drumsticks tossed in garlic soy with sesame seeds & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON25",
    name: "Chipotle BBQ - Drumsticks",
    description:
      "Drumsticks coated in Chipotle BBQ with crispy onions & spring onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON26",
    name: "Creamy Ranch - Drumsticks",
    description:
      "Drumsticks drizzled with creamy ranch & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON27",
    name: "Hot Sweet chilli - Drumbsticks",
    description:
      "Drumsticks in Hot Sweet Chilli, topped with sesame seeds & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON28",
    name: "Hot Honey Buffalo - Drumsticks",
    description:
      "Drumsticks coated in Hot Honey Buffalo & crispy onions.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON29",
    name: "Korean BBQ - Drumsticks",
    description:
      "Drumsticks coated in sticky Korean BBQ sauce.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON30",
    name: "Plain (Sauce on the Side) - Drumsticks",
    description:
      "Plain vegan drumsticks with sauce on the side.",
    price: 9.99,
    category: "Wings Of Nature",
    subcategory: "DrumSticks",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Vegan Chicken Buns
  // -----------------------------------------------------
  {
    id: "WON31",
    name: "Chipotle BBQ Burger",
    description:
      "Vegan chicken fillet, Chipotle BBQ sauce, vegan cheese, crispy onions, pickles & lettuce.",
    price: 10.99,
    category: "Wings Of Nature",
    subcategory: "Vegan Chicken Buns",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON32",
    name: "Korean BBQ Burger",
    description:
      "Vegan chicken fillet with Korean BBQ sauce, cheese, sesame seeds, lettuce & ranch.",
    price: 10.99,
    category: "Wings Of Nature",
    subcategory: "Vegan Chicken Buns",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON33",
    name: "Hot Sweet Chilli - burger",
    description:
      "Vegan burger with Hot Sweet Chilli, pickled onions, sesame seeds & crispy onions.",
    price: 10.99,
    category: "Wings Of Nature",
    subcategory: "Vegan Chicken Buns",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON34",
    name: "Creamy Ranch Burger",
    description:
      "Vegan fillet drizzled with creamy ranch, crispy onions, pickles & lettuce.",
    price: 10.99,
    category: "Wings Of Nature",
    subcategory: "Vegan Chicken Buns",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Sides
  // -----------------------------------------------------
  {
    id: "WON35",
    name: "Golden Crunch Fries",
    description: "Crunchy vegan fries.",
    price: 3.60,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON36",
    name: "Buffalo Wing Waltz",
    description:
      "Cauliflower florets coated in Frank’s chilli sauce with vegan garlic aioli.",
    price: 8.90,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON37",
    name: "Chipotle BBQ Loaded Fries",
    description:
      "Curly fries with Chipotle BBQ, pickled onions, crispy onions & spring onions.",
    price: 5.90,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON38",
    name: "Korean Gochujang Loaded Fries",
    description:
      "Curly fries with Gochujang sauce, pickled onions, crispy onions & spring onions.",
    price: 5.90,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON39",
    name: "Onion Rings",
    description: "Crispy fried onion rings.",
    price: 4.50,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON40",
    name: "Ranch-Loaded Fries",
    description:
      "Curly fries drizzled with ranch & topped with pickled onions & crispy onions.",
    price: 5.90,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON41",
    name: "Sunset Sweet Potato Fries",
    description: "Vegan sweet potato fries.",
    price: 4.50,
    category: "Wings Of Nature",
    subcategory: "Sides",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Drinks
  // -----------------------------------------------------
  {
    id: "WON42",
    name: "Coke",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON43",
    name: "Coke Zero",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON44",
    name: "Old Jamaica Ginger Beer",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON45",
    name: "Sparkling Water",
    description: "",
    price: 2.00,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON46",
    name: "Diet Coke",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON47",
    name: "Sprite",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON48",
    name: "Fanta Orange",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON49",
    name: "Green's Cola",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON50",
    name: "Green's Sour Cherry",
    description: "",
    price: 3.50,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON51",
    name: "Still Water",
    description: "",
    price: 3.00,
    category: "Wings Of Nature",
    subcategory: "Drinks",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Dips
  // -----------------------------------------------------
  {
    id: "WON52",
    name: "Ranch Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON53",
    name: "Truffle Mustard Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON54",
    name: "Honey Buffalo Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON55",
    name: "Mayo Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON56",
    name: "Chipotle BBQ Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON57",
    name: "Ketchup Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON58",
    name: "BBQ Sauce Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON59",
    name: "Korean BBQ Dip",
    description: "",
    price: 0.90,
    category: "Wings Of Nature",
    subcategory: "Dips",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Alcohol
  // -----------------------------------------------------
  {
    id: "WON60",
    name: "Asahi",
    description: "",
    price: 6.00,
    category: "Wings Of Nature",
    subcategory: "Alcohol",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON61",
    name: "Asahi Super Dry 0.0%",
    description: "",
    price: 6.00,
    category: "Wings Of Nature",
    subcategory: "Alcohol",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Milkshakes
  // -----------------------------------------------------
  {
    id: "WON62",
    name: "Vegan Biscoff Milkshake",
    description:
      "Nutty, buttery, spiced cookie-flavoured vegan shake.",
    price: 7.99,
    category: "Wings Of Nature",
    subcategory: "Milkshakes",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON63",
    name: "Vegan Vanilla Shake",
    description:
      "Oat milk, vegan ice cream & Madagascar vanilla.",
    price: 7.99,
    category: "Wings Of Nature",
    subcategory: "Milkshakes",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON64",
    name: "Vegan Strawberry Shake",
    description: "Creamy vegan strawberry shake.",
    price: 7.99,
    category: "Wings Of Nature",
    subcategory: "Milkshakes",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON65",
    name: "Vegan Chocolate Shake",
    description: "Belgian chocolate vegan milkshake.",
    price: 7.99,
    category: "Wings Of Nature",
    subcategory: "Milkshakes",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON66",
    name: "Vegan Salted Caramel Milkshake",
    description:
      "Sweet & salty vegan caramel shake.",
    price: 7.99,
    category: "Wings Of Nature",
    subcategory: "Milkshakes",
    image: "IMAGE_URL_HERE"
  },

  // -----------------------------------------------------
  // Desserts
  // -----------------------------------------------------
  {
    id: "WON67",
    name: "Vegan Biscoff Cheesecake",
    description:
      "Biscoff base topped with mousse & biscoff paste.",
    price: 9.49,
    category: "Wings Of Nature",
    subcategory: "Desserts",
    image: "IMAGE_URL_HERE",
    isPopular: true
  },
  {
    id: "WON68",
    name: "Vegan Jaffa Cake",
    description: "",
    price: 9.49,
    category: "Wings Of Nature",
    subcategory: "Desserts",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON69",
    name: "Vegan Apple Pie & Custard",
    description: "",
    price: 9.49,
    category: "Wings Of Nature",
    subcategory: "Desserts",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON70",
    name: "Vegan Chocolate Fudge Cake",
    description: "",
    price: 9.49,
    category: "Wings Of Nature",
    subcategory: "Desserts",
    image: "IMAGE_URL_HERE"
  },
  {
    id: "WON71",
    name: "Vegan Salted Caramel Fudge Cake",
    description: "",
    price: 9.49,
    category: "Wings Of Nature",
    subcategory: "Desserts",
    image: "IMAGE_URL_HERE"
  },
  // items for vagenvibes
 {
    id: "VV-OR-1",
    name: "Drunken Noodles of Nirvana (Pad Kee Mao)",
    description: "Thai-style spicy flat rice noodles with onions, green beans, vegan chicken, green chili, and basil, wok-tossed in Thai-spiced soy-oyster sauce.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/drunken-noodles.jpg"
  },
  {
    id: "VV-OR-2",
    name: "Satay Symphony Skewers",
    description: "Grilled vegan chicken satay skewers infused with rich peanut sauce for a creamy, savoury finish.",
    price: 10.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/satay-skewers.jpg"
  },
  {
    id: "VV-OR-3",
    name: "Salt & Pepper Tofu",
    description: "Crispy tofu bites seasoned with salt, pepper, and chili, served with a dipping sauce.",
    price: 8.85,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/salt-pepper-tofu.jpg"
  },
  {
    id: "VV-OR-4",
    name: "Golden Crispy Chilli Lamb",
    description: "Mock vegan lamb stir-fried with peppers, onions, and house spicy chilli sauce.",
    price: 13.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/chilli-lamb.jpg"
  },
  {
    id: "VV-OR-5",
    name: "Veg Spring Rolls",
    description: "Crispy fried vegetable spring rolls served with sweet chili dip.",
    price: 7.45,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/spring-rolls.jpg"
  },
  {
    id: "VV-OR-6",
    name: "Imperial Lamb Szechuan Noodles",
    description: "Wheat noodles with vegan lamb and vegetables, tossed in spicy Szechuan sauce and served with pickles.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/szechuan-lamb-noodles.jpg"
  },
  {
    id: "VV-OR-7",
    name: "Mixed Greens",
    description: "Stir-fried broccoli, green beans, snow peas, and shiitake mushrooms in soy sauce.",
    price: 7.00,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/mixed-greens.jpg"
  },
  {
    id: "VV-OR-8",
    name: "Crispy Chilli Harmony Vegan Chicken",
    description: "Crispy vegan chicken tossed with onions, peppers, and chef’s spicy chilli sauce.",
    price: 13.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/chilli-chicken.jpg"
  },
  {
    id: "VV-OR-9",
    name: "Eight Jewels of the Orient Fried Rice",
    description: "Premium fried rice with eight ingredients including vegan lamb, vegan chicken, vegan sausage and crunchy nuts.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/eight-jewels-rice.jpg"
  },
  {
    id: "VV-OR-10",
    name: "Pad Thai Paradise",
    description: "Tangy Pad Thai noodles with broccoli, courgettes, beansprouts, and crushed peanuts.",
    price: 13.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/pad-thai.jpg"
  },
  {
    id: "VV-OR-11",
    name: "Szechuan Chicken Rice Elegance",
    description: "Szechuan-style fried rice with vegan chicken and mixed vegetables in a bold spicy sauce.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/szechuan-chicken-rice.jpg"
  },
  {
    id: "VV-OR-12",
    name: "Tofu Massaman Curry",
    description: "Thai massaman curry with tofu, potatoes, bamboo shoots and shallots.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-massaman.jpg"
  },
  {
    id: "VV-OR-13",
    name: "Crispy Hoisin Duck Serenade",
    description: "Wheat noodles with vegan duck, mushrooms, vegetables, tossed in hoisin sauce with oriental pickles.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/hoisin-duck-noodles.jpg"
  },
  {
    id: "VV-OR-14",
    name: "Tofu Pad Thai",
    description: "Soft tofu with stir-fried noodles, bean sprouts, and spring onions.",
    price: 12.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-pad-thai.jpg"
  },
  {
    id: "VV-OR-15",
    name: "Salt & Pepper Chicken",
    description: "Fully vegan crispy chicken pieces tossed with salt, pepper and chilli flakes.",
    price: 9.00,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/salt-pepper-chicken.jpg"
  },
  {
    id: "VV-OR-16",
    name: "Lamb Thai Express Rice",
    description: "Thai-style fried rice with vegan lamb, beans, tomato, and Thai cucumber salad.",
    price: 15.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/lamb-thai-rice.jpg"
  },
  {
    id: "VV-OR-17",
    name: "Soya Bites Massaman Curry",
    description: "Rich Thai massaman curry with soya bites, potatoes, bamboo shoots and shallots.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/soya-massaman.jpg"
  },
  {
    id: "VV-OR-18",
    name: "Coconut Rice",
    description: "Fragrant coconut-infused jasmine rice.",
    price: 5.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/coconut-rice.jpg"
  },
  {
    id: "VV-OR-19",
    name: "Tofu Green Thai Curry",
    description: "Aromatic green curry with tofu, peppers, bamboo shoots, broccoli and beans.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-green-curry.jpg"
  },
  {
    id: "VV-OR-20",
    name: "Sweet & Sour with Protein Choice",
    description: "Sweet & sour vegetables with pineapple, cherry tomatoes and your choice of tofu, vegan chicken, vegan lamb or soya bites.",
    price: 14.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/sweet-sour.jpg"
  },
  {
    id: "VV-OR-21",
    name: "Stir-Fry Plain Flat Rice Noodles",
    description: "Wok-tossed noodles with bean sprouts and garlic soy sauce.",
    price: 7.00,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/plain-rice-noodles.jpg"
  },
  {
    id: "VV-OR-22",
    name: "Tofu Treasure in Green Thai Curry",
    description: "Green curry with tofu, broccoli, carrots, bamboo shoots, peppers and onions.",
    price: 9.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-green-thai-treasure.jpg"
  },
  {
    id: "VV-OR-23",
    name: "Tofu Black Noodles",
    description: "Black soy sauce noodles with tofu, broccoli, beans, onions and peppers.",
    price: 13.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-black-noodles.jpg"
  },
  {
    id: "VV-OR-24",
    name: "Chicken Satay Pot",
    description: "Thai-spiced vegan chicken in peanut sauce with jasmine rice, herbs and lime.",
    price: 13.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/chicken-satay-pot.jpg"
  },
  {
    id: "VV-OR-25",
    name: "Tofu Red Thai Curry",
    description: "Red curry with tofu, squash, peppers, bamboo shoots and aubergine.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-red-curry.jpg"
  },
  {
    id: "VV-OR-26",
    name: "Exotic Soyamari Twists",
    description: "Crispy soya chunks stir-fried with ginger, coriander and vegan oyster sauce.",
    price: 12.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/soyamari.jpg"
  },
  {
    id: "VV-OR-27",
    name: "The Classic Mangswirati Pad Thai",
    description: "Pad Thai with broccoli, courgettes, beansprouts and tamarind, topped with peanuts.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/mangswirati-pad-thai.jpg"
  },
  {
    id: "VV-OR-28",
    name: "Shiitake Mushroom Gyoza",
    description: "Crispy gyoza stuffed with shiitake mushrooms and mixed vegetables.",
    price: 8.80,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/shiitake-gyoza.jpg"
  },
  {
    id: "VV-OR-29",
    name: "Teriyaki Chicken Katsu Donburi",
    description: "Crispy vegan chicken katsu over rice with greens, peppers and kimchi.",
    price: 16.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/teriyaki-katsu.jpg"
  },
  {
    id: "VV-OR-30",
    name: "Crispy Tiger Prawns (Vegan)",
    description: "Plant-based prawns served with banana dipping sauce.",
    price: 8.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/vegan-prawns.jpg"
  },
  {
    id: "VV-OR-31",
    name: "Chicken Thai Green Curry (Vegan)",
    description: "Thai green curry with vegan chicken, peppers, beans, bamboo shoots and broccoli.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/vegan-green-curry.jpg"
  },
  {
    id: "VV-OR-32",
    name: "Chicken Pad Thai (Vegan)",
    description: "Vegan chicken with rice noodles, bean sprouts and spring onions.",
    price: 13.15,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/chicken-pad-thai.jpg"
  },
  {
    id: "VV-OR-33",
    name: "Red Massaman with Protein Choice",
    description: "Thai massaman curry with vegan chicken, lamb, prawns, tofu or soya bites.",
    price: 15.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/red-massaman.jpg"
  },
  {
    id: "VV-OR-34",
    name: "Teriyaki Tofu Donburi",
    description: "Crispy tofu glazed in teriyaki sauce, served over rice with greens and kimchi.",
    price: 16.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/teriyaki-donburi.jpg"
  },
  {
    id: "VV-OR-35",
    name: "Szechuan Lamb Fried Rice",
    description: "Vegan lamb fried rice tossed in bold Szechuan sauce.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/lamb-fried-rice.jpg"
  },
  {
    id: "VV-OR-36",
    name: "Vegan Papaya Salad (Som Tam)",
    description: "Green papaya salad with tomatoes, peanuts, beans and Thai dressing.",
    price: 7.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/papaya-salad.jpg"
  },
  {
    id: "VV-OR-37",
    name: "Jasmine Rice",
    description: "Fragrant steamed jasmine rice.",
    price: 5.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/jasmine-rice.jpg"
  },
  {
    id: "VV-OR-38",
    name: "Plant-Based Hoisin Duck Gyoza",
    description: "Dumplings with hoisin vegan duck filling, crispy on the outside.",
    price: 8.80,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/duck-gyoza.jpg"
  },
  {
    id: "VV-OR-39",
    name: "Soya Bites Green Thai Curry",
    description: "Green curry with soya bites, peppers, beans, bamboo shoots, and broccoli.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/soya-green-curry.jpg"
  },
  {
    id: "VV-OR-40",
    name: "Spicy Vegetable Gyoza",
    description: "Crispy dumplings stuffed with spicy mixed vegetables.",
    price: 8.80,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/spicy-veg-gyoza.jpg"
  },
  {
    id: "VV-OR-41",
    name: "Soya Bites Black Noodles",
    description: "Black soy noodles with vegan chicken bites, broccoli, beans, and peppers.",
    price: 14.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/soya-black-noodles.jpg"
  },
  {
    id: "VV-OR-42",
    name: "Vegetable Hakka Noodles",
    description: "Taiwan-style wok-tossed noodles with mixed vegetables.",
    price: 14.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/hakka-noodles.jpg"
  },
  {
    id: "VV-OR-43",
    name: "Ocean's Cod Fantasy",
    description: "Vegan cod cooked in creamy Bangkok-style coconut red curry.",
    price: 15.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/cod-fantasy.jpg"
  },
  {
    id: "VV-OR-44",
    name: "Lamb Salad of the Thai",
    description: "Vegan lamb salad with peppers, tomatoes, cucumber, herbs and lime dressing.",
    price: 9.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/lamb-salad.jpg"
  },
  {
    id: "VV-OR-45",
    name: "Spicy Black Bean Sauce with Protein Choice",
    description: "Black bean sauce stir-fry with vegetables and your choice of vegan protein.",
    price: 14.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/black-bean-protein.jpg"
  },
  {
    id: "VV-OR-46",
    name: "Bangkok Vegan Cod Fillets",
    description: "Rich coconut Thai red curry with vegan cod fillets and vegetables.",
    price: 13.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/bangkok-cod.jpg"
  },
  {
    id: "VV-OR-47",
    name: "Tofu Teriyaki Stir-Fry",
    description: "Tofu stir-fry with mushrooms, red peppers, beans, broccoli and teriyaki sauce.",
    price: 12.20,
    category: "Vegan Vibes",
    subcategory: "Vegan Oriental Cuisine",
    image: "/ai/vegan-vibes/oriental/tofu-teriyaki.jpg"
  },{
    id: "VV-AM-1",
    name: "Maple Sriracha - Tenders",
    description: "Vegan chicken tenders coated in maple Sriracha sauce, topped with crispy onions and served with pickles.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/maple-sriracha-tenders.jpg"
  },
  {
    id: "VV-AM-2",
    name: "Hot Honey Buffalo - Bites",
    description: "Vegan chicken bites coated in hot honey buffalo sauce, topped with crispy onions and fresh spring onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-honey-bites.jpg"
  },
  {
    id: "VV-AM-3",
    name: "Smoky Bacon Cheeseburger",
    description: "Beyond Meat patty with vegan American cheese, vegan bacon bits, grilled onions, gherkins and burger sauce on a toasted bun.",
    price: 12.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/smoky-bacon-cheeseburger.jpg"
  },
  {
    id: "VV-AM-4",
    name: "Golden Crunch Fries",
    description: "Seasoned crunchy vegan fries.",
    price: 3.60,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/golden-fries.jpg"
  },
  {
    id: "VV-AM-5",
    name: "Chick'n Chikita Burger",
    description: "Vegan chicken fillet burger with vegan mayo, burger sauce, lettuce, vegan cheese and pickles.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chikn-chikita.jpg"
  },
  {
    id: "VV-AM-6",
    name: "Korean Gochujang Loaded Fries",
    description: "Curly fries drizzled with Korean gochujang sauce, topped with crispy onions and spring onions.",
    price: 5.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/gochujang-fries.jpg"
  },
  {
    id: "VV-AM-7",
    name: "Hot Honey Buffalo - Tenders",
    description: "Vegan tenders coated in hot honey buffalo sauce with crispy onions and spring onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-honey-tenders.jpg"
  },
  {
    id: "VV-AM-8",
    name: "BBQ Bliss Texas Style",
    description: "Plant-based beef-style burger with vegan cheddar, tomatoes, lettuce, gherkin and crispy onion rings.",
    price: 11.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/bbq-bliss.jpg"
  },
  {
    id: "VV-AM-9",
    name: "Creamy Ranch Burger",
    description: "Vegan chicken fillet burger topped with creamy ranch, crispy onions, pickles and lettuce.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/creamy-ranch-burger.jpg"
  },
  {
    id: "VV-AM-10",
    name: "Chipotle BBQ Loaded Fries",
    description: "Curly fries with chipotle BBQ sauce, crispy onions and spring onions.",
    price: 5.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chipotle-fries.jpg"
  },
  {
    id: "VV-AM-11",
    name: "Plain (Sauce on the Side) - Bites",
    description: "Crispy vegan chicken bites served plain with a dip of your choice.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/plain-bites.jpg"
  },
  {
    id: "VV-AM-12",
    name: "Hash Harmony",
    description: "Vegan chicken fillet burger with hash brown, vegan ranch, chipotle BBQ, vegan cheese and pickles.",
    price: 11.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hash-harmony.jpg"
  },
  {
    id: "VV-AM-13",
    name: "Hot Honey Buffalo - Drumsticks",
    description: "3 crispy vegan drumsticks coated in hot honey buffalo sauce with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-honey-drumsticks.jpg"
  },
  {
    id: "VV-AM-14",
    name: "Honey Garlic Soy - Tenders",
    description: "Vegan tenders tossed in honey garlic soy dressing with sesame and spring onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/honey-garlic-tenders.jpg"
  },
  {
    id: "VV-AM-15",
    name: "Honey Garlic Soy - Bites",
    description: "Vegan chicken bites tossed in honey garlic soy dressing with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/honey-garlic-bites.jpg"
  },
  {
    id: "VV-AM-16",
    name: "Jackfruit Magic",
    description: "Jackfruit burger patty with lettuce, tomatoes, slaw and house sauce.",
    price: 11.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/jackfruit-magic.jpg"
  },
  {
    id: "VV-AM-17",
    name: "Classic Vegan Dog",
    description: "Vegan hot dog with caramelised onions, mustard, ketchup and vegan mayo.",
    price: 11.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/classic-dog.jpg"
  },
  {
    id: "VV-AM-18",
    name: "Sunset Sweet Potato Fries",
    description: "Crispy vegan sweet potato fries.",
    price: 4.50,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/sweet-potato-fries.jpg"
  },
  {
    id: "VV-AM-19",
    name: "Maple Sriracha - Bites",
    description: "Vegan bites coated in spicy-sweet maple Sriracha sauce topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/maple-bites.jpg"
  },
  {
    id: "VV-AM-20",
    name: "Korean BBQ - Tenders",
    description: "Vegan tenders coated in sticky Korean BBQ sauce with crispy onions and spring onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/korean-bbq-tenders.jpg"
  },
  {
    id: "VV-AM-21",
    name: "Plain (Sauce on the Side) - Tenders",
    description: "Plain vegan chicken tenders with your choice of dip.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/plain-tenders.jpg"
  },
  {
    id: "VV-AM-22",
    name: "Korean BBQ - Drumsticks",
    description: "3 vegan drumsticks coated in Korean BBQ sauce topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/korean-bbq-drumsticks.jpg"
  },
  {
    id: "VV-AM-23",
    name: "Buffalo Wing Waltz",
    description: "Crispy cauliflower wings coated in Frank’s red hot sauce with vegan garlic aioli.",
    price: 8.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/cauliflower-waltz.jpg"
  },
  {
    id: "VV-AM-24",
    name: "Dirty Chilli Vegan Dog",
    description: "Vegan hot dog topped with soya chilli, pickles, garlic mayo, caramelised onions and vegan cheddar.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/dirty-chilli-dog.jpg"
  },
  {
    id: "VV-AM-25",
    name: "Jerry's Jackfruit Wings & Fries",
    description: "Battered jackfruit wings with fries, chilli sauce and vegan garlic aioli.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/jackfruit-wings.jpg"
  },
  {
    id: "VV-AM-26",
    name: "Dirty Loaded Fries",
    description: "Seasoned fries loaded with vegan cheese, spicy pickled onions, crispy onions, sesame seeds and sauce of your choice.",
    price: 4.49,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/dirty-loaded-fries.jpg"
  },
  {
    id: "VV-AM-27",
    name: "Maple Marvel Double Delight",
    description: "Double Beyond Meat patties with vegan American cheese, grilled onions, maple mustard and pickles.",
    price: 13.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/maple-double.jpg"
  },
  {
    id: "VV-AM-28",
    name: "Maple Sriracha - Drumsticks",
    description: "3 vegan drumsticks coated in spicy-sweet maple Sriracha sauce with crispy onions and pickles.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/maple-drumsticks.jpg"
  },
  {
    id: "VV-AM-29",
    name: "Plain (Sauce on the Side) - Drumsticks",
    description: "Plain crispy vegan drumsticks served with choice of dipping sauce.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/plain-drumsticks.jpg"
  },
  {
    id: "VV-AM-30",
    name: "Hot Sweet Chilli - Burger",
    description: "Vegan chicken burger tossed in hot sweet chilli sauce topped with red onions, sesame seeds and crispy onions.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-sweet-chilli-burger.jpg"
  },
  {
    id: "VV-AM-31",
    name: "Ranch-Loaded Fries",
    description: "Cajun-seasoned fries drizzled with ranch and topped with crispy onions and spring onions.",
    price: 5.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/ranch-fries.jpg"
  },
  {
    id: "VV-AM-32",
    name: "Creamy Ranch - Bites",
    description: "Vegan chicken bites topped with creamy ranch and crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/creamy-ranch-bites.jpg"
  },
  {
    id: "VV-AM-33",
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 4.50,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/onion-rings.jpg"
  },
  {
    id: "VV-AM-34",
    name: "Chipotle BBQ - Tenders",
    description: "Vegan tenders tossed in smoky chipotle BBQ sauce topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chipotle-tenders.jpg"
  },
  {
    id: "VV-AM-35",
    name: "Creamy Ranch - Tenders",
    description: "Vegan tenders drizzled with creamy ranch and topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/creamy-ranch-tenders.jpg"
  },
  {
    id: "VV-AM-36",
    name: "Seoulful Chick'n Symphony",
    description: "Vegan chicken burger with Korean gochujang, vegan mayo, lettuce, vegan cheese and pickles.",
    price: 11.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/seoulful-symphony.jpg"
  },
  {
    id: "VV-AM-37",
    name: "Korean BBQ - Bites",
    description: "Vegan bites coated in Korean BBQ sauce with crispy onions and sesame.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/korean-bites.jpg"
  },
  {
    id: "VV-AM-38",
    name: "Hot Sweet Chilli - Bites",
    description: "Vegan chicken bites tossed in hot sweet chilli with sesame and red onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-sweet-bites.jpg"
  },
  {
    id: "VV-AM-39",
    name: "Chipotle BBQ - Drumsticks",
    description: "3 vegan drumsticks tossed in chipotle BBQ sauce topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chipotle-drumsticks.jpg"
  },
  {
    id: "VV-AM-40",
    name: "Chipotle BBQ Burger",
    description: "Vegan chicken burger coated in chipotle BBQ sauce with cheese, pickles and ranch.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chipotle-burger.jpg"
  },
  {
    id: "VV-AM-41",
    name: "Creamy Ranch - Drumsticks",
    description: "Vegan drumsticks drizzled in creamy ranch topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/creamy-ranch-drumsticks.jpg"
  },
  {
    id: "VV-AM-42",
    name: "Very Own Vegan Bean Burger",
    description: "Vegan veggie patty with lettuce, tomatoes, vegan cheddar, ketchup and garlic aioli.",
    price: 11.90,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/bean-burger.jpg"
  },
  {
    id: "VV-AM-43",
    name: "Chipotle BBQ - Bites",
    description: "Vegan bites tossed in chipotle BBQ sauce topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/chipotle-bites.jpg"
  },
  {
    id: "VV-AM-44",
    name: "Honey Garlic Soy - Drumsticks",
    description: "Vegan drumsticks tossed in honey garlic soy dressing topped with sesame and crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/honey-garlic-drumsticks.jpg"
  },
  {
    id: "VV-AM-45",
    name: "Hot Sweet Chilli - Drumsticks",
    description: "3 vegan drumsticks tossed in hot sweet chilli with sesame and crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-sweet-drumsticks.jpg"
  },
  {
    id: "VV-AM-46",
    name: "Hot Sweet Chilli - Tenders",
    description: "Vegan tenders tossed in hot sweet chilli topped with crispy onions.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/hot-sweet-tenders.jpg"
  },
  {
    id: "VV-AM-47",
    name: "Korean BBQ Burger",
    description: "Sticky Korean BBQ vegan chicken burger with vegan cheese, lettuce and creamy ranch.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan American Cuisine",
    image: "/ai/vegan-vibes/american/korean-burger.jpg"
  },{
    id: "VV-CA-1",
    name: "Spice Isle Vegan Goatless Feast",
    description:
      "Vegan goat chunks cooked in Caribbean-spiced sauce with potatoes, steamed green beans, rice & peas, roti, and plantain.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/spice-isle-goatless-feast.jpg",
  },
  {
    id: "VV-CA-2",
    name: "Caribbean Mac Harmony (Mac No Cheese)",
    description:
      "Macaroni baked in creamy homemade vegan cheese sauce. A Caribbean twist on comfort food.",
    price: 9.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/mac-harmony.jpg",
  },
  {
    id: "VV-CA-3",
    name: "Jerk Chick'n Stew",
    description:
      "MOCK Vegan Chicken cooked in jerk sauce served with rice & peas, sautéed mixed greens, lime, and plantain.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/jerk-chickn-stew.jpg",
  },
  {
    id: "VV-CA-4",
    name: "Pumpkin & Chickpea Island Curry",
    description:
      "Pumpkin & chickpea curry cooked with tomatoes, spring onions, rum hint, served with coconut rice & peas and plantain.",
    price: 15.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/pumpkin-chickpea-curry.jpg",
  },
  {
    id: "VV-CA-5",
    name: "Ocean Whisper Jerk Cod (Vegan)",
    description:
      "Oven-baked vegan cod glazed with jerk sauce, served with coconut rice & peas and pickled coleslaw.",
    price: 16.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/ocean-whisper-cod.jpg",
  },
  {
    id: "VV-CA-6",
    name: "Golden Tropics Fried Plantain",
    description: "Crispy fried sweet plantain slices.",
    price: 6.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/fried-plantain.jpg",
  },
  {
    id: "VV-CA-7",
    name: "Plantain Bliss with Savory Bean Sauce",
    description:
      "Fried plantain topped with Caribbean-spiced black bean sauce.",
    price: 7.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/plantain-bliss.jpg",
  },
  {
    id: "VV-CA-8",
    name: "Corn on the Cob",
    description:
      "Jamaican allspice seasoned grilled corn on the cob.",
    price: 3.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/corn-on-cob.jpg",
  },
  {
    id: "VV-CA-9",
    name: "Paratha",
    description: "Soft Caribbean-style paratha.",
    price: 2.0,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/paratha.jpg",
  },
  {
    id: "VV-CA-10",
    name: "Callaloo",
    description: "Traditional Caribbean-style sautéed callaloo greens.",
    price: 5.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/callaloo.jpg",
  },
  {
    id: "VV-CA-11",
    name: "Sun-Kissed Caribbean Potato Salad",
    description:
      "Jerk-seasoned potatoes mixed with greens and lime jerk dressing.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/potato-salad.jpg",
  },
  {
    id: "VV-CA-12",
    name: "Sweet Potato Wedges",
    description: "Crispy baked sweet potato wedges.",
    price: 5.40,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/sweet-potato-wedges.jpg",
  },
  {
    id: "VV-CA-13",
    name: "Vegan Jamaican Patty - Bean",
    description:
      "Jerk-spiced vegan bean patty served with pickled slaw.",
    price: 8.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/patty-bean.jpg",
  },
  {
    id: "VV-CA-14",
    name: "Jamaican Jerk Vegan Sausage with Corn",
    description:
      "Jerk-marinated vegan sausage served with corn on the cob and vegan cheese.",
    price: 12.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/jerk-sausage.jpg",
  },
  {
    id: "VV-CA-15",
    name: "Rice & Beans",
    description: "Classic Caribbean-style rice and beans.",
    price: 4.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/rice-beans.jpg",
  },
  {
    id: "VV-CA-16",
    name: "Vegan Jamaican Patty - Vegetable",
    description:
      "Jerk vegetable patty served with pickled slaw.",
    price: 8.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/patty-veg.jpg",
  },
  {
    id: "VV-CA-17",
    name: "Island Zest Mini Chick'n Salad",
    description:
      "Jerk vegan chicken with mixed greens, roasted sweet potatoes, beans and lime.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/island-zest-salad.jpg",
  },
  {
    id: "VV-CA-18",
    name: "Vegan Jamaican Patty - Callaloo",
    description:
      "Jerk callaloo patty served with pickled slaw.",
    price: 8.90,
    category: "Vegan Vibes",
    subcategory: "Vegan Caribbean Cuisine",
    image: "/ai/vegan-vibes/caribbean/patty-callaloo.jpg",
  },{
    id: "VV-MD-1",
    name: "Meal Deal for 2",
    description:
      "Any 2 burgers with 4 vegan tenders and 6 vegan bites each, 2 sides, and 2 drinks.",
    price: 40.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/meal-deal-2.jpg",
  },
  {
    id: "VV-MD-2",
    name: "Burger & Bites Combo Meal",
    description:
      "Choice of burger with 6 vegan bites or 4 tenders, 1 side, and a drink.",
    price: 18.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/burger-bites.jpg",
  },
  {
    id: "VV-MD-3",
    name: "Meal Deal for 2 (Classic)",
    description:
      "Two burgers, two sides, and two drinks. 100% plant-based.",
    price: 28.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/meal-deal-classic.jpg",
  },
  {
    id: "VV-MD-4",
    name: "Loaded Burger Meal Deal",
    description:
      "Your favourite burger, loaded fries, and a drink.",
    price: 17.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/loaded-burger.jpg",
  },
  {
    id: "VV-MD-5",
    name: "Combo Burger Meal Deal",
    description:
      "Choose any burger, add a side, and enjoy with a drink.",
    price: 15.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/combo-burger.jpg",
  },
  {
    id: "VV-MD-6",
    name: "Ultimate Wing and Burger Combo",
    description:
      "Burger with 6 vegan bites or 3 vegan drumsticks, a side, and a drink.",
    price: 28.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/wing-burger-combo.jpg",
  },
  {
    id: "VV-MD-7",
    name: "BYO Curry Meal Deal",
    description:
      "Build your own meal with curry base, protein choice, and your preferred rice.",
    price: 16.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/byo-curry.jpg",
  },
  {
    id: "VV-MD-8",
    name: "Family Style Feast (3–4)",
    description:
      "3 burgers, 6 bites, 4 tenders, 3 sides, and 3 drinks.",
    price: 54.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/family-feast-big.jpg",
  },
  {
    id: "VV-MD-9",
    name: "Family Style Feast (3)",
    description:
      "3 burgers, 2 fries, and 3 drinks. Perfect for a small group.",
    price: 39.99,
    category: "Vegan Vibes",
    subcategory: "Meal Deals",
    image: "/ai/vegan-vibes/meals/family-feast.jpg",
  },
{
    id: "VV-MX-1",
    name: "Vegan Chicken Quesadillas",
    description:
      "Folded tortilla with vegan chicken, onions, peppers, cheese, served with salsa and lime.",
    price: 8.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/chicken-quesadilla.jpg",
  },
  {
    id: "VV-MX-2",
    name: "Vegan Chicken Fiesta Burrito",
    description:
      "Baked burrito with vegan chicken, rice, refried beans, cheese, salsa, guacamole, and vegan sour cream.",
    price: 13.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/fiesta-burrito.jpg",
  },
  {
    id: "VV-MX-3",
    name: "Vegan Pulled Lamb Burrito",
    description:
      "Mexican-spiced vegan lamb burrito topped with salsa, guacamole, and vegan sour cream.",
    price: 13.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/lamb-burrito.jpg",
  },
  {
    id: "VV-MX-4",
    name: "Loaded Vegan Lamb Chilli Fries",
    description:
      "Crispy fries loaded with vegan lamb chilli, cheese, tomatoes, onions, coriander and jalapeños.",
    price: 8.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/chilli-fries.jpg",
  },
  {
    id: "VV-MX-5",
    name: "Hard Taco Shell - Vegan Chick'n Tinga",
    description:
      "Crispy taco shell with vegan chick'n, lettuce, salsa, cheese, pico de gallo, sour cream and rice.",
    price: 11.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/chickn-tinga.jpg",
  },
  {
    id: "VV-MX-6",
    name: "Vegan Lamb Chilli Corn Nachos",
    description:
      "Nachos topped with cheese, jalapeños, chilli, tomatoes, onions and coriander.",
    price: 9.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/lamb-nachos.jpg",
  },
  {
    id: "VV-MX-7",
    name: "Fries",
    description: "Crispy skin-on seasoned fries.",
    price: 3.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/fries.jpg",
  },
  {
    id: "VV-MX-8",
    name: "Hard Taco Shell - Vegan Pulled Lamb",
    description:
      "Taco shell filled with vegan lamb, lettuce, salsa, cheese, pico de gallo, sour cream and rice.",
    price: 11.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/lamb-taco.jpg",
  },
  {
    id: "VV-MX-9",
    name: "The Vegan Mexican Burger",
    description:
      "Beyond Meat patty with vegan cheese, lettuce, tomatoes, jalapeños and chipotle mayo.",
    price: 11.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/mexican-burger.jpg",
  },
  {
    id: "VV-MX-10",
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 4.50,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/onion-rings.jpg",
  },
  {
    id: "VV-MX-11",
    name: "Hard Taco Shell - Vegan Herby Roasted Veg",
    description:
      "Taco shell filled with roasted vegetables, lettuce, salsa, cheese, pico de gallo, sour cream and rice.",
    price: 10.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/veg-taco.jpg",
  },
  {
    id: "VV-MX-12",
    name: "Guacamole",
    description: "Fresh creamy mashed avocado dip.",
    price: 1.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/guacamole.jpg",
  },
  {
    id: "VV-MX-13",
    name: "Vegan Quesadillas Verde",
    description:
      "Toasted tortilla filled with seasoned veggies and vegan cheese, served with tomato salsa.",
    price: 8.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/quesadilla-verde.jpg",
  },
  {
    id: "VV-MX-14",
    name: "Plain Fries",
    description: "Classic salted fries.",
    price: 3.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/plain-fries.jpg",
  },
  {
    id: "VV-MX-15",
    name: "Sour Cream - Vegan",
    description: "Creamy vegan sour cream.",
    price: 1.99,
    category: "Vegan Vibes",
    subcategory: "Vegan Mexican Cuisine",
    image: "/ai/vegan-vibes/mexican/vegan-sourcream.jpg",
  },{
    id: "VV-IN-1",
    name: "THIS Isn't Chicken Biryani",
    description:
      "Aromatic biryani made with fragrant rice, spices, rose water and THIS Isn't Chicken.",
    price: 13.45,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/this-isnt-chicken-biryani.jpg",
  },
  {
    id: "VV-IN-2",
    name: "Chole & Rice",
    description:
      "Punjabi-spiced chickpea curry served with steamed rice.",
    price: 8.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/chole-rice.jpg",
  },
  {
    id: "VV-IN-3",
    name: "Punjabi Chole",
    description:
      "Hearty chickpea curry with warming ginger and cumin.",
    price: 7.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/punjabi-chole.jpg",
  },
  {
    id: "VV-IN-4",
    name: "Punjabi Samosas",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with tamarind and mint chutney.",
    price: 6.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/punjabi-samosa.jpg",
  },
  {
    id: "VV-IN-5",
    name: "Batata Wada",
    description:
      "Potato dumplings spiced with mustard and cumin in chickpea batter.",
    price: 6.45,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/batata-wada.jpg",
  },
  {
    id: "VV-IN-6",
    name: "Samosa Pav",
    description:
      "Deep fried samosa served in a vegan bun with mint & tamarind chutney.",
    price: 5.75,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/samosa-pav.jpg",
  },
  {
    id: "VV-IN-7",
    name: "Wada Chole Chaat",
    description:
      "Deep fried vada topped with chole, coconut yogurt dressing, sev and Indian spices.",
    price: 8.65,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/wada-chole-chaat.jpg",
  },
  {
    id: "VV-IN-8",
    name: "Plain Naan",
    description: "Soft vegan naan bread.",
    price: 2.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/plain-naan.jpg",
  },
  {
    id: "VV-IN-9",
    name: "Samosa Chole Chaat",
    description:
      "Crispy samosa topped with chole, coconut yogurt and Indian spices.",
    price: 8.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/samosa-chole-chaat.jpg",
  },
  {
    id: "VV-IN-10",
    name: "Basmati Rice",
    description: "Steamed aromatic basmati rice.",
    price: 3.45,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/basmati-rice.jpg",
  },
  {
    id: "VV-IN-11",
    name: "Vegetable Biryani",
    description:
      "Slow-cooked biryani with cauliflower, green beans, peas and aromatic spices.",
    price: 11.95,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/vegetable-biryani.jpg",
  },
  {
    id: "VV-IN-12",
    name: "Wada Pav",
    description:
      "Deep fried batata vada in a vegan bun with mint & tamarind chutney.",
    price: 5.45,
    category: "Vegan Vibes",
    subcategory: "Vegan Indian Cuisine",
    image: "/ai/vegan-vibes/indian/wada-pav.jpg",
  },


// -------------------------------
// VEGAN DESSERTS
// -------------------------------

  {
    id: "VV-DE-1",
    name: "Vegan Biscoff Cheesecake",
    description:
      "Biscoff base topped with baked mousse and a biscoff paste layer.",
    price: 9.49,
    category: "Vegan Vibes",
    subcategory: "Vegan Desserts",
    image: "/ai/vegan-vibes/desserts/biscoff-cheesecake.jpg",
  },
  {
    id: "VV-DE-2",
    name: "Vegan Salted Caramel Fudge Cake",
    description: "Rich vegan fudge cake with salted caramel.",
    price: 9.49,
    category: "Vegan Vibes",
    subcategory: "Vegan Desserts",
    image: "/ai/vegan-vibes/desserts/salted-caramel-fudge.jpg",
  },
  {
    id: "VV-DE-3",
    name: "Vegan Apple Pie & Custard",
    description: "Warm vegan apple pie served with custard.",
    price: 9.49,
    category: "Vegan Vibes",
    subcategory: "Vegan Desserts",
    image: "/ai/vegan-vibes/desserts/apple-pie.jpg",
  },
  {
    id: "VV-DE-4",
    name: "Vegan Chocolate Fudge Cake",
    description: "Decadent vegan chocolate fudge cake.",
    price: 9.49,
    category: "Vegan Vibes",
    subcategory: "Vegan Desserts",
    image: "/ai/vegan-vibes/desserts/chocolate-fudge.jpg",
  },
  {
    id: "VV-DE-5",
    name: "Vegan Jaffa Cake",
    description: "Vegan twist on the classic Jaffa cake.",
    price: 9.49,
    category: "Vegan Vibes",
    subcategory: "Vegan Desserts",
    image: "/ai/vegan-vibes/desserts/jaffa-cake.jpg",
  },


// -------------------------------
// VEGAN MILKSHAKES
// -------------------------------

  {
    id: "VV-MS-1",
    name: "Vegan Chocolate Shake",
    description: "Belgian chocolate vegan milkshake.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan MilkShakes",
    image: "/ai/vegan-vibes/milkshakes/chocolate-shake.jpg",
  },
  {
    id: "VV-MS-2",
    name: "Vegan Biscoff Milkshake",
    description: "Creamy biscoff-flavoured vegan shake.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan MilkShakes",
    image: "/ai/vegan-vibes/milkshakes/biscoff-shake.jpg",
  },
  {
    id: "VV-MS-3",
    name: "Vegan Strawberry Shake",
    description: "Fresh strawberry vegan milkshake.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan MilkShakes",
    image: "/ai/vegan-vibes/milkshakes/strawberry-shake.jpg",
  },
  {
    id: "VV-MS-4",
    name: "Vegan Vanilla Shake",
    description: "Classic vanilla shake with oat milk and vegan ice cream.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan MilkShakes",
    image: "/ai/vegan-vibes/milkshakes/vanilla-shake.jpg",
  },
  {
    id: "VV-MS-5",
    name: "Vegan Salted Caramel Milkshake",
    description: "Smooth sweet-and-salted caramel vegan shake.",
    price: 7.99,
    category: "Vegan Vibes",
    subcategory: "Vegan MilkShakes",
    image: "/ai/vegan-vibes/milkshakes/salted-caramel.jpg",
  },
  { id: "VV-DR-1", name: "Green's Sour Cherry", description: "Refreshing cherry soda.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/sour-cherry.jpg" },
  { id: "VV-DR-2", name: "Coke", description: "Classic Coca-Cola.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/coke.jpg" },
  { id: "VV-DR-3", name: "Coke Zero", description: "Zero sugar Coca-Cola.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/coke-zero.jpg" },
  { id: "VV-DR-4", name: "Green's Cola", description: "Plant-based natural cola.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/greens-cola.jpg" },
  { id: "VV-DR-5", name: "Sprite", description: "Lemon-lime soda.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/sprite.jpg" },
  { id: "VV-DR-6", name: "Old Jamaica Ginger Beer", description: "Strong ginger beer.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/ginger-beer.jpg" },
  { id: "VV-DR-7", name: "Karma Ginger Beer", description: "Premium ginger beer.", price: 4.00, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/karma-ginger.jpg" },
  { id: "VV-DR-8", name: "Fanta Orange", description: "Orange fizzy drink.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/fanta.jpg" },
  { id: "VV-DR-9", name: "Diet Coke", description: "Low calorie cola.", price: 3.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/diet-coke.jpg" },
  { id: "VV-DR-10", name: "Sparkling Water", description: "Carbonated water.", price: 2.00, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/sparkling-water.jpg" },
  { id: "VV-DR-11", name: "Karma Lemony Lemonade", description: "Fresh lemon soda.", price: 4.00, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/lemony.jpg" },
  { id: "VV-DR-12", name: "Redbull", description: "Energy drink.", price: 4.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/redbull.jpg" },
  { id: "VV-DR-13", name: "Still Water", description: "Pure still water.", price: 2.00, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/still-water.jpg" },
  { id: "VV-DR-14", name: "Karma Cola Can", description: "Natural cola drink.", price: 2.50, category: "Vegan Vibes", subcategory: "Drinks", image: "/ai/vegan-vibes/drinks/karma-cola.jpg" },
  {
    id: "VV-AL-1",
    name: "Asahi",
    description: "Classic Japanese beer.",
    price: 6.00,
    category: "Vegan Vibes",
    subcategory: "Alcohol",
    image: "/ai/vegan-vibes/alcohol/asahi.jpg",
  },
  {
    id: "VV-AL-2",
    name: "Asahi Super Dry 0.0%",
    description: "Non-alcoholic beer.",
    price: 6.00,
    category: "Vegan Vibes",
    subcategory: "Alcohol",
    image: "/ai/vegan-vibes/alcohol/asahi-zero.jpg",
  },
  {
    "id": "BG1",
    "name": "BYO Curry Meal Deal",
    "description": "Build your own curry meal deal! Choose from a Thai Red Curry or Massaman Curry base, select your protein: chicken, prawns, tofu, seafood, mussels, soya bites, MOCK® Vegan Chicken, or vegan prawns. Served with your choice of jasmine rice, coconut rice, or egg fried rice (with or without chilli). A fully customizable, flavour-packed meal.",
    "price": 16.99,
    "category": "Bamboo Garden",
    "subcategory": "Meal Deals",
    "image": "/ai/bamboo-garden/byo-curry-meal-deal.jpg"
  },

  {
    "id": "BG2",
    "name": "Satay Symphony Skewers (Vegan)",
    "description": "Grilled MOCK® Vegan Chicken Satay Skewers infused with a rich and aromatic peanut sauce, a plant-based favourite. A perfect balance of savoury and creamy flavours.",
    "price": 10.9,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/satay-symphony-skewers-vegan.jpg",
    "isPopular": true
  },
  {
    "id": "BG3",
    "name": "Salt & Pepper Tofu",
    "description": "Crispy tofu bites with a touch of salt, pepper, and a hint of chili, served with a dipping sauce.",
    "price": 8.85,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/salt-pepper-tofu.jpg"
  },
  {
    "id": "BG4",
    "name": "Veg Spring Rolls",
    "description": "Crispy rolls packed with fresh mixed vegetables, served alongside a sweet chili dip.",
    "price": 7.45,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/veg-spring-rolls.jpg",
    "isPopular": true
  },
  {
    "id": "BG5",
    "name": "Papaya Salad",
    "description": "A vibrant papaya salad mixed with zesty lime juice, crunchy peanuts, and a hint of chili for a sweet and spicy experience.",
    "price": 8.9,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/papaya-salad.jpg"
  },
  {
    "id": "BG6",
    "name": "Salt & Pepper Chicken",
    "description": "Juicy chicken pieces tossed in a blend of salt, pepper, and chilli flakes for a bold, flavourful kick.",
    "price": 9.0,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/salt-pepper-chicken.jpg"
  },
  {
    "id": "BG7",
    "name": "Aromatic Duck Harmony Rolls",
    "description": "Traditional duck spring roll wrapped in lettuce, coriander, and mint, served with spicy hoisin-lime dip.",
    "price": 9.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/aromatic-duck-harmony-rolls.jpg"
  },
  {
    "id": "BG8",
    "name": "Fried Vegan Gyoza (Vegan)",
    "description": "Fried vegan dumplings brimming with hearty vegetable fillings, paired with a tangy dipping sauce.",
    "price": 8.88,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/fried-vegan-gyoza.jpg"
  },
  {
    "id": "BG9",
    "name": "Duck Spring Rolls - Vegan",
    "description": "Golden, crispy rolls stuffed with tender duck, accompanied by a hoisin dipping sauce.",
    "price": 8.45,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/duck-spring-rolls-vegan.jpg"
  },
  {
    "id": "BG10",
    "name": "Prawn Cracker Basket",
    "description": "A basket of crispy prawn crackers served with a sweet chili dipping sauce.",
    "price": 3.95,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/prawn-cracker-basket.jpg"
  },
  {
    "id": "BG11",
    "name": "Crunchy Asian Slaw",
    "description": "A refreshing slaw tossed with a creamy mayo dressing, complemented by a hint of vinegar and mixed herbs.",
    "price": 4.95,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/crunchy-asian-slaw.jpg"
  },
  {
    "id": "BG12",
    "name": "Exotic Soyamari Twists (Vegan)",
    "description": "Wok-tossed crispy soya chunks battered and stir-fried with ginger, coriander, vegan oyster sauce, and green peppercorns.",
    "price": 12.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/exotic-soyamari-twists.jpg"
  },
  {
    "id": "BG13",
    "name": "Chilli Garlic Chicken",
    "description": "Chicken sautéed with green chili, garlic, onion, mixed peppers, and our chef's signature spiced sauce.",
    "price": 11.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/chilli-garlic-chicken.jpg"
  },
  {
    "id": "BG14",
    "name": "Chilli Garlic Prawn",
    "description": "King prawns sautéed with green chili, garlic, onion, mixed peppers, and our chef's signature spiced sauce.",
    "price": 11.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/chilli-garlic-prawn.jpg"
  },
  {
    "id": "BG15",
    "name": "Ebi Katsu",
    "description": "Crispy panko coated prawns served with chilli mayo and lime.",
    "price": 11.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/ebi-katsu.jpg"
  },
  {
    "id": "BG16",
    "name": "Mini Prawn Platter",
    "description": "A selection of prawn skewers, paired with a sweet and tangy dipping sauce.",
    "price": 8.45,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/mini-prawn-platter.jpg"
  },
  {
    "id": "BG17",
    "name": "Edamame Beans",
    "description": "Tender edamame beans, gently salted for a light and refreshing bite to start your meal.",
    "price": 4.6,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/edamame-beans.jpg"
  },
  {
    "id": "BG18",
    "name": "Tamarind Calamari Bites",
    "description": "Crispy calamari rings with a burst of flavor, served with a tangy tamarind dipping sauce.",
    "price": 8.15,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/tamarind-calamari-bites.jpg"
  },
  {
    "id": "BG19",
    "name": "Golden Crispy Chilli Lamb (Vegan)",
    "description": "Spiced MOCK® Vegan Lamb stir-fry tossed with green chili, onions, mixed peppers, and our chef's special signature spiced sauce.",
    "price": 13.9,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/golden-crispy-chilli-lamb-vegan.jpg"
  },
  {
    "id": "BG20",
    "name": "Golden Crispy Chicken Gyoza Bites",
    "description": "Crispy fried chicken gyoza served with Korean BBQ sauce.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Oriental Starters",
    "image": "/ai/bamboo-garden/golden-crispy-chicken-gyoza-bites.jpg"
  },

  {
    "id": "BG21",
    "name": "Chicken Massaman Curry",
    "description": "A flavourful curry made with white onion, potatoes, bamboo shoots, and shallots, complemented by juicy chicken pieces or MOCK® Vegan Chicken.",
    "price": 10.49,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-massaman-curry.jpg"
  },
  {
    "id": "BG22",
    "name": "Tofu Massaman Curry",
    "description": "A fragrant curry featuring white onion, potatoes, bamboo shoots, and shallots, accompanied by tender tofu bites.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-massaman-curry.jpg"
  },
  {
    "id": "BG23",
    "name": "Chicken Thai Green Curry",
    "description": "Green curry with red onion, red peppers, beans, bamboo shoots, and broccoli, served with juicy chicken pieces.",
    "price": 11.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-thai-green-curry.jpg",
    "isPopular": true
  },
  {
    "id": "BG24",
    "name": "Nasi Goreng",
    "description": "Indonesian-style egg fried rice with a mix of nuts, herbs, and fried shallots.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/nasi-goreng.jpg"
  },
  {
    "id": "BG25",
    "name": "Spiced Chicken Nasi Goreng",
    "description": "Fragrant Indonesian-style fried rice with tender chicken, aromatic spices and a touch of chili.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/spiced-chicken-nasi-goreng.jpg",
    "isPopular": true
  },
  {
    "id": "BG26",
    "name": "Tofu Red Thai Curry",
    "description": "Red curry with red onion, red peppers, squash, bamboo shoots, and aubergine, served with soft tofu.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-red-thai-curry.jpg"
  },
  {
    "id": "BG27",
    "name": "Chicken Teriyaki Stir-Fry",
    "description": "Chicken stir-fried with mushrooms, green beans, red peppers, broccoli, and spring onions in teriyaki sauce, topped with sesame seeds.",
    "price": 11.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-teriyaki-stir-fry.jpg"
  },
  {
    "id": "BG28",
    "name": "Soya Bites Black Noodles",
    "description": "Black soy noodles stir-fried with broccoli, green beans, red onion, and red pepper, served with MOCK® Vegan Chicken Bites and white pepper.",
    "price": 14.95,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/soya-bites-black-noodles.jpg"
  },
  {
    "id": "BG29",
    "name": "Chicken Katsu",
    "description": "Crispy katsu chicken fillet (or MOCK® Vegan Chicken) served on rice with sesame seeds and edamame.",
    "price": 13.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-katsu.jpg"
  },
  {
    "id": "BG30",
    "name": "Seafood Thai Red Curry",
    "description": "Red curry with red onion, red peppers, squash, bamboo shoots, and aubergine, with fish, mussels and prawns.",
    "price": 12.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/seafood-thai-red-curry.jpg"
  },
  {
    "id": "BG31",
    "name": "Spicy Szechuan Chicken Fried Rice",
    "description": "Wok-fried jasmine rice with chicken, vegetables and egg, tossed in spicy Szechuan sauce.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/spicy-szechuan-chicken-fried-rice.jpg"
  },
  {
    "id": "BG32",
    "name": "Chicken Ramen",
    "description": "Ramen with noodles, mushrooms, half-boiled egg, beans and chicken pieces (or MOCK® Vegan Chicken).",
    "price": 13.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-ramen.jpg"
  },
  {
    "id": "BG33",
    "name": "Szechuan Lamb Fried Rice (Vegan)",
    "description": "Szechuan MOCK® Vegan Lamb fried rice with fiery Szechuan sauce and jasmine rice.",
    "price": 16.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/szechuan-lamb-fried-rice-vegan.jpg"
  },
  {
    "id": "BG34",
    "name": "Spicy Szechuan Chicken Noodles",
    "description": "Wok-tossed wheat noodles with chicken, vegetables and egg in bold Szechuan sauce.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/spicy-szechuan-chicken-noodles.jpg",
    "isPopular": true
  },
  {
    "id": "BG35",
    "name": "Bangkok Vegan Cod Fillets",
    "description": "Vegan cod in rich coconut red curry with green beans, spring onions and white onions.",
    "price": 13.5,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/bangkok-vegan-cod-fillets.jpg"
  },
  {
    "id": "BG36",
    "name": "Tofu Pad Thai",
    "description": "Stir-fried noodles with tofu, bean sprouts and spring onions.",
    "price": 12.95,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-pad-thai.jpg"
  },
  {
    "id": "BG37",
    "name": "Prawn Thai Green Curry",
    "description": "Green curry with red onion, red peppers, beans, bamboo shoots, broccoli and prawns (or vegan prawns).",
    "price": 12.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/prawn-thai-green-curry.jpg"
  },
  {
    "id": "BG38",
    "name": "Chicken Thai Red Curry",
    "description": "Red curry with red onion, red peppers, squash, bamboo shoots, aubergine and chicken (or MOCK® Vegan Chicken).",
    "price": 11.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-thai-red-curry.jpg"
  },
  {
    "id": "BG39",
    "name": "Chicken Pad Thai",
    "description": "Chicken with stir-fried noodles, bean sprouts and spring onions.",
    "price": 13.15,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-pad-thai.jpg"
  },
  {
    "id": "BG40",
    "name": "Chicken Satay Pot (Vegan)",
    "description": "Thai spiced marinated MOCK® Vegan Chicken with peanut sauce, jasmine rice, red onion, tomato, coriander, lime and chilli, with cucumber and Thai dressing.",
    "price": 13.5,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-satay-pot-vegan.jpg"
  },
  {
    "id": "BG41",
    "name": "Stir-Fry Plain Flat Rice Noodles (Vegan)",
    "description": "Wok-tossed wheat noodles and bean sprouts with garlic soy sauce.",
    "price": 7.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/stir-fry-plain-flat-rice-noodles.jpg"
  },
  {
    "id": "BG42",
    "name": "Pad Thai Paradise (Vegan)",
    "description": "Flat rice noodles with broccoli, courgettes, beansprouts and spring onions in tamarind sauce, topped with roasted peanuts.",
    "price": 13.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/pad-thai-paradise-vegan.jpg"
  },
  {
    "id": "BG43",
    "name": "Prawn Pad Thai",
    "description": "Noodles stir-fried with bean sprouts and spring onions, served with prawns (or vegan prawns).",
    "price": 13.15,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/prawn-pad-thai.jpg"
  },
  {
    "id": "BG44",
    "name": "Tofu Black Noodles",
    "description": "Noodles in black soy sauce with broccoli, green beans, red onion, red pepper and tofu, finished with white pepper.",
    "price": 13.95,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-black-noodles.jpg"
  },
  {
    "id": "BG45",
    "name": "Sweet & Sour Bites Stir-Fry (Vegan)",
    "description": "MOCK® Vegan Chicken Bites in sweet and tangy sauce with green beans, cherry tomatoes, red onion, red peppers, pineapple and sesame seeds.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/sweet-sour-bites-stir-fry-vegan.jpg"
  },
  {
    "id": "BG46",
    "name": "Vegetable Ramen",
    "description": "Ramen with noodles, mushrooms, half-boiled egg, beans and veggie gyoza.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/vegetable-ramen.jpg"
  },
  {
    "id": "BG47",
    "name": "Tofu Green Thai Curry",
    "description": "Green curry with red onion, red peppers, beans, bamboo shoots, broccoli and tofu.",
    "price": 12.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-green-thai-curry.jpg"
  },
  {
    "id": "BG48",
    "name": "Vegan Som Tam – Papaya Salad",
    "description": "Green papaya, cherry tomatoes, peanuts, carrot and green beans in Thai salad dressing.",
    "price": 7.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/vegan-som-tam-papaya-salad.jpg"
  },
  {
    "id": "BG49",
    "name": "Prawn Teriyaki Stir-Fry (Vegan)",
    "description": "Vegan prawns with mushrooms, green beans, red peppers, broccoli and spring onions in teriyaki sauce, topped with sesame seeds.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/prawn-teriyaki-stir-fry-vegan.jpg"
  },
  {
    "id": "BG50",
    "name": "Salmon Teriyaki Stir-Fry",
    "description": "Grilled salmon with mushrooms, green beans, red peppers, broccoli and spring onions in teriyaki sauce, garnished with sesame seeds.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/salmon-teriyaki-stir-fry.jpg"
  },
  {
    "id": "BG51",
    "name": "Duck Pancake",
    "description": "Crispy duck in soft pancakes with cucumber and hoisin sauce.",
    "price": 15.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/duck-pancake.jpg"
  },
  {
    "id": "BG52",
    "name": "Grilled Duck",
    "description": "Grilled duck with hoisin sauce, rice, coleslaw and cashew nuts.",
    "price": 17.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/grilled-duck.jpg"
  },
  {
    "id": "BG53",
    "name": "Grilled Salmon",
    "description": "Grilled salmon fillet in teriyaki glaze with seasonal vegetables and grilled lime.",
    "price": 16.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/grilled-salmon.jpg"
  },
  {
    "id": "BG54",
    "name": "Prawn Thai Red Curry (Vegan)",
    "description": "Red curry with red onion, red peppers, squash, bamboo shoots and aubergine, with vegan prawns.",
    "price": 13.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/prawn-thai-red-curry-vegan.jpg"
  },
  {
    "id": "BG55",
    "name": "Mixed Vegetable Pad Thai",
    "description": "Noodles stir-fried with bean sprouts, spring onions and mixed vegetables.",
    "price": 11.95,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/mixed-vegetable-pad-thai.jpg"
  },
  {
    "id": "BG56",
    "name": "Mixed Vegetable Teriyaki Stir-Fry",
    "description": "Bell peppers, broccoli, carrots, snap peas and mushrooms in savoury-sweet teriyaki sauce.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/mixed-vegetable-teriyaki-stir-fry.jpg"
  },
  {
    "id": "BG57",
    "name": "Pad Thai Chicken Bites (Vegan)",
    "description": "Noodles with bean sprouts and spring onions, served with MOCK® Vegan Chicken Bites.",
    "price": 12.95,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/pad-thai-chicken-bites-vegan.jpg"
  },
  {
    "id": "BG58",
    "name": "Egg Pad Thai",
    "description": "Noodles with scrambled eggs, bean sprouts and spring onions.",
    "price": 12.0,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/egg-pad-thai.jpg"
  },
  {
    "id": "BG59",
    "name": "Teriyaki Stir-Fry with Vegan Bites",
    "description": "Mushrooms, green beans, red peppers, broccoli and spring onions in teriyaki sauce with MOCK® Vegan Chicken Bites and sesame seeds.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/teriyaki-stir-fry-vegan-bites.jpg"
  },
  {
    "id": "BG60",
    "name": "Tofu Teriyaki Stir-Fry",
    "description": "Mushrooms, green beans, red peppers, broccoli and spring onions in teriyaki sauce with tofu and sesame seeds.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-teriyaki-stir-fry.jpg"
  },
  {
    "id": "BG61",
    "name": "Sweet & Sour Chicken Stir-Fry (Vegan)",
    "description": "MOCK® Vegan Chicken in sweet and tangy sauce with green beans, cherry tomatoes, red onion, red peppers, pineapple and sesame seeds.",
    "price": 12.2,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/sweet-sour-chicken-stir-fry-vegan.jpg"
  },
  {
    "id": "BG62",
    "name": "Soya Thai Green Curry",
    "description": "Green curry with red onion, red peppers, beans, bamboo shoots, broccoli and soya bites.",
    "price": 12.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/soya-thai-green-curry.jpg"
  },
  {
    "id": "BG63",
    "name": "Soya Bites Green Thai Curry",
    "description": "Green curry with red onion, red peppers, beans, bamboo shoots, broccoli and soya bites.",
    "price": 12.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/soya-bites-green-thai-curry.jpg"
  },
  {
    "id": "BG64",
    "name": "Soya Bites Massaman Curry",
    "description": "Massaman curry with white onion, potatoes, bamboo shoots, shallots and soya bites.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/soya-bites-massaman-curry.jpg"
  },
  {
    "id": "BG65",
    "name": "Soya Noodles",
    "description": "Golden yellow noodles sautéed with bean sprouts and mixed herbs.",
    "price": 6.5,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/soya-noodles-mains.jpg"
  },
  {
    "id": "BG66",
    "name": "Chicken Katsu (Vegan)",
    "description": "Crispy katsu MOCK® Vegan Chicken fillet over sushi rice with sesame seeds and edamame.",
    "price": 10.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/chicken-katsu-vegan.jpg"
  },
  {
    "id": "BG67",
    "name": "Vegan Vegetable Hakka Noodles",
    "description": "Wok-tossed noodles with vegetables, a signature of Taiwan’s Hakka community.",
    "price": 14.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/vegan-vegetable-hakka-noodles.jpg"
  },
  {
    "id": "BG68",
    "name": "The Classic Mangswirati Pad Thai (Vegan)",
    "description": "Broccoli, courgettes, bean sprouts and spring onions with flat rice noodles in tamarind sauce, topped with peanuts.",
    "price": 12.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/classic-mangswirati-pad-thai-vegan.jpg"
  },
  {
    "id": "BG69",
    "name": "Vegan Thai Soyamari",
    "description": "Wok-tossed battered crispy soya chunks with ginger, coriander, vegan oyster sauce and green peppercorn.",
    "price": 9.8,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/vegan-thai-soyamari.jpg"
  },
  {
    "id": "BG70",
    "name": "Tofu Treasure in Green Thai Curry",
    "description": "Green curry with broccoli, carrot, bamboo shoots, red onion, red pepper and tofu.",
    "price": 9.9,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tofu-treasure-green-thai-curry.jpg"
  },
  {
    "id": "BG71",
    "name": "Tangy Sweet & Sour Chicken",
    "description": "Stir-fried chicken and vegetables in balanced sweet and sour sauce.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tangy-sweet-sour-chicken.jpg"
  },
  {
    "id": "BG72",
    "name": "Tangy Sweet & Sour Prawns",
    "description": "Stir-fried prawns and vegetables in balanced sweet and sour sauce.",
    "price": 15.99,
    "category": "Bamboo Garden",
    "subcategory": "Mains",
    "image": "/ai/bamboo-garden/tangy-sweet-sour-prawns.jpg"
  },

  {
    "id": "BG73",
    "name": "Sweet & Sour Chicken - Kids Portion",
    "description": "Sweet & sour chicken with carrots and sesame seeds. Side: soya noodles, egg rice or jasmine rice.",
    "price": 13.5,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-sweet-sour-chicken.jpg"
  },
  {
    "id": "BG74",
    "name": "Chicken Fillet Soya Noodles",
    "description": "Soya noodles with cucumber, carrots, chicken fillets and sesame seeds.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-chicken-fillet-soya-noodles.jpg"
  },
  {
    "id": "BG75",
    "name": "Chicken Bites Soya Noodles",
    "description": "Soya noodles with cucumber, carrots, chicken bites and sesame seeds.",
    "price": 14.99,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-chicken-bites-soya-noodles.jpg"
  },
  {
    "id": "BG76",
    "name": "Soya Bites with Noodles (Vegan)",
    "description": "Soya noodles with cucumber, carrots, vegan bites and sesame seeds.",
    "price": 13.99,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-soya-bites-noodles-vegan.jpg"
  },
  {
    "id": "BG77",
    "name": "Chicken Katsu - Kids Portion",
    "description": "Crispy chicken katsu with cucumber, carrots and sesame seeds. Side: egg rice or jasmine rice.",
    "price": 14.49,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-chicken-katsu.jpg"
  },
  {
    "id": "BG78",
    "name": "Chicken Katsu - Kid Portion (Vegan)",
    "description": "Crispy MOCK® Vegan Chicken Katsu with cucumber, carrots, sesame seeds and katsu sauce. Side: jasmine rice.",
    "price": 13.49,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-chicken-katsu-vegan.jpg"
  },
  {
    "id": "BG79",
    "name": "Sweet & Sour Chicken - Kids Portion (Vegan)",
    "description": "Sweet & sour MOCK® Vegan Chicken with carrots, sesame seeds and sauce. Side: soya noodles or jasmine rice.",
    "price": 12.5,
    "category": "Bamboo Garden",
    "subcategory": "KidsMenu",
    "image": "/ai/bamboo-garden/kids-sweet-sour-chicken-vegan.jpg"
  },

  {
    "id": "BG80",
    "name": "Mixed Greens (Vegan)",
    "description": "Stir-fried green beans, broccoli and snow peas with shiitake mushrooms in soy sauce.",
    "price": 7.0,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/mixed-greens.jpg"
  },
  {
    "id": "BG81",
    "name": "Egg Fried Rice",
    "description": "Jasmine rice stir-fried with egg and light seasoning.",
    "price": 6.95,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/egg-fried-rice.jpg"
  },
  {
    "id": "BG82",
    "name": "Sautéed Broccoli",
    "description": "Broccoli sautéed in oyster sauce, topped with sesame seeds.",
    "price": 5.99,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/sauteed-broccoli.jpg"
  },
  {
    "id": "BG83",
    "name": "Coconut Rice",
    "description": "Coconut-infused rice topped with sesame seeds.",
    "price": 5.5,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/coconut-rice.jpg"
  },
  {
    "id": "BG84",
    "name": "Jasmine Rice",
    "description": "Steamed fragrant jasmine rice.",
    "price": 5.5,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/jasmine-rice.jpg"
  },
  {
    "id": "BG85",
    "name": "Soya Noodles (Side)",
    "description": "Golden yellow noodles sautéed with bean sprouts and herbs.",
    "price": 6.5,
    "category": "Bamboo Garden",
    "subcategory": "Sides",
    "image": "/ai/bamboo-garden/soya-noodles-sides.jpg"
  },

  {
    "id": "BG86",
    "name": "Vegan Apple Pie & Custard",
    "description": "Warm vegan apple pie served with custard.",
    "price": 9.49,
    "category": "Bamboo Garden",
    "subcategory": "Desserts",
    "image": "/ai/bamboo-garden/vegan-apple-pie-custard.jpg"
  },
  {
    "id": "BG87",
    "name": "Vegan Biscoff Cheesecake",
    "description": "Biscoff base with baked mousse, biscoff layer and crumb.",
    "price": 9.49,
    "category": "Bamboo Garden",
    "subcategory": "Desserts",
    "image": "/ai/bamboo-garden/vegan-biscoff-cheesecake.jpg"
  },
  {
    "id": "BG88",
    "name": "Vegan Chocolate Fudge Cake",
    "description": "Rich vegan chocolate fudge cake.",
    "price": 9.49,
    "category": "Bamboo Garden",
    "subcategory": "Desserts",
    "image": "/ai/bamboo-garden/vegan-chocolate-fudge-cake.jpg"
  },
  {
    "id": "BG89",
    "name": "Vegan Salted Caramel Fudge Cake",
    "description": "Vegan salted caramel fudge cake.",
    "price": 9.49,
    "category": "Bamboo Garden",
    "subcategory": "Desserts",
    "image": "/ai/bamboo-garden/vegan-salted-caramel-fudge-cake.jpg"
  },

  {
    "id": "BG90",
    "name": "Vegan Chocolate Shake",
    "description": "Creamy vegan Belgian chocolate flavoured shake.",
    "price": 7.99,
    "category": "Bamboo Garden",
    "subcategory": "Vegan MilkShakes",
    "image": "/ai/bamboo-garden/vegan-chocolate-shake.jpg"
  },
  {
    "id": "BG91",
    "name": "Vegan Strawberry Shake",
    "description": "Creamy strawberry flavour vegan milkshake.",
    "price": 7.99,
    "category": "Bamboo Garden",
    "subcategory": "Vegan MilkShakes",
    "image": "/ai/bamboo-garden/vegan-strawberry-shake.jpg"
  },
  {
    "id": "BG92",
    "name": "Vegan Biscoff Milkshake",
    "description": "Nutty, buttery, spiced Biscoff flavoured vegan shake.",
    "price": 7.99,
    "category": "Bamboo Garden",
    "subcategory": "Vegan MilkShakes",
    "image": "/ai/bamboo-garden/vegan-biscoff-milkshake.jpg"
  },
  {
    "id": "BG93",
    "name": "Vegan Salted Caramel Milkshake",
    "description": "Sweet and salty vegan caramel flavoured shake.",
    "price": 7.99,
    "category": "Bamboo Garden",
    "subcategory": "Vegan MilkShakes",
    "image": "/ai/bamboo-garden/vegan-salted-caramel-milkshake.jpg"
  },
  {
    "id": "BG94",
    "name": "Vegan Vanilla Shake",
    "description": "Oat milk, vegan ice cream and Madagascar vanilla.",
    "price": 7.99,
    "category": "Bamboo Garden",
    "subcategory": "Vegan MilkShakes",
    "image": "/ai/bamboo-garden/vegan-vanilla-shake.jpg"
  },

  {
    "id": "BG95",
    "name": "Coke Zero",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/coke-zero.jpg"
  },
  {
    "id": "BG96",
    "name": "Green's Sour Cherry",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/greens-sour-cherry.jpg"
  },
  {
    "id": "BG97",
    "name": "Fanta Orange",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/fanta-orange.jpg"
  },
  {
    "id": "BG98",
    "name": "Diet Coke",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/diet-coke.jpg"
  },
  {
    "id": "BG99",
    "name": "Sprite",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/sprite.jpg"
  },
  {
    "id": "BG100",
    "name": "Sparkling Water",
    "description": "",
    "price": 2.0,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/sparkling-water.jpg"
  },
  {
    "id": "BG101",
    "name": "Still Water",
    "description": "",
    "price": 3.0,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/still-water.jpg"
  },
  {
    "id": "BG102",
    "name": "Tropicana Orange",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/tropicana-orange.jpg"
  },
  {
    "id": "BG103",
    "name": "Redbull",
    "description": "",
    "price": 4.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/redbull.jpg"
  },
  {
    "id": "BG104",
    "name": "Old Jamaica Ginger Beer",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/old-jamaica-ginger-beer.jpg"
  },
  {
    "id": "BG105",
    "name": "Karma Ginger Beer",
    "description": "",
    "price": 4.0,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/karma-ginger-beer.jpg"
  },
  {
    "id": "BG106",
    "name": "Green's Cola",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/greens-cola.jpg"
  },
  {
    "id": "BG107",
    "name": "Coke",
    "description": "",
    "price": 3.5,
    "category": "Bamboo Garden",
    "subcategory": "Soft Drinks",
    "image": "/ai/bamboo-garden/coke.jpg"
  },

  {
    "id": "BG108",
    "name": "Asahi",
    "description": "",
    "price": 6.0,
    "category": "Bamboo Garden",
    "subcategory": "Alcohol",
    "image": "/ai/bamboo-garden/asahi.jpg"
  },
  {
    "id": "BG109",
    "name": "Asahi Super Dry 0.0%",
    "description": "",
    "price": 6.0,
    "category": "Bamboo Garden",
    "subcategory": "Alcohol",
    "image": "/ai/bamboo-garden/asahi-super-dry-00.jpg"
  },

  {
    "id": "BG110",
    "name": "Vanilla Shake",
    "description": "Ben & Jerry's vanilla ice cream blended with milk, topped with whipped cream, raspberry syrup and rainbow sprinkles.",
    "price": 6.99,
    "category": "Bamboo Garden",
    "subcategory": "Non Vegan Milkshakes",
    "image": "/ai/bamboo-garden/vanilla-shake-non-vegan.jpg"
  },
  {
    id: "PP-MD-1",
    name: "Meal Deal for 2",
    description: "2 plant-based burgers (MOCK® Chicken Fillet or Beyond Meat®), 2 sides, and 2 drinks.",
    price: 28.99,
    category: "Plan Party",
    subcategory: "Meal Deals",
    image: "/ai/plan-party/meal-deal-for-2.jpg"
  },
  {
    id: "PP-MD-2",
    name: "Loaded Burger Meal Deal",
    description: "100% plant-based burger (MOCK® Chicken Fillet or Beyond Meat®), fries and drink.",
    price: 17.99,
    category: "Plan Party",
    subcategory: "Meal Deals",
    image: "/ai/plan-party/loaded-burger-meal.jpg"
  },
  {
    id: "PP-MD-3",
    name: "Combo Burger Meal Deal",
    description: "Choose between MOCK® Chicken Fillet or Beyond Meat® patty, add a side and a drink.",
    price: 15.99,
    category: "Plan Party",
    subcategory: "Meal Deals",
    image: "/ai/plan-party/combo-burger-meal.jpg"
  },
  {
    id: "PP-MD-4",
    name: "Family Style Feast (Feeds 3)",
    description: "3 plant-based burgers of your choice, 2 fries, and 3 drinks.",
    price: 39.99,
    category: "Plan Party",
    subcategory: "Meal Deals",
    image: "/ai/plan-party/family-style-feast.jpg"
  },

  // ===========================
  // MAINS
  // ===========================
  {
    id: "PP-M-1",
    name: "BBQ Bliss Texas Style",
    description: "Plant-based beef-style burger with vegan cheddar, tomatoes, smoky BBQ sauce and crispy onion rings.",
    price: 11.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/bbq-bliss-texas-style.jpg"
  },
  {
    id: "PP-M-2",
    name: "Chick'n Chikita Burger",
    description: "MOCK® Chicken Fillet Burger with vegan mayo, burger sauce, lettuce, vegan cheese, pickles on brioche bun.",
    price: 10.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/chikn-chikita-burger.jpg"
  },
  {
    id: "PP-M-3",
    name: "Jerry's Jackfruit Wings & Fries",
    description: "Battered jackfruit wings drizzled with house chilli sauce, served with fries, garlic aioli and salad.",
    price: 12.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/jerrys-jackfruit-wings.jpg"
  },
  {
    id: "PP-M-4",
    name: "Hash Harmony",
    description: "MOCK® Chicken Fillet Burger with crispy hash brown, ranch, chipotle BBQ, vegan cheese & pickles.",
    price: 11.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/hash-harmony.jpg"
  },
  {
    id: "PP-M-5",
    name: "Dirty Chilli Vegan Dog",
    description: "Vegan hot dog topped with soya chilli, pickled gherkins, garlic mayo, onions & vegan cheddar.",
    price: 12.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/dirty-chilli-dog.jpg"
  },
  {
    id: "PP-M-6",
    name: "Seoulful Chick'n Symphony",
    description: "MOCK® Chicken Fillet Burger with gochujang sauce, lettuce, vegan cheese & sesame seeds.",
    price: 11.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/seoulful-chikn-symphony.jpg"
  },
  {
    id: "PP-M-7",
    name: "Classic Vegan Dog",
    description: "Vegan hot dog with caramelised onion, mustard, ketchup & vegan mayo.",
    price: 11.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/classic-vegan-dog.jpg"
  },
  {
    id: "PP-M-8",
    name: "The Vegan Mexican Chilli",
    description: "Beyond Meat patty with Mexican chilli cheese, jalapeños, chipotle mayo & fresh veggies.",
    price: 12.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/vegan-mexican-chilli.jpg"
  },
  {
    id: "PP-M-9",
    name: "Jackfruit Magic",
    description: "Jackfruit patty with lettuce, tomato, red cabbage slaw & house burger sauce.",
    price: 11.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/jackfruit-magic.jpg"
  },
  {
    id: "PP-M-10",
    name: "Very Own Vegan Bean Burger",
    description: "Vegan veggie patty with lettuce, tomatoes, vegan cheddar, ketchup & garlic aioli.",
    price: 11.90,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/vegan-bean-burger.jpg"
  },
  {
    id: "PP-M-11",
    name: "Smoky Bacon Cheeseburger",
    description: "Beyond Meat patty with vegan bacon bits, cheese, grilled onions & burger sauce.",
    price: 12.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/smoky-bacon-cheeseburger.jpg"
  },
  {
    id: "PP-M-12",
    name: "Maple Marvel Double Delight",
    description: "Two Beyond Meat patties with maple mustard, grilled onions, pickles & lettuce.",
    price: 13.99,
    category: "Plan Party",
    subcategory: "Mains",
    image: "/ai/plan-party/maple-marvel-double.jpg"
  },

  // ===========================
  // SIDES
  // ===========================
  {
    id: "PP-S-1",
    name: "Ranch-Loaded Fries",
    description: "Crunchy Cajun fries loaded with ranch, pickled onions & crispy onions.",
    price: 5.90,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/ranch-loaded-fries.jpg"
  },
  {
    id: "PP-S-2",
    name: "Buffalo Wing Waltz",
    description: "Crispy cauliflower coated in Frank’s chilli sauce with garlic aioli.",
    price: 8.90,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/buffalo-wing-waltz.jpg"
  },
  {
    id: "PP-S-3",
    name: "Korean Gochujang Loaded Fries",
    description: "Curly fries with gochujang, crispy onions & pickled onions.",
    price: 5.90,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/gochujang-fries.jpg"
  },
  {
    id: "PP-S-4",
    name: "Golden Crunch Fries",
    description: "Classic crunchy fries.",
    price: 3.60,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/golden-crunch-fries.jpg"
  },
  {
    id: "PP-S-5",
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 4.50,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/onion-rings.jpg"
  },
  {
    id: "PP-S-6",
    name: "Sunset Sweet Potato Fries",
    description: "Sweet potato fries with a hint of seasoning.",
    price: 4.50,
    category: "Plan Party",
    subcategory: "Sides",
    image: "/ai/plan-party/sweet-potato-fries.jpg"
  },

  // ===========================
  // DIPS
  // ===========================
  {
    id: "PP-DIP-1",
    name: "Honey Buffalo Dip",
    description: "Sweet and spicy buffalo dip.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/honey-buffalo-dip.jpg"
  },
  {
    id: "PP-DIP-2",
    name: "Truffle Mustard Dip",
    description: "Premium mustard dip with truffle notes.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/truffle-mustard-dip.jpg"
  },
  {
    id: "PP-DIP-3",
    name: "Ranch Dip",
    description: "Classic creamy ranch.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/ranch-dip.jpg"
  },
  {
    id: "PP-DIP-4",
    name: "Korean BBQ Dip",
    description: "Sticky, smoky Korean BBQ dip.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/korean-bbq-dip.jpg"
  },
  {
    id: "PP-DIP-5",
    name: "BBQ Sauce Dip",
    description: "Rich smoky BBQ sauce.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/bbq-dip.jpg"
  },
  {
    id: "PP-DIP-6",
    name: "Mayo Dip",
    description: "Creamy mayo dip.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/mayo-dip.jpg"
  },
  {
    id: "PP-DIP-7",
    name: "Chipotle BBQ Dip",
    description: "Smoky chipotle BBQ flavour.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/chipotle-bbq-dip.jpg"
  },
  {
    id: "PP-DIP-8",
    name: "Ketchup Dip",
    description: "Classic tomato ketchup.",
    price: 0.90,
    category: "Plan Party",
    subcategory: "Dips",
    image: "/ai/plan-party/ketchup-dip.jpg"
  },

  // ===========================
  // DRINKS
  // ===========================
  {
    id: "PP-DR-1",
    name: "Green's Sour Cherry",
    description: "Refreshing cherry soda.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/greens-sour-cherry.jpg"
  },
  {
    id: "PP-DR-2",
    name: "Coke",
    description: "Coca-Cola classic.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/coke.jpg"
  },
  {
    id: "PP-DR-3",
    name: "Diet Coke",
    description: "Sugar-free cola.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/diet-coke.jpg"
  },
  {
    id: "PP-DR-4",
    name: "Coke Zero",
    description: "Zero sugar cola.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/coke-zero.jpg"
  },
  {
    id: "PP-DR-5",
    name: "Fanta Orange",
    description: "Orange fizzy drink.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/fanta-orange.jpg"
  },
  {
    id: "PP-DR-6",
    name: "J20",
    description: "Premium fruit drink.",
    price: 4.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/j20.jpg"
  },
  {
    id: "PP-DR-7",
    name: "Karma Ginger Beer",
    description: "Spiced ginger beer.",
    price: 4.00,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/karma-ginger-beer.jpg"
  },
  {
    id: "PP-DR-8",
    name: "Old Jamaica Ginger Beer",
    description: "Classic Jamaican ginger beer.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/old-jamaica-ginger.jpg"
  },
  {
    id: "PP-DR-9",
    name: "Redbull",
    description: "Energy drink.",
    price: 4.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/redbull.jpg"
  },
  {
    id: "PP-DR-10",
    name: "Sprite",
    description: "Lemon-lime soda.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/sprite.jpg"
  },
  {
    id: "PP-DR-11",
    name: "Tropicana Orange",
    description: "100% orange juice.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/tropicana-orange.jpg"
  },
  {
    id: "PP-DR-12",
    name: "Green's Cola",
    description: "Natural cola.",
    price: 3.50,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/greens-cola.jpg"
  },
  {
    id: "PP-DR-13",
    name: "Still Water",
    description: "Pure bottled water.",
    price: 3.00,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/still-water.jpg"
  },
  {
    id: "PP-DR-14",
    name: "Sparkling Water",
    description: "Sparkling mineral water.",
    price: 2.00,
    category: "Plan Party",
    subcategory: "Drinks",
    image: "/ai/plan-party/sparkling-water.jpg"
  },

  // ===========================
  // DESSERTS
  // ===========================
  {
    id: "PP-DE-1",
    name: "Vegan Apple Pie & Custard",
    description: "Warm vegan apple pie served with creamy vegan custard.",
    price: 9.49,
    category: "Plan Party",
    subcategory: "Dessearts",
    image: "/ai/plan-party/vegan-apple-pie.jpg"
  },
  {
    id: "PP-DE-2",
    name: "Vegan Salted Caramel Fudge Cake",
    description: "Rich vegan fudge cake with salted caramel glaze.",
    price: 9.49,
    category: "Plan Party",
    subcategory: "Dessearts",
    image: "/ai/plan-party/salted-caramel-fudge-cake.jpg"
  },
  {
    id: "PP-DE-3",
    name: "Vegan Jaffa Cake",
    description: "Plant-based chocolate orange sponge dessert.",
    price: 9.49,
    category: "Plan Party",
    subcategory: "Dessearts",
    image: "/ai/plan-party/vegan-jaffa-cake.jpg"
  },
  {
    id: "PP-DE-4",
    name: "Vegan Biscoff Cheesecake",
    description: "Biscoff base topped with creamy vegan mousse and biscoff paste.",
    price: 9.49,
    category: "Plan Party",
    subcategory: "Dessearts",
    image: "/ai/plan-party/biscoff-cheesecake.jpg"
  },
  {
    id: "PP-DE-5",
    name: "Vegan Chocolate Fudge Cake",
    description: "Decadent vegan chocolate fudge slice.",
    price: 9.49,
    category: "Plan Party",
    subcategory: "Dessearts",
    image: "/ai/plan-party/vegan-chocolate-fudge-cake.jpg"
  },

  // ===========================
  // ALCOHOL
  // ===========================
  {
    id: "PP-A-1",
    name: "Asahi",
    description: "Premium Japanese lager.",
    price: 6.00,
    category: "Plan Party",
    subcategory: "Alcohol",
    image: "/ai/plan-party/asahi.jpg"
  },
  {
    id: "PP-A-2",
    name: "Asahi Super Dry 0.0%",
    description: "Zero-alcohol Japanese beer.",
    price: 6.00,
    category: "Plan Party",
    subcategory: "Alcohol",
    image: "/ai/plan-party/asahi-00.jpg"
  },

  // ===========================
  // MILKSHAKES
  // ===========================
  {
    id: "PP-MS-1",
    name: "Vegan Strawberry Shake",
    description: "Creamy strawberry vegan milkshake.",
    price: 7.99,
    category: "Plan Party",
    subcategory: "Milkshakes",
    image: "/ai/plan-party/strawberry-shake.jpg"
  },
  {
    id: "PP-MS-2",
    name: "Vegan Chocolate Shake",
    description: "Creamy Belgian chocolate vegan shake.",
    price: 7.99,
    category: "Plan Party",
    subcategory: "Milkshakes",
    image: "/ai/plan-party/chocolate-shake.jpg"
  },
  {
    id: "PP-MS-3",
    name: "Vegan Vanilla Shake",
    description: "Vanilla shake with oat milk & vegan ice cream.",
    price: 7.99,
    category: "Plan Party",
    subcategory: "Milkshakes",
    image: "/ai/plan-party/vanilla-shake.jpg"
  },
  {
    id: "PP-MS-4",
    name: "Vegan Salted Caramel Milkshake",
    description: "Sweet & salty caramel vegan shake.",
    price: 7.99,
    category: "Plan Party",
    subcategory: "Milkshakes",
    image: "/ai/plan-party/salted-caramel-shake.jpg"
  },
  {
    id: "PP-MS-5",
    name: "Vegan Biscoff Milkshake",
    description: "Nutty, buttery biscoff-flavoured vegan shake.",
    price: 7.99,
    category: "Plan Party",
    subcategory: "Milkshakes",
    image: "/ai/plan-party/biscoff-shake.jpg"
  },
  
{
    id: "VC-ST-1",
    name: "Caribbean Mac Harmony (Mac no Cheese)",
    description: "Macaroni baked with homemade vegan cheese sauce, creamy, rich and comforting.",
    price: 9.90,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/mac-harmony.jpg"
  },
  {
    id: "VC-ST-2",
    name: "Golden Tropics Fried Plantain",
    description: "Sweet fried plantain served warm with a caramelised outer crust.",
    price: 6.90,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/fried-plantain.jpg"
  },
  {
    id: "VC-ST-3",
    name: "Vegan Jamaican Patty - Bean Patty",
    description: "Jamaican jerk vegan bean patty served with pickled red cabbage slaw.",
    price: 8.90,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/bean-patty.jpg"
  },
  {
    id: "VC-ST-4",
    name: "Vegan Jamaican Patty - Callaloo",
    description: "Jamaican jerk vegan callaloo patty served with pickled red cabbage slaw.",
    price: 8.90,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/callaloo-patty.jpg"
  },
  {
    id: "VC-ST-5",
    name: "Vegan Jamaican Patty - Vegetable",
    description: "Vegan vegetable patty seasoned with Jamaican jerk spices and served with red cabbage slaw.",
    price: 8.90,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/veg-patty.jpg"
  },
  {
    id: "VC-ST-6",
    name: "Island Zest Mini Chick'n Salad",
    description: "Spicy jerk MOCK vegan chicken with mixed greens, roasted sweet potatoes, sautéed green beans, and lime.",
    price: 10.99,
    category: "Vegan Caribbean",
    subcategory: "Starters",
    image: "/ai/vegan-caribbean/island-zest-salad.jpg"
  },
  {
    id: "VC-M-1",
    name: "Spice Isle Vegan Goatless Feast (Curry Goat Rice & Peas)",
    description: "Vegan goat chunks cooked in Caribbean-spiced gravy with potatoes, rice & peas, steamed beans, roti, and plantain.",
    price: 16.90,
    category: "Vegan Caribbean",
    subcategory: "Mains",
    image: "/ai/vegan-caribbean/vegan-goatless-feast.jpg"
  },
  {
    id: "VC-M-2",
    name: "Pumpkin & Chickpea Island Curry",
    description: "Pumpkin & chickpea curry with tomatoes, spices, and a hint of rum. Served with coconut rice & peas and plantain.",
    price: 15.90,
    category: "Vegan Caribbean",
    subcategory: "Mains",
    image: "/ai/vegan-caribbean/pumpkin-chickpea-curry.jpg"
  },
  {
    id: "VC-M-3",
    name: "Jerk Chick'n Stew",
    description: "MOCK® Vegan Chicken simmered in jerk sauce with rice & peas, mixed greens, lime, and plantain.",
    price: 16.90,
    category: "Vegan Caribbean",
    subcategory: "Mains",
    image: "/ai/vegan-caribbean/jerk-chikn-stew.jpg"
  },
  {
    id: "VC-M-4",
    name: "Ocean Whisper Jerk Cod (Vegan)",
    description: "Oven-baked vegan jerk cod served with coconut rice & peas, plantain, and pickled coleslaw.",
    price: 16.90,
    category: "Vegan Caribbean",
    subcategory: "Mains",
    image: "/ai/vegan-caribbean/jerk-cod.jpg"
  },
  {
    id: "VC-M-5",
    name: "Jamaican Jerk Vegan Sausage with Corn",
    description: "Vegan jerk sausage with tomatoes, vegan cheese, thyme, served in a roll with Jamaican allspice corn on the cob.",
    price: 12.90,
    category: "Vegan Caribbean",
    subcategory: "Mains",
    image: "/ai/vegan-caribbean/jerk-sausage-corn.jpg"
  },

  // ===========================
  // SIDES
  // ===========================
  {
    id: "VC-S-1",
    name: "Paratha",
    description: "Soft Caribbean-style paratha bread.",
    price: 2.00,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/paratha.jpg"
  },
  {
    id: "VC-S-2",
    name: "Callaloo",
    description: "Traditional Caribbean leafy greens sautéed with mild seasoning.",
    price: 5.90,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/callaloo.jpg"
  },
  {
    id: "VC-S-3",
    name: "Corn on the Cob",
    description: "Grilled Jamaican allspice corn on the cob.",
    price: 3.99,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/corn-on-cob.jpg"
  },
  {
    id: "VC-S-4",
    name: "Plantain Bliss with Savory Bean Sauce",
    description: "Fried plantain served with Caribbean-spiced black bean sauce.",
    price: 7.90,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/plantain-bean-sauce.jpg"
  },
  {
    id: "VC-S-5",
    name: "Sun-Kissed Caribbean Potato Salad",
    description: "Jerk-seasoned potatoes with mixed greens and lime jerk dressing.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/potato-salad.jpg"
  },
  {
    id: "VC-S-6",
    name: "Sweet Potato Wedges",
    description: "Crispy sweet potato wedges.",
    price: 5.40,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/sweet-potato-wedges.jpg"
  },
  {
    id: "VC-S-7",
    name: "Rice & Beans",
    description: "Traditional Caribbean-style rice & kidney beans.",
    price: 4.90,
    category: "Vegan Caribbean",
    subcategory: "Sides",
    image: "/ai/vegan-caribbean/rice-and-beans.jpg"
  },

  // ===========================
  // DESSERTS
  // ===========================
  {
    id: "VC-D-1",
    name: "Vegan Biscoff Cheesecake",
    description: "Biscoff base topped with baked mousse, coated in biscoff paste and crumbs.",
    price: 9.49,
    category: "Vegan Caribbean",
    subcategory: "Desserts",
    image: "/ai/vegan-caribbean/biscoff-cheesecake.jpg"
  },
  {
    id: "VC-D-2",
    name: "Vegan Salted Caramel Fudge Cake",
    description: "Decadent vegan salted caramel fudge slice.",
    price: 9.49,
    category: "Vegan Caribbean",
    subcategory: "Desserts",
    image: "/ai/vegan-caribbean/salted-caramel-fudge.jpg"
  },
  {
    id: "VC-D-3",
    name: "Vegan Chocolate Fudge Cake",
    description: "Rich chocolate fudge cake made fully vegan.",
    price: 9.49,
    category: "Vegan Caribbean",
    subcategory: "Desserts",
    image: "/ai/vegan-caribbean/chocolate-fudge-cake.jpg"
  },
  {
    id: "VC-D-4",
    name: "Vegan Apple Pie & Custard",
    description: "Warm apple pie served with creamy vegan custard.",
    price: 9.49,
    category: "Vegan Caribbean",
    subcategory: "Desserts",
    image: "/ai/vegan-caribbean/apple-pie.jpg"
  },
  {
    id: "VC-D-5",
    name: "Vegan Jaffa Cake",
    description: "Chocolate-orange sponge dessert made vegan.",
    price: 9.49,
    category: "Vegan Caribbean",
    subcategory: "Desserts",
    image: "/ai/vegan-caribbean/vegan-jaffa-cake.jpg"
  },

  // ===========================
  // VEGAN MILKSHAKES
  // ===========================
  {
    id: "VC-MS-1",
    name: "Vegan Chocolate Shake",
    description: "Creamy Belgian chocolate vegan shake.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Vegan Milkshakes",
    image: "/ai/vegan-caribbean/chocolate-shake.jpg"
  },
  {
    id: "VC-MS-2",
    name: "Vegan Salted Caramel Milkshake",
    description: "Sweet & salty caramel vegan milkshake.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Vegan Milkshakes",
    image: "/ai/vegan-caribbean/salted-caramel-shake.jpg"
  },
  {
    id: "VC-MS-3",
    name: "Vegan Biscoff Milkshake",
    description: "Nutty and buttery biscoff-flavoured vegan shake.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Vegan Milkshakes",
    image: "/ai/vegan-caribbean/biscoff-shake.jpg"
  },
  {
    id: "VC-MS-4",
    name: "Vegan Strawberry Shake",
    description: "Refreshing creamy strawberry vegan shake.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Vegan Milkshakes",
    image: "/ai/vegan-caribbean/strawberry-shake.jpg"
  },
  {
    id: "VC-MS-5",
    name: "Vegan Vanilla Shake",
    description: "Smooth vanilla vegan milkshake with oat milk & vegan ice cream.",
    price: 7.99,
    category: "Vegan Caribbean",
    subcategory: "Vegan Milkshakes",
    image: "/ai/vegan-caribbean/vanilla-shake.jpg"
  },

  // ===========================
  // SOFT DRINKS
  // ===========================
  {
    id: "VC-SD-1",
    name: "Old Jamaica Ginger Beer",
    description: "Classic Jamaican ginger beer.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/old-jamaica.jpg"
  },
  {
    id: "VC-SD-2",
    name: "Green's Sour Cherry",
    description: "Refreshing sour cherry soda.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/greens-sour-cherry.jpg"
  },
  {
    id: "VC-SD-3",
    name: "Karma Ginger Beer",
    description: "Premium ginger beer with spice.",
    price: 4.00,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/karma-ginger.jpg"
  },
  {
    id: "VC-SD-4",
    name: "Coke Zero",
    description: "Zero calorie cola.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/coke-zero.jpg"
  },
  {
    id: "VC-SD-5",
    name: "Diet Coke",
    description: "Sugar-free cola.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/diet-coke.jpg"
  },
  {
    id: "VC-SD-6",
    name: "Coke",
    description: "Classic Coca-Cola.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/coke.jpg"
  },
  {
    id: "VC-SD-7",
    name: "Sparkling Water",
    description: "Refreshing sparkling water.",
    price: 2.00,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/sparkling-water.jpg"
  },
  {
    id: "VC-SD-8",
    name: "Fanta Orange",
    description: "Orange fizzy drink.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/fanta-orange.jpg"
  },
  {
    id: "VC-SD-9",
    name: "Sprite",
    description: "Lemon-lime soda.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/sprite.jpg"
  },
  {
    id: "VC-SD-10",
    name: "Green's Cola",
    description: "Natural cola.",
    price: 3.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/greens-cola.jpg"
  },
  {
    id: "VC-SD-11",
    name: "J20",
    description: "Premium mixed fruit drink.",
    price: 4.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/j20.jpg"
  },
  {
    id: "VC-SD-12",
    name: "Redbull",
    description: "Energy drink for an instant boost.",
    price: 4.50,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/redbull.jpg"
  },
  {
    id: "VC-SD-13",
    name: "Schweppes Tonic Water",
    description: "Refreshing tonic water.",
    price: 4.00,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/tonic-water.jpg"
  },
  {
    id: "VC-SD-14",
    name: "Still Water",
    description: "Pure bottled water.",
    price: 3.00,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/still-water.jpg"
  },
  {
    id: "VC-SD-15",
    name: "Schweppes Soda Water",
    description: "Classic soda water.",
    price: 4.00,
    category: "Vegan Caribbean",
    subcategory: "Soft Drinks",
    image: "/ai/vegan-caribbean/soda-water.jpg"
  },

  // ===========================
  // ALCOHOL
  // ===========================
  {
    id: "VC-A-1",
    name: "Corona",
    description: "Refreshing pale lager served chilled.",
    price: 6.00,
    category: "Vegan Caribbean",
    subcategory: "Alcohol",
    image: "/ai/vegan-caribbean/corona.jpg"
  },{
    id: "SD-1",
    name: "Green's Sour Cherry",
    description: "Refreshing cherry-flavoured soda.",
    price: 3.50,
    category: "Soft Drinks",
   subcategory: "",
    image: "/ai/soft-drinks/sour-cherry.jpg",
  },
  {
    id: "SD-2",
    name: "Coca-Cola",
    description: "Classic fizzy cola drink.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/coke.jpg",
  },
  {
    id: "SD-3",
    name: "Coke Zero",
    description: "Zero sugar cola.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/coke-zero.jpg",
  },
  {
    id: "SD-4",
    name: "Green's Cola",
    description: "Plant-based natural cola.",
    price: 3.50,
    category: "Soft Drinks",
   subcategory: "",
    image: "/ai/soft-drinks/greens-cola.jpg",
  },
  {
    id: "SD-5",
    name: "Sprite",
    description: "Lemon-lime fizzy drink.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/sprite.jpg",
  },
  {
    id: "SD-6",
    name: "Old Jamaica Ginger Beer",
    description: "Strong, fiery ginger beer.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/old-jamaica-ginger-beer.jpg",
  },
  {
    id: "SD-7",
    name: "Karma Ginger Beer",
    description: "Premium craft ginger beer.",
    price: 4.00,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/karma-ginger-beer.jpg",
  },
  {
    id: "SD-8",
    name: "Fanta Orange",
    description: "Orange flavoured sparkling drink.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/fanta.jpg",
  },
  {
    id: "SD-9",
    name: "Diet Coke",
    description: "Low-calorie cola.",
    price: 3.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/diet-coke.jpg",
  },
  {
    id: "SD-10",
    name: "Sparkling Water",
    description: "Carbonated mineral water.",
    price: 2.00,
    category: "Soft Drinks",
   subcategory: "",
    image: "/ai/soft-drinks/sparkling-water.jpg",
  },
  {
    id: "SD-11",
    name: "Karma Lemony Lemonade",
    description: "Fresh lemonade with a sharp zing.",
    price: 4.00,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/lemony-lemonade.jpg",
  },
  {
    id: "SD-12",
    name: "Red Bull",
    description: "Classic energy drink.",
    price: 4.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/redbull.jpg",
  },
  {
    id: "SD-13",
    name: "Still Water",
    description: "Pure still mineral water.",
    price: 2.00,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/still-water.jpg",
  },
  {
    id: "SD-14",
    name: "Karma Cola",
    description: "Natural fair-trade cola.",
    price: 2.50,
    category: "Soft Drinks",
    subcategory: "",
    image: "/ai/soft-drinks/karma-cola.jpg",
  },
{
    id: "AL-1",
    name: "Asahi",
    description: "Premium Japanese lager, crisp & clean.",
    price: 6.00,
    category: "Alcohol",
   subcategory: "",
    image: "/ai/alcohol/asahi.jpg",
  },
  {
    id: "AL-2",
    name: "Asahi Super Dry 0.0%",
    description: "Non-alcoholic version of the classic Asahi.",
    price: 6.00,
    category: "Alcohol",
    subcategory: "",
    image: "/ai/alcohol/asahi-zero.jpg",
  },

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
  "Twisted London": ["Smashed Patty Beef Burgers", "TRIPLE Stack Beef Burgers", "Anything But Beef Burgers","Chicken Wings, Tenders & Bites","Sides","Dips","Drinks"],
  "WTF": ["Vegan Beef Burgers", "Vegan Chicken Burgers", "Loaded Sides", "Sides", "Dips", "Drinks"],
  "Kuro Smash": ["Umami Smash Burgers", "Fried Chicken Burgers","Kuro Wings,Tenders & Bites", "Sides", "Dips", "Drinks"],
  "Koreatown": ["Korean Rice Bowles","Korean Chicken Burger","KFC-Korean Fried Chicken","Sides","Dips","Drinks"],
  "Winning Wings": ["Winning Wings", "Chicken Buns","Chicken Tender","Chicken Bites", "Sides", "Sauces", "Drinks"],
  "Wings Of Nature": ["Meal Deals","Tenders","Bites","DrumSticks","Vegan Chicken Buns","Sides","Dips","Drinks","Alcohol","Milkshakes","Desserts"],
  "Vegan Vibes": ["Vegan Oriental Cuisine","Vegan American Cuisine","Vegan Caribbean Cuisine","Meal Deals","Vegan Mexican Cuisine","Vegan Indian Cuisine","Vegan Desserts","Vegan MilkShakes","Drinks","Alcohol"],
  "Bamboo Garden": ["Meal Deals","Oriental Starters","Mains","KidsMenu","Sides","Desserts","Vegan MilkShakes","Soft Drinks","Alcohol","Non Vegan Milkshakes"],
  "Plan Party": ["Meal Deals","Mains","Sides","Dips","Drinks","Dessearts","Alcohol","Milkshakes"],
  "Vegan Caribbean": ["Starters","Mains","Sides","Soft Drinks","Desserts","Alcohol","Vegan Milkshakes"],
 
};
