import React from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'

const Workspace = () => {
  return (
    <form>
      <div className={styles.workspace}>
        <WorkspaceHeader/>
        <Task/>
      </div>
    </form>
  )
}
export default Workspace
