import "./Notation.css";

//Importation étoiles
import Fullstar from "../../assets/FullStar.svg";
import Emptystar from "../../assets/EmptyStar.svg";

function Notation({ score }) {
  const Stars = [1, 2, 3, 4, 5];

  return (
    <div className="notation-container">
      {Stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="notation-star"
            src={Fullstar}
            alt="Etoile pleine"
          />
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={level.toString()}
            className="notation-star"
            src={Emptystar}
            alt="Etoile vide"
          />
        )
      )}
    </div>
  );
}

export default Notation;
