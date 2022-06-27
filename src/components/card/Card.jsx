import React, { useState } from 'react'
import NewUser from '../newUser/NewUser';

import styles from "./card.module.scss"
const Card = (props) => {
    const {cardData,onRemoveData}=props;



  
  return (
    <>


    

    <main id='card-container' className={styles["card-container"]}>

   

{   cardData.map((card,index)=>{
      return( ( card.userName==="" || card.userAge==="")? null: <NewUser onRemoveHandler={onRemoveData}  name={card.userName} age={card.userAge}  index={index} key={card.id} /> )
     })}
     


  </main>

    
    
    </>
  )
}

export default Card