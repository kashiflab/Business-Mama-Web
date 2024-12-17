// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1>Business Mama</h1>
        </div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms-of-service">Terms of Service</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
