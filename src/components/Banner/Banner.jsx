import React from "react";
import "./Banner.css";

function Banner({ image, texte }) {
  return (
    <div className="banner-container">
      <img className="banner-img" src={image} alt="Bannière" />
      <div className="banner-filter"></div>
      <span className="banner-txt">{texte}</span>
    </div>
  );
}

export default Banner;
