import React, { Fragment } from 'react'
import Calendar from 'react-calendar'
import { calendar } from './CalendarReactStyles.module.css'
import 'react-calendar/dist/Calendar.css'

const CalendarReact = () => {
  return (
    <Calendar className={calendar}/>
  )
}
export default CalendarReact
