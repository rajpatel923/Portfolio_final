
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
interface ProjectDetailProps{
  title:string,
  description:string,
  relatedSkills:[string],
  category:string,
  completedDate:string,
  link:string,
  projectImage:[string],
  problemDesp:string,
  problemImage:string,
  solutionDesp:string,
  solutionImage:string,
  resultDesp:string,
  resultImage:string
}
const ProjectsDetail = () => {
  const {projects} = useParams()
  const initializeDataType:ProjectDetailProps={
    title:"",
    description:"",
    relatedSkills:[""],
    category:"",
    completedDate:"",
    link:"",
    projectImage:[""],
    problemDesp:"",
    problemImage:"",
    solutionDesp:"",
    solutionImage:"",
    resultDesp:"",
    resultImage:""
  }
  const [project, setProject] = useState(initializeDataType)
  
  useEffect(()=>{
    axios.get("/api/v1/users/getProjectDetails", {params: {
      projectTitle: projects
    }}).then((response)=>{
      if(response.data && response.data.data){
        setProject(response.data.data[0])
      }
      console.log(project)
    }).catch((error)=>{
      console.log(error)
    })

  },[projects, project])
  return (
    <div className='bg-detailSectionBgHero'>
      <Link to={'/projects'}>
        <div className=' flex w-fit gap-2 items-center mt-10 text-zinc-300 font-medium ml-6'>
          <FaLongArrowAltLeft className='font-thin mr-3'/>
          <h3 className='font-mono'>Projects</h3>
        </div>
      </Link>

    <div className=' mx-10'>
        <h1 className='font-extrabold text-4xl pt-8 w-fit h-fit mb-6'>{project.title}</h1>
        
        <p className='text-zinc-400 mb-6'>
            {project.description}
        </p>

        <div className=' grid grid-cols-1 lg:grid-cols-4 justify-end gap-8'>
            <div className=''>
              <h5>Skills:</h5>
              <ul className='list-none flex flex-row flex-wrap gap-4 justify-stretch pr-6 text-sm font-light'>
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
              <h5>Category :</h5>
              <p>{project.category}</p>
            </div>
            <div>
              <h5>Completed :</h5>
              <p>{project.completedDate}</p>
            </div>
            <div>
              <h5>Link :</h5>
              <p className=' w-full overflow-x-clip'>{project.link}</p>
            </div>
          
        </div>
    </div>
      
    </div>
  )
}

export default ProjectsDetail