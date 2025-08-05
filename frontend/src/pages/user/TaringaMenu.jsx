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
  ArrowLeft
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
import { taringaMenuData } from '../../data/taringaMenu';

function TaringaMenu() {
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

  const filteredItems = taringaMenuData.categories
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
        className="relative h-80 sm:h-96 bg-gradient-to-r from-[#111111] via-[#2a2a2a] to-[#111111] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#CB3A1A]/20 to-transparent animate-pulse"></div>
          {/* Floating Food Icons */}
          {['🍽️', '☕', '🥘', '🍷', '🥗', '🍰'].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              style={{
                left: `${15 + (index * 15)}%`,
                top: `${20 + (index % 2) * 40}%`
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
          {/* Back Button - Hidden on mobile */}
          <motion.button
            className="hidden sm:flex absolute top-6 left-4 sm:top-8 sm:left-8 items-center space-x-2 text-white hover:text-white transition-all duration-300 z-20 bg-gradient-to-r from-[#CB3A1A]/80 to-orange-600/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20"
            onClick={() => navigate('/order')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, rgb(203 58 26 / 0.9), rgb(234 88 12 / 0.9))"
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
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
            <span className="font-semibold text-sm sm:text-base">Back to Locations</span>
            
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#CB3A1A]/30 to-orange-400/30 blur-md"
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
            className="absolute top-6 right-4 sm:top-8 sm:right-8"
            whileHover={{ scale: 1.05 }}
          >
            <IconButton
              onClick={() => setShowCart(!showCart)}
              className="bg-[#CB3A1A] text-white hover:bg-[#B02E15]"
              size="small"
            >
              <Badge badgeContent={getTotalItems()} color="error">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              </Badge>
            </IconButton>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#CB3A1A] to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
              {taringaMenuData.location.name}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-300 text-sm sm:text-base px-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-center sm:text-left">{taringaMenuData.location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{taringaMenuData.location.phone}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 px-4"
          >
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="text-white text-base sm:text-lg text-center sm:text-left">Premium Dining Experience</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        className={`sticky z-30 bg-white/95 backdrop-blur-md shadow-lg border-b ${
          isNavVisible ? 'top-20' : 'top-0'
        } transition-all duration-700 ease-in-out`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col gap-3 sm:gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#CB3A1A] focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex space-x-1 sm:space-x-2 flex-wrap justify-center w-full overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 sm:space-x-2 min-w-max px-2 sm:px-0">
                {taringaMenuData.categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap text-xs sm:text-base flex-shrink-0 ${
                      selectedCategory === category.id
                        ? 'bg-[#CB3A1A] text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Dietary Filter */}
            <div className="flex items-center space-x-2 w-full justify-center">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
              <select
                value={filterDietary}
                onChange={(e) => setFilterDietary(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB3A1A] text-xs sm:text-base max-w-xs"
              >
                <option value="all">All Items</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Menu Items */}
      <motion.section 
        className="py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-3 sm:mb-4 px-4">
              {taringaMenuData.categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {taringaMenuData.categories.find(cat => cat.id === selectedCategory)?.description}
            </p>
          </motion.div>

          {/* Menu Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Item Image */}
                  <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    
                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#CB3A1A] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>POPULAR</span>
                      </div>
                    )}

                    {/* Dietary Badges */}
                    {item.dietary.length > 0 && (
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-1">
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
                      className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </motion.button>
                  </div>

                  {/* Item Details */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] leading-tight flex-1 pr-2">
                        {item.name}
                      </h3>
                      <div className="text-xl sm:text-2xl font-bold text-[#CB3A1A]">
                        ${item.price}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(item.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600">({item.rating})</span>
                    </div>

                    {/* Dietary Info */}
                    {item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                        {item.dietary.map((diet, dietIndex) => (
                          <Chip
                            key={dietIndex}
                            label={diet}
                            size="small"
                            className="bg-green-100 text-green-800 text-xs"
                            icon={<Leaf className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                          />
                        ))}
                      </div>
                    )}

                    {/* Add to Cart Section */}
                    <div className="flex items-center justify-between">
                      {cart.find(cartItem => cartItem.id === item.id) ? (
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.button>
                          <span className="font-semibold text-sm sm:text-base">
                            {cart.find(cartItem => cartItem.id === item.id)?.quantity}
                          </span>
                          <motion.button
                            onClick={() => addToCart(item)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#CB3A1A] text-white flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button
                          onClick={() => addToCart(item)}
                          className="flex-1 bg-gradient-to-r from-[#CB3A1A] to-orange-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-[#CB3A1A] transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
              <p className="text-xl text-gray-500">No items found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Floating Cart Summary */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
          >
            <motion.div
              className="bg-[#CB3A1A] text-white p-3 sm:p-4 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold">{getTotalItems()}</div>
                  <div className="text-xs">Items</div>
                </div>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold">${getTotalPrice()}</div>
                  <div className="text-xs">Total</div>
                </div>
                <motion.button
                  className="bg-white text-[#CB3A1A] px-4 py-2 sm:px-6 sm:py-2 rounded-xl font-semibold text-sm sm:text-base"
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

export default TaringaMenu;
