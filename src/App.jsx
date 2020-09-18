import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/SideHeader/SideHeader'
import SideMain from './Components/SideMain/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'
import CRUD from './Methods/CRUD'
import axios from 'axios'
import Recorder from './Components/Recoder/Recorder'
import styles from './AppStyles.module.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get(`http://35.184.198.167:8081/task`)
      .then(resp => {
        const tasksData = resp.data
        this.setState({ tasks: tasksData })
        console.log(this.state.tasks)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <div className={styles.page}>
          <SideHeader />
          <Header />
          <SideHeader />

          <SideMain />
          <SideBar />
          <Main tasks={this.state.tasks}/>
          <SideMain />
          
          {/* <CRUD/> */}
        </div>
        <Recorder/>
      </div>
    )
  }
}
export default hot(App)