import React, { Fragment } from 'react'
import styles from './GreetingStyles.module.css'
import planner from './Planner.png'

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <div className={styles.ImageContainer}>
        <img src={planner} className={styles.grImage}/>
      </div>
      <p className={styles.helloUser}>Hi, User</p>
      <p className={styles.currentTasks}>Looks like you've got a lot of work to do!</p>
    </div>
  )
}
export default Greeting
