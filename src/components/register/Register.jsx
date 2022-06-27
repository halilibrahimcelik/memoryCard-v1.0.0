import React, { useState } from 'react';
import styles from "./register.module.scss"
import Warning from '../warning/Warning';
import Card from '../card/Card';
const Register = (props) => {
    const {onNewCardData}=props;
    const [initialName, setName]=useState("");
    const [initialMail, setMail]=useState("");
    const [initialAge, setAge]=useState("");
    const [initialJob, setJob]=useState("");
    const [isVisible,setVisibility]=useState(false);
    const [error, setError]=useState();

    const registerUserHandler=(e)=>{
        e.preventDefault();
        
        setName("");
        setAge("");
        setMail("");
        setJob("");

        //!validation
        if(initialName.trim().length===0 || initialAge.trim().length===0 || initialMail.trim().length===0 || initialJob.trim().length===0){
            setError({
                title:"Invalid Input",
                text:"Please enter a valid input"
            });
            return;
        }

        if(+initialAge<1){
        
            setError({
                title:"Invalid Age",
                text:"Please enter a valid age(>0)" 
            });
             return;
        }
        const newUser={
            userName:initialName.toUpperCase(),
            userJob:initialJob,
            userMail:initialMail,
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
    const emailHandler=(e)=>{
        
        setMail(e.target.value);
        
    }
    const occupationHandler=e=>{
        setJob(e.target.value)
    }
    const onToggleHandler=()=>{
    if(initialName==="" || initialAge==="" ||initialJob===""|| initialJob===""){
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
            <label  htmlFor='email' >Email
            </label >
            <input type="email"  id='email' value={initialMail}  onChange={emailHandler} />
            <label  htmlFor='occupation' >Occupation
            </label >
            <input type="text"  id='occupation' value={initialJob}  onChange={occupationHandler} />

            <button   onClick={onToggleHandler}>Add User</button>
        </form>

       {isVisible?
         error&&  <Warning onCancel={onCancelHandler} title={error.title} text={error.text} />
                     
     :null}
    </div>
  )
}

export default Register