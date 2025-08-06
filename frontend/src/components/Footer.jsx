import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Heart,
  Utensils,
  Star,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle reservations navigation (similar to Nav component's booking logic)
  const handleReservationsClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === "/") {
      // If already on home page, scroll to booking section
      const element = document.querySelector("#booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home page and then scroll to booking
      navigate("/");
      const scrollToBooking = () => {
        const element = document.querySelector("#booking");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToBooking, 200);
        }
      };
      setTimeout(scrollToBooking, 500); // Longer initial delay
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500", name: "Facebook", platform: "facebook" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500", name: "Instagram", platform: "instagram" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400", name: "Twitter", platform: "twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "ℹ️" },
    { name: "Menu", href: "/menu/bowen-hills", icon: "📖" },
    { name: "Reservations", href: "#booking", isSpecial: true, icon: "📅" },
    { name: "Contact", href: "/contact", icon: "📞" },
    { name: "Stories", href: "/stories", icon: "📚" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-3xl sm:text-6xl">
          🍽️
        </div>
        <div className="absolute top-8 sm:top-20 right-8 sm:right-20 text-2xl sm:text-4xl">
          ☕
        </div>
        <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 text-3xl sm:text-5xl">
          🥘
        </div>
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-2xl sm:text-3xl">
          🍷
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute animate-pulse">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content - Mobile Layout matching Desktop */}
        <div className="block sm:hidden">
          {/* Mobile Layout - Same as Desktop */}

          {/* Top Section - Restaurant Brand Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-amber-400/20 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Figgz Cafe
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-gray-300 text-xs ml-2">4.7/5 Rating</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the finest dining with our authentic flavors and exceptional service.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 mb-4 border border-gray-700/50 shadow-lg"
          >
            <h4 className="text-orange-400 font-bold text-base mb-5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.isSpecial ? handleReservationsClick : undefined}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bowen Hills Location */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-amber-400/5 to-orange-500/10 backdrop-blur-sm rounded-xl p-5 mb-4 border border-amber-400/30 shadow-lg"
          >
            <h4 className="text-amber-400 font-bold text-base mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Bowen Hills Location
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">7/16 Thompson Street</p>
                  <p className="text-gray-400">Bowen Hills 4006</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+0731553873"
                  className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium"
                >
                  (07) 3155 3873
                </a>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@figgzcafe.com"
                  className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium break-all"
                >
                  info@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Taringa Location */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-amber-400/5 to-orange-500/10 backdrop-blur-sm rounded-xl p-5 mb-4 border border-amber-400/30 shadow-lg"
          >
            <h4 className="text-amber-400 font-bold text-base mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Taringa Location
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">4/86 Whitmore Street</p>
                  <p className="text-gray-400">Taringa 4068</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+0738704589"
                  className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium"
                >
                  (07) 3870 4589
                </a>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-400/5 transition-colors">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:taringa@figgzcafe.com"
                  className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium break-all"
                >
                  taringa@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 shadow-lg"
          >
            <div className="text-center mb-5">
              <h4 className="text-amber-400 font-bold text-lg mb-2 flex items-center justify-center">
                <span className="text-xl mr-2">📱</span>
                Follow Our Journey
              </h4>
              <p className="text-gray-300 text-sm">
                Stay connected for daily deliciousness!
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-xl border border-gray-600/30 group overflow-hidden`}
                  whileHover={{ y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  {/* Icon with enhanced styling */}
                  <social.icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-200" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-colors duration-300"></div>
                  
                  {/* Social platform labels */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Additional social engagement text */}
            <div className="mt-5 text-center">
              <p className="text-gray-400 text-xs">
                Join our community of food lovers! 
                <span className="text-amber-400 ml-1">✨</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 mb-4 sm:mb-6 lg:mb-8">
          {/* Restaurant Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 sm:space-y-3 lg:space-y-4 text-left"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Figgz Cafe
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base line-clamp-3">
              Experience the finest dining with our authentic flavors and
              exceptional service.
            </p>
            <div className="flex flex-col items-start space-y-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-gray-300 text-xs sm:text-sm">
                4.7/5 Rating
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-orange-400">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.isSpecial ? handleReservationsClick : undefined}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm lg:text-base py-1"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-orange-400 transition-all duration-300 mr-2"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-amber-400">
              Bowen Hills{" "}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                    7/16 Thompson Street
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                    Bowen Hills 4006
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+0731553873"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all"
                >
                  (07) 3155 3873
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@figgzcafe.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all"
                >
                  info@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Taringa Location */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-amber-400">
              Taringa{" "}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                    4/86 Whitmore Street
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                    Taringa 4068
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+0738704589"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all"
                >
                  (07) 3870 4589
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:taringa@figgzcafe.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all"
                >
                  taringa@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section - Mobile Creative */}
        <motion.div variants={itemVariants} className="mt-6 block sm:hidden">
          <div className="bg-gradient-to-br from-amber-400/5 to-orange-500/5 backdrop-blur-md rounded-2xl p-5 border border-amber-400/20">
            F
            <div className="text-left">
              <h4 className="text-amber-400 font-bold text-lg mb-2 flex items-center">
                📧 Stay in the Loop
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Get exclusive offers & culinary updates!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm"
                />
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Subscribe to Deliciousness</span>
                  <span>✨</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Newsletter */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-4 sm:pt-6 mb-4 sm:mb-6 hidden sm:block"
        >
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col items-start">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">
                Follow Us
              </h4>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="relative w-full px-3 py-2 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm text-xs sm:text-sm"
                  />
                </div>
                <motion.button
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-3 sm:pt-4 text-center"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-xs">
              <span>&copy; {currentYear} Figgz Cafe. All rights reserved.</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs order-first md:order-none">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-red-500 fill-current" />
              </motion.div>
              <span>for food lovers</span>
            </div>
            <div className="flex justify-center md:justify-end space-x-3 text-xs">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
