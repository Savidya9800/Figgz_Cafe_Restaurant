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

// Menu data for Taringa location
export const taringaMenuData = {
  categories: [
    {
      id: 'breakfast',
      name: 'BREAKFAST',
      description: 'Start your day with our fresh breakfast options',
      items: [
        {
          id: 1,
          name: 'Classic Avocado Toast',
          description: 'Sourdough bread topped with smashed avocado, cherry tomatoes, feta cheese, and poached egg',
          price: 18.50,
          image: demo01,
          rating: 4.8,
          popular: true,
          dietary: ['vegetarian']
        },
        {
          id: 2,
          name: 'Big Breakfast Platter',
          description: 'Scrambled eggs, bacon, sausage, grilled tomato, mushrooms, hash browns, and toast',
          price: 24.00,
          image: demo02,
          rating: 4.9,
          popular: true,
          dietary: []
        },
        {
          id: 3,
          name: 'Pancake Stack',
          description: 'Fluffy pancakes with fresh berries, maple syrup, and whipped cream',
          price: 16.50,
          image: demo03,
          rating: 4.7,
          popular: false,
          dietary: ['vegetarian']
        },
        {
          id: 4,
          name: 'Acai Bowl',
          description: 'Organic acai with granola, fresh fruits, coconut flakes, and honey',
          price: 15.00,
          image: demo04,
          rating: 4.6,
          popular: false,
          dietary: ['vegan', 'gluten-free']
        }
      ]
    },
    {
      id: 'lunch',
      name: 'LUNCH',
      description: 'Hearty and delicious lunch options',
      items: [
        {
          id: 5,
          name: 'Grilled Chicken Caesar Salad',
          description: 'Crisp romaine lettuce, grilled chicken, parmesan, croutons, and Caesar dressing',
          price: 19.50,
          image: demo05,
          rating: 4.8,
          popular: true,
          dietary: ['gluten-free']
        },
        {
          id: 6,
          name: 'Wagyu Beef Burger',
          description: 'Premium wagyu beef patty, lettuce, tomato, cheese, and special sauce with fries',
          price: 28.00,
          image: demo06,
          rating: 4.9,
          popular: true,
          dietary: []
        },
        {
          id: 7,
          name: 'Salmon Quinoa Bowl',
          description: 'Grilled salmon with quinoa, roasted vegetables, and tahini dressing',
          price: 25.00,
          image: demo07,
          rating: 4.7,
          popular: false,
          dietary: ['gluten-free', 'healthy']
        },
        {
          id: 8,
          name: 'Vegetarian Buddha Bowl',
          description: 'Quinoa, roasted chickpeas, avocado, sweet potato, and green goddess dressing',
          price: 21.00,
          image: demo08,
          rating: 4.6,
          popular: false,
          dietary: ['vegan', 'gluten-free']
        }
      ]
    },
    {
      id: 'dinner',
      name: 'DINNER',
      description: 'Exquisite dinner selections',
      items: [
        {
          id: 9,
          name: 'Pan-Seared Barramundi',
          description: 'Fresh barramundi with roasted vegetables and lemon herb butter',
          price: 32.00,
          image: demo09,
          rating: 4.9,
          popular: true,
          dietary: ['gluten-free']
        },
        {
          id: 10,
          name: 'Lamb Rack',
          description: 'Herb-crusted lamb rack with rosemary jus and seasonal vegetables',
          price: 38.00,
          image: demo10,
          rating: 4.8,
          popular: true,
          dietary: []
        },
        {
          id: 11,
          name: 'Seafood Linguine',
          description: 'Fresh prawns, scallops, and calamari in white wine garlic sauce',
          price: 29.50,
          image: demo11,
          rating: 4.7,
          popular: false,
          dietary: []
        },
        {
          id: 12,
          name: 'Mushroom Risotto',
          description: 'Creamy arborio rice with mixed mushrooms and truffle oil',
          price: 24.00,
          image: demo12,
          rating: 4.6,
          popular: false,
          dietary: ['vegetarian', 'gluten-free']
        }
      ]
    },
    {
      id: 'drinks',
      name: 'DRINKS',
      description: 'Refreshing beverages and specialty coffees',
      items: [
        {
          id: 13,
          name: 'Flat White',
          description: 'Double shot espresso with steamed milk',
          price: 4.50,
          image: demo13,
          rating: 4.8,
          popular: true,
          dietary: []
        },
        {
          id: 14,
          name: 'Fresh Orange Juice',
          description: 'Freshly squeezed orange juice',
          price: 6.00,
          image: demo01,
          rating: 4.7,
          popular: false,
          dietary: ['vegan']
        },
        {
          id: 15,
          name: 'Green Smoothie',
          description: 'Spinach, apple, banana, and coconut water',
          price: 8.50,
          image: demo02,
          rating: 4.6,
          popular: false,
          dietary: ['vegan', 'healthy']
        },
        {
          id: 16,
          name: 'House Wine',
          description: 'Selection of red or white wine',
          price: 9.00,
          image: demo03,
          rating: 4.5,
          popular: false,
          dietary: []
        }
      ]
    }
  ],
  location: {
    name: "FIGGZ TARINGA QLD",
    address: "4/86 Whitmore Street Taringa",
    city: "Queensland 4068",
    phone: "+61 7 3371 4567",
    email: "taringa@figgzcafe.com"
  }
};
