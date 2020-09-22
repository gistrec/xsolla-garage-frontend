import React from 'react'
import styles from './CalendarAndGreetingStyles.module.css'
import CalendarReact from './CalendarReact'
import Greeting from './Greeting'

const CalendarAndGreeting = ({tasksCount}) => {
  return (
    <div className={styles.CalendarAndGreeting}>
      <Greeting tasksCount={tasksCount}/>
      <CalendarReact/>
    </div>
  )
}
export default CalendarAndGreeting
