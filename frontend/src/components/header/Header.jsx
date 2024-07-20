import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header" id="header">
      <h1>Order Your Favourite Food Item Here</h1>
      <p>
        Select from a diverse menu with the finest ingredients and the best
        taste you will ever experience. Our mission is to satisfy your cravings
        and provide you the best experience.
      </p>
      <button>View Menu</button>
    </div>
  );
}
export default Header;
