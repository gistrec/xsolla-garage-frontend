import React from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'
import SearchBar from '../SearchBar/SearchBar'

const Workspace = ({ tasks }) => {
  return (
    <div>
      <div className={styles.workspace}>
        <WorkspaceHeader/>
        <SearchBar/>
        {tasks.map(task => (
          <Task key={task.id} id={task.id} title={task.title} bodyTask={task.text_content}/>
        ))}
      </div>
    </div>
  )
}
export default Workspace
