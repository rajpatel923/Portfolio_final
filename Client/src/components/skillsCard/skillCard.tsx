
// TODO get the pors of imageString URL and bg color of the container and also the image tag caption.
function Card() {
  return (
    <div>

         <div className=" text-center p-4 border-[0] rounded-lg shadow-md bg-gray-800 flex flex-col justify-center items-center mt-8">
            {/* the image container is made smaller in height and full in length but there is some padding or margin on both the send form the skills.tsx page. else its just the normal size of double the size of image for desktop and medium devices. */}
            <div className=" md:h-32 md:w-32 w-full h-36 flex items-center justify-center">
                {/* hight is fixed for the mobile and desktop */}
                <img className="w-16 h-16 " src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-c5e96.appspot.com/o/assets%2Fskills%2FiconeSkill-841756f9-c573-4d71-8715-a2b0906b3ccf?alt=media&token=0520aaf1-9d1e-460b-b092-de65aa46f982"/>
            </div>
        </div>
        <h5 className=" text-center text-lg font-[450px] mt-2 text-white">HTML</h5>
    </div>
   
  )
}

export default Card