import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import Greeting from './Components/Greeting/Greeting'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <Greeting/>
      </Fragment>
    )
  }
}
export default hot(App)
