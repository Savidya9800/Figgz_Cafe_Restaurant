import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Contact from "./pages/user/Contact";
import About from "./pages/user/About";
import Reservation from "./pages/user/Reservation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold text-[#111111]">Order Now - Coming Soon</h1></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold text-[#111111]">Stories - Coming Soon</h1></div>} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
