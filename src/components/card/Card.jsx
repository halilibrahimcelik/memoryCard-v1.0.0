import React from 'react'
import NewUser from '../newUser/NewUser';
import Warning from '../warning/Warning';
import styles from "./card.module.scss"
const Card = (props) => {
    const {cardData}=props;
    console.log()
 
  return (
    <main className={styles["card-container"]}>
        

       {cardData.map(card=>{
        return( card.userName===""?<Warning key={card.id}/>: <NewUser  name={card.userName} age={card.userAge}  key={card.id} /> )
       })}


    </main>
  )
}

export default Card