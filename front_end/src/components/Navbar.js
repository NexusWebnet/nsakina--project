import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";
import asset from "../asset/asset";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <div className="logo">
        <img src={asset.logo} alt="logo here" />
      </div>
      <div>
        <ul className="navbar-menu">
          <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenu("Shop")} className={menu === "Shop" ? "active" : ""}>
            <Link to="/shopPage">Shops</Link>
          </li>
          <li onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}>
            <Link to="/categories">Categories</Link>
          </li>
          <li onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="search" className="searchBar" placeholder="search" />
        <div className="search">
          <img src={asset.cart} alt="cart container"></img>
          <div className="dot"></div>
        </div>
        <button className="nav-button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
