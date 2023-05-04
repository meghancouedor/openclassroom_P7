import { useParams } from "react-router-dom";
import "./FicheLogement.css";
import datas from "../../data/annonces.json";

//Importation des éléments
//import Dropdown from "../components/Dropdown/Dropdown";
//import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";

function FicheLogement() {
  //Récupération de l'id
  const idLogement = useParams();
  const dataLogement = datas.find((logement) => logement.id === idLogement.id);

  return (
    <div className="fiche-logement">
      <div className="fiche-informations">
        <div className="informations-gauche">
          <h1 className="fiche-title">{dataLogement.title}</h1>
          <p className="fiche-location">{dataLogement.location}</p>
          <div className="fiche-tags">
            {dataLogement.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="informations-droite">
          <div className="fiche-profil">
            <span className="profil-name">{dataLogement.host.name}</span>
            <img
              className="profil-photo"
              src={dataLogement.host.picture}
              alt="Profil propriétaire"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
