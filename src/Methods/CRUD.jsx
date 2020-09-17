import React, { Component } from 'react'
import axios from 'axios'
import { AppContainer } from 'react-hot-loader'

const api = axios.create({
    baseURL: `http://localhost:3000/tasks`
})

class CRUD extends Component {

    constructor() {
        super()
        this.state = {
            tasks: []
        }
        this.getTasks()
    }

    async getTasks() {
        try {
            let data = await api.get('/').then(({data}) => data)
            this.setState({ tasks: data })
        } catch(err) {
            console.log(err)
        }
    }

    async createTask() {
        try {
            let res = await api.post('/', { id: 13, title: "Test task", text_content: "Some random text" })
            console.log(res)
            this.getTasks()
        }
        catch(err) {
            console.log(err)
        }
    }

    async deleteTask(id) {
        try {
            let data = await api.delete(`/${id}`)
            this.getTasks()
        }
        catch(err) {
            console.log(err)
        }
    }

    async updateTask(id, val) {
        try {
            let data = await api.patch(`/${id}`, { text_content: val })
            this.getTasks()
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.createTask}>Create task</button>
                { this.state.tasks.map(task => <h1 key={task.id} onClick={() => this.updateTask(task.id, `${task.text_content}+`)}>{task.text_content} <button onClick={() => this.deleteTask(task.id)}>x</button> </h1>) }
            </div>
        )
    }
}

export default CRUD