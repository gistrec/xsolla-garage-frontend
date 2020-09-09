import React from 'react'
import styles from './CalendarAndHelloStyles.css'
import Calendar from '../Calendar/CalendarReact'
import Greeting from '../Greeting/Greeting'
const CalendarAndHello = () => {
  return (
    <div className={styles.CalendarAndHello}>
      <Greeting/>
      <Calendar/>
    </div>
  )
}
export default CalendarAndHello
