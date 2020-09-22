import React from 'react'
import CalendarAndGreeting from './Children/CalendarAndGreeting'
import { sideBar } from './SideBarStyles.module.css'

const SideBar = ({tasksCount}) => {
  return (
    <aside className={sideBar}>
      <CalendarAndGreeting tasksCount={tasksCount}/>
    </aside>
  )
}
export default SideBar
