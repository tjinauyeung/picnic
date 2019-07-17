import React from "react";
import { Github } from "../../icons";
import "./styles.scss";

const Footer = () => (
  <footer className="footer">
    <a
      className="footer__link"
      title="github repository"
      href="https://github.com/tjinauyeung/picnic"
      target="_blank"
    >
      <Github />
    </a>
  </footer>
);

export default Footer;
