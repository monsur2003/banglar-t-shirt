import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <nav>
         <Link to="/">Home</Link>
         <Link to="/order">Order review</Link>
         <Link to="/about">about</Link>
         <Link to="/contacts">contact</Link>
      </nav>
   );
};

export default Header;
