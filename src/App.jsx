import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
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
      tasks: []
    }
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  signIn() {
    this.setState({
      isSignedIn: true
    })
  }

  signOut() {
    this.setState({
      isSignedIn: false
    })
  }

  componentDidMount() {
    fetch(`https://garage-best-team-ever.tk/task`).then(data => data.json()).then(json => { this.setState({ tasks: json }); console.log(json) })
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
            <Header signOut={this.signOut} />
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