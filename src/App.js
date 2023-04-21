//Import react et pluggins
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import Header et Footer
import Nav from "./components/Nav/Nav";

//Import style
import "./style/index.css";

//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
