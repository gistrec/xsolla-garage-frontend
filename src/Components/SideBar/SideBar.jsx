import React from 'react'
import CalendarAndGreeting from './Children/CalendarAndGreeting'
import { sideBar } from './SideBarStyles.module.css'

const SideBar = props => {
  return (
    <aside className={sideBar}>
      <CalendarAndGreeting tasksCount={props.tasksCount} userName={props.userName}/>
    </aside>
  )
}
export default SideBar
