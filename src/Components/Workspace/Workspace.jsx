import React, { useState } from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from './Children/WorkspaceHeader'
import Task from './Children/Task'
import SearchBar from './Children/SearchBar'

const Workspace = ({ tasks }) => {
  const [isOpen, setOpen] = useState(false)

  const task = () => {
    if (isOpen) { return <Task tags={[]} open={isOpen} /> }
  }

  const renderTask = () => {
    setOpen(true)
  }

  return (
    <div className={styles.workspace}>
      <WorkspaceHeader onClick={renderTask} />
      <SearchBar />
      {task()}
      {tasks.map(task => (
        <Task key={task.id} id={task.id} title={task.title} bodyTask={task.text_content} tags={task.tags} dateTarget={task.date_target} />
      ))}
    </div>
  )
}
export default Workspace
