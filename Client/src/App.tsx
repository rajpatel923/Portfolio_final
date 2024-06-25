
import './App.css'
import Footer from './components/footer'
import HeroSection from './components/heroSection'
import NavBar from './components/navBar'


function App() {

  return (
    <>
      <div className='lg:flex items-center justify-center h-screen z-20  '>
        <div className='flex flex-col min-h-screen lg:min-h-0 w-full lg:mx-40 h-full lg:max-h-[768px] lg:border-[14px] border-black border-solid shadow-sm rounded-xl text-white'>
          <header className=' fixed w-full lg:static'>
            <NavBar/>
            <div className=' border w-full border-t-[0.01px] border-[#eeeeee]'></div>
          </header>
          <main className=' flex-grow px-12 py-24 items-center '>
            <HeroSection/>
          </main>
          <footer className=' fixed bottom-0 w-full lg:static'>
            <div className=' border w-full border-t-[0.01px] border-[#eeeeee]'></div>
            <Footer/>
          </footer>
        {/* //Add componets here!! */}
        </div>
      </div>
      
    </>
  )
}

export default App
