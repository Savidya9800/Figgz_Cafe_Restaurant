import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/user/Home";
import AdminDashboard from "./pages/admin/Dashboard";
import Contact from "./pages/user/Contact";
import About from "./pages/user/About";
import Order from "./pages/user/Order";
import Stories from "./pages/user/Stories";
import TaringaMenu from "./pages/user/TaringaMenu";
import BowenHillsMenu from "./pages/user/BowenHillsMenu";
import Profile from "./pages/user/Profile";
import MyOrders from "./pages/user/MyOrders";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/menu/taringa" element={<TaringaMenu />} />
            <Route path="/menu/bowen-hills" element={<BowenHillsMenu />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
