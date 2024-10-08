import { useEffect, useState } from 'react'
import about_me_downarrow from '../assets/about_me_downarrow.svg'
import SpecializeFields from '../components/aboutMe/specializeFields'
import axios from 'axios'
import Loader from './Loader'
import Skeleton from 'react-loading-skeleton'




const AboutMe = () => {

  const initialState = {
    titleHeader: '',
    titleDesp: '',
    numberOfProjects: 0,
    yearsOfExp: 0,
    profileImage: '',
    grad_year: ''
  };

  const [aboutMeContentFromDbs,setaboutMeContentFromDbs]= useState(initialState)
  const [loading, setLoading] = useState<boolean>()
  const [imageLoading, setImageLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    axios.get(`/api/v1/users/aboutMe`).then(aboutMeContent=>{
      setaboutMeContentFromDbs(aboutMeContent.data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  if(loading){
    return <Loader/>
  }
  

  
  return (
    <div className=' ml-4 mt-14'>
        <div className="lg:relative lg:ml-10 m-10  mt-4"> 
          {/* This is for heading of the about me */}
          {/* heading has 70% of the total width for lg screen size  */}
          {/* the image is absolute to the container, to the right side of 30% */}
          <h2 className=" text-5xl lg:w-[70%] w-full font-semibold  text-secondary_tx_color ">{aboutMeContentFromDbs.titleHeader}</h2>
          <img src={about_me_downarrow} about='downarrow' className=' absolute right-[23%] bottom-0 hidden lg:block w-[100px] h-[100px] lg:w-[70px] lg:h-[70px]'/>
        </div>
        
        <div>
        {/* this is the div tag for profile image and experience section with come short of discription */}
          <div className=' lg:flex lg:ml-10 m-10  mt-4 '>
            {/* flex is to divides the block into two parts, one for the text section and other for the image section.  */}
              <div className='lg:max-w-[60%]'>
                {/* this div tage is all that is for the text section  */}
                {/* the maximum width of the tag is made 60% of total, so that the arrow ^ comes on the image or lines up on the image. */}
                <div className=' text-lg font-[500px] text-white/60'>
                  {aboutMeContentFromDbs.titleDesp}
                </div>

                {/* the below gird is used to display the two row and two cols  */}
                {/* first row first col is for project completion
                first row second col is for graudation date 
                second row first col is for years of experience
                second row second col is for know skills */}
                <div className='grid grid-cols-2 mt-[6%] gap-4 text-grayish_black text-lg'>
                    
                    {/* flex col is use to display two content in one grid box */}
                    {/* using flex the styping can be done better. */}
                    <div className=' flex flex-col '>
                      <div className='text-4xl font-bold mb-[3%]'>
                        <h2 className='text-white/90'>{aboutMeContentFromDbs.numberOfProjects} <span className=' text-secondary_tx_color'>+</span></h2>
                      </div>
                      <div>
                        <p>Projects Completed</p>
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className=' flex flex-col'>
                      <div className='text-4xl font-bold mb-[3%]'>
                        <h2 className='text-white/90'>{aboutMeContentFromDbs.yearsOfExp} <span className=' text-secondary_tx_color'>+</span></h2>
                      </div>
                      <div>
                        <p>Years of Learning Tech</p>
                      </div>
                    </div>

                    {/* item3 */}
                    <div className=' flex flex-col'>
                      <div className='text-4xl font-bold mb-[3%]'>
                        <h2 className='text-white/90'>{aboutMeContentFromDbs.grad_year}</h2>
                      </div>
                      <div>
                        <p>Graduation in the year</p>
                      </div>
                    </div>
                </div>
              </div>

              <div className=' flex mt-4 lg:justify-end w-full justify-center '>
                {/* this is the div that content the image */}
                {
                  !imageLoading && (
                    <div className='h-[500px] lg:h-[550px] w-[350px] max-w-[600px] bg-gray-300 animate-pulse border-2 border-solid'>
                      <Skeleton/>
                    </div>
                  )
                }
                  <img src={aboutMeContentFromDbs.profileImage} onLoad={()=>setImageLoading(true)} className=' h-[500px] lg:h-[550px] object-fill w-[350] max-w-[600px] border-2 border-solid ' alt="profileImage"  />
              </div>
          </div>
        </div>

        {/* lg:ml-10 m-10  mt-4 is use to move the specializeFields container move to the left so that it can aline to the conetent above. */}
        <div className="lg:ml-10 m-10 mt-8 mb-24">
          <SpecializeFields setLoading={()=> setLoading(false)}/>
        </div>
    </div>
  )
}

export default AboutMe