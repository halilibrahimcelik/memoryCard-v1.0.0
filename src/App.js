import "./scss/App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
import { useState } from "react";

function App() {
  const [initialCard, setNewCard] = useState("");

  const addNewUserCard = (newCard) => {
    setNewCard((prevCards) => {
      return [newCard, ...prevCards];
    });
  };

  return (
    <>
      <div className="container">
        <Register onNewCardData={addNewUserCard} />

        {initialCard.length === 0 ? null : <Card cardData={initialCard} />}
      </div>
    </>
  );
}

export default App;
