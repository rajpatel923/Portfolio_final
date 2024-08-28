
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";


interface SkilsDetailProps{
  skillImage:string,
  skillTitle:string,
  skillDesp:string,
  skillBodyImage:string,
  usageDesp:string,
  whyIlike:string,
  bgCoustomeColor: string
}

const SkillDetail = () => {
  const skillTitleFromProps = useParams()
  const initializeDataType:SkilsDetailProps = {
    skillImage:"",
    skillTitle:"",
    skillDesp:"",
    skillBodyImage:"",
    usageDesp:"",
    whyIlike:"",
    bgCoustomeColor: ''
  }
  const [skills, setSkills] = useState<SkilsDetailProps>(initializeDataType)
  useEffect(()=>{
    axios.get("/api/v1/users/getSkillDetail",{params: {skillTitle:skillTitleFromProps }}).then((response)=>{
      if(response.data && response.data.data[0]){
        setSkills(response.data.data[0])
      }
    }).catch((error)=>{
      console.log(error)
    })
  },[skillTitleFromProps]);
  return (
    <div className='bg-detailSectionBgHero mb-20'>
      <Link to={'/skills'}>
        <div className=' flex w-fit gap-2 items-center mt-10 text-zinc-300 font-medium ml-6'>
          <FaLongArrowAltLeft className='font-thin mr-3'/>
          <h3 className='font-mono'>Skills</h3>
        </div>
      </Link>
      

      <div className={`p-2 border border-red-500 w-24 h-24 ml-10 mt-10`} style={{background: skills.bgCoustomeColor}}>
        <img src={skills.skillImage} className={`w-20 h-20`}></img>
      </div>

      <div className='mx-10'>
        <h1 className='font-extrabold text-4xl pt-8 w-fit h-fit mb-6'>{skills.skillTitle}</h1>
        <p className='text-zinc-400 mb-6'>
          {skills.skillDesp}
        </p>
        <img className=' border border-none rounded-md ob
        ect-fill mb-6' src={skills.skillBodyImage}></img>
        <h1 className='font-extrabold text-4xl pt-8 w-fit h-fit mb-6'>{
          skills.usageDesp ? "How I use it :" : ""
        }</h1>
        <p className='text-zinc-400 mb-6'>
          {skills.usageDesp}
        </p>

        <h1 className='font-extrabold text-4xl pt-8 w-fit h-fit mb-6'>{
          skills.whyIlike!="" ? "Why I Link it :" : ""
        }</h1>
        <p className='text-zinc-400 mb-6'>
          
          {skills.whyIlike}
        </p>
      </div>
    </div>
  )
}

export default SkillDetail