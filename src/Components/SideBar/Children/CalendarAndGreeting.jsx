import React from 'react'
import styles from './CalendarAndGreetingStyles.module.css'
import CalendarReact from './CalendarReact'
import Greeting from './Greeting'

const CalendarAndGreeting = () => {
  return (
    <div className={styles.CalendarAndGreeting}>
      <Greeting/>
      <CalendarReact/>
    </div>
  )
}
export default CalendarAndGreeting
