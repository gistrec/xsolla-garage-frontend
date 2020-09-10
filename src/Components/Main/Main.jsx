import React, { Fragment } from 'react'
import styles from './MainStyles.css'
import CalendarAndHello from '../CalendarAndHello/CalendarAndHello'
import Workspace from '../Workspace/Workspace'

// eslint-disable-next-line no-unused-vars
const Main = () => {
  return (
    <Fragment>
      <main className={styles.main}>
        <CalendarAndHello/>
        <Workspace/>
      </main>
    </Fragment>
  )
}
export default Main
