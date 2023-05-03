import { useState } from "react";
import "./Carrousel.css";
import ArrowRight from "../../assets/FlecheDroite.svg";
import ArrowLeft from "../../assets/FlecheGauche.svg";

function Carrousel({ imageSlider }) {
  //Fonctions permettant de passer d'une slide à une autre
  const [Index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(Index + 1);
    if (Index === imageSlider.length - 1) setIndex(0);
  };

  const previousSlide = () => {
    setIndex(Index - 1);
    if (Index === 0) setIndex(imageSlider.length - 1);
  };

  return (
    <section className="carrousel-container">
      <img
        classname="carrousel-picture"
        alt="bannière logement"
        //Mettre la photo de la bannière correspondant???
      />
      <img
        className="carousel-arrow arrow-right"
        src={ArrowRight}
        alt="Flèche page suivante"
        onClick={nextSlide}
      />
      <img
        className="carousel-arrow arrow-left"
        src={ArrowLeft}
        alt="Flèche page précédente"
        onClick={previousSlide}
      />
    </section>
  );
}
export default Carrousel;
