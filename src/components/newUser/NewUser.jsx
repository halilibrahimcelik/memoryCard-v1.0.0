import React from 'react'
import styles from "./newUser.module.scss"
const NewUser = (props) => {
    const {name,age,onRemoveHandler,index}=props;


    const removeDataHandler=()=>{
      
 onRemoveHandler(index)
    }

  return (
    <div className={styles.newUser} >

        <h5>UserName: {name}</h5>
        <p>Age: {age} </p>
        <button onClick={removeDataHandler}>Delete</button>
    </div>
  )
}

export default NewUser;