import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
      </Fragment>
    )
  }
}
export default hot(App)
