import React from 'react';
import styles from  "./warning.module.scss"

const Warning = () => {
  return (
    <div className={styles["warning-container"]}>
      <div className={styles.warning}>
        <h2>Invalid input</h2>
      <p>Please enter a valid information</p>
        <button>Okay</button>
      </div>
    </div>
  )
}

export default Warning;