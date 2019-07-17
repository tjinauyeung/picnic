import React from "react";
import { Link } from "@reach/router";
import utils from "../../utils";
import "./styles.scss";

const Header = ({ className, children }) => (
  <header className={utils.extendClassName("header", className)}>
    <Link to="/" className="header__logo">
      <img className="header__logo" src={require("../../assets/logo.png")} />
    </Link>
    {children}
  </header>
);

export default Header;
