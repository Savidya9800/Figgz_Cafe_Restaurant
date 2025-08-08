import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginModal from "./LoginModal";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from "./ui/shadcn/alert-dialog";

// Simple User Icon Component
const UserIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

function Navigation() {
  const [isVisible, setIsVisible] = useState(true); // Start visible for hero section
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSignOutSuccess, setShowSignOutSuccess] = useState(false);
  const [showSignInSuccess, setShowSignInSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  // Check if we're on the home page to determine if we should use sections or routes
  const isHomePage = location.pathname === "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.user-dropdown')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  const navItems = [
    { name: "Home", href: "/", sectionId: "home", icon: "🏠" },
    { name: "Order Now", href: "/order", sectionId: "order", icon: "🍽️" },
    { name: "About Us", href: "/about", sectionId: "about", icon: "📖" },
    { name: "Booking", href: "/booking", sectionId: "booking", icon: "📅" },
    { name: "Contact Us", href: "/contact", sectionId: "contact", icon: "📞" },
    { name: "Stories", href: "/stories", sectionId: "stories", icon: "📝" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Show nav bar ONLY in the 1st section on ALL pages
      // Hide nav bar completely when scrolled past the 1st section
      if (currentScrollY <= 500) {
        setIsVisible(true); // Show ONLY in 1st section
      } else {
        setIsVisible(false); // Hide in ALL other sections (2nd, 3rd, 4th, etc.)
        setIsMobileMenuOpen(false); // Close mobile menu when nav becomes invisible
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Floating Arrow Button to go back to 1st section (shows only when nav bar is hidden on ALL pages)
  const FloatingArrowButton = () => (
    <AnimatePresence>
      {!isVisible && (
        <div className="fixed bottom-6 right-6 z-[60]">
          <button
            onClick={() => {
              if (isHomePage) {
                const heroSection = document.querySelector("#home");
                if (heroSection) {
                  heroSection.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              } else {
                // On other pages, scroll to top
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="w-8 h-8 bg-figgz-primary text-white rounded shadow-lg flex items-center justify-center"
          >
            {/* Very Small Up Arrow Icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </AnimatePresence>
  );
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
              backgroundColor:
                scrollY > 50 
                  ? "rgba(255, 255, 255, 0.95)" 
                  : "transparent",
              backdropFilter: 
                scrollY > 50 
                  ? "blur(12px)" 
                  : "none",
              boxShadow:
                scrollY > 50 
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                  : "none",
              borderBottom:
                scrollY > 50 
                  ? "1px solid rgba(229, 231, 235, 0.8)" 
                  : "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                {/* Logo */}
                <motion.div
                  className="flex-shrink-0"
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/" 
                    className="block cursor-pointer"
                    onClick={() => {
                      // If we're already on home page, scroll to top
                      if (location.pathname === "/") {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <img
                      src="/src/assets/logo.png"
                      alt="Figgz Cafe"
                      className="h-18 w-auto object-contain hover:scale-105 transition-transform duration-300"
                      style={{
                        filter: scrollY > 50 ? "brightness(0) saturate(100%)" : "none",
                        transition: "filter 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    />
                  </Link>
                </motion.div>

                {/* Center Navigation - Hidden on smaller screens */}
                <div 
                  className="hidden lg:flex items-center space-x-8 px-6 py-3 rounded-full"
                  style={{
                    backgroundColor: 
                      isHomePage && scrollY <= 50 
                        ? "rgba(0, 0, 0, 0.3)" 
                        : scrollY > 50 
                          ? "rgba(255, 255, 255, 0.1)" 
                          : "transparent",
                    backdropFilter: 
                      isHomePage && scrollY <= 50 
                        ? "blur(8px)" 
                        : scrollY > 50 
                          ? "blur(4px)" 
                          : "none",
                    border: 
                      isHomePage && scrollY <= 50 
                        ? "1px solid rgba(255, 255, 255, 0.1)" 
                        : scrollY > 50 
                          ? "1px solid rgba(0, 0, 0, 0.05)" 
                          : "none",
                    boxShadow: 
                      scrollY > 50 
                        ? "0 4px 12px rgba(0, 0, 0, 0.05)" 
                        : "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  {navItems.map((item, index) => {
                    const isActive = isHomePage
                      ? false // On home page, we don't highlight based on route
                      : location.pathname === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {isHomePage &&
                        item.sectionId !== "home" &&
                        item.href === "/" ? (
                          // On home page, for the Home link, scroll to home section
                          <button
                            className={`relative text-lg font-medium transition-all duration-300 cursor-pointer hover:text-figgz-primary ${
                              scrollY > 50
                                ? "text-figgz-secondary"
                                : "text-white"
                            } ${isActive ? "text-figgz-primary" : ""}`}
                            style={{
                              textShadow: isHomePage && scrollY <= 50 ? "0 2px 8px rgba(0, 0, 0, 0.5)" : "none"
                            }}
                            onClick={() => {
                              const element = document.querySelector(
                                `#${item.sectionId}`
                              );
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }
                            }}
                          >
                            {item.name}
                          </button>
                        ) : item.name === "Booking" ? (
                          // Special handling for Booking - navigate to home page booking section
                          <button
                            className={`relative text-lg font-medium transition-all duration-300 cursor-pointer hover:text-figgz-primary ${
                              scrollY > 50
                                ? "text-figgz-secondary"
                                : "text-white"
                            } ${isActive ? "text-figgz-primary" : ""}`}
                            style={{
                              textShadow: isHomePage && scrollY <= 50 ? "0 2px 8px rgba(0, 0, 0, 0.5)" : "none"
                            }}
                            onClick={() => {
                              if (isHomePage) {
                                // If already on home page, scroll to booking section
                                const element =
                                  document.querySelector("#booking");
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              } else {
                                // If on other page, navigate to home page and then scroll to booking
                                navigate("/");
                                // Use a longer delay and retry mechanism to ensure page loads
                                const scrollToBooking = () => {
                                  const element =
                                    document.querySelector("#booking");
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
                              }
                            }}
                          >
                            {item.name}
                          </button>
                        ) : (
                          // For all other cases, use Link to navigate to different pages
                          <Link
                            to={item.href}
                            className={`relative text-lg font-medium transition-all duration-300 cursor-pointer hover:text-figgz-primary ${
                              scrollY > 50
                                ? "text-figgz-secondary"
                                : "text-white"
                            } ${isActive ? "text-figgz-primary" : ""}`}
                            style={{
                              textShadow: isHomePage && scrollY <= 50 ? "0 2px 8px rgba(0, 0, 0, 0.5)" : "none"
                            }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Side - Mobile Menu Button + User Icon */}
                <div className="flex items-center space-x-4">
                  {/* Mobile Menu Button */}
                  <motion.button
                    className={`lg:hidden p-2 rounded-md transition-all duration-300 ${
                      scrollY > 50 ? "text-figgz-secondary" : "text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                      <motion.span
                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                          scrollY > 50 ? "bg-figgz-secondary" : "bg-white"
                        } mb-1`}
                        animate={{
                          rotate: isMobileMenuOpen ? 45 : 0,
                          y: isMobileMenuOpen ? 6 : 0,
                        }}
                      />
                      <motion.span
                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                          scrollY > 50 ? "bg-figgz-secondary" : "bg-white"
                        } mb-1`}
                        animate={{
                          opacity: isMobileMenuOpen ? 0 : 1,
                        }}
                      />
                      <motion.span
                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                          scrollY > 50 ? "bg-figgz-secondary" : "bg-white"
                        }`}
                        animate={{
                          rotate: isMobileMenuOpen ? -45 : 0,
                          y: isMobileMenuOpen ? -6 : 0,
                        }}
                      />
                    </div>
                  </motion.button>

                  {/* User Icon / Profile */}
                  <div className="relative user-dropdown">
                    {isAuthenticated ? (
                      <motion.button
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${
                          scrollY > 50 ? "text-figgz-secondary" : "text-white"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-8 w-8 rounded-full border-2 border-amber-400"
                          />
                        ) : (
                          <UserIcon className="h-6 w-6" />
                        )}
                        <span className="hidden md:block text-sm font-medium">
                          {user?.name?.split(' ')[0]}
                        </span>
                      </motion.button>
                    ) : (
                      <motion.button
                        onClick={() => setIsLoginModalOpen(true)}
                        className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${
                          scrollY > 50 ? "text-figgz-secondary hover:bg-amber-50" : "text-white hover:bg-white/10"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <UserIcon className="h-6 w-6" />
                        <span className="hidden md:block text-sm font-medium">Sign In</span>
                      </motion.button>
                    )}

                    {/* User Dropdown */}
                    <AnimatePresence>
                      {showUserDropdown && isAuthenticated && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                          </div>
                          <button
                            onClick={() => {
                              navigate('/profile');
                              setShowUserDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => {
                              navigate('/my-orders');
                              setShowUserDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            My Orders
                          </button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                Sign Out
                              </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Sign Out</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to sign out?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                  <button
                                    onClick={async () => {
                                      try {
                                        await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/logout`, {
                                          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                                        });
                                      } catch (e) {}
                                      logout();
                                      setShowUserDropdown(false); // Only close dropdown after sign out
                                      setShowSignOutSuccess(true);
                                      setTimeout(() => {
                                        setShowSignOutSuccess(false);
                                        navigate("/");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                      }, 1200);
                                    }}
                                  >
                                    Yes, Sign Out
                                  </button>
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden overflow-hidden border-t border-gray-200/20"
                  style={{
                    backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="px-4 py-4 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {isHomePage && item.sectionId !== "home" && item.href === "/" ? (
                          // On home page, for the Home link, scroll to home section
                          <button
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                              scrollY > 50
                                ? "text-figgz-secondary hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => {
                              const element = document.querySelector(`#${item.sectionId}`);
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                              }
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                          </button>
                        ) : item.name === "Booking" ? (
                          // Special handling for Booking
                          <button
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                              scrollY > 50
                                ? "text-figgz-secondary hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                            }`}
                            onClick={() => {
                              if (isHomePage) {
                                const element = document.querySelector("#booking");
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth" });
                                }
                              } else {
                                navigate("/");
                                const scrollToBooking = () => {
                                  const element = document.querySelector("#booking");
                                  if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    setTimeout(scrollToBooking, 200);
                                  }
                                };
                                setTimeout(scrollToBooking, 500);
                              }
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                          </button>
                        ) : (
                          // For all other cases, use Link to navigate to different pages
                          <Link
                            to={item.href}
                            className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                              scrollY > 50
                                ? "text-figgz-secondary hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                            } ${
                              location.pathname === item.href ? "text-figgz-primary" : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Arrow Button - Only shows when nav is hidden on ALL pages */}
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
              damping: 20,
            }}
          >
            <motion.button
              onClick={() => {
                if (isHomePage) {
                  const heroSection = document.querySelector("#home");
                  if (heroSection) {
                    heroSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  } else {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                } else {
                  // On other pages, scroll to top
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="relative group"
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Main button */}
              <div className="w-12 h-12 bg-gradient-to-br from-figgz-primary to-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Arrow Icon */}
                <motion.svg
                  className="w-6 h-6 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 15l7-7 7 7"
                  />
                </motion.svg>
              </div>

              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-figgz-primary"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-figgz-primary"
                animate={{
                  scale: [1, 1.3, 1.8],
                  opacity: [0.6, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSignInSuccess={() => {
          setShowSignInSuccess(true);
          setTimeout(() => setShowSignInSuccess(false), 1500);
        }}
      />

      {/* Sign Out Success Alert - Moved outside the dropdown */}
      <AnimatePresence>
        {showSignOutSuccess && (
          <motion.div
            className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 border border-green-600 bg-white text-green-800 px-6 py-3 rounded-lg shadow-lg z-50"
            style={{ minWidth: 320 }}
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28, duration: 0.5 }}
          >
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Signed out successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In Success Alert */}
      <AnimatePresence>
        {showSignInSuccess && (
          <motion.div
            className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 border border-green-600 bg-white text-green-800 px-6 py-3 rounded-lg shadow-lg z-50"
            style={{ minWidth: 320 }}
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28, duration: 0.5 }}
          >
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Signed in successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
