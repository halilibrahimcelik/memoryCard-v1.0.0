import React from 'react';
import styles from "./register.module.scss"

const Register = () => {
  return (
    <div>
        <form className={styles["form-box"]} action="">

            <label >Username
            </label>
            <input type="text"  />
            <label >Age(Years)
            </label>
            <input type="text"  />

            <button>Add User</button>
        </form>

    </div>
  )
}

export default Register