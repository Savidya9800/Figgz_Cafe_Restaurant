import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Simple User Icon Component
const UserIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

function Navigation() {
  const [isVisible, setIsVisible] = useState(true) // Start visible for hero section
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Order Now', href: '#order', icon: '🍽️' },
    { name: 'About Us', href: '#about', icon: '📖' },
    { name: 'Booking', href: '#booking', icon: '📅' },
    { name: 'Contact Us', href: '#contact', icon: '📞' },
    { name: 'Stories', href: '#stories', icon: '📝' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Show nav bar ONLY in the 1st section (hero section)
      // Hide nav bar completely when scrolled past the 1st section
      if (currentScrollY <= 500) {
        setIsVisible(true) // Show ONLY in 1st section
      } else {
        setIsVisible(false) // Hide in ALL other sections (2nd, 3rd, 4th, etc.)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  // Floating Arrow Button to go back to 1st section (shows only when nav bar is hidden)
  const FloatingArrowButton = () => (
    <AnimatePresence>
      {!isVisible && (
        <div className="fixed bottom-6 right-6 z-[60]">
          <button
            onClick={() => {
              const heroSection = document.querySelector('#home')
              if (heroSection) {
                heroSection.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              } else {
                // Fallback to scroll to top
                window.scrollTo({ 
                  top: 0, 
                  behavior: 'smooth' 
                })
              }
            }}
            className="w-8 h-8 bg-figgz-primary text-white rounded shadow-lg flex items-center justify-center"
          >
            {/* Very Small Up Arrow Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      )}
    </AnimatePresence>
  )
  return (
    <>
      {/* Main Navigation Bar - Auto Hide/Show */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50"
            style={{
              backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
              backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
              boxShadow: scrollY > 50 ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
              borderBottom: scrollY > 50 ? '1px solid rgba(229, 231, 235, 0.8)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                {/* Logo */}
                <motion.div 
                  className="flex-shrink-0"
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/src/assets/logo.jpg" 
                    alt="Figgz Cafe" 
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Center Navigation - Hidden on smaller screens */}
                <div className="hidden lg:flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative text-lg font-medium transition-all duration-300 ${
                        scrollY > 50 ? 'text-figgz-secondary' : 'text-white'
                      } ${activeSection === item.href.slice(1) ? 'text-figgz-primary' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveSection(item.href.slice(1))
                        const element = document.querySelector(item.href)
                        if (element) {
                          element.scrollIntoView({ 
                            behavior: 'smooth' 
                          })
                        }
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Right Side - User Icon */}
                <motion.div 
                  className="flex items-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    className={`p-2 rounded-full transition-all duration-300 ${
                      scrollY > 50 ? 'text-figgz-secondary' : 'text-white'
                    }`}
                  >
                    <UserIcon className="h-6 w-6" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

        {/* Floating Arrow Button - Only shows when nav is hidden */}
      <AnimatePresence>
        {!isVisible && (
          <motion.div 
            className="fixed bottom-8 right-8 z-[60]"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
          >
            <motion.button
              onClick={() => {
                const heroSection = document.querySelector('#home')
                if (heroSection) {
                  heroSection.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                } else {
                  window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                  })
                }
              }}
              className="relative group"
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Main button */}
              <div className="w-12 h-12 bg-gradient-to-br from-figgz-primary to-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Arrow Icon */}
                <motion.svg 
                  className="w-6 h-6 relative z-10" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{
                    y: [-2, 2, -2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </motion.svg>
              </div>
              
              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-figgz-primary"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-figgz-primary"
                animate={{
                  scale: [1, 1.3, 1.8],
                  opacity: [0.6, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Back to Top
                <div className="absolute top-full right-4 w-2 h-2 bg-black/80 transform rotate-45 -mt-1" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
