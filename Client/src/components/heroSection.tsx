import React from 'react'
import aboutSvg from "../assets/about.svg"
import folderSvg from "../assets/projects.svg"

function HeroSection() {
  return (
    <>
        <div className=' h-full w-full lg:max-h-[362px]'>
            <div className='flex flex-col flex-shrink py-4 items-center lg:flex-row justify-between place-items-start  h-full '> {/* This will have flex-2 that will have text on left and options on the right */}

                <div className='basis-1/3 flex flex-col items-center lg:items-start h-full lg:text-start lg:basis-2/3'> {/* Col on the left */}

                    <div>
                        <p className='text-xl lg:text-4xl text-[#c7e3ff]'>Welcome my name is...|</p>
                    </div>

                    <div className=' mt-12'>
                        <h1 className='text-[30px] lg:text-[54px] text-white'>Patel Raj AtulKumar</h1>
                    </div>

                    <div className=' mt-8'>
                        <p className='text-xl lg:text-2xl text-white text-opacity-80'>
                            Full stack Developer And Machine Learning Engineer
                        </p>
                    </div>

                </div>

                <div className='basis-2/3 flex gap-10 h-full  lg:basis-1/3'> {/* Col on the right */}
                        <div className=' basis-1/2 flex-col gap-10 justify-between items-center'> {/* row on the top */}

                            <div className='basis-1/2 w-full'> {/* About me */}
                                    <div className='flex flex-col w-full items-center justify-center'>
                                        <div className=''>
                                            <img src={aboutSvg} alt='aboutsvg' className=' w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'/>
                                        </div>
                                        <p className=' mt-2 text-center text-2xl '>About_Me</p>
                                    </div>
                            </div>

                            <div className='basis-1/2 w-full'> {/* Articles */}
                                    <div className='flex flex-col w-full items-center justify-center'>
                                        <img src={folderSvg} about='folderSvfg' className=' w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'/>
                                        <p className='mt-2 text-center text-2xl'>Articles</p>
                                    </div>
                            </div>

                        </div>

                        <div className=' basis-1/2 flex-col gap-10 justify-center items-center'>  
    

                            <div className='basis-1/2 w-full'> {/* Projects */}
                                    <div className='flex flex-col w-full items-center justify-center'>
                                        <img src={folderSvg} about='folderSvfg' className=' w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'/>
                                        <p className='mt-2 text-center text-2xl'>Projects</p>
                                    </div>
                            </div>

                            <div className='basis-1/2 w-full'> {/* Skills */}
                                    <div className='flex flex-col w-full items-center justify-center'>
                                        <img src={folderSvg} about='folderSvfg' className=' w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'/>
                                        <p className='mt-2 text-center text-2xl'>My_skills</p>
                                    </div>
                            </div>

                        </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default HeroSection