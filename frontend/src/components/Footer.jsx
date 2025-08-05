import React from 'react'
import { motion } from 'framer-motion'
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
  Star
} from 'lucide-react'
import { GlowingEffect } from './ui/aceternity/glowing-effect'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reservations", href: "#reservations" },
    { name: "Contact", href: "#contact" }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-3xl sm:text-6xl">🍽️</div>
        <div className="absolute top-8 sm:top-20 right-8 sm:right-20 text-2xl sm:text-4xl">☕</div>
        <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 text-3xl sm:text-5xl">🥘</div>
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-2xl sm:text-3xl">🍷</div>
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
                animationDuration: `${3 + Math.random() * 2}s`
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
        {/* Main Footer Content - Creative Mobile Layout */}
        <div className="block sm:hidden">
          {/* Mobile Creative Layout */}
          
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
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-gray-300 text-xs ml-2">4.9/5</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Experience the finest dining with authentic flavors & exceptional service"
            </p>
          </motion.div>

          {/* Two Column Cards Layout */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            
            {/* Quick Links Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
            >
              <h4 className="text-orange-400 font-bold text-sm mb-3 flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.slice(0, 4).map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-400 transition-colors text-xs py-1 hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
            >
              <h4 className="text-amber-400 font-bold text-sm mb-3 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Reach Us
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-gray-300 text-xs hover:text-amber-400 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@figgzcafe.com" className="text-gray-300 text-xs hover:text-amber-400 transition-colors">
                    hello@figgzcafe.com
                  </a>
                </div>
                <div className="flex items-start space-x-2 mt-2">
                  <MapPin className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-xs">
                    <p>123 Gourmet Street</p>
                    <p>Foodie District, City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hours & Social Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-l from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30"
          >
            <div className="grid grid-cols-1 gap-4">
              
              {/* Opening Hours */}
              <div>
                <h4 className="text-amber-400 font-bold text-sm mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  We're Open
                </h4>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-300 font-medium">Mon - Fri</span>
                  <span className="text-gray-400">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="text-gray-300 font-medium">Sat - Sun</span>
                  <span className="text-gray-400">10:00 AM - 11:00 PM</span>
                </div>
                <div className="bg-amber-400/10 rounded-lg p-2 border border-amber-400/20">
                  <p className="text-amber-400 text-xs font-semibold">🍹 Happy Hour: Mon-Fri, 3-6 PM</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-gray-700/50 pt-4">
                <h4 className="text-amber-400 font-bold text-sm mb-3">Follow Our Journey</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-xl bg-gray-700/50 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg border border-gray-600/30`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 mb-4 sm:mb-6 lg:mb-8">
          
          {/* Restaurant Info */}
          <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 lg:space-y-4 text-left">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Figgz Cafe
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base line-clamp-3">
              Experience the finest dining with our authentic flavors and exceptional service.
            </p>
            <div className="flex flex-col items-start space-y-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-300 text-xs sm:text-sm">4.9/5 Rating</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-orange-400">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm lg:text-base"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-orange-400 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-amber-400">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">123 Gourmet Street</p>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Foodie District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@figgjcafe.com" className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm lg:text-base break-all">
                  info@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={itemVariants} className="text-left">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-amber-400">Opening Hours</h4>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold text-xs sm:text-sm lg:text-base">Mon - Fri</p>
                  <p className="text-gray-400 text-xs sm:text-sm">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold text-xs sm:text-sm lg:text-base">Sat - Sun</p>
                  <p className="text-gray-400 text-xs sm:text-sm">10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 p-2 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-lg border border-amber-400/20">
                <p className="text-amber-400 text-xs font-semibold">Happy Hour: Mon-Fri, 3-6 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section - Mobile Creative */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 block sm:hidden"
        >
          <div className="bg-gradient-to-br from-amber-400/5 to-orange-500/5 backdrop-blur-md rounded-2xl p-5 border border-amber-400/20">
            <div className="text-left">
              <h4 className="text-amber-400 font-bold text-lg mb-2 flex items-center">
                📧 Stay in the Loop
              </h4>
              <p className="text-gray-300 text-sm mb-4">Get exclusive offers & culinary updates!</p>
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
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">Follow Us</h4>
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
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">Stay Updated</h4>
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
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer