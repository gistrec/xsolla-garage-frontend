import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SignIn from './Components/SignIn/SignIn'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import styles from './AppStyles.module.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      tasks: []
    }
  }

  componentDidMount() {
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => {this.setState({ tasks: json }); console.log(json) })
  }

  render() {
    const tasksCount = this.state.tasks.length

    return (
      <Router>
        <Route path="/signin">
          <SignIn className={styles.signin}/>
        </Route>
        <Route exact path="/">
          <div className={styles.page}>
            <SideHeader />
            <Header />
            <SideHeader />

            <SideMain />
            <SideBar tasksCount={tasksCount} />
            <Workspace tasks={this.state.tasks} />
            <SideMain />
          </div>
        </Route>
      </Router>
    )
  }
}
export default hot(App)
