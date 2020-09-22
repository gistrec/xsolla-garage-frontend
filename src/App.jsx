import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import Recorder from './Components/Template/Recorder'
import styles from './AppStyles.module.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => this.setState({ tasks: json }))
  }

  render () {
    const tasksCount = this.state.tasks.length

    return (
      <div>
        <div className={styles.page}>
          <SideHeader />
          <Header />
          <SideHeader />

          <SideMain />
          <SideBar tasksCount={tasksCount}/>
          <Workspace tasks={this.state.tasks}/>
          <SideMain />
          {}
        </div>
        <Recorder/>
      </div>
    )
  }
}
export default hot(App)
