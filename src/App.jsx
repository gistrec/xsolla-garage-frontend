import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/SideHeader/SideHeader'
import SideMain from './Components/SideMain/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'
import CRUD from './Methods/CRUD'
import axios from 'axios'
import styles from './AppStyles.module.css'

class App extends React.Component {
 /* constructor (props) {
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
  } */

  render () {
    return (
      <div className={styles.page}>
        <SideHeader/>
        <Header/>
        <SideHeader/>

        <SideMain/>
        <SideBar/>
        <Main/>
        <SideMain/>

        <CRUD/>
      </div>
    )
  }
}
export default hot(App)
