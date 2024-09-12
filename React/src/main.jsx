import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  //virtual dom is created here.....
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
