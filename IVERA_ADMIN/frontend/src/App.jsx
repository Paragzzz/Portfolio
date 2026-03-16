import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUpload from "./pages/admin/AdminUpload";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {

  const isAdminAuth = localStorage.getItem("adminToken");

  return (
    <Router>
      <Routes>

        {/* ✅ Admin Login */}
        <Route 
          path="/admin/login" 
          element={<AdminLogin />} 
        />

        {/* ✅ Protected Admin Panel */}
        <Route
          path="/admin/dashboard"
          element={
            isAdminAuth ? (
              <>
                <AdminUpload />
                <AdminDashboard />
              </>
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />

        {/* ✅ Default Route */}
        <Route 
          path="*" 
          element={<Navigate to="/admin/dashboard" />} 
        />

      </Routes>
    </Router>
  );
}

export default App;