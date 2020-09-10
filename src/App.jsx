import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import CalendarAndHello from './Components/CalendarAndHello/CalendarAndHello'
import Workspace from './Components/Workspace/Workspace'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <CalendarAndHello/>
        <Workspace/>
      </Fragment>
    )
  }
}
export default hot(App)
