import React from 'react'
import NewUser from '../newUser/NewUser';
import styles from "./card.module.scss"
const Card = (props) => {
    const {cardData}=props;
    // console.log(cardData[0].userName)
 
  return (
    <main className={styles["card-container"]}>
        
       {cardData.map(card=>{
        return( <NewUser  name={card.userName} age={card.userAge}  key={card.id} /> )
       })}


    </main>
  )
}

export default Card