
import mailSvg from "../assets/mail.svg"
import linkedInSvg from "../assets/linkedIn.svg"
import githubSvg from "../assets/Github.svg"



function Footer() {
  return (
    <>
        <div className=' max-h-fit h-[50px]  bg-neutral-600 px-4 z-[100] flex justify-between items-center'>
            <div className="hover:bg-neutral-700 h-full flex items-center justify-between"> {/*For mail */}
                <img src={mailSvg} alt='mailSvg' className=' w-8 h-8 mx-4'/>
            </div>

            <div className=' hidden lg:block'> {/*For copy right text */}
                    <p>© Copyright 2024 - Patel Raj Atulkumar.</p>
            </div> 

            <div className=' flex gap-4 items-center justify-between mr-4 h-full'>{/*Git hub linked and Instagram */}
                <div className="bg-neutral-800 border rounded-lg border-none py-1">
                    <img src={linkedInSvg} alt='linkedInSvg' className=' w-8 h-8 mx-1 '/>
                </div>

                <div className="bg-neutral-800 border rounded-lg border-none py-1">
                    <img src={githubSvg} alt='githubSvfg' className=' w-8 h-8 mx-1'/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer