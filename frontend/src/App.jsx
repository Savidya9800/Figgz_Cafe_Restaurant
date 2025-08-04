import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/user/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
