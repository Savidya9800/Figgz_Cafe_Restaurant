// Import demo images
import demo01 from '../assets/demo01.jpeg';
import demo02 from '../assets/demo02.jpeg';
import demo03 from '../assets/demo03.jpeg';
import demo04 from '../assets/demo04.jpg';
import demo05 from '../assets/demo05.jpg';
import demo06 from '../assets/demo06.jpg';
import demo07 from '../assets/demo07.jpg';
import demo08 from '../assets/demo08.jpg';
import demo09 from '../assets/demo09.jpg';
import demo10 from '../assets/demo10.jpg';
import demo11 from '../assets/demo11.jpg';
import demo12 from '../assets/demo12.jpg';
import demo13 from '../assets/demo13.jpg';

// Menu data for Bowen Hills location
export const bowenHillsMenuData = {
  categories: [
    {
      id: 'breakfast',
      name: 'BREAKFAST',
      description: 'Fresh morning delights to fuel your day',
      items: [
        {
          id: 1,
          name: 'Eggs Benedict',
          description: 'Poached eggs on English muffin with hollandaise sauce and your choice of ham or salmon',
          price: 22.00,
          image: demo04,
          rating: 4.9,
          popular: true,
          dietary: []
        },
        {
          id: 2,
          name: 'French Toast',
          description: 'Brioche french toast with caramelized banana, berry compote, and mascarpone',
          price: 18.50,
          image: demo05,
          rating: 4.8,
          popular: true,
          dietary: ['vegetarian']
        },
        {
          id: 3,
          name: 'Smoked Salmon Bagel',
          description: 'Everything bagel with cream cheese, smoked salmon, capers, and red onion',
          price: 19.00,
          image: demo06,
          rating: 4.7,
          popular: false,
          dietary: []
        },
        {
          id: 4,
          name: 'Chia Pudding',
          description: 'Coconut chia pudding with fresh mango, kiwi, and toasted almonds',
          price: 14.50,
          image: demo07,
          rating: 4.6,
          popular: false,
          dietary: ['vegan', 'gluten-free']
        }
      ]
    },
    {
      id: 'lunch',
      name: 'LUNCH',
      description: 'Satisfying midday meals',
      items: [
        {
          id: 5,
          name: 'Poke Bowl',
          description: 'Fresh tuna, sushi rice, edamame, cucumber, avocado, and sesame dressing',
          price: 24.00,
          image: demo08,
          rating: 4.8,
          popular: true,
          dietary: ['gluten-free']
        },
        {
          id: 6,
          name: 'Gourmet Chicken Wrap',
          description: 'Grilled chicken, avocado, spinach, sun-dried tomatoes in herb tortilla',
          price: 17.50,
          image: demo09,
          rating: 4.7,
          popular: true,
          dietary: []
        },
        {
          id: 7,
          name: 'Beef Brisket Sandwich',
          description: 'Slow-cooked beef brisket with coleslaw and BBQ sauce on sourdough',
          price: 23.00,
          image: demo10,
          rating: 4.8,
          popular: false,
          dietary: []
        },
        {
          id: 8,
          name: 'Mediterranean Salad',
          description: 'Mixed greens, olives, feta, cherry tomatoes, cucumber, and balsamic vinaigrette',
          price: 18.00,
          image: demo11,
          rating: 4.6,
          popular: false,
          dietary: ['vegetarian', 'gluten-free']
        }
      ]
    },
    {
      id: 'dinner',
      name: 'DINNER',
      description: 'Premium evening dining experience',
      items: [
        {
          id: 9,
          name: 'Duck Confit',
          description: 'Slow-cooked duck leg with orange glaze and roasted root vegetables',
          price: 35.00,
          image: demo12,
          rating: 4.9,
          popular: true,
          dietary: ['gluten-free']
        },
        {
          id: 10,
          name: 'Wagyu Steak',
          description: 'Premium wagyu sirloin with garlic mash and red wine jus',
          price: 45.00,
          image: demo13,
          rating: 4.9,
          popular: true,
          dietary: []
        },
        {
          id: 11,
          name: 'Prawn Paella',
          description: 'Traditional Spanish paella with prawns, mussels, and saffron rice',
          price: 31.00,
          image: demo01,
          rating: 4.7,
          popular: false,
          dietary: ['gluten-free']
        },
        {
          id: 12,
          name: 'Eggplant Parmigiana',
          description: 'Layered eggplant with tomato sauce, mozzarella, and fresh basil',
          price: 26.00,
          image: demo02,
          rating: 4.6,
          popular: false,
          dietary: ['vegetarian']
        }
      ]
    },
    {
      id: 'drinks',
      name: 'DRINKS',
      description: 'Artisan beverages and specialty cocktails',
      items: [
        {
          id: 13,
          name: 'Cappuccino',
          description: 'Double shot espresso with steamed milk and foam art',
          price: 5.00,
          image: demo03,
          rating: 4.8,
          popular: true,
          dietary: []
        },
        {
          id: 14,
          name: 'Craft Beer',
          description: 'Local brewery selection of pale ale or lager',
          price: 8.00,
          image: demo04,
          rating: 4.7,
          popular: false,
          dietary: []
        },
        {
          id: 15,
          name: 'Kombucha',
          description: 'House-made ginger and turmeric kombucha',
          price: 7.50,
          image: demo05,
          rating: 4.6,
          popular: false,
          dietary: ['vegan', 'probiotic']
        },
        {
          id: 16,
          name: 'Signature Cocktail',
          description: 'Gin-based cocktail with elderflower and cucumber',
          price: 15.00,
          image: demo06,
          rating: 4.8,
          popular: true,
          dietary: []
        }
      ]
    }
  ],
  location: {
    name: "BOWEN HILLS QLD",
    address: "7/16 Thompson Street Bowen Hills",
    city: "Queensland 4006",
    phone: "(07) 3155 3873",
    email: "bowenhills@figgzcafe.com"
  }
};
