import React, { Fragment } from 'react'
import { main } from './MainStyles.module.css'
import Workspace from '../Workspace/Workspace'

// eslint-disable-next-line no-unused-vars
const Main = () => {
  return (
    <main className={main}>
      <Workspace/>
    </main>
  )
}
export default Main
