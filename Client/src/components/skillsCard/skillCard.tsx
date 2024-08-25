interface CardProps{
  skillImage:string,
  skillTitle:string,
  bgCoustomeColor:string,
  profile?:boolean
}


const Card:React.FC<CardProps> = ({skillImage, skillTitle,bgCoustomeColor, profile}) =>{
  return (
    <div>
         <div className={`text-center p-4 border-[0] rounded-lg shadow-md  flex flex-col justify-center items-center mt-8`}
          style={{backgroundColor:( bgCoustomeColor != undefined|| bgCoustomeColor===''? bgCoustomeColor :"bg-white")}}
         >
            {/* the image container is made smaller in height and full in length but there is some padding or margin on both the send form the skills.tsx page. else its just the normal size of double the size of image for desktop and medium devices. */}
            <div className=" md:h-32 md:w-32 w-full h-36 flex items-center justify-center">
                {/* hight is fixed for the mobile and desktop */}
                {profile ? (
                    <img className="h-full w-full object-cover" src={skillImage} alt={skillTitle} />
                ) : (
                  <img className="w-16 h-16" src={skillImage} alt={skillTitle} />
                )} 
            </div>
        </div>
        <h5 className=" text-center text-lg font-[450px] mt-2 text-white">{skillTitle}</h5>
    </div>
   
  )
}

export default Card