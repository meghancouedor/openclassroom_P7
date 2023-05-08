import React from "react";
import "./Error.css";
import Erreur404 from "../../components/404/404";

function Error() {
  document.title = "404 - Kasa";

  return <Erreur404 />;
}

export default Error;
