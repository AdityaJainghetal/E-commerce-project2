import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import React from 'react';


const AdminDashboard = () => {
  const [adminuser, setAdminUser ] = useState("");

  useEffect(() => {
    setAdminUser (localStorage.getItem("adminid"));
  }, []);



  return (
    <>
      <header className="dashboard-header">
        <div className="welcome-message">
          Welcome: {adminuser}
        </div>
  
      </header>
      <div className="dashboard-container">
        <nav className="sidebar">
          <ul>
          
            <li><Link to="./uploadproduct">Upload Product</Link></li>
            <li><Link to="./customerOrder">Customer Order</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;