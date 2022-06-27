import React from 'react';
import styles from  "./warning.module.scss"

const Warning = (props) => {
const {onCancel}=props;

  return (
    <div onClick={onCancel} className={styles["warning-container"]}>
      <div className={styles.warning}>
        <h2>Invalid input</h2>
      <p>Please enter a valid information</p>
        <button onClick={onCancel}>Okay</button>
      </div>
    </div>
  )
}

export default Warning;