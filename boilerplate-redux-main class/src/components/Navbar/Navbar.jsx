import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        <a data-cy="navbar-home-link"></a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">Cart : 0 </div>
        <button data-cy="navbar-login-logout-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
