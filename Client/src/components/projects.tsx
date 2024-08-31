import { useEffect, useState } from 'react'
import Card from "./skillsCard/skillCard"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';

interface Projects{
  projectImage:[string],
  title:string,
  _id:string,
}

const Projects = () => {
  const initializeDataType:Projects[] = [
    {
      projectImage:[""],
      title:"",
      _id:"",
    }
  ];
   
  const [projects, setProjects] = useState<Projects[]>(initializeDataType)
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    setLoading(true)
    axios.get("/api/v1/users/getProjectsName")
      .then((response) => {
        // Assuming response.data.data is an array
        if (response.data && response.data.data) {
          setProjects(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
        setLoading(false)
      })
  }, []);

  if(loading){
    return <Loader/>
  }

  return (
    <div className=" mx-12 my-12">
      <div className="flex flex-col items-center text-center ">
        <h1 className="md:text-5xl text-4xl font-bold mb-4">Projects</h1>
        <p className=" max-w-[400px] p-2 mb-8 text-grayish_black ">Welcome to my portfolio of completed projects. Browse through and see the work I've accomplished to date.</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
          projects.map((project)=>{
            return <Link key={project._id} to={`/projects/${project.title}`}>
              <Card skillImage={project.projectImage[0]} skillTitle={project.title} bgCoustomeColor="" profile={true}/>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Projects