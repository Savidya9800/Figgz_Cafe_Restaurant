import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, Star, Heart, ArrowRight, Utensils } from 'lucide-react';

// Import shop images
import shop01 from '../../assets/shop01.jpg';
import shop02 from '../../assets/shop02.jpg';

function Order() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 2,
      name: "FIGGZ BOWEN HILLS QLD",
      address: "7/16 Thompson Street Bowen Hills",
      city: "Queensland 4006",
      phone: "+61 7 3252 8901",
      email: "bowenhills@figgzcafe.com",
      hours: {
        weekdays: "6:30 AM - 9:30 PM",
        weekends: "7:30 AM - 10:30 PM"
      },
      image: shop01,
      features: ["Dine-in", "Takeaway", "Delivery", "Coffee Bar"],
      rating: 4.9,
      reviews: 189
    },
    {
      id: 1,
      name: "FIGGZ TARINGA QLD",
      address: "4/86 Whitmore Street Taringa",
      city: "Queensland 4068",
      phone: "+61 7 3371 4567",
      email: "taringa@figgzcafe.com",
      hours: {
        weekdays: "7:00 AM - 9:00 PM",
        weekends: "8:00 AM - 10:00 PM"
      },
      image: shop02,
      features: ["Dine-in", "Takeaway", "Delivery", "Catering"],
      rating: 4.8,
      reviews: 245
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Order Now */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111111] via-[#2a2a2a] to-[#111111] overflow-hidden px-4"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#CB3A1A]/10 to-transparent animate-pulse"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-white/70 text-xs sm:text-sm font-medium tracking-wider uppercase">
              HOME / ORDER NOW
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              ORDER NOW
            </h1>
            
            {/* Large Background Text */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A1A]/30 to-[#CB3A1A]/10 select-none pointer-events-none"
                style={{
                  WebkitTextStroke: '1px rgba(203, 58, 26, 0.2)',
                  textShadow: '0 0 50px rgba(203, 58, 26, 0.3)'
                }}
              >
                TASTE NOW
              </motion.h2>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#CB3A1A] to-orange-500 mx-auto mb-6 sm:mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-[#74787C] max-w-2xl mx-auto leading-relaxed px-4"
          >
            Choose your favorite location and experience the authentic flavors of Figgz Cafe. 
            Fresh ingredients, exceptional service, and unforgettable taste await you.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-12"
          >
            <button
              onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#CB3A1A] to-orange-600 rounded-full hover:from-orange-600 hover:to-[#CB3A1A] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Choose Your Location</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <svg
                className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Floating Elements - Hidden on mobile */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 hidden lg:block"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#CB3A1A]/20 to-orange-500/20 blur-xl"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16 hidden lg:block"
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500/20 to-[#CB3A1A]/20 blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at either of our premium locations for an unforgettable dining experience
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                {/* Location Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{location.rating}</span>
                    <span className="text-gray-500 text-xs">({location.reviews})</span>
                  </div>

                  {/* ORDER NOW Button Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <motion.button
                      className="bg-[#CB3A1A] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#B02E15] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (location.id === 1) {
                          navigate('/menu/taringa', { replace: true });
                        } else if (location.id === 2) {
                          navigate('/menu/bowen-hills', { replace: true });
                        }
                      }}
                    >
                      ORDER NOW
                    </motion.button>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6">
                  {/* Location Name */}
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 text-center">
                    {location.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#CB3A1A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">{location.address}</p>
                      <p className="text-gray-600">{location.city}</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#CB3A1A]" />
                      <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#CB3A1A] transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#CB3A1A]" />
                      <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-[#CB3A1A] transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-[#CB3A1A] mt-0.5" />
                    <div>
                      <p className="text-gray-700 font-medium">Mon - Fri: {location.hours.weekdays}</p>
                      <p className="text-gray-700 font-medium">Sat - Sun: {location.hours.weekends}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-[#CB3A1A]/10 text-[#CB3A1A] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#CB3A1A]/5 to-orange-500/5 rounded-2xl p-8 border border-[#CB3A1A]/20">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#CB3A1A] mr-2" />
                <h3 className="text-2xl font-bold text-[#111111]">Can't decide?</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Both locations offer the same exceptional quality and service. Choose the one closest to you or visit both to experience our complete range!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-[#CB3A1A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#B02E15] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Menu
                </motion.button>
                <motion.button
                  className="border-2 border-[#CB3A1A] text-[#CB3A1A] px-6 py-3 rounded-xl font-semibold hover:bg-[#CB3A1A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Make Reservation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Order;
