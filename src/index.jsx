
import React from 'react'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

render(<Router><App /></Router>, document.getElementById('root'))