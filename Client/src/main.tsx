import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-heroBg bg-opacity-10 bg-transparent bg-center overflow-y-scroll bg-cover bg-fixed  -z-20  '>
      <div className=' z-[50] bg-gradient-to-tr overflow-y-scroll from-gray-700/50 to-gray-700  ' >
        <App />
      </div>

    </div>
  </React.StrictMode>,
)
