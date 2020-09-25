import React, { useEffect } from 'react'
import styles from './CalendarAndGreetingStyles.module.css'
import CalendarReact from './CalendarReact'
import Greeting from './Greeting'

const CalendarAndGreeting = ({tasksCount}) => {
  useEffect(() => {
    const now = document.getElementsByClassName('react-calendar__tile--now')[0];
    now.style.background = '#0073F7';
    now.style.color = 'white';
    now.style.borderRadius = '50%';
  })

  return (
    <div className={styles.CalendarAndGreeting}>
      <Greeting tasksCount={tasksCount}/>
      <CalendarReact/>
    </div>
  )
}
export default CalendarAndGreeting
