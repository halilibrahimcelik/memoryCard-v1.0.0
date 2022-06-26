import React, { useState } from 'react';
import styles from "./register.module.scss"

const Register = (props) => {
    const {onNewCardData}=props;
    const [initialName, setName]=useState("");
    const [initialAge, setAge]=useState("");
    const registerUserHandler=(e)=>{
        e.preventDefault();
        
        setName("");
        setAge("");


        const newUser={
            userName:initialName.toUpperCase(),
            userAge:initialAge,
            id:Math.random().toString()
        }
        onNewCardData(newUser);

    }
const nameHandler=(e)=>{

setName(e.target.value);
}
const ageHandler=(e)=>{
  
setAge(e.target.value);

}

  return (

 
    <div>
        <form className={styles["form-box"]} action="" onSubmit={registerUserHandler}>

            <label >Username
            </label>
            <input  value={initialName} type="text"  onChange={nameHandler} />
            <label >Age(Years)
            </label>
            <input type="number"  value={initialAge}  onChange={ageHandler} />

            <button>Add User</button>
        </form>

    </div>
  )
}

export default Register