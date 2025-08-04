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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🍽️</div>
        <div className="absolute top-20 right-20 text-4xl">☕</div>
        <div className="absolute bottom-20 left-20 text-5xl">🥘</div>
        <div className="absolute bottom-10 right-10 text-3xl">🍷</div>
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
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Restaurant Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Figgz Cafe
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the finest dining with our authentic flavors, warm ambiance, 
              and exceptional service. Where every meal becomes a cherished memory.
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-gray-300">(4.9/5 Rating)</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-orange-400 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Gourmet Street</p>
                  <p className="text-gray-300">Foodie District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@figgjcafe.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  info@figgzcafe.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-gray-300 font-semibold">Monday - Friday</p>
                  <p className="text-gray-400 text-sm">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-gray-300 font-semibold">Saturday - Sunday</p>
                  <p className="text-gray-400 text-sm">10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-lg border border-amber-400/20">
                <p className="text-amber-400 text-sm font-semibold">Happy Hour</p>
                <p className="text-gray-300 text-sm">Mon-Fri, 3:00 PM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <GlowingEffect
                    variant="default"
                    proximity={100}
                    spread={30}
                    blur={2}
                    glow={true}
                    disabled={false}
                    className="rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="relative px-4 py-2 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm"
                  />
                </div>
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
          className="border-t border-gray-700 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Figgz Cafe Restaurant. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>for food lovers</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer