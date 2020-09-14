import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import axios from 'axios'
import Recorder from './Components/Recoder/Recorder'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3000/tasks')
      .then(resp => {
        const tasksData = resp.data
        this.setState({ tasks: tasksData })
        console.log(this.state.tasks)
      }).catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Recorder/>
      </Fragment>
    )
  }
}
export default hot(App)