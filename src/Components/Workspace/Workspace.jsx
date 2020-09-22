import React, { useState } from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'
import SearchBar from '../SearchBar/SearchBar'

const Workspace = ({ tasks }) => {

  const [isOpen, setOpen] = useState(false);

  let task = () => {
    if (isOpen)
      return <Task/>
  }

  const renderTask = () => {
    setOpen(true);
  }

  return (
    <div>
      <div className={styles.workspace}>
        <WorkspaceHeader onClick={renderTask}/>
        <SearchBar/>
        {task()}
        {tasks.map(task => (
          <Task key={task.id} id={task.id} title={task.title} bodyTask={task.text_content}/>
        ))}
      </div>
    </div>
  )
}
export default Workspace
