import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('app'))
})
