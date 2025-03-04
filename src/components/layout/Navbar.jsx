import React from "react";
import { Link } from "react-router-dom";
import SingedInLinks from "./SignedInLink";
import SingedOutLinks from "./SignedOutLink";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SingedInLinks />
        <SingedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
