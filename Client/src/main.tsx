import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-heroBg bg-opacity-10 bg-transparent bg-center  h-screen  -z-20 '>
      <App />
    </div>
  </React.StrictMode>,
)
