import { GrHomeRounded } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import folderSvg from "../../assets/projects.svg"
import aboutSvg from "../../assets/about.svg"
import mailSvg from "../../assets/mail.svg"


function DetailLayoutSidebar() {
  return (
    <>
        <div className='flex flex-col  gap-6 mt-4 font-medium text-slate-300'>
            <div className="flex flex-row gap-4 px-4">
                <Link to={"/"}>
                    <div className="flex items-center justify-center border-[0px] p-1 rounded-full w-5 h-5 bg-[#e15b5b]">
                        <GrHomeRounded />
                    </div>
                </Link>
                <div className="border p-1 rounded-full w-5 h-5 bg-[#bababa] hover:cursor-pointer" />
                <div className="border p-1 rounded-full w-5 h-5 bg-[#bababa] hover:cursor-pointer"/>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <h5 className="font-light text-grayish_black px-4">Folder</h5>
                <ul>
                    <li className=" hover:bg-gray-600 transition-color duration-[0.5s]">
                        <NavLink to="/projects"  className={ ({isActive})=> `flex py-2 text-sm px-4 
                                                ${isActive ? "bg-gray-600" : ""} `}  >
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                       <span className='pl-4 text-sm'>Projects</span>
                        </NavLink>                
                    </li>
                    <li className=" hover:bg-gray-600 transition-color duration-[0.5s]">
                        <NavLink to="/articles"   className={ ({isActive})=> `flex py-2 text-sm px-4 
                                                ${isActive ? "bg-gray-600" : ""} `} >
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Articles</span>
                        </NavLink>
                    </li>
                    <li className=" hover:bg-gray-600 transition-color duration-[0.5s]">
                        <NavLink to="/skills"   className={ ({isActive})=> `flex py-2 text-sm px-4 
                                                ${isActive ? "bg-gray-600" : ""} `} >
                                        <img src={folderSvg} about='folderSvfg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Skills</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <h5 className='font-light text-grayish_black px-4'>Files</h5>
                <ul >
                    <li className=" hover:bg-gray-600 transition-color duration-[0.5s]">
                        <NavLink to="/aboutme"className={ ({isActive})=> `flex py-2 text-sm px-4 
                                                ${isActive ? "bg-gray-600" : ""} `}>
                                        <img src={aboutSvg} alt='aboutsvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>About</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <h5 className='font-light text-grayish_black px-4'>Contact</h5>
                <ul>
                    <li className=" hover:bg-gray-600 transition-color duration-[0.5s]">
                        <NavLink to="/contact"  className={ ({isActive})=> `flex py-2 text-sm px-4 
                                                ${isActive ? "bg-gray-600" : ""} `}>
                                        <img src={mailSvg} alt='mailSvg' className='w-5 h-5'/>
                                        <span className='pl-4 text-sm'>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default DetailLayoutSidebar