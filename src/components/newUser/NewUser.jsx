import React from 'react'
import styles from "./newUser.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faEnvelopeOpen, faImage, faImagePortrait, faInfinity, faInfo, faJedi, faListNumeric, faUser, faUserCheck, faUserDoctor, faUserLock } from '@fortawesome/free-solid-svg-icons';
const NewUser = (props) => {
    const {name,age,onRemoveHandler,index,occupation,email}=props;


    const removeDataHandler=()=>{
      
 onRemoveHandler(index)
    }

  return (
    <div className={styles.newUser} >

        <h5><FontAwesomeIcon icon={faImagePortrait} />  {name}</h5>
        <p><FontAwesomeIcon icon={faCalendar} />  {age} </p>
        <p> <FontAwesomeIcon icon={faUserDoctor} />  {occupation} </p>
        <p><FontAwesomeIcon icon={faEnvelope} /> {email} </p>
        <button onClick={removeDataHandler}>Delete</button>
    </div>
  )
}

export default NewUser;