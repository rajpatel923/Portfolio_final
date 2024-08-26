// import React from 'react'
// import {useForm, SubmitHandler} from 'react-hook-form'
// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom"

// interface AdminHeroSectionProps{
//   email?:string,
//   password?:string
// }

const AdminHeroSection = () => {
  // const {register, handleSubmit } = useForm<AdminHeroSectionProps>()
  // const onSubmit: SubmitHandler<AdminHeroSectionProps>  = async(data)=>{
  //   console.log(data)
  // }
  
  return (
    <>
      <div className='h-[90vh] bg-white '>
            <Link to={"http://localhost:8180/auth/google/"} >Login with google</Link>
      </div>
    </>
  )
}

export default AdminHeroSection