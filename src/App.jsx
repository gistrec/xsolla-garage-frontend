import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <Main/>
      </Fragment>
    )
  }
}
export default hot(App)
