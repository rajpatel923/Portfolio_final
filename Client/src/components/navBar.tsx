
import { useState } from 'react';
import { Button } from './ui/button'
import { IoIosArrowDown } from "react-icons/io";
import  downwardArrow from "../assets/downArrow.svg"

function NavBar() {
    const [exploreSectionVisible,setExploreSectionVisible] = useState(false)

    const onExploreButtonClickHandler =()=>{
        setExploreSectionVisible(!exploreSectionVisible)
    }
  return (
    <>
        <div className='bg-neutral-600 px-4  lg:px-8 z-[100]'>
            <div className=' flex h-[60px] w-full justify-between pt-2'>
                <div className=' flex items-center justify-between'> {/*left side things wrapper*/}
                    <div className=' flex items-center gap-4'> {/*profile and Name wrapper*/}
                        <div id='profilePicture' className=' border-2 rounded-full border-blue-500 '>
                            <img src='https://github.com/shadcn.png' alt='profilePicture' className=' w-6 h-6 lg:w-8 lg:h-8 rounded-full'></img>
                        </div>

                        <div className=' pr-4 mr-4'>
                            <h3 className=' text-lg font-bold lg:text-3xl'>PATEL RAJ</h3>
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
                                    <a href="#about" className='block px-4 py-2 text-sm hover:bg-gray-600'>
                                        About
                                    </a>

                                    <a href="#projects" className='block px-4 py-2 text-sm hover:bg-gray-600'>
                                        Projects
                                    </a>

                                    <a href="#articles" className='block px-4 py-2 text-sm  hover:bg-gray-600'>
                                        Articles
                                    </a>

                                    <a href="#skills" className='block px-4 py-2 text-sm hover:bg-gray-600'>
                                        Skills
                                    </a>
                                    <a href="#contact" className='block px-4 py-2 text-sm  hover:bg-gray-600'>
                                        Contact
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