import React, { useState } from "react";
import "./Dropdown.css";
import Fleche from "../../assets/fleche.svg";

function Dropdown({ titre, description }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-container" id={`dropdown-${titre}`}>
      <div className="dropdown-banner">
        <div className="dropdown-title">{titre}</div>
        <span
          className={`dropdown-fleche ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={Fleche} alt="Flèche ouverture description" />
        </span>
      </div>
      {
        //S'ouvre lorsqu'il est à True
        open && <div className="dropdown-txt">{description}</div>
      }
    </div>
  );
}

export default Dropdown;
