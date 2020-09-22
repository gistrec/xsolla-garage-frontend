import React, { Component } from 'react'
import axios from 'axios'
import { AppContainer } from 'react-hot-loader'

const url = 'https://garage-best-team-ever.tk'

const api = axios.create({
  baseURL: url
})

class CRUD extends Component {
  constructor () {
    super()
    this.state = {
      tasks: []
    }
    this.getTasks()
  }

  async createTask () {
    const api = '/task'
    const data = {
      user_id: 9001,
      title: 'Тестирование голосового ввода',
      text_content: 'test',
      date_create: '2020-09-08 17:17:52',
      date_target: '2020-09-20 17:17:52',
      is_important: true,
      is_urgent: true
    }

    fetch(url + api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  async deleteTask (id) {
    const api = `/task/${id}`
    console.log(url + api)

    fetch(url + api, {
      method: 'DELETE'
    })
  }

  async getTasks () {
    try {
      const api = '/task'
      fetch(url + api).then(data => data.json()).then(json => this.setState({ tasks: json }))
      // let data = await api.get('/task').then(({data}) => data).then(data => {console.log(data); })
    } catch (err) {
      console.log(err)
    }
  }

  async updateTask (id, val) {
    try {
      const api = `/task/${id}`
      fetch(url + api, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text_content: val })
      })
      this.getTasks()
    } catch (err) {
      console.log(err)
    }
  }

  /* async createTask() {
        try {
            let res = await api.post('/', { id: 13, title: "Test task", text_content: "Some random text" })
            console.log(res)
            this.getTasks()
        }
        catch(err) {
            console.log(err)
        }
    } */

  /* async deleteTask(id) {
        try {
            let data = await api.delete(`/${id}`)
            this.getTasks()
        }
        catch(err) {
            console.log(err)
        }
    } */

  render () {
    return (
      <div>
        <button onClick={this.createTask}>Create task</button>
        { this.state.tasks.map(task => <h1 key={task.id} onClick={() => this.updateTask(task.id, `${task.text_content}+`)}>{task.text_content} <button onClick={() => this.deleteTask(task.id)}>x</button> </h1>) }
      </div>
    )
  }
}

export default CRUD
