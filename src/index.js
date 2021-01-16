import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles/App.css'

ReactDom.render(
  <App increment={1} />,
  document.getElementById('root')
)
