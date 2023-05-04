import React from "react";
import "./Tags.css";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      {getTag}
    </div>
  );
};

export default Tags;
