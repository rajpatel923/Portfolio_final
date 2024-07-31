
import mailSvg from "../assets/mail.svg"
import linkedInSvg from "../assets/linkedIn.svg"
import githubSvg from "../assets/Github.svg"
import { Link } from "react-router-dom"



function Footer() {
    const githubURL = 'https://github.com/rajpatel923'
    const linkedInURL = "https://www.linkedin.com/in/rajpatel923/"
  return (
    <>
        <div className=' max-h-fit h-[50px]  bg-primary_bg px-4 z-[100] flex justify-between items-center'>
            <div className="hover:bg-neutral-700 h-full flex items-center justify-between"> {/*For mail */}
                <img src={mailSvg} alt='mailSvg' className=' w-8 h-8 mx-4'/>
            </div>

            <div className=' hidden lg:block'> {/*For copy right text */}
                    <p>© Copyright 2024 - Patel Raj Atulkumar.</p>
            </div> 

            <div className=' flex gap-4 items-center justify-between mr-4 h-full'>{/*Git hub linked and Instagram */}
                <Link to={linkedInURL} target="_blank">
                    <div className="bg-neutral-800 border rounded-lg border-none py-1">
                        <img src={linkedInSvg} alt='linkedInSvg' className=' w-8 h-8 mx-1 '/>
                    </div>
                </Link>
                <Link to={githubURL} target="_blank">
                    <div className="bg-neutral-800 border rounded-lg border-none py-1">
                        <img src={githubSvg} alt='githubSvfg' className=' w-8 h-8 mx-1'/>
                    </div>
                </Link>

            </div>
        </div>
    </>
  )
}

export default Footer