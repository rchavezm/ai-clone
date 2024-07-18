import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvier from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvier>
    <App />
  </ContextProvier>,
)
