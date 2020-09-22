import React from 'react'
import styles from './CalendarAndHelloStyles.module.css'
import CalendarReact from './CalendarReact'
import Greeting from './Greeting'
const CalendarAndHello = () => {
  return (
    <div className={styles.CalendarAndHello}>
      <Greeting/>
      <CalendarReact/>
    </div>
  )
}
export default CalendarAndHello
