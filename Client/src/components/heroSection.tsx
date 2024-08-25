import aboutSvg from "../assets/about.svg"
import folderSvg from "../assets/projects.svg"
import {Link} from 'react-router-dom'
import gsap from "gsap"
import { useEffect } from "react"




interface heroSectionProps{
    heroSectionHeadingTwo?:string;
    heroSectionHeadingThree?:string;
    heroSectionHeadingOne:string;
}

function HeroSection({heroSectionHeadingOne,heroSectionHeadingTwo,heroSectionHeadingThree}:heroSectionProps) {
    
   const welcomeText:string[] = heroSectionHeadingOne.split("")

    useEffect(()=>{
        gsap.to("#welcome_anim_line", {
            duration: 0.5,
            opacity: 1,
            repeat:-1,
            ease: "power1.inOut",
        }),
        gsap.fromTo("#welcome_char",{
            width: "0px",
            opacity: 0
        },{
            opacity:1,
            stagger: 0.2,
            duration: 1,
            width: `fit-content`,
            repeat: -1,
            yoyo:true,
            delay: 0.5
        })
    }, [])
  return (
    <>
        <div className="flex justify-center w-full items-cente my-32">
            <div className=' w-full px-12'>
                <div className='flex flex-col items-center lg:flex-row justify-between place-items-start pb-20'> {/* This will have flex-2 that will have text on left and options on the right */}
                    <div className='basis-1/3 flex flex-col items-center text-center lg:items-start  lg:text-start lg:basis-2/3'> {/* Col on the left */}
                        <div>
                            <h4 className='text-lg lg:text-xl text-[#b9dafb] inline-block' id="welcome_text">
                                {   welcomeText.length > 0 ? (
                                        welcomeText.map((char: string, index: number) => (
                                        <span key={index} className="inline-block target" id="welcome_char">{char}</span>
                                        ))
                                    ) : (
                                        <span></span>
                                    )
                                }
                                <span id="welcome_anim_line" className="opacity-0 font-[1000] text-2xl">|</span>
                            </h4>
                        </div>

                        <div className=' mt-4'>
                            <h1 className='text-[30px] lg:text-[54px] text-white font-extrabold'>{heroSectionHeadingTwo?heroSectionHeadingTwo:"Patel Raj AtulKumar"}</h1>
                        </div>

                        <div className=' mt-2'>
                            <p className='text-xl lg:text-2xl text-white text-opacity-80'>
                                {heroSectionHeadingThree?heroSectionHeadingThree:"Full stack Developer And Machine Learning Engineer"}
                            </p>
                        </div>

                    </div>

                    <div className=' mt-20 lg:mt-0 basis-2/3 gap-10 flex h-full  lg:basis-1/3 '> {/* Col on the right */}
                            <div className=' basis-1/2 flex flex-col gap-10 justify-between items-center'> {/* row on the top */}

                                <div className='basis-1/2 w-full'> {/* About me */}
                                    <Link to={'/aboutme'}>
                                            <div className='flex flex-col w-full items-center justify-center'>
                                            <div className=''>
                                                <img src={aboutSvg} alt='aboutsvg' className=' w-[70px] h-[70px]'/>
                                            </div>
                                            <p className=' mt-2 text-center text-2xl '>About_Me</p>
                                            </div>
                                    </Link>
                                </div>

                                <div className='basis-1/2 w-full'> {/* Articles */}
                                    <Link to={'articles'}>
                                        <div className='flex flex-col w-full items-center justify-center'>
                                            <img src={folderSvg} about='folderSvfg' className=' w-[70px] h-[70px]'/>
                                            <p className='mt-2 text-center text-2xl'>Articles</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            <div className=' basis-1/2 flex flex-col gap-10 justify-center items-center '>  
                                <div className='basis-1/2 w-full'> {/* Projects */}
                                    <Link to={'projects'}>
                                        <div className='flex flex-col w-full items-center justify-center'>
                                            <img src={folderSvg} about='folderSvfg' className=' w-[70px] h-[70px]'/>
                                            <p className='mt-2 text-center text-2xl'>Projects</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className='basis-1/2 w-full'> {/* Skills */}
                                    <Link to={'skills'}>
                                        <div className='flex flex-col w-full items-center justify-center'>
                                            <img src={folderSvg} about='folderSvfg' className='w-[70px] h-[70px]'/>
                                            <p className='mt-2 text-center text-2xl'>My skills</p>
                                        </div>
                                    </Link>
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