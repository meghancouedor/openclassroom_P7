import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";

//Importations bannière
import Banner from "../components/Banner/Banner";
import banniereAbout from "../assets/banner_about.jpg";

function About() {
  document.title = "A propos - Kasa";
  return (
    <div>
      <Banner image={banniereAbout} />
      <Dropdown />
    </div>
  );
}

export default About;
