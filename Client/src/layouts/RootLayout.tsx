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
      <div className=' flex lg:items-center justify-center w-full h-screen z-2 '>
        <div className=' flex flex-col w-full lg:h-[700px]  lg:border-[14px] border-black border-solid shadow-sm rounded-xl text-white lg:max-w-[1140px] '>
          <header className='z-10 w-full lg:static'>
            <NavBar/>
            <div className='w-full border-t-[0.75px] border-gray-500/75'></div>
          </header>
          <main className='flex flex-grow overflow-y-scroll '>
            <Outlet/>
          </main>
          <footer className='z-10 -bottom-11 w-full lg:static'>
            <div className='  w-full border-t-[0.75px] border-gray-500/75'></div>
            <Footer/>
          </footer>
        </div>
      </div>
  )
}

export default RootLayout