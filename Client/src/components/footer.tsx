import React from 'react'
import mailSvg from "../assets/mail.svg"
import linkedInSvg from "../assets/linkedIn.svg"
import githubSvg from "../assets/Github.svg"
import { Button } from './ui/button'


function Footer() {
  return (
    <>
        <div className=' max-h-fit h-[40px] bg-neutral-600 px-4 z-[100] flex justify-between items-center'>
            <div> {/*For mail */}
                        <img src={mailSvg} alt='mailSvg' className=' w-8 h-8 mx-4'/>
            </div>

            <div className=' hidden lg:block'> {/*For copy right text */}
                    <p>© Copyright 2024 - Patel Raj Atulkumar.</p>
            </div> 

            <div className=' flex gap-4'>{/*Git hub linked and Instagram */}
                <div>
                    <img src={linkedInSvg} alt='linkedInSvg' className=' w-8 h-8'/>
                </div>

                <div>
                    <img src={githubSvg} alt='githubSvfg' className=' w-8 h-8'/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer