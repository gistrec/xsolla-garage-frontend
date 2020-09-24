import React from 'react'
import styles from './GreetingStyles.module.css'
import planner from '../../../Assets/Pictures/Planner.png'

const Greeting = ({tasksCount}) => {
  let userName = "User"

  return (
    <div className={styles.greeting}>
      <div className={styles.ImageContainer}>
        <img src={planner} className={styles.grImage}/>
      </div>
      <p className={styles.helloUser}>Привет, {userName}!</p>
      <p className={styles.currentTasks}>Количество текущих задач: <b>{tasksCount}</b></p>
    </div>
  )
}
export default Greeting
