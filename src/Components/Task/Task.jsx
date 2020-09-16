import React from 'react'
import styles from './TaskStyles.module.css'
const Task = () => {
  return (
    <div className={styles.TaskContainer}>
      <details>
        <summary className={styles.TaskTitleContainer}>
          <div className={styles.CheckboxTitleWrapper}>
            <input type="checkbox" className={styles.Checkbox}/>
            <div className={styles.TitleDataWrapper}>
              <textarea className={styles.Title}/>
              <time>1957-10-04, 12:00</time>
            </div>
          </div>
        </summary>

        <textarea className={styles.TaskInput}/>
        <div className={styles.TaskActions}>
          <div className={styles.DelAndSave}>
            <div className={styles.DelIconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className={styles.DelIconContainer} fill="none" d="M9 14H15V19H9zM11 5H13V7H11z"/>
                <path className={styles.DelIconContainer} fill="none" d="M7,14c0-1.103,0.897-2,2-2h6c1.103,0,2,0.897,2,2v5h2.001L19,8.414L15.586,5H15v4h-1h-1h-2H9H7V5H5v14h2V14z"/>
                <path className={styles.DelIconContainer} d="M5,21h14c1.103,0,2-0.897,2-2V8c0-0.265-0.105-0.52-0.293-0.707l-4-4C16.52,3.105,16.266,3,16,3H5C3.897,3,3,3.897,3,5v14 C3,20.103,3.897,21,5,21z M15,19H9v-5h6V19z M13,7h-2V5h2V7z M5,5h2v4h2h2h2h1h1V5h0.586L19,8.414L19.001,19H17v-5 c0-1.103-0.897-2-2-2H9c-1.103,0-2,0.897-2,2v5H5V5z" fill="#747E8A"/>
              </svg>
            </div>
            <div className={styles.DelIconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className={styles.DelIconContainer} d="M5 8v12c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V8c0 0-.447 0-1 0H6C5.447 8 5 8 5 8zM3 6L8 6 16 6 21 6 21 4 16.618 4 15 2 9 2 7.382 4 3 4z" fill="#747E8A"/>
              </svg>
            </div>
          </div>
        </div>
      </details>
    </div>

  )
}
export default Task
