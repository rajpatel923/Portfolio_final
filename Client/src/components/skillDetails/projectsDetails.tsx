
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import Loader from '../Loader'
interface ProjectDetailProps{
  title:string,
  description:string,
  relatedSkills:string[],
  category:string,
  completedDate:string,
  link:string,
  projectImage:string[],
  problemDesp:string,
  problemImage:string,
  solutionDesp:string,
  solutionImage:string,
  resultDesp:string,
  resultImage:string
}
const ProjectsDetail = () => {
  const [loading, setLoading] = useState<boolean>()
  const {projects} = useParams()
  const initializeDataType:ProjectDetailProps={
    title:"",
    description:"",
    relatedSkills:[],
    category:"",
    completedDate:"",
    link:"",
    projectImage:[],
    problemDesp:"",
    problemImage:"",
    solutionDesp:"",
    solutionImage:"",
    resultDesp:"",
    resultImage:""
  }
  const [project, setProject] = useState(initializeDataType)
  
  useEffect(()=>{
    setLoading(true)
    axios.get("/api/v1/users/getProjectDetails", {params: {
      projectTitle: projects
    }}).then((response)=>{
      if(response.data && response.data.data){
        setProject(response.data.data[0])
      }
    }).catch((error)=>{
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  
  if(loading){
    return <Loader/>
  }

  return (
    <div className='bg-detailSectionBgHero mb-20 lg:mt-0'>
      <Link to={'/projects'}>
        <div className=' flex w-fit gap-2 items-center mt-10 text-gray-300 font-medium ml-6'>
          <FaLongArrowAltLeft className='font-thin mr-3'/>
          <h3 className='font-mono'>Projects</h3>
        </div>
      </Link>

      <div className=' mx-10'>
        <h1 className='font-extrabold text-4xl pt-8 w-fit h-fit mb-6'>{project.title}</h1>
        
        <p className='text-gray-300 mb-6'>
            {project.description}
        </p>

        <div className=' grid grid-cols-1 lg:grid-cols-4 justify-end gap-8 mb-8'>
            <div className=''>
              <h5 className='text-gray-300/80'>Skills:</h5>
              <ul className='list-none flex flex-row flex-wrap gap-4 justify-stretch pr-6 text-sm font-light mt-4'>
                {
                  project.relatedSkills.map((skill)=>{
                    return <li key={skill}>
                        {skill}
                    </li>
                  })
                }
              </ul>
            </div>
            <div>
              <h5 className='text-gray-300/80'>Category :</h5>
              <p className='mt-4'>{project.category}</p>
            </div>
            <div>
              <h5 className='text-gray-300/80'>Completed :</h5>
              <p className='mt-4'>{project.completedDate}</p>
            </div>
            <div>
              <h5 className='text-gray-300/80'>Link :</h5>
              <p className=' w-full overflow-x-clip mt-4'>{project.link}</p>
            </div>
        </div>
                {/*TODO need to solve the error */}
        <img className=' border border-none rounded-md ob
        ect-fill mt-16' src={project.projectImage[1]}></img>

        <h1 className='font-extrabold text-4xl mt-20 w-fit h-fit mb-6'>{
          project.problemDesp!="" ? "The Problem :" : ""
        }</h1>
        <p className='text-gray-300 mb-6'>
          {project.problemDesp}
        </p>
        <img className=' border border-none object-fill rounded-md w-full h-[20rem]' src={project.problemImage}/>


        <h1 className='font-extrabold text-4xl mt-20 w-fit h-fit mb-6'>{
          project.solutionDesp!="" ? "The Solution :" : ""
        }</h1>
        <p className='text-gray-300 mb-6'>
          {project.solutionDesp}
        </p>
        <img className=' border border-none object-fill rounded-md w-full h-[20rem]' src={project.solutionImage}/>

        <h1 className='font-extrabold text-4xl mt-20 w-fit h-fit mb-6'>{
          project.resultDesp!="" ? "The Solution :" : ""
        }</h1>
        <p className='text-gray-300 mb-6'>
          {project.resultDesp}
        </p>
        <img className=' border border-none object-fill rounded-md w-full h-[20rem]' src={project.resultImage}/>
      </div>
    </div>
  )
}

export default ProjectsDetail