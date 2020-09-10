import React from 'react'
import styles from './WorkspaceHeaderStyles.css'

const WorkspaceHeader = () => {
  return (
    <div className={styles.WS_header}>
      <div className={styles.WS_wrapper}>
        <div className={styles.WS_Space}>
          <h2 className={styles.WS_title}>Tasks</h2>
          <button className={styles.Btn}>NEW TASK</button>
        </div>
      </div>
    </div>
  )
}
export default WorkspaceHeader
