import React, { useEffect } from 'react'
import 'react-calendar/dist/Calendar.css'
import styles from './CalendarReactStyles.module.css'
import Calendar from 'react-calendar'

const CalendarReact = () => {
  useEffect(() => {
    const now = document.getElementsByClassName('react-calendar__tile--now')[0];
    now.style.background = '#0073F7';
    now.style.borderRadius = '50%';
    now.style.color = 'white';
  })

  return (
    <Calendar className={styles.calendar}/>
  )
}
export default CalendarReact
