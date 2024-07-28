import about_me_downarrow from '../assets/about_me_downarrow.svg'


const AboutMe = () => {
  const abousMeContent = {
    "title": "Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo, vitae reprehenderit praesentium, sed ea explicabo animi optio officiis quaerat dignissimos reiciendis voluptates.",
    "numberOfProjects": 5,
    "yearsOfExperience": 1,
    "profileImage": "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    "specializedField": [
      {
        "tittle": "Lorem ipsum dolor sit amet.",
        "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
      },
      {
        "tittle": "Lorem ipsum dolor sit amet.",
        "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
      },
      {
        "tittle": "Lorem ipsum dolor sit amet.",
        "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
      },
      {
        "tittle": "Lorem ipsum dolor sit amet.",
        "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
      }
    ]
  }
  return (
    <div>

        <div className="p-8 lg:relative lg:ml-10 m-10  mt-4"> 
        {/* This is for heading of the about me */}
        {/* heading has 70% of the total width for lg screen size  */}
        {/* the image is absolute to the container, to the right side of 30% */}
          <h2 className=" text-4xl lg:w-[70%] w-full  ">{abousMeContent.title}</h2>
          <img src={about_me_downarrow} about='downarrow' className=' absolute right-[23%] bottom-0 hidden lg:block w-[100px] h-[100px] lg:w-[70px] lg:h-[70px]'/>
        </div>
        
        <div>
        {/* this is the div tag for profile image and experience section with come short of discription */}
          <div className=' lg:flex lg:ml-10 m-10  mt-4 '>
            {/* flex is to divides the block into two parts, one for the text section and other for the image section.  */}
              <div className='lg:max-w-[60%]'>
                {/* this div tage is all that is for the text section  */}
                {/* the maximum width of the tag is made 60% of total, so that the arrow ^ comes on the image or lines up on the image. */}
                <div className=''>
                  {abousMeContent.description}
                </div>

                {/* the below gird is used to display the two row and two cols  */}
                {/* first row first col is for project completion
                first row second col is for graudation date 
                second row first col is for years of experience
                second row second col is for know skills */}
                <div className='grid grid-cols-2'>
                    
                    {/* flex col is use to display two content in one grid box */}
                    {/* using flex the styping can be done better. */}
                    <div className=' flex flex-col'>
                      <div>
                        <h2>{abousMeContent.numberOfProjects}</h2>
                      </div>
                      <div>
                        <p>Projects Completed</p>
                      </div>
                    </div>
                </div>
              </div>

              <div>
                {/* this is the div that content the image */}
                <img src={abousMeContent.profileImage} className=' h-[400px] w-full' alt="profileImage" />
              </div>
          </div>

        </div>
    </div>
  )
}

export default AboutMe