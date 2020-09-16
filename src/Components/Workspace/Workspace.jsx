import React, { Fragment } from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'
import SearchBar from '../SearchBar/SearchBar'

const Workspace = () => {
  return (
    <form>
      <div className={styles.workspace}>
        <WorkspaceHeader/>
        <SearchBar/>
        <Task/>
      </div>
    </form>
  )
}
export default Workspace
