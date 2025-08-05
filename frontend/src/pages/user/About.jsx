import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import { HoverEffect } from '../../components/ui/aceternity/card-hover-effect';

// Import demo images
import demo10 from '../../assets/demo10.jpg';
import demo01 from '../../assets/demo01.jpeg';
import demo02 from '../../assets/demo02.jpeg';
import demo03 from '../../assets/demo03.jpeg';
import demo04 from '../../assets/demo04.jpg';
import demo05 from '../../assets/demo05.jpg';
import demo06 from '../../assets/demo06.jpg';
import demo11 from '../../assets/demo11.jpg';
import demo12 from '../../assets/demo12.jpg';
import demo13 from '../../assets/demo13.jpg';

function About() {
  const navigate = useNavigate();

  // Food gallery items for hover effect
  const foodGalleryItems = [
    {
      title: "Signature Dishes",
      description: "Explore our chef's special creations made with the finest ingredients and traditional recipes.",
      link: "#",
      image: demo01
    },
    {
      title: "Fresh Ingredients",
      description: "We source only the freshest, locally-grown ingredients to ensure the highest quality meals.",
      link: "#",
      image: demo02
    },
    {
      title: "Artisan Breads",
      description: "Our bakery crafts fresh breads daily using time-honored techniques and premium flour.",
      link: "#",
      image: demo03
    },
    {
      title: "Gourmet Coffee",
      description: "Start your day with our expertly roasted coffee beans sourced from premium farms worldwide.",
      link: "#",
      image: demo04
    },
    {
      title: "Sweet Delights",
      description: "Indulge in our house-made desserts and pastries, perfect for any sweet craving.",
      link: "#",
      image: demo05
    },
    {
      title: "Seasonal Specials",
      description: "Discover our rotating menu of seasonal dishes that celebrate the best of each season.",
      link: "#",
      image: demo06
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - About Us */}
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
              HOME / ABOUT US
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
              ABOUT US
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
                OUR STORY
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
            Discover the passion behind Figgz Cafe Restaurant. From our humble beginnings 
            to becoming a beloved culinary destination, learn about our commitment to excellence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-12"
          >
            <button
              onClick={() => {
                const aboutSection = document.querySelector('#about-content')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#CB3A1A] to-orange-600 rounded-full hover:from-orange-600 hover:to-[#CB3A1A] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Learn More</span>
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

      {/* Second Section - About Content with Demo10 */}
      <section id="about-content" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-2 bg-[#CB3A1A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full">
                  Restaurant Style
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
                About Us
              </h2>
              
              <div className="text-gray-600 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. 
                  Mauris porttitor diam at fringilla tempor. Integer molestie rhoncus nisl 
                  a euismod. Etiam scelerisque eu enim et vestibulum.
                </p>
                <p>
                  Mauris finibus, eros a faucibus varius, dui risus mattis massa, sed 
                  lobortis ante ante eget justo. Nam eu dolor lorem. Praesent blandit leo 
                  sit amet velit accumsan ultrices.
                </p>
                <p>
                  Vestibulum nec libero vel sapien dictum euismod eu ac justo. Our passion 
                  for culinary excellence drives everything we do, from sourcing the finest 
                  ingredients to creating memorable dining experiences.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#CB3A1A] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={demo10}
                  alt="Restaurant Interior"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements - Hidden on mobile */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#CB3A1A] rounded-full opacity-10 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-10 hidden sm:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Section - Food Gallery with Hover Effects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#CB3A1A]/20 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-[#CB3A1A]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-amber-200/10 to-orange-200/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-2 bg-[#CB3A1A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full">
                Food Gallery
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
              FOOD GALLERY POSTS
            </h2>
            
            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            </div>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Discover our culinary masterpieces through our food gallery. Each dish tells a story 
              of passion, creativity, and the finest ingredients crafted by our expert chefs.
            </p>
          </motion.div>

          {/* Hover Effect Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HoverEffect items={foodGalleryItems} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
          </motion.div>
        </div>
      </section>

      {/* Fourth Section - Discover Our Category */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-2 bg-[#CB3A1A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full">
                Make Reservation
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
              DISCOVER OUR CATEGORY
            </h2>
            
            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            </div>
          </motion.div>

          {/* Category Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Quality Cheese Card */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img 
                    src={demo11} 
                    alt="Quality Cheese"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3 sm:mb-4">
                  QUALITY CHEES
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Consectetur adipiscing elit quspue egert maximus 
                  velit, non eleifend libero cursbler dignissim mauris 
                  sed leo cursus
                </p>
              </div>
            </div>

            {/* Crunchy French Fry Card */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img 
                    src={demo12} 
                    alt="Crunchy French Fry"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3 sm:mb-4">
                  CRUNCHY FRENCH FRY
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Consectetur adipiscing elit quspue egert maximus 
                  velit, non eleifend libero cursbler dignissim mauris 
                  sed leo cursus
                </p>
              </div>
            </div>

            {/* 100% Halal Meat Card */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img 
                    src={demo13} 
                    alt="100% Halal Meat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3 sm:mb-4">
                  100% HALAL MEAT
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Consectetur adipiscing elit quspue egert maximus 
                  velit, non eleifend libero cursbler dignissim mauris 
                  sed leo cursus
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fifth Section - Table Booking CTA */}
      <section className="py-8 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#CB3A1A]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-4 lg:mb-0"
            >
              <div className="mb-2 sm:mb-3">
                <span className="text-white/80 text-xs sm:text-xs font-medium tracking-wider uppercase">
                  BOOK A TABLE FOR YOUR AND FAMILY MEMBERS
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                NEED A TABLE ON COFFEE HOUSE
              </h2>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => {
                  // Navigate to home page and scroll to booking section (same as Nav.jsx)
                  navigate('/');
                  // Use a longer delay and retry mechanism to ensure page loads
                  const scrollToBooking = () => {
                    const element = document.querySelector("#booking");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                    } else {
                      // If element not found, try again after a short delay
                      setTimeout(scrollToBooking, 200);
                    }
                  };
                  setTimeout(scrollToBooking, 500); // Longer initial delay
                }}
                className="group relative inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-[#CB3A1A] bg-white border-2 border-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="relative z-10">BOOK A TABLE</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
