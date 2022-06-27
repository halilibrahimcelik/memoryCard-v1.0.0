import React from 'react';
import styles from  "./warning.module.scss"

const Warning = (props) => {
const {onCancel,title,text}=props;

  return (
    <div onClick={onCancel} className={styles["warning-container"]}>
      <div className={styles.warning}>
        <h2>{title}</h2>
      <p>{text}</p>
        <button onClick={onCancel}>Okay</button>
      </div>
    </div>
  )
}

export default Warning;