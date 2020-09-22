import React from 'react'
import styles from './WorkspaceHeaderStyles.module.css'

const WorkspaceHeader = ( props ) => {
  const renderTask = () => {
    props.onClick();
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}> Tasks </h2>
      <button className={styles.addTask} onClick={renderTask}>+ NEW TASK</button>
    </div>
  )
}
export default WorkspaceHeader
