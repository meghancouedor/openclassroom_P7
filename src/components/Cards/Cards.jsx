import "./Cards.css";
import datas from "../../data/annonces.json";
import Card from "../Card/Card";

function Cards() {
  return (
    <main className="home-cards">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
}

export default Cards;
