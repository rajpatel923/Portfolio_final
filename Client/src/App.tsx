
import './App.css'
import NavBar from './components/navBar'


function App() {

  return (
    <>
    <div className='lg:flex items-center justify-center h-screen overflow-y-hidde z-20  '>
      <div className='w-full lg:mx-40 h-full lg:max-h-[650px] border-[14px] border-black border-solid shadow-sm rounded-xl text-white'>
        <NavBar/>
        
       {/* //Add componets here!! */}
      </div>
    </div>
      
    </>
  )
}

export default App
