import { useParams } from "react-router-dom";
import "./FicheLogement.css";
import datas from "../../data/annonces.json";

//Importation des éléments
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Notation from "../../components/Notation/Notation";
import Dropdown from "../../components/Dropdown/Dropdown";

function FicheLogement() {
  //Récupération de l'id et données
  const idLogement = useParams();
  const dataLogement = datas.find((logement) => logement.id === idLogement.id);

  //Récupération des datas équipements
  const dataEquipments = dataLogement.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <div className="fiche-logement">
      <Carrousel dataLogement={dataLogement} />
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
          <div className="fiche-notation">
            <Notation score={dataLogement.rating} />
          </div>
        </div>
      </div>
      <div className="profil-dropdown">
        <Dropdown titre="Description" description={dataLogement.description} />
        <Dropdown titre="Équipements" description={dataEquipments} />
      </div>
    </div>
  );
}


export default FicheLogement;
