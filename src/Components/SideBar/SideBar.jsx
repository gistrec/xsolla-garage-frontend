import React from 'react'
import CalendarAndGreeting from './Children/CalendarAndGreeting'
import { sideBar } from './SideBarStyles.module.css'

const SideBar = () => {
  return (
    <aside className={sideBar}>
      <CalendarAndGreeting/>
    </aside>
  )
}
export default SideBar
