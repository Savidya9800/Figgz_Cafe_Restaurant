import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";
import { HoverEffect } from "../../components/ui/aceternity/card-hover-effect";
import { TracingBeam } from "../../components/ui/aceternity/tracing-beam";
import { SparklesCore } from "../../components/ui/aceternity/sparkles";

// Import demo images
import demo01 from "../../assets/demo01.jpeg";
import demo02 from "../../assets/demo02.jpeg";
import demo03 from "../../assets/demo03.jpeg";
import demo04 from "../../assets/demo04.jpg";
import demo05 from "../../assets/demo05.jpg";
import demo06 from "../../assets/demo06.jpg";
import demo07 from "../../assets/demo07.jpg";
import demo08 from "../../assets/demo08.jpg";
import demo09 from "../../assets/demo09.jpg";
import demo11 from "../../assets/demo11.jpg";
import demo12 from "../../assets/demo12.jpg";
import demo13 from "../../assets/demo13.jpg";

function Stories() {
  const navigate = useNavigate();

  // Stories collection for hover effect
  const storiesItems = [
    {
      title: "The Beginning",
      description:
        "How Figgz Cafe started as a small family dream and grew into a beloved community gathering place.",
      link: "#",
      image: demo01,
    },
    {
      title: "Community Love",
      description:
        "Stories from our valued customers who have made Figgz Cafe a part of their daily lives and special moments.",
      link: "#",
      image: demo02,
    },
    {
      title: "Behind the Scenes",
      description:
        "Meet our passionate team of chefs, baristas, and staff who bring magic to every dish and cup.",
      link: "#",
      image: demo03,
    },
    {
      title: "Special Moments",
      description:
        "Memorable celebrations, first dates, business meetings, and family gatherings that happened at Figgz.",
      link: "#",
      image: demo04,
    },
    {
      title: "Recipe Heritage",
      description:
        "Traditional family recipes passed down through generations, now served with modern culinary artistry.",
      link: "#",
      image: demo05,
    },
    {
      title: "Coffee Culture",
      description:
        "Our love for coffee runs deep. Partnering with Botero, we serve rich, ethically sourced brews that fuel moments of joy every day at Figgz.",
      link: "#",
      image: demo06,
    },
  ];

  // Journey milestones
  const journeyMilestones = [
    {
      year: "2018",
      title: "The Dream Begins",
      description:
        "Founded with a simple vision: to create a warm, welcoming space where great food meets genuine hospitality.",
      image: demo07,
    },
    {
      year: "2019",
      title: "First Location Opens",
      description:
        "Our flagship location opens its doors, serving the community with handcrafted meals and artisan coffee.",
      image: demo08,
    },
    {
      year: "2020",
      title: "Community Support",
      description:
        "During challenging times, our community rallied around us, showing the true power of connection through food.",
      image: demo09,
    },
    {
      year: "2021",
      title: "Menu Innovation",
      description:
        "Introduced seasonal menus and signature dishes that became local favorites and conversation starters.",
      image: demo11,
    },
    {
      year: "2022",
      title: "Expansion & Growth",
      description:
        "Opened our second location, bringing the Figgz experience to even more families and food lovers.",
      image: demo12,
    },
    {
      year: "2023",
      title: "Awards & Recognition",
      description:
        "Received multiple awards for culinary excellence and outstanding customer service in the region.",
      image: demo13,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Stories */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111111] via-[#2a2a2a] to-[#111111] overflow-hidden px-4">
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
              HOME / STORIES
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
              STORIES
            </h1>

            {/* Large Background Text */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#CB3A1A]/30 to-[#CB3A1A]/10 select-none pointer-events-none"
                style={{
                  WebkitTextStroke: "1px rgba(203, 58, 26, 0.2)",
                  textShadow: "0 0 50px rgba(203, 58, 26, 0.3)",
                }}
              >
                OUR TALES
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
            Discover the passion behind Figgz Cafe Restaurant. From our humble
            beginnings to becoming a beloved culinary destination, learn about
            our commitment to excellence.
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
                const storiesSection =
                  document.querySelector("#stories-content");
                if (storiesSection) {
                  storiesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#CB3A1A] to-orange-600 rounded-full hover:from-orange-600 hover:to-[#CB3A1A] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"
                initial={{ opacity: 1, rotate: 0 }}
                animate={{ opacity: 0, rotate: 360 }}
                transition={{
                  duration: 3,
                  ease: "linear"
                }}
              />
              <svg
                className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#CB3A1A]/20 to-orange-500/20 blur-xl"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16"
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500/20 to-[#CB3A1A]/20 blur-xl"></div>
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
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 tracking-wider uppercase">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section - Stories Collection with Hover Effects */}
      <section
        id="stories-content"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 relative overflow-hidden"
      >
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
                Our Collection
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
              HEARTWARMING STORIES
            </h2>

            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              From humble beginnings to cherished memories, these stories
              capture the essence of what makes Figgz Cafe a special place in
              the hearts of our community.
            </p>
          </motion.div>

          {/* Stories Grid with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HoverEffect
              items={storiesItems}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Third Section - Our Journey Timeline with Tracing Beam */}
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
                Timeline
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
              OUR JOURNEY
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Follow our remarkable journey from a small dream to becoming a
              beloved culinary destination that brings people together through
              exceptional food and warm hospitality.
            </p>
          </motion.div>

          {/* Timeline with Tracing Beam */}
          <TracingBeam className="px-6 sm:px-8 md:px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative pl-6 sm:pl-8 md:pl-0">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 sm:mb-16 relative z-20"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-[#CB3A1A] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mr-3 sm:mr-4 relative z-30 shadow-lg">
                      {milestone.year}
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm relative z-30 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 sm:mb-4">
                      {milestone.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg relative z-30">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Fourth Section - Our Story Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
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
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4 sm:mb-6">
                CRAFTED WITH CARE, SHARED WITH LOVE
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Figgz Cafe isn’t just a place to eat — it’s where comfort food
                  meets community. What began as a small family café has grown
                  into a cherished local gem, bringing people together one cup,
                  one plate, and one smile at a time.
                </p>
                <p>
                  Rooted in tradition and inspired by modern flavors, our menu
                  reflects the diversity of our customers and the heart of our
                  kitchen. Whether it’s a handcrafted brew or a house-made
                  special, every bite carries the warmth of home.
                </p>
                <p>
                  We’re proud to serve more than just meals, we serve memories.
                  At Figgz, you’re not just a customer. You’re part of our
                  story.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    navigate("/about");
                    setTimeout(() => {
                      const el = document.querySelector('section');
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#CB3A1A] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  Learn More About Us
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/contact#contact';
                  }}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#CB3A1A] text-[#CB3A1A] text-sm sm:text-base font-semibold rounded-full hover:bg-[#CB3A1A] hover:text-white transition-colors duration-300"
                >
                  Visit Our Cafe
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
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
                  src={demo01}
                  alt="Figgz Cafe Interior"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="text-white font-bold text-lg mb-2">
                      Where Stories Begin
                    </h3>
                    <p className="text-white/90 text-sm">
                      Every corner of our cafe holds memories, laughter, and the
                      warmth of community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#CB3A1A] rounded-full opacity-10 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-10 hidden sm:block"></div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-[#CB3A1A] mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Years of Service
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-[#CB3A1A] mb-2">
                    10K+
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Happy Customers
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-[#CB3A1A] mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Menu Items
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-[#CB3A1A] mb-2">
                    2
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Locations
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20"
          >
            <div className="relative bg-gradient-to-r from-[#CB3A1A] to-[#CB3A1A] rounded-xl p-4 sm:p-6 lg:p-8 text-center overflow-hidden max-w-4xl mx-auto">
              {/* Sparkles Background Effect */}
              <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                  id="testimonial-sparkles"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1.2}
                  particleDensity={50}
                  className="w-full h-full"
                  particleColor="#ffffff"
                  speed={0.5}
                />
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full -translate-x-6 -translate-y-6 sm:-translate-x-8 sm:-translate-y-8"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full translate-x-8 translate-y-8 sm:translate-x-10 sm:translate-y-10"></div>

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3 sm:mb-4"
                >
                  <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full border border-white/30">
                    Customer Love
                  </span>
                </motion.div>

                {/* Quote Icon with Animation */}
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mb-3 sm:mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  "
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base lg:text-lg text-white font-medium leading-relaxed mb-4 sm:mb-6 italic px-2 sm:px-4"
                >
                  Figgz Cafe isn't just a place to eat—it's where our community
                  comes together. The warmth of the staff, the quality of the
                  food, and the atmosphere make every visit feel like coming
                  home.
                </motion.blockquote>

                {/* Customer Info with Avatar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                    <span className="text-white text-sm sm:text-base font-bold">
                      SM
                    </span>
                  </div>

                  {/* Customer Details */}
                  <div className="text-center sm:text-left">
                    <div className="text-white font-bold text-sm sm:text-base">
                      Sarah Mitchell
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm">
                      Regular Customer since 2019
                    </div>
                    <div className="flex justify-center sm:justify-start mt-1.5 sm:mt-2">
                      {/* Star Rating */}
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Additional Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20"
                >
                  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>1000+ Reviews</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Verified</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Stories;
