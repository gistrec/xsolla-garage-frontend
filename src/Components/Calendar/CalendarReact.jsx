import React, { Fragment } from 'react'
import Calendar from 'react-calendar'
import styles from './CalendarStyles.module.css'
import 'react-calendar/dist/Calendar.css'

const CalendarReact = () => {
  return (
    <Calendar className={styles.calendar}/>
  )
}
export default CalendarReact
