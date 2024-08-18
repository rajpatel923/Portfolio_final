import axios from 'axios'
import {useForm, SubmitHandler} from 'react-hook-form'

interface contactMeForm{
  fullName:string,
  email:string,
  phoneNumber:string,
  message:string
}


const Contact = () => {
  const {register, handleSubmit, formState: {errors, isSubmitting},reset} = useForm<contactMeForm>()
  const inputStyle = "appearance-none shadow leading-tight focus:outline-none focus:shadow-outline px-4 py-2 border rounded-lg text-black"
  
  //TODO send post request to the server for handling the contact
  const onSubmit: SubmitHandler<contactMeForm> = async(data)=> {
    axios.post("/api/v1/contactMe/sendMail",{
      ...data
    }).then(function () {
      
    })
    .catch(function (error) {
      // todo to have a tost to notify the user
      console.log(error);
    });
    reset()
  }
  return (
    <div className=' flex gap-5 flex-col w-full items-center justify-center lg:my-0 bg-detailSectionBgNav/75'>
      <h1 className='font-extrabold text-3xl text-neutral-200 mx-4'>Contact Me</h1>
      <p className='text-gray-300 font-m text-center mx-4'>Don't hesitate to reach out by filling out the form provided below.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className='mx-4'>
        <div className='flex w-full flex-col md:flex-row gap-4 mb-4'>
          
          <input type="text" placeholder='Full Name' className={`${inputStyle} md:w-1/2 appearance-none ${errors.fullName && " border-red-700 border-[3px]"}`} {...register("fullName", {
            required: "Full name is required"
          })} />
          
          <input type='email' placeholder='Email' className={`${inputStyle} md:w-1/2 ${errors.email && " border-red-700 border-[3px]"}`} {...register("email", {
            required: "Email is required"
          })}/>
        </div>
        <input type='number' placeholder='Phone Number' className={`${inputStyle} w-full mb-4 ${errors.phoneNumber && " border-red-700 border-[3px]"}`} {...register("phoneNumber", {
          required: "Phone number is required", minLength:{
            value: 10,
            message: "A 10 digit phone number is valid"
          }, maxLength:{
            value:10,
            message:"A 10 digit phone number is valid"
          }
        })}/>
        <textarea  placeholder='Message' className={`${inputStyle} w-full h-[120px] mb-4 ${errors.message && " border-red-700 border-[3px]"} `} {...register("message", {
          required: "Type something to for!!"
        })} />
        <button type='submit' disabled={isSubmitting} className={`${inputStyle} bg-secondary_tx_color text-black w-full py-3 px-4 font-bold`}>Send Mail</button>
      </form>

    </div>
    
  )
}

export default Contact