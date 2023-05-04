import React, { useState } from "react";
import "./Carrousel.css";
import FlecheG from "../../assets/FlecheGauche.svg";
import FlecheD from "../../assets/FlecheDroite.svg";

const Caroussel = ({ thisLogement }) => {
  const [current, setcurrent] = useState(0);
  const length = thisLogement.pictures.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
    console.log(length);
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  const showArray = length === 1 ? true : false;

  if (
    !Array.isArray(thisLogement.pictures) ||
    thisLogement.pictures.length <= 0
  ) {
    return null;
  }

  return (
    <div className="slider">
      {!showArray ? (
        <div>
          <img
            onClick={prevSlide}
            className="left-arrow"
            src={FlecheG}
            alt="fleche a gauche"
          />
          <img
            onClick={nextSlide}
            className="right-arrow"
            src={FlecheD}
            alt="fleche a droite"
          />
        </div>
      ) : null}
      {thisLogement.pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="logement" className="image" />
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
