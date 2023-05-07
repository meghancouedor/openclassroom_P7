import React, { useState } from "react";
import "./Carrousel.css";
import Arrowleft from "../../assets/FlecheGauche.svg";
import Arrowright from "../../assets/FlecheDroite.svg";

const Caroussel = ({ dataLogement }) => {
  const [current, setcurrent] = useState(0);
  const length = dataLogement.pictures.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  const showArray = length === 1 ? true : false;

  if (
    !Array.isArray(dataLogement.pictures) ||
    dataLogement.pictures.length <= 0
  ) {
    return null;
  }

  return (
    <div className="carrousel-container">
      {!showArray ? (
        <div>
          <img
            onClick={previousSlide}
            className="arrow-left"
            src={Arrowleft}
            alt="Flèche gauche"
          />
          <img
            onClick={nextSlide}
            className="arrow-right"
            src={Arrowright}
            alt="Flèche droite"
          />
        </div>
      ) : null}
      {dataLogement.pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="logement" className="carrousel-img" />
            )}
          </div>
        );
      })}

      <p className="current">
        {current + 1}/{length}
      </p>
    </div>
  );
};

export default Caroussel;
