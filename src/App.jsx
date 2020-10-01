import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import SignIn from './Components/SignIn/SignIn'
import Header from './Components/Header/Header'
import SideHeader from './Components/GridComponents/SideHeader'
import SideMain from './Components/GridComponents/SideMain'
import SideBar from './Components/SideBar/SideBar'
import Workspace from './Components/Workspace/Workspace'
import styles from './AppStyles.module.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isSignedIn: false,
      userName: '',
      userPic: '',
      tasks: [],
      tasksCount: 0
    }
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  signIn(userName, userPic) {
    this.setState({
      isSignedIn: true,
      userName: userName,
      userPic: userPic
    })
  }

  signOut() {
    this.setState({
      isSignedIn: false
    })
  }

  componentDidMount() {
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => { this.setState({ tasks: json, tasksCount: json.length }) })
  }

  render() {
    const tasksCount = this.state.tasks.length

    return (
      <Router>
        { this.state.isSignedIn != true ? <Redirect to="/signin" /> : <Redirect to="/" /> }
        <Route path="/signin">
          <SignIn signIn={this.signIn} />
        </Route>
        <Route exact path="/">
          <div className={styles.page}>
            <SideHeader />
            <Header signOut={this.signOut} userName={this.state.userName} userPic={this.state.userPic} />
            <SideHeader />

            <SideMain />
            <SideBar tasksCount={this.state.tasksCount} userName={this.state.userName} />
            <Workspace tasks={this.state.tasks} />
            <SideMain />
          </div>
        </Route>
      </Router>
    )
  }
}
export default hot(App)