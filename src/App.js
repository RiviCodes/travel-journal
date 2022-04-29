import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import travelData from "./travelData";

function App() {
  const cards = travelData.map((item) => {
    return (
      <>
        <Card key={item.id} item={item} />
        <hr />
      </>
    );
  });

  return (
    <section className="app">
      <Navbar />
      {cards}
    </section>
  );
}

export default App;
