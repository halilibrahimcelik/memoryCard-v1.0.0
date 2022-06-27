import "./scss/App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
import { useState } from "react";

function App() {
  const [initialCard, setNewCard] = useState([]);

  const addNewUserCardHandler = (newCard) => {
    setNewCard((prevCards) => {
      return [newCard, ...prevCards];
    });
  };
  const removeCardHandler = (index) => {
    let cardList = initialCard;
    cardList.splice(index, 1);
    console.log(cardList);
    setNewCard([...cardList]);
  };

  return (
    <>
      <div className="container">
        <Register onNewCardData={addNewUserCardHandler} />

        {initialCard.length === 0 ? null : (
          <Card cardData={initialCard} onRemoveData={removeCardHandler} />
        )}
      </div>
    </>
  );
}

export default App;
