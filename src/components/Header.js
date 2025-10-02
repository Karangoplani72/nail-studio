// src/components/Header.js

import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./Header.css"; // Ensure your CSS is properly styled

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
