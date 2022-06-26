import "./scss/App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
import { useState } from "react";
import Warning from "./components/warning/Warning";
function App() {
  const [initialCard, setNewCard] = useState("");
  console.log(initialCard);
  const addNewUserCard = (newCard) => {
    setNewCard((prevCards) => {
      return [newCard, ...prevCards];
    });
  };
  return (
    <>
      <div className="container">
        <Register onNewCardData={addNewUserCard} />
        {/* {initialCard[0].userName === "" || initialCard[0].userAge === "" ? (
          <Warning />
        ) : null} */}

        {initialCard.length === 0 ? null : <Card cardData={initialCard} />}
      </div>
    </>
  );
}

export default App;
