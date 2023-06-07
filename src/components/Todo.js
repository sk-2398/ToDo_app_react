import React from 'react'
import styles from "../style.module.css";

export default function Todo({item}) {
  return (
    <div className={styles.todocont}> 
      <div className={styles.todobox}>
        <h3>{item}</h3>
        <button className={styles.dltbtn}>Done</button>
      </div>
    </div>
  )
}
