import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/annonces.json";

//Importation des éléments
//import Dropdown from "../components/Dropdown/Dropdown";
import Carrousel from "../components/Carrousel/Carrousel";

function FicheLogement() {
  //Récupération de l'URL en fonction de l'id
  const id = useParams();
  const logementUrl = Logements.find((logement) => logement.id === id.id);

  return (
    <div className="singleproduct">
      <Carrousel />
    </div>
  );
}

export default FicheLogement;
