import React, { useState } from "react";
import "./Dropdown.css";
import Arrow from "../../assets/fleche.svg";

function Dropdown({ titre, description }) {
  //la card est fermée
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-container" id={`dropdown-${titre}`}>
      <div className="dropdown-banner">
        <div className="dropdown-title">{titre}</div>
        <span
          className={`dropdown-arrow ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={Arrow} alt="Flèche ouverture description" />
        </span>
      </div>
      {
        //S'ouvre lorsqu'elle est à true
        open && <div className="dropdown-txt">{description}</div>
      }
    </div>
  );
}

export default Dropdown;
