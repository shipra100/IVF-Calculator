import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">IVF Success Calculator</div>
      <div className="navbar-logo">
  
</div>

      <ul className="navbar-links">
        <li><a href="#">Donar programme</a></li>
        <li><a href="#">Fertility Preservation</a></li>
        <li><a href="#">Advanced Treatments</a></li>
        <li><a href="#">Infertility Treatments</a></li>
        <li><a href="#">IVF Testing</a></li>
        <li><a href="#">About us</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
