import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.tsx'
import Error from './pages/error404.tsx';
import RootLayout from './layouts/RootLayout.tsx';
import DetailLayout from './layouts/DetailLayout.tsx';
import AboutMe from './components/AboutMe.tsx'
import Skills from './components/skills.tsx';
import SkillDetail from './components/skillDetails/skillsDetails.tsx';
import Projects from './components/projects.tsx';
import ProjectsDetail from './components/skillDetails/projectsDetails.tsx';
import Contact from './components/contact.tsx';
import AdminLayout from './layouts/AdminLayout.tsx';
import AdminLogin from './components/AdminComponents/AdminLogin.tsx';
import AdminPage from './pages/adminHomePage.tsx';
import Article from './components/Article.tsx';
import { useAuthStore } from './store/authStore.ts';


interface RedirectAuthenticatedUserProps {
  children: ReactNode;
}

interface ProtectedRouteProps{ 
  children: React.ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to='/admin/dashboard/login' replace />;
  }


  // Render children if the user is authenticated and authorized
  return <>{children}</>;
};

const RedirectAuthenticatedUser: React.FC<RedirectAuthenticatedUserProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.user_image) {
    return <Navigate to='/admin/dashboard' replace />;
  }
  return <>{children}</>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='' element={<DetailLayout/>}>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='skills/:skillTitle' element={<SkillDetail/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='projects/:projects' element={<ProjectsDetail/>}/>
            <Route path='/articles' element={<Article/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
      <Route path="" element={<AdminLayout/>}>
        <Route path='/admin/dashboard/login' element={
                                        <RedirectAuthenticatedUser>
                                          <AdminLogin/>
                                      </RedirectAuthenticatedUser>
                                    }/>
        //todo:- anything inside below this code need authentication !!
        <Route path='/admin/dashboard' element={
          <ProtectedRoute>
            <AdminPage/>
          </ProtectedRoute>
          }/>
      </Route>
   </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-heroBg bg-opacity-10 bg-transparent bg-center min-h-screen h-full w-full bg-cover  -z-20  '>
      <div className=' z-50 min-h-screen w-full h-full bg-gradient-to-b overflow-y-scroll from-zinc-900/90 to-zinc-800/90 fixed  ' >
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
