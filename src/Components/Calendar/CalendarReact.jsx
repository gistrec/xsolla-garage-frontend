import React, { Fragment } from 'react'
import Calendar from 'react-calendar'
import styles from './CalendarStyles.module.css'
import 'react-calendar/dist/Calendar.css'

const CalendarReact = () => {
  return (
    <Fragment>
      <Calendar className={styles.calendar}/>
    </Fragment>
  )
}
export default CalendarReact
