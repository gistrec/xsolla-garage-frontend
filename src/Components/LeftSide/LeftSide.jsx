import React from 'react'
import CalendarAndHello from '../CalendarAndHello/CalendarAndHello'
import { leftSide } from './LeftSideStyles.module.css'

const LeftSide = () => {
  return (
    <aside className={leftSide}>
      <CalendarAndHello/>
    </aside>
  )
}
export default LeftSide
