import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
// import Greeting from './Components/Greeting/Greeting'
// import CalendarReact from './Components/Calendar/CalendarReact'
import CalendarAndHello from './Components/CalendarAndHello/CalendarAndHello'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <CalendarAndHello/>
      </Fragment>
    )
  }
}
export default hot(App)
