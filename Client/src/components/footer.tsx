import React from 'react'
import mailSvg from "../assets/mail.svg"
import linkedInSvg from "../assets/linkedIn.svg"
import githubSvg from "../assets/Github.svg"


function Footer() {
  return (
    <>
        <div className=' bg-neutral-600 px-4 lg:px-8 z-[100] flex justify-between items-center pt-2 lg:h-[80px] overflow-hidden'>

            <div> {/*For mail */}
                <div>
                    <img src={mailSvg} alt='mailSvg' className=' w-12 h-12 mx-4'/>
                </div>
            </div>

            <div className=' hidden lg:block'> {/*For copy right text */}
                    <p>© Copyright 2024 - Patel Raj Atulkumar.</p>
            </div> 

            <div className=' flex mx-4 gap-8'>{/*Git hub linked and Instagram */}
                <div>
                    <img src={linkedInSvg} alt='linkedInSvg' className=' w-12 h-12'/>
                </div>

                <div>
                    <img src={githubSvg} alt='githubSvfg' className=' w-12 h-12'/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer