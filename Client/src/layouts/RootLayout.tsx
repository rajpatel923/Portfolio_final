import Footer from '../components/footer'
import NavBar from '../components/navBar'
import { Outlet } from 'react-router-dom'


interface homeProps{
  heroSectionHeadingOne?: string;
  heroSectionHeadingTwo?: string;
  heroSectionHeadingThree?: string;
}

const RootLayout = ({heroSectionHeadingOne, heroSectionHeadingTwo, heroSectionHeadingThree}:homeProps) => {
  heroSectionHeadingOne === "" ? "Welcome my name is...|" : heroSectionHeadingOne;
  heroSectionHeadingTwo === "" ? "Patel Raj AtulKumar" : heroSectionHeadingTwo;
  heroSectionHeadingThree === "" ? "Full stack Developer And Machine Learning Engineer": heroSectionHeadingThree;
  return (
    <div>
      <div className='lg:flex items-center justify-center w-full h-screen z-2 '>
        <div className='flex flex-col w-full lg:min-h-[76%]  lg:border-[14px] border-black border-solid shadow-sm rounded-xl text-white lg:max-w-[1140px] '>
          <header className=' fixed w-full lg:static'>
            <NavBar/>
            <div className='w-full border-t-[0.75px] border-gray-500/75'></div>
          </header>
          <main className='flex flex-1 overflow-y-hidden'>
            <Outlet/>
          </main>
          <footer className=' fixed bottom-0 w-full lg:static'>
            <div className='  w-full border-t-[0.75px] border-gray-500/75'></div>
            <Footer/>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default RootLayout