import React, { Fragment } from 'react'
import { main } from './MainStyles.module.css'
import Workspace from '../Workspace/Workspace'

// eslint-disable-next-line no-unused-vars
const Main = ({ tasks }) => {
  return (
    <main className={main}>
      <Workspace tasks={tasks}/>
    </main>
  )
}
export default Main
