import React from "react";
import logo from "../../assets/Logo_White.svg";
import "./Footer.css";

function FooterContainer() {
  return (
    <footer>
      <img className="footer-img" src={logo} alt="Logo Blanc Kasa" />
      <p className="footer-text">© {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default FooterContainer;
