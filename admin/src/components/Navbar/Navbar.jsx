import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={assets.logo} alt="Logo" />
        <p>Admin Panel</p>
      </div>
      <div className="profile">
        <img src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
