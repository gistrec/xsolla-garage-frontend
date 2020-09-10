import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import CalendarAndHello from './Components/CalendarAndHello/CalendarAndHello'
import Main from './Components/Main/Main'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <CalendarAndHello/>
        <Main/>
      </Fragment>
    )
  }
}
export default hot(App)
