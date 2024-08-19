
import { useState } from 'react';
import { Button } from './ui/button'
import  downwardArrow from "../assets/downArrow.svg"
import aboutSvg from "../assets/about.svg"
import folderSvg from "../assets/projects.svg"
import mailSvg from "../assets/mail.svg"
import {Link} from 'react-router-dom'


function NavBar() {
    const [exploreSectionVisible,setExploreSectionVisible] = useState(false)

    const onExploreButtonClickHandler =()=>{
        setExploreSectionVisible(!exploreSectionVisible)
    }
  return (
    <>
        <div className='bg-primary_bg px-4 lg:px-8 z-[100]'>
            <div className=' flex h-[80px] w-full justify-between py-2'>
                <div className=' flex items-center justify-between w-full lg:w-fit'> {/*left side things wrapper*/}
                    <Link to={'/'}>
                        <div className=' flex items-center gap-4'> {/*profile and Name wrapper*/}                  
                                <img src='https://res.cloudinary.com/slientcoder/image/upload/v1723097299/qp38yuuonswyuzojkorb.jpg' alt='profilePicture' className=' w-12 h-12 lg:w-12 lg:h-12 rounded-full object-cover border-[1px] border-blue-400/90 '></img>         
                            <div className=' pr-4 mr-4'>
                                <h3 className=' text-lg font-bold lg:text-2xl'>PATEL RAJ</h3>
                            </div>
                        </div>
                    </Link>
                    <div className='relative'> {/*Explore things drop down menu*/}
                        <div className=''>
                            <button className={` flex items-center justify-between gap-2 bg-neutral-700 border-[0.1px] border-neutral-500/80 shadow-sm hover:bg-gray-500/30 hover:text-white px-4 py-1 rounded-full text-sm  ${exploreSectionVisible? 'text-white bg-gray-500/30 ': ''}`} onClick={onExploreButtonClickHandler}>
                                <p className=' text-sm lg:text-lg'>Explore</p>
                                {/* <IoIosArrowDown className='text-sm'/> */}
                                <img src={downwardArrow} alt='downWardArrow' className=' h-6 w-6 font-bold'/>
                            </button>
                        </div>
                        {
                            exploreSectionVisible && (
                            <div className={` absolute z-10 mt-2 w-48 right-0 lg:left-0 text-left rounded-md bg-primary_bg text-white shadow-lg ring-1 ring-black ring-opacity-5 `}>
                                <div className='py-1'>
                                    <Link to="/aboutme" onClick={onExploreButtonClickHandler} className=' flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={aboutSvg} alt='aboutsvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>About</span>
                                    </Link>

                                    <Link to="/projects" onClick={onExploreButtonClickHandler} className='flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                       <span className='pl-4 text-sm'>Projects</span>
                                    </Link>

                                    <Link to="/articles" onClick={onExploreButtonClickHandler} className='flex px-4 py-2 text-sm  hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Articles</span>
                                    </Link>

                                    <Link to="/skills" onClick={onExploreButtonClickHandler} className='flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Skills</span>
                                    </Link>
                                    <Link to="/contact" onClick={onExploreButtonClickHandler} className='flex px-4 py-2 text-sm  hover:bg-gray-600'>
                                        <img src={mailSvg} alt='mailSvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Contact</span>
                                    </Link>
                                </div>
                            </div>
                            )
                        }
                    </div>

                </div>



                <div className='hidden lg:flex justify-between items-center gap-2 md:gap-6'>  {/*right side things wrapper*/}
                        <div className=' sm:block text-neutral-200 text-lg'> {/*my main focus/ tech*/}
                            <p>Full stack & ML dev</p>
                        </div>

                        <div> {/*contact me button*/}
                            <Link to={'/contact'}>
                                 <Button className=' lg:block bg-blue-400 text-whitefont-bold px-2 py-1 rounded-md text-sm'>Contact Me</Button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default NavBar