import React, { Fragment } from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'

const Workspace = () => {
  return (
    <Fragment>
      <form>
        <div className={styles.workspace}>
          <WorkspaceHeader/>
          <Task/>
        </div>
      </form>
    </Fragment>
  )
}
export default Workspace
