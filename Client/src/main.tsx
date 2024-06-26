import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-heroBg bg-opacity-10 bg-transparent bg-center overflow-y-scroll bg-cover bg-fixed  -z-20  '>
      <div className=' z-[50] bg-gradient-to-b overflow-y-scroll from-zinc-900/90 to-zinc-800/90  ' >
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
