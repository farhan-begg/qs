import React from "react";
import Account from "../Account/Account";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <h1>Logo</h1>
      </div>

      <div className="navbar-links">
        <p>Home</p>
        <p>Misson</p>
        <p>About</p>
      </div>

      <div className="navbar-btn-container">
        <Account />
      </div>
    </div>
  );
};

export default Navbar;
