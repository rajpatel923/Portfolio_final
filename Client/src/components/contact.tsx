import React from 'react'

const Contact = () => {
  const inputStyle = "appearance-none shadow leading-tight focus:outline-none focus:shadow-outline px-4 py-2 border rounded-lg text-black"
  return (
    <div className=' flex gap-5 flex-col w-full items-center justify-center lg:my-0 bg-detailSectionBgNav/75'>
      <h1 className='font-extrabold text-3xl text-neutral-200 mx-4'>Contact Me</h1>
      <p className='text-gray-300 font-m text-center mx-4'>Don't hesitate to reach out by filling out the form provided below.</p>
      <form className='mx-4'>
        <div className='flex w-full flex-col md:flex-row gap-4 mb-4'>
          <input type="text" placeholder='Full Name' className={`${inputStyle} md:w-1/2 appearance-none`}name='fullName' required/>
          <input type='email' placeholder='Email' className={`${inputStyle} md:w-1/2`} name='email' required/>
        </div>
        <input type='number' placeholder='Phone Number' className={`${inputStyle} w-full mb-4`} name='phoneNumber' required/>
        <textarea name='message'  placeholder='Message' className={`${inputStyle} w-full h-[120px] mb-4 `} required/>
        <button type='submit' className={`${inputStyle} bg-secondary_tx_color text-black w-full py-3 px-4 font-bold`}>Send Mail</button>
      </form>

    

    </div>
    
  )
}

export default Contact