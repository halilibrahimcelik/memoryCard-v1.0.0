import React, { useState } from 'react';
import styles from "./register.module.scss"
import Warning from '../warning/Warning';
import Card from '../card/Card';
const Register = (props) => {
    const {onNewCardData}=props;
    const [initialName, setName]=useState("");
    const [initialAge, setAge]=useState("");
    const [isVisible,setVisibility]=useState(false);

    const registerUserHandler=(e)=>{
        e.preventDefault();
        
        setName("");
        setAge("");

        //!validation
        if(initialName.trim().length===0 || initialAge.trim().length===0){
            return;
        }

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
    const onToggleHandler=()=>{
    if(initialName==="" || initialAge===""){
    setVisibility(true)
    }
}
const onCancelHandler=()=>{
    setVisibility(false)
}

return (

      
      <div>
        <form className={styles["form-box"]} action="" onSubmit={registerUserHandler}>

            <label htmlFor='username' >Username
            </label>
            <input  value={initialName} id="username" type="text"  onChange={nameHandler} />
            <label  htmlFor='age' >Age(Years)
            </label >
            <input type="number"  id='age' value={initialAge}  onChange={ageHandler} />

            <button   onClick={onToggleHandler}>Add User</button>
        </form>

       {isVisible?
           <Warning onCancel={onCancelHandler} />
                     
     :null}
    </div>
  )
}

export default Register