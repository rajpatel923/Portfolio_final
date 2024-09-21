import { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import AddSkillForm from './AddSkillForm';
import AddProjectForm from './AddProjectForm';
import AddArticleBlog from './AddArticleBlog';
const AdminHero = () => {
  const [SkillShowmodel, setSkillShowmodel] = useState(false)
  const [ProjectShowmodel, setProjectShowmodel] = useState(false)
  const [BlogShowmodel, setBlogShowmodel] = useState(false)
  return (
    <div className='text-white h-full lg:h-[94vh] grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 overflow-scroll bg-detailSectionBgHero'>
        <div onClick={()=> setSkillShowmodel(true)} className='min-h-[80px] flex flex-col items-center justify-center border-[2px] border-secondary_tx_color gap-2 py-2 hover:cursor-pointer'>
          <h2 className='font-semibold text-lg text-secondary_tx_color '>Add Skill</h2>
          <FaPlus className=' h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] text-secondary_tx_color'/>
          {SkillShowmodel && <AddSkillForm onClose={()=> setSkillShowmodel(false)}/>}
        </div>
        <div onClick={()=>{setProjectShowmodel(true)}} className='min-h-[80px] flex flex-col items-center justify-center border-[2px] border-secondary_tx_color gap-2 py-2 hover:cursor-pointer'>
          <h2 className='font-semibold text-lg text-secondary_tx_color py-2'>Add Project</h2>
          <FaPlus className=' h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] text-secondary_tx_color'/>
          {ProjectShowmodel && <AddProjectForm onClose={()=> setProjectShowmodel(false)}/>}
        </div>
        <div onClick={()=>setBlogShowmodel(true)} className='min-h-[80px] flex flex-col items-center justify-center border-[2px] border-secondary_tx_color gap-2 py-2 hover:cursor-pointer'>
          <h2 className='font-semibold text-lg text-secondary_tx_color py-2'>Add Blog</h2>
          <FaPlus className=' h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] text-secondary_tx_color'/>
          {BlogShowmodel && <AddArticleBlog onClose={()=> setBlogShowmodel(false)}/>}
        </div>
        <div className='min-h-[80px] flex flex-col items-center justify-center border-[2px] border-secondary_tx_color gap-2 py-2 hover:cursor-not-allowed'>
          <h2 className='font-semibold text-lg text-secondary_tx_color py-2'>Edit About_Me</h2>
          <FaPlus className=' h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] text-secondary_tx_color'/>
        </div>
    </div>
  )
}

export default AdminHero