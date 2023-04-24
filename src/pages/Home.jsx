import Banner from "../components/Banner/Banner";
import banniereHome from "../assets/background_banner.jpg";

function App() {
  document.title = "Home - Kasa";
  return (
    <div>
      <Banner image={banniereHome} texte="Chez vous, partout et ailleurs" />

      <h1>Home</h1>
    </div>
  );
}

export default App;
