import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './Components/Header/Header'
import SideHeader from './Components/SideHeader/SideHeader'
import SideMain from './Components/SideMain/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'
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
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => this.setState({ tasks: json }))
  }

  render () {
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
