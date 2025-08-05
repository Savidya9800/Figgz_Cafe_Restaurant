import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Plus, 
  Minus, 
  MapPin, 
  Phone, 
  Clock,
  Filter,
  Search,
  Award,
  Leaf,
  ChefHat,
  ArrowLeft,
  Wine,
  Coffee
} from 'lucide-react';
import { 
  Box, 
  Typography, 
  Chip, 
  IconButton, 
  Badge,
  Snackbar,
  Alert,
  Tooltip
} from '@mui/material';
import { bowenHillsMenuData } from '../../data/bowenHillsMenu';

function BowenHillsMenu() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('breakfast');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDietary, setFilterDietary] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll to hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide main nav when scrolled past hero section (around 250px for smoother transition)
      if (currentScrollY > 250) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setNotification({ open: true, message: `${item.name} added to cart!`, severity: 'success' });
  };

  const removeFromCart = (itemId) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    } else {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const filteredItems = bowenHillsMenuData.categories
    .find(cat => cat.id === selectedCategory)?.items
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDietary = filterDietary === 'all' || 
                            item.dietary.includes(filterDietary);
      return matchesSearch && matchesDietary;
    }) || [];

  const getDietaryIcon = (dietary) => {
    if (dietary.includes('vegan')) return '🌱';
    if (dietary.includes('vegetarian')) return '🥬';
    if (dietary.includes('gluten-free')) return '🌾';
    if (dietary.includes('probiotic')) return '🦠';
    return '';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation - conditionally render based on scroll */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          {/* Floating Food Icons */}
          {['🍸', '🍾', '🧁', '🥂', '🍯', '🫖'].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              style={{
                left: `${10 + (index * 18)}%`,
                top: `${15 + (index % 3) * 25}%`
              }}
              animate={{
                y: [-15, 15, -15],
                rotate: [-10, 10, -10]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          {/* Back Button */}
          <motion.button
            className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-white transition-all duration-300 z-20 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20"
            onClick={() => navigate('/order')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, rgb(147 51 234 / 0.9), rgb(37 99 235 / 0.9))"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '60px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold">Back to Locations</span>
            
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-md"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ zIndex: -1 }}
            />
          </motion.button>

          {/* Cart Button */}
          <motion.div
            className="absolute top-8 right-8"
            whileHover={{ scale: 1.05 }}
          >
            <IconButton
              onClick={() => setShowCart(!showCart)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600"
            >
              <Badge badgeContent={getTotalItems()} color="error">
                <ShoppingCart className="w-6 h-6" />
              </Badge>
            </IconButton>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Coffee className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {bowenHillsMenuData.location.name}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{bowenHillsMenuData.location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{bowenHillsMenuData.location.phone}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Wine className="w-6 h-6 text-purple-400" />
            <span className="text-white text-lg">Artisan Coffee & Fine Dining</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        className={`sticky z-30 bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 ${
          isNavVisible ? 'top-20' : 'top-0'
        } transition-all duration-700 ease-in-out`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search gourmet items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex space-x-2 flex-wrap">
              {bowenHillsMenuData.categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Dietary Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={filterDietary}
                onChange={(e) => setFilterDietary(e.target.value)}
                className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Items</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="probiotic">Probiotic</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Menu Items */}
      <motion.section 
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {bowenHillsMenuData.categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {bowenHillsMenuData.categories.find(cat => cat.id === selectedCategory)?.description}
            </p>
          </motion.div>

          {/* Menu Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  {/* Item Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    
                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>CHEF'S CHOICE</span>
                      </div>
                    )}

                    {/* Dietary Badges */}
                    {item.dietary.length > 0 && (
                      <div className="absolute top-4 right-4 flex space-x-1">
                        {item.dietary.map((diet, dietIndex) => (
                          <Tooltip key={dietIndex} title={diet}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 text-xs">
                              {getDietaryIcon([diet])}
                            </div>
                          </Tooltip>
                        ))}
                      </div>
                    )}

                    {/* Favorite Button */}
                    <motion.button
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </motion.button>
                  </div>

                  {/* Item Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800 leading-tight">
                        {item.name}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600 ml-2">
                        ${item.price}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">({item.rating})</span>
                    </div>

                    {/* Dietary Info */}
                    {item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.dietary.map((diet, dietIndex) => (
                          <Chip
                            key={dietIndex}
                            label={diet}
                            size="small"
                            className="bg-blue-100 text-blue-800"
                            icon={<Leaf className="w-3 h-3" />}
                          />
                        ))}
                      </div>
                    )}

                    {/* Add to Cart Section */}
                    <div className="flex items-center justify-between">
                      {cart.find(cartItem => cartItem.id === item.id) ? (
                        <div className="flex items-center space-x-3">
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="font-semibold">
                            {cart.find(cartItem => cartItem.id === item.id)?.quantity}
                          </span>
                          <motion.button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button
                          onClick={() => addToCart(item)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl text-slate-500">No items found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {!isNavVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5 rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Cart Summary */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold">{getTotalItems()}</div>
                  <div className="text-xs">Items</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">${getTotalPrice()}</div>
                  <div className="text-xs">Total</div>
                </div>
                <motion.button
                  className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Checkout
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={notification.severity} onClose={() => setNotification({ ...notification, open: false })}>
          {notification.message}
        </Alert>
      </Snackbar>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BowenHillsMenu;
