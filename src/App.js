//Import react et pluggins
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import style
import "./style/index.css";

//Import pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
