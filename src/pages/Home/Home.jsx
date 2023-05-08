import React from "react";
import "./Home.css";

//Importations pour bannière
import Banner from "../../components/Banner/Banner";
import banniereHome from "../../assets/background_banner.jpg";

//Importation pour annonces
import Cards from "../../components/Cards/Cards";

function App() {
  document.title = "Home - Kasa";
  return (
    <div className="home-content">
      <Banner image={banniereHome} texte="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}

export default App;
