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
      <div className='lg:flex items-center justify-center h-screen z-20'>
        <div className='flex flex-col min-h-screen w-full lg:min-h-[76%] lg:mx-80 lg:border-[14px] border-black border-solid shadow-sm rounded-xl text-white'>
          <header className=' fixed w-full lg:static'>
            <NavBar/>
            <div className=' border w-full border-t-[0.01px] border-[#eeeeee]'></div>
          </header>
          <main className='flex flex-grow'>
            <Outlet/>
          </main>
          <footer className=' fixed bottom-0 w-full lg:static'>
            <div className=' border w-full border-t-[0.01px] border-[#eeeeee]'></div>
            <Footer/>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default RootLayout