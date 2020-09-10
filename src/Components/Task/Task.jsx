import React from 'react'
import styles from './TaskStyles.css'

const Task = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TaskContainer}>
        <input type="text" className={styles.TaskInput}/>
        <div className={styles.TaskActions}>
          <div className={styles.DelAndSave}>
            <div className={styles.DelIconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.DelIconContainer} d="M14.2929 5.29289C14.1054 5.10536 13.851 5 13.5858 5H10.4142C10.149 5 9.89464 5.10536 9.70711 5.29289L9 6H7C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H15L14.2929 5.29289ZM8 20C7.44772 20 7 19.5523 7 19V9H17V19C17 19.5523 16.5523 20 16 20H8Z" fill="#747E8A"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Task
