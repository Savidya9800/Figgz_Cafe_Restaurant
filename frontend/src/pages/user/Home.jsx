import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Nav'
import Footer from '../../components/Footer'
import { BackgroundBeamsWithCollision } from '../../components/ui/aceternity/background-beams-with-collision'

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    '/src/assets/demo07.jpg',
    '/src/assets/demo08.jpg',
    '/src/assets/demo09.jpg'
  ]

  // Auto-change hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Section 1 */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Images with Parallax */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.1
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img 
                src={image} 
                alt={`Restaurant ambiance ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-figgz-primary rounded-full"
          />
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border border-white rounded-full"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mb-6"
                >
                  <span className="text-figgz-primary text-lg font-medium tracking-wider uppercase">
                    Welcome to Figgz Cafe
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Exquisite Flavors
                  <br />
                  <span className="text-figgz-primary">Unforgettable</span>
                  <br />
                  Moments
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg"
                >
                  Discover a culinary journey where passion meets perfection. 
                  Every dish tells a story, every bite creates a memory.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-figgz-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-figgz-primary/25 transition-all duration-300"
                  >
                    Make Reservation
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-figgz-primary transition-all duration-300"
                  >
                    View Menu
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Content - Floating Cards */}
              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="relative"
                >
                  {/* Floating Card 1 */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-64"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-figgz-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">★</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-figgz-secondary">Premium Quality</h4>
                        <p className="text-figgz-paragraph text-sm">Fresh ingredients daily</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-32 left-0 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-64"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-figgz-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">👨‍🍳</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-figgz-secondary">Expert Chefs</h4>
                        <p className="text-figgz-paragraph text-sm">Michelin trained team</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section - Section 2 */}
      <section id="welcome" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/src/assets/demo04.jpg" 
                  alt="Restaurant interior"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-figgz-primary text-white p-8 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-figgz-primary text-lg font-medium tracking-wider uppercase"
                >
                  About Our Restaurant
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold text-figgz-secondary mt-4 leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Welcome to Our
                  <br />
                  <span className="text-figgz-primary">Luxury Restaurant</span>
                </motion.h2>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-figgz-paragraph text-lg leading-relaxed"
              >
                The scallops were perfectly cooked, tender, and flavorful, paired beautifully 
                with a creamy risotto and seasonal vegetables. The presentation was artful, 
                showcasing the chef's attention to detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-4 bg-figgz-primary text-white px-6 py-4 rounded-2xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <div className="text-sm opacity-90">Hotline 24/7</div>
                    <div className="font-bold">+256 3254-2568</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-figgz-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Make Reservation
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-figgz-primary">1000+</div>
                  <div className="text-figgz-paragraph">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-figgz-primary">50+</div>
                  <div className="text-figgz-paragraph">Signature Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-figgz-primary">15+</div>
                  <div className="text-figgz-paragraph">Expert Chefs</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Section 3 */}
      <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" 
                    fill="currentColor" className="text-figgz-primary"/>
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" 
                      strokeWidth="2" className="text-figgz-primary"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" 
                      strokeWidth="2" className="text-figgz-primary"/>
            </svg>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="bg-figgz-primary text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-figgz-secondary mt-6 mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Excellence in Every Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-figgz-paragraph max-w-3xl mx-auto mb-8"
            >
              Discover our comprehensive range of culinary services designed to create 
              unforgettable dining experiences for every occasion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-8 h-0.5 bg-figgz-primary"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Service 1 - Fine Dining */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                    <img 
                      src="/src/assets/demo05.jpg" 
                      alt="Fine Dining Experience"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-figgz-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-figgz-secondary transition-colors duration-300"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-figgz-secondary mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Fine Dining Experience
                    </h3>
                    
                    <p className="text-figgz-paragraph leading-relaxed">
                      Indulge in our exquisite fine dining experience with carefully crafted dishes 
                      that showcase the finest ingredients and culinary artistry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 - Private Events */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                    <img 
                      src="/src/assets/demo06.jpg" 
                      alt="Private Events"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-figgz-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-figgz-secondary transition-colors duration-300"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-figgz-secondary mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Private Events & Catering
                    </h3>
                    
                    <p className="text-figgz-paragraph leading-relaxed">
                      Host your special occasions with our exclusive private dining and 
                      professional catering services for memorable celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 - Chef's Table */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                    <img 
                      src="/src/assets/demo01.jpeg" 
                      alt="Chef's Table Experience"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-figgz-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-figgz-secondary transition-colors duration-300"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/>
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-figgz-secondary mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Chef's Table Experience
                    </h3>
                    
                    <p className="text-figgz-paragraph leading-relaxed">
                      Enjoy an intimate culinary journey at our chef's table with personalized 
                      menus and direct interaction with our master chefs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-figgz-primary text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-figgz-primary/25 transition-all duration-300 inline-flex items-center gap-3"
            >
              Explore All Services
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Special Menu Section - Section 4 */}
      <section id="special" className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            {/* Decorative Dots Pattern */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-figgz-primary">
              {Array.from({ length: 64 }, (_, i) => {
                const row = Math.floor(i / 8)
                const col = i % 8
                return (
                  <circle 
                    key={i}
                    cx={10 + col * 12} 
                    cy={10 + row * 12} 
                    r="1.5" 
                    fill="currentColor"
                  />
                )
              })}
            </svg>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-figgz-secondary mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Special
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-end mb-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 text-figgz-primary font-semibold px-4 py-2 rounded-lg hover:bg-figgz-primary/10 transition-all duration-300 text-lg cursor-pointer"
              >
                <span className="w-3 h-3 bg-figgz-primary rounded-full"></span>
                View The Menu
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Special Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {/* Menu Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Food Image Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src="/src/assets/demo02.jpeg" 
                        alt="Grilled Seafood Medley"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Price Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 bg-figgz-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      $45
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Grilled Seafood Medley
                    </h3>
                    <p className="text-figgz-paragraph text-sm leading-relaxed">
                      Fresh catch of the day with seasonal vegetables and aromatic herbs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Menu Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Food Image Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src="/src/assets/demo03.jpeg" 
                        alt="Garden Fresh Salad"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Price Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 bg-figgz-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      $45
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Garden Fresh Salad
                    </h3>
                    <p className="text-figgz-paragraph text-sm leading-relaxed">
                      Organic greens with cherry tomatoes and balsamic vinaigrette
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Menu Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Food Image Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src="/src/assets/demo04.jpg" 
                        alt="Prime Beef Steak"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Price Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 bg-figgz-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      $45
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Prime Beef Steak
                    </h3>
                    <p className="text-figgz-paragraph text-sm leading-relaxed">
                      Perfectly grilled prime cut with roasted vegetables and red wine jus
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Menu Items Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Menu Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Food Image Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src="/src/assets/demo05.jpg" 
                        alt="Lobster Thermidor"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Price Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 bg-figgz-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      $65
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Lobster Thermidor
                    </h3>
                    <p className="text-figgz-paragraph text-sm leading-relaxed">
                      Classic French preparation with creamy sauce and fresh herbs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Menu Item 5 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Food Image Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src="/src/assets/demo06.jpg" 
                        alt="Chocolate Soufflé"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Price Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 bg-figgz-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      $25
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Chocolate Soufflé
                    </h3>
                    <p className="text-figgz-paragraph text-sm leading-relaxed">
                      Decadent warm chocolate soufflé with vanilla ice cream
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-figgz-primary text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-figgz-primary/25 transition-all duration-300 inline-flex items-center gap-3"
            >
              View Full Menu
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials Section - Section 5 */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50/30 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-figgz-primary">
              <path d="M50 10 C70 30, 70 70, 50 90 C30 70, 30 30, 50 10 Z" fill="currentColor" opacity="0.1"/>
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-5">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-figgz-primary">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.2"/>
            </svg>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-figgz-primary text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Client Testimonial
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-figgz-secondary mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Our Customer Feedbacks
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-12"
            >
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-8 h-0.5 bg-figgz-primary"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-figgz-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-figgz-paragraph text-lg leading-relaxed mb-8">
                    "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service."
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/src/assets/demo01.jpeg" 
                        alt="Amanda Martin"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-figgz-secondary text-lg">Amanda Martin</h4>
                      <p className="text-figgz-paragraph text-sm">Food Reviewer</p>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-figgz-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-figgz-paragraph text-lg leading-relaxed mb-8">
                    "Outstanding culinary experience! Every dish was a masterpiece, from presentation to flavor. The staff's attention to detail and warm hospitality made our evening truly special. Highly recommended for special occasions."
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/src/assets/demo02.jpeg" 
                        alt="David Chen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-figgz-secondary text-lg">David Chen</h4>
                      <p className="text-figgz-paragraph text-sm">Food Blogger</p>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-figgz-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-figgz-paragraph text-lg leading-relaxed mb-8">
                    "Exceptional dining experience from start to finish. The ambiance was perfect for our anniversary dinner, and every course exceeded our expectations. The wine pairing suggestions were spot-on. Will definitely return!"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/src/assets/demo03.jpeg" 
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-figgz-secondary text-lg">Sarah Johnson</h4>
                      <p className="text-figgz-paragraph text-sm">Travel Writer</p>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-figgz-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-figgz-paragraph text-lg leading-relaxed mb-8">
                    "A culinary gem in the heart of the city! The chef's innovative approach to traditional dishes creates an unforgettable experience. The service team was knowledgeable and attentive without being intrusive."
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/src/assets/demo04.jpg" 
                        alt="Michael Rodriguez"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-figgz-secondary text-lg">Michael Rodriguez</h4>
                      <p className="text-figgz-paragraph text-sm">Restaurant Critic</p>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold text-figgz-primary mb-2"
                >
                  4.9
                </motion.div>
                <p className="text-figgz-paragraph font-medium">Average Rating</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl font-bold text-figgz-primary mb-2"
                >
                  2,500+
                </motion.div>
                <p className="text-figgz-paragraph font-medium">Happy Customers</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-bold text-figgz-primary mb-2"
                >
                  1,200+
                </motion.div>
                <p className="text-figgz-paragraph font-medium">Reviews</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl font-bold text-figgz-primary mb-2"
                >
                  95%
                </motion.div>
                <p className="text-figgz-paragraph font-medium">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-figgz-primary text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-figgz-primary/25 transition-all duration-300 inline-flex items-center gap-3"
            >
              Read More Reviews
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-figgz-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-figgz-primary text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Book a Table
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-figgz-secondary mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Make Reservation
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-12"
            >
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-8 h-0.5 bg-figgz-primary"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
              <div className="w-2 h-2 bg-figgz-primary rounded-full"></div>
            </motion.div>
          </div>

          {/* Reservation Form Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              {/* Form Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-figgz-primary/3 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <form className="space-y-6">
                  {/* First Row - Name and Persons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Name <span className="text-figgz-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Persons <span className="text-figgz-primary">*</span>
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      >
                        <option value="">Select persons</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="7">7 Persons</option>
                        <option value="8">8+ Persons</option>
                      </select>
                    </div>
                  </div>

                  {/* Second Row - Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Date <span className="text-figgz-primary">*</span>
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Time <span className="text-figgz-primary">*</span>
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Third Row - Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Email Address <span className="text-figgz-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                        Phone Number <span className="text-figgz-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50"
                        required
                      />
                    </div>
                  </div>

                  {/* Fourth Row - Your Note */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-figgz-secondary flex items-center gap-2">
                      Your Note <span className="text-figgz-primary">*</span>
                    </label>
                    <textarea
                      placeholder="Special requests, dietary restrictions, or any other notes..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-figgz-primary/50 focus:border-figgz-primary transition-all duration-300 bg-gray-50/50 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-figgz-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-figgz-primary/25 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Book Now
                    <motion.svg 
                      className="w-5 h-5"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/demo05.jpg" 
                  alt="Restaurant Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating Card on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                  >
                    <h3 className="text-xl font-bold text-figgz-secondary mb-2">
                      Reserve Your Table
                    </h3>
                    <p className="text-figgz-paragraph mb-4">
                      Experience fine dining in our elegant atmosphere. Book your table for an unforgettable culinary journey.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-figgz-paragraph">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Available Today</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Quick Confirmation</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Healthy Food Section with Background Beams */}
      <section className="relative">
        <BackgroundBeamsWithCollision className="h-96 md:h-[40rem]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
            <div className="text-center w-full">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <span className="bg-white text-figgz-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-xl border-2 border-figgz-primary/20">
                  Fresh & Healthy
                </span>
              </motion.div>

              {/* Compact Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <span className="text-gray-700 dark:text-gray-200">Discover Our </span>
                <span className="text-figgz-primary">Popular & Healthy </span>
                <span className="text-gray-700 dark:text-gray-200">Menu Selection</span>
              </motion.h2>

              {/* Simple Decorative Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-2 mb-6"
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-figgz-primary to-transparent"></div>
                <div className="w-1.5 h-1.5 bg-figgz-primary rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-figgz-primary to-transparent"></div>
              </motion.div>

              {/* Compact Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Carefully curated nutritious meals, crafted with finest organic ingredients and superfoods for your wellness journey.
              </motion.p>

              {/* Compact CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 12px 25px rgba(234, 88, 12, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-figgz-primary hover:bg-figgz-primary/90 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Explore Healthy Menu
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
