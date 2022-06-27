import "./scss/App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
import { useEffect, useState } from "react";

function App() {
  const [initialCard, setNewCard] = useState([]);

  //!localStorage

  useEffect(() => {
    const localData = localStorage.getItem("Cards");
    if (localData) {
      setNewCard(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(initialCard));
  }, [initialCard]);

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
      <h1 className="header">MEMORY-CARD</h1>
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
