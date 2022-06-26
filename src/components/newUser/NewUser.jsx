import React from 'react'
import styles from "./newUser.module.scss"
const NewUser = (props) => {
    const {name,age}=props
  return (
    <div className={styles.newUser}>

        <h5>Username:{name}</h5>
        <p>{age}</p>
    </div>
  )
}

export default NewUser;