import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrollin }) => {
  const toThetop = () => {
    window.scrollTo({ top: 0, lef: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${isScrollin > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toThetop}>
        <p style={{ color: "#fff" }}>Hola</p>
      </div>
    </nav>
  );
};

export default Navbar;
