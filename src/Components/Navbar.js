import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav aria-label="Primary" class="navigation">
      <ul class="menu">
        <Link to={`/`}>
          <li className="menu-link">Home</li>
        </Link>
        <Link to={`/favorites`}>
          <li className="menu-link">Favorites</li>
        </Link>
        <Link to={`/cart`}>
          <li className="menu-link">Cart</li>
        </Link>
        <li className="menu-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
