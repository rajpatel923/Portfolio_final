
import mailSvg from "../assets/mail.svg"
import linkedInSvg from "../assets/linkedIn.svg"
import githubSvg from "../assets/Github.svg"
import { NavLink } from "react-router-dom"
import { IoDocumentTextOutline } from "react-icons/io5";

function Footer() {
    const githubURL = 'https://github.com/rajpatel923'
    const linkedInURL = "https://www.linkedin.com/in/rajpatel923/"
    const resumeUrl = "https://patelraj2publicurl.s3.us-east-2.amazonaws.com/Raj_Patel.pdf"
  return (
    <>
        <div className=' max-h-fit h-[50px]  bg-primary_bg px-4 z-[100] flex justify-between items-center'>
            <NavLink to={'/contact'} className={({isActive})=> isActive ? "bg-neutral-700 rounded-lg border-none" : ""}>
                <div className="hover:bg-neutral-700 rounded-lg border-none py-1 "> {/*For mail */}
                    <img src={mailSvg} alt='mailSvg' className=' w-8 h-8 mx-4'/>
                </div>
            </NavLink>

            <div className=' hidden lg:block'> {/*For copy right text */}
                    <p>© Copyright 2024 - Patel Raj Atulkumar.</p>
            </div> 

            <div className=' flex gap-4 items-center justify-between mr-4 h-full'>{/*Git hub linked and Instagram */}
                <NavLink to={linkedInURL} target="_blank">
                    <div className="bg-neutral-800 border rounded-lg border-none py-1">
                        <img src={linkedInSvg} alt='linkedInSvg' className=' w-8 h-8 mx-1 '/>
                    </div>
                </NavLink>
                <NavLink to={githubURL} target="_blank">
                    <div className="bg-neutral-800 border rounded-lg border-none py-1">
                        <img src={githubSvg} alt='githubSvfg' className=' w-8 h-8 mx-1'/>
                    </div>
                </NavLink>
                <NavLink to={resumeUrl} target="_blank" >
                    <div className="bg-neutral-800 border rounded-lg border-none py-1">
                        <IoDocumentTextOutline className=' w-8 h-8 mx-1 text-icon_color'/>
                    </div>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Footer