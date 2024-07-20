import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left">
          <img src={assets.logo}></img>
          <p>
            Discover a culinary haven where every dish is crafted with passion,
            blending the finest local ingredients and global flavors to create
            unforgettable dining experiences.
          </p>
          <div className="logos">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right">
          <h3>GET IN TOUCH</h3>
          <p>+91-9275618038</p>
          <p>ak78@gmail.com</p>
        </div>
      </div>
      <p className="lastp">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
