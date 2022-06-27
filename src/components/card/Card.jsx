import React, { useState } from 'react'
import NewUser from '../newUser/NewUser';

import styles from "./card.module.scss"
const Card = (props) => {
    const {cardData}=props;
    //!checking whether or not Card div is empty or not 
   console.log( cardData.length===1 ?(cardData[0].userName==="" ||cardData[0].userAge===""):false )


  
  return (
    <>


    

    <main id='card-container' className={
     ( cardData.length===1 ?(cardData[0].userName==="" ||cardData[0].userAge===""):false )?styles["nonvisible"]: styles["card-container"]}>

   

{   cardData.map(card=>{
      return( ( card.userName==="" || card.userAge==="")? null: <NewUser  name={card.userName} age={card.userAge}  key={card.id} /> )
     })}
     


  </main>

    
    
    </>
  )
}

export default Card