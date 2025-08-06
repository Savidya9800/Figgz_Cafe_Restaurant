import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Nav'
import Footer from '../../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Contact Us */}
      <section 
        id="contact" 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111111] via-[#2a2a2a] to-[#111111] overflow-hidden"
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
            className="mb-8"
          >
            <p className="text-white/70 text-sm font-medium tracking-wider uppercase">
              HOME / CONTACT US
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              CONTACT US
            </h1>
            
            {/* Large Background Text */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A1A]/30 to-[#CB3A1A]/10 select-none pointer-events-none"
                style={{
                  WebkitTextStroke: '2px rgba(203, 58, 26, 0.2)',
                  textShadow: '0 0 50px rgba(203, 58, 26, 0.3)'
                }}
              >
                GET IN TOUCH
              </motion.h2>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-[#CB3A1A] to-orange-500 mx-auto mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl text-[#74787C] max-w-2xl mx-auto leading-relaxed"
          >
            We'd love to hear from you. Get in touch with us for reservations, 
            inquiries, or just to say hello. Your feedback helps us serve you better.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12"
          >
            <button
              onClick={() => {
                const contactForm = document.querySelector('#contact-form')
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#CB3A1A] to-orange-600 rounded-full hover:from-orange-600 hover:to-[#CB3A1A] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Contact Us Now</span>
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
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20"
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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#CB3A1A]/20 to-orange-500/20 blur-xl" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16"
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 to-[#CB3A1A]/20 blur-xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 tracking-wider uppercase">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section - Bowen Hills Location */}
      <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-md mx-auto lg:mx-0">
                {/* Location Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl lg:text-3xl font-bold text-[#111111] mb-8 text-center"
                >
                  BOWEN HILLS
                </motion.h2>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Phone & Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Phone Number & Email</h3>
                      <p className="text-[#74787C] text-sm mb-1">(07) 3155 3873</p>
                      <p className="text-[#74787C] text-sm">bowenhills@figgzcafe.com</p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Our Restaurant Address</h3>
                      <p className="text-[#74787C] text-sm mb-1">7/16 Thompson Street</p>
                      <p className="text-[#74787C] text-sm">Bowen Hills 4006</p>
                    </div>
                  </motion.div>

                  {/* Opening Hours */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Opening Time</h3>
                      <p className="text-[#74787C] text-sm mb-1">7:30am - 3pm ( Mon - Fri )</p>
                      <p className="text-[#CB3A1A] text-sm font-medium">Sat, Sun & Holiday Closed</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Shop Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/src/assets/shop01.jpg"
                  alt="Figgz Cafe Bowen Hills Location"
                  className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-6 right-6 bg-[#CB3A1A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Main Location
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Section - Taringa Location */}
      <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50/20 flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Shop Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/src/assets/shop02.jpg"
                  alt="Figgz Cafe Taringa Location"
                  className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-6 left-6 bg-[#CB3A1A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Second Location
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-md mx-auto lg:ml-auto lg:mr-0">
                {/* Location Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl lg:text-3xl font-bold text-[#111111] mb-8 text-center"
                >
                  TARINGA
                </motion.h2>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Phone & Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Phone Number & Email</h3>
                      <p className="text-[#74787C] text-sm mb-1">(07) 3870 4589</p>
                      <p className="text-[#74787C] text-sm">taringa@figgzcafe.com</p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Our Restaurant Address</h3>
                      <p className="text-[#74787C] text-sm mb-1">4/86 Whitmore Street</p>
                      <p className="text-[#74787C] text-sm">Taringa 4068</p>
                    </div>
                  </motion.div>

                  {/* Opening Hours */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CB3A1A] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">Opening Time</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Monday:</span>
                          <span className="text-[#CB3A1A] font-medium">Closed</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Tuesday:</span>
                          <span className="text-[#CB3A1A] font-medium">Closed</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Wednesday:</span>
                          <span className="text-[#74787C]">7am-3pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Thursday:</span>
                          <span className="text-[#74787C]">7am-3pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Friday:</span>
                          <span className="text-[#74787C]">7am-8pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Saturday:</span>
                          <span className="text-[#74787C]">7am-8pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#74787C]">Sunday:</span>
                          <span className="text-[#74787C]">7am-3pm</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Contact Form */}
      <section 
        id="contact-form" 
        className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-[#fff5f5] to-[#fef2f2] flex items-center justify-center py-20 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-br from-[#CB3A1A]/15 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-orange-500/15 to-[#CB3A1A]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#CB3A1A]/5 to-orange-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#CB3A1A] to-orange-600 bg-clip-text text-transparent mb-6">
                LEAVE A MESSAGE
              </h2>
              
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-24 h-1 bg-gradient-to-r from-[#CB3A1A] to-orange-500 mx-auto mb-6"
              />
            </motion.div>
            
            <p className="text-[#74787C] text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question, special request, or just want to say hello? Leave us a message — We'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#CB3A1A]/8 via-orange-500/5 to-red-400/8 rounded-3xl"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#CB3A1A]/10 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-3 focus:ring-[#CB3A1A]/25 focus:border-[#CB3A1A] transition-all duration-300 bg-white/90 backdrop-blur-sm text-[#111111] placeholder-gray-400 shadow-sm hover:shadow-md"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-[#74787C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-3 focus:ring-[#CB3A1A]/25 focus:border-[#CB3A1A] transition-all duration-300 bg-white/90 backdrop-blur-sm text-[#111111] placeholder-gray-400 shadow-sm hover:shadow-md"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-[#74787C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-3 focus:ring-[#CB3A1A]/25 focus:border-[#CB3A1A] transition-all duration-300 bg-white/90 backdrop-blur-sm text-[#111111] placeholder-gray-400 shadow-sm hover:shadow-md"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-[#74787C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type Your Message"
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-3 focus:ring-[#CB3A1A]/25 focus:border-[#CB3A1A] transition-all duration-300 resize-none bg-white/90 backdrop-blur-sm text-[#111111] placeholder-gray-400 shadow-sm hover:shadow-md"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#CB3A1A] via-red-600 to-orange-600 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-[#CB3A1A] transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(203,58,26,0.3)] border border-white/20"
                >
                  <span className="relative z-10 tracking-wide">SUBMIT MESSAGE</span>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/25 to-transparent"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.svg
                    className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{
                      x: [0, 3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Opening Time Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-white/50">
              <div className="w-8 h-8 bg-gradient-to-br from-[#CB3A1A] to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#111111] font-bold text-lg tracking-wide">Opening Time</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
