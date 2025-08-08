import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FloatingDock } from "../../components/ui/aceternity/floating-dock";
import Footer from "../../components/Footer";

// Icons for floating dock
const HomeIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const MyOrders = () => {
  const { user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock orders data - replace with actual API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrders([
        {
          id: "1",
          orderNumber: "FZ001",
          date: "2025-01-05",
          time: "14:30",
          status: "delivered",
          total: 45.5,
          items: [
            { name: "Margherita Pizza", quantity: 1, price: 22.5 },
            { name: "Caesar Salad", quantity: 1, price: 15.0 },
            { name: "Coca Cola", quantity: 2, price: 4.0 },
          ],
          restaurant: "Figgz Cafe - Bowen Hills",
        },
        {
          id: "2",
          orderNumber: "FZ002",
          date: "2025-01-03",
          time: "19:15",
          status: "preparing",
          total: 67.8,
          items: [
            { name: "Beef Burger", quantity: 2, price: 25.0 },
            { name: "Sweet Potato Fries", quantity: 2, price: 8.9 },
            { name: "Milkshake", quantity: 2, price: 8.9 },
          ],
          restaurant: "Figgz Cafe - Taringa",
        },
        {
          id: "3",
          orderNumber: "FZ003",
          date: "2025-01-01",
          time: "12:45",
          status: "cancelled",
          total: 34.2,
          items: [
            { name: "Chicken Wrap", quantity: 1, price: 18.5 },
            { name: "Iced Coffee", quantity: 2, price: 7.85 },
          ],
          restaurant: "Figgz Cafe - Bowen Hills",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "preparing":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "preparing":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "cancelled":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (selectedFilter === "all") return true;
    return order.status === selectedFilter;
  });

  const floatingDockItems = [
    { title: "Home", icon: <HomeIcon />, href: "/" },
    { title: "Profile", icon: <ProfileIcon />, href: "/profile" },
    { title: "My Orders", icon: <OrdersIcon />, href: "/my-orders" },
    { title: "Menu", icon: <MenuIcon />, href: "/order" },
    { title: "Contact", icon: <ContactIcon />, href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#CB3A1A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#74787C] text-lg">Loading your orders...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Logo - Same as Profile Page */}
      <div className="absolute top-5 left-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="block cursor-pointer">
                <img
                  src="/src/assets/logo2.png"
                  alt="Figgz Cafe"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-8 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#111111] mb-4">
              My Orders
            </h1>
            <p className="text-lg text-[#74787C] max-w-2xl mx-auto">
              Track your orders, reorder favorites, and manage your dining
              history
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {["all", "delivered", "preparing", "cancelled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-[#CB3A1A] text-white shadow-lg"
                      : "bg-white text-[#74787C] hover:bg-[#CB3A1A]/10 hover:text-[#CB3A1A]"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  {filter === "all" && (
                    <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                      {orders.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Orders Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <AnimatePresence>
              {filteredOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="mb-4 sm:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-[#111111]">
                            Order #{order.orderNumber}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {getStatusIcon(order.status)}
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-[#74787C]">{order.restaurant}</p>
                        <p className="text-sm text-[#74787C]">
                          {new Date(order.date).toLocaleDateString()} at{" "}
                          {order.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#CB3A1A]">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-semibold text-[#111111] mb-3">
                        Order Items
                      </h4>
                      <div className="space-y-2">
                        {order.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex justify-between items-center py-2"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 bg-[#CB3A1A]/10 rounded-full flex items-center justify-center text-[#CB3A1A] font-semibold text-sm">
                                {item.quantity}
                              </span>
                              <span className="text-[#111111] font-medium">
                                {item.name}
                              </span>
                            </div>
                            <span className="text-[#74787C] font-semibold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <div className="flex flex-wrap gap-3 justify-end">
                        <button className="px-4 py-2 border border-gray-300 text-[#74787C] rounded-lg hover:bg-gray-50 transition-all duration-200">
                          View Details
                        </button>
                        {order.status === "delivered" && (
                          <button className="px-4 py-2 bg-[#CB3A1A] text-white rounded-lg hover:bg-[#CB3A1A]/90 transition-all duration-200">
                            Reorder
                          </button>
                        )}
                        {order.status === "preparing" && (
                          <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-200">
                            Track Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredOrders.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <OrdersIcon />
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-2">
                  No orders found
                </h3>
                <p className="text-[#74787C] mb-6">
                  {selectedFilter === "all"
                    ? "You haven't placed any orders yet."
                    : `No ${selectedFilter} orders found.`}
                </p>
                <button
                  onClick={() => (window.location.href = "/order")}
                  className="px-6 py-3 bg-[#CB3A1A] text-white rounded-lg hover:bg-[#CB3A1A]/90 transition-all duration-200"
                >
                  Start Ordering
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Dock */}
      <FloatingDock
        items={floatingDockItems}
        desktopClassName="fixed right-8 top-1/2 transform -translate-y-1/2 flex-col h-auto w-16 py-4"
        mobileClassName="fixed bottom-8 right-8"
      />

      <Footer />
    </div>
  );
};

export default MyOrders;
