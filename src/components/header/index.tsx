import React from "react";
import { Link } from "@reach/router";
import "./styles.scss";

const Header = ({ onSearch }) => (
  <header className="header">
    <Link to="/" className="header__logo">
      <img className="header__logo" src={require("../../assets/picnic.png")} />
    </Link>
    <input className="header__input" placeholder="search by name..." onChange={onSearch} />
  </header>
);

export default Header;
