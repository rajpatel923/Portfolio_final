import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.tsx'
import Error from './pages/error404.tsx';
import RootLayout from './layouts/RootLayout.tsx';
import DetailLayout from './layouts/DetailLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='details' element={<DetailLayout/>}>

      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-heroBg bg-opacity-10 bg-transparent bg-center overflow-y-auto min-h-screen h-full w-full bg-cover  -z-20  '>
      <div className=' z-50 min-h-screen w-full h-full bg-gradient-to-b overflow-y-scroll from-zinc-900/90 to-zinc-800/90 fixed  ' >
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
