
import { useState } from 'react';
import { Button } from './ui/button'
import  downwardArrow from "../assets/downArrow.svg"
import aboutSvg from "../assets/about.svg"
import folderSvg from "../assets/projects.svg"
import mailSvg from "../assets/mail.svg"


function NavBar() {
    const [exploreSectionVisible,setExploreSectionVisible] = useState(false)

    const onExploreButtonClickHandler =()=>{
        setExploreSectionVisible(!exploreSectionVisible)
    }
  return (
    <>
        <div className='bg-primary_bg px-4 lg:px-8 z-[100]'>
            <div className=' flex h-[50px] w-full justify-between py-2'>
                <div className=' flex items-center justify-between'> {/*left side things wrapper*/}
                    <div className=' flex items-center gap-4'> {/*profile and Name wrapper*/}
                        <div id='profilePicture' className=' border-2 rounded-full border-blue-500 '>
                            <img src='https://github.com/shadcn.png' alt='profilePicture' className=' w-6 h-6 lg:w-8 lg:h-8 rounded-full'></img>
                        </div>

                        <div className=' pr-4 mr-4'>
                            <h3 className=' text-lg font-bold lg:text-2xl'>PATEL RAJ</h3>
                        </div>
                    </div>

                    <div className='relative'> {/*Explore things drop down menu*/}
                        <div className=''>
                            <button className={` flex items-center justify-between gap-2 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md text-sm  ${exploreSectionVisible? 'text-white bg-gray-800 ': ''}`} onClick={onExploreButtonClickHandler}>
                                <p className=' text-sm lg:text-lg'>Explore</p>
                                {/* <IoIosArrowDown className='text-sm'/> */}
                                <img src={downwardArrow} alt='downWardArrow' className=' h-6 w-6 font-bold'/>
                            </button>
                        </div>
                        {
                            exploreSectionVisible && (
                            <div className={` absolute z-10 mt-2 w-48 right-0 lg:left-0 text-left rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-black ring-opacity-5 `}>
                                <div className='py-1'>
                                    <a href="#about" className=' flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={aboutSvg} alt='aboutsvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>About</span>
                                    </a>

                                    <a href="#projects" className='flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                       <span className='pl-4 text-sm'>Projects</span>
                                    </a>

                                    <a href="#articles" className='flex px-4 py-2 text-sm  hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Articles</span>
                                    </a>

                                    <a href="#skills" className='flex px-4 py-2 text-sm hover:bg-gray-600'>
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Skills</span>
                                    </a>
                                    <a href="#contact" className='flex px-4 py-2 text-sm  hover:bg-gray-600'>
                                        <img src={mailSvg} alt='mailSvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Contact</span>
                                    </a>
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
                            <Button className=' lg:block bg-blue-400 text-whitefont-bold px-2 py-1 rounded-md text-sm'>Contact Me</Button>
                        </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default NavBar