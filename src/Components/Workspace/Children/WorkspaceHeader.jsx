import React from 'react'
import styles from './WorkspaceHeaderStyles.module.css'

const WorkspaceHeader = (props) => {
  const renderTask = () => {
    props.onClick()
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Задачи</h2>
      <button className={styles.addTask} onClick={renderTask}>+ СОЗДАТЬ</button>
      <button className={styles.buttonFeedb}><a className={styles.feedback} href="https://simpoll.ru/run/survey/c0b590c2">Отзыв</a></button>
    </div>
  )
}
export default WorkspaceHeader
