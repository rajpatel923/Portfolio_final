import React, { useRef } from 'react'

interface AddProjectFormProps {
    onClose: () => void;
}

interface ProjectFormProps{
    title:string,
    description:string,
    relatedSkills: string,
    category:string,
    completedDate: Date,
    link:string,
    problemDesp:string,
    solutionDesp:string,
    resultDesp:string,
    projectImage:string,
    problemImage:string,
    solutionImage:string,
    resultImage:string
}
const AddProjectForm:React.FC<AddProjectFormProps> = ({onClose}) => {
    const ProjectFromRef = useRef<HTMLDivElement>(null)
    //const {register, handleSubmit, formState: {errors, isSubmitting},reset} = useForm<contactMeForm>()
    
    
    const closeModel = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(ProjectFromRef.current === e.target){
            onClose()
        }
    }

  return (
    <div ref={ProjectFromRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-[0.5s] overflow-scroll'>
        <div className="relative flex flex-col mt-20 mx-10 bg-indigo-700 rounded-xl border-none px-10 pt-10 pb-4 overflow-y-auto max-h-[80vh] w-full lg:w-[600px]">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-4 right-4 bg-red-500 px-4 py-2 text-white rounded-md"
                >
                    X
                </button>
                <h1 className="text-center font-bold text-2xl mb-4">Add/Edit the Project</h1>
                <p className="text-hidding_text mb-8 text-xl text-center font-medium">Fill out the form and go ahead and submit!!</p>
                <form className="flex flex-col gap-4 w-full">
                    <input
                        placeholder="Project title"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="text"
                        required
                    />
                    <input
                        placeholder="Category"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type='text'
                        required
                    />
                    {/* //todo to input add skills section and adding it in to the string array */}
                    <input
                        placeholder="Project link"
                        type='text'
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Project Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Problem Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Solution Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="solution Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                    />

                    {/* project images */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Project Images (2)
                        </label>                
                        <input
                            placeholder="project images"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            required
                        />
                    </div>

                    {/* problem */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Problem Images
                        </label>                
                        <input
                            placeholder="problem image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            required
                        />
                    </div>

                    {/* Solution */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Solution Images
                        </label>                
                        <input
                            placeholder="solution image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            required
                        />
                    </div>

                    {/* Result */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Result Images
                        </label>                
                        <input
                            placeholder="Result image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            required
                        />
                    </div>

                    
                    <button type="submit" className="py-2 px-4 mx-auto rounded-md bg-white w-fit text-black">
                        Add Skill
                    </button>
                </form>
            </div>
    </div>
  )
}

export default AddProjectForm