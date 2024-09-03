import React, { useRef } from 'react'
import axios from 'axios'
import {useForm, SubmitHandler} from 'react-hook-form'

interface AddProjectFormProps {
    onClose: () => void;
}

interface ProjectFormProps{
    title:string,
    description:string,
    relatedSkills?: string,
    category:string,
    completedDate?: Date,
    link:string,
    problemDesp:string,
    solutionDesp:string,
    resultDesp:string,
    projectImage:FileList,
    projectImageBg:FileList,
    problemImage:FileList,
    solutionImage:FileList,
    resultImage:FileList
}
const AddProjectForm:React.FC<AddProjectFormProps> = ({onClose}) => {
    const ProjectFromRef = useRef<HTMLDivElement>(null)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProjectFormProps>();
    
    const onSubmit: SubmitHandler<ProjectFormProps> = async (formData) => {
        console.log(formData);
    
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('link', formData.link);
        formDataToSend.append('problemDesp', formData.problemDesp);
        formDataToSend.append('solutionDesp', formData.solutionDesp);
        formDataToSend.append('resultDesp', formData.resultDesp);
    
        // Append the images
        if (formData.projectImage[0]) {
          formDataToSend.append('projectImage', formData.projectImage[0]);
        }
        if(formData.projectImageBg[0]){
            formDataToSend.append('projectImageBg', formData.projectImageBg[0]);
        }
        if (formData.problemImage[0]) {
          formDataToSend.append('problemImage', formData.problemImage[0]);
        }
        if (formData.solutionImage[0]) {
          formDataToSend.append('solutionImage', formData.solutionImage[0]);
        }
        if (formData.resultImage[0]) {
          formDataToSend.append('resultImage', formData.resultImage[0]);
        }
        try {
            const res = await axios.post('/api/v1/users/projectData', formDataToSend, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log(res);
        } catch (error) {
            // TODO: Add a toast notification to notify the user
            console.log(error);
          }
        reset()
    };
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
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    {errors.title && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Project title"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="text"
                        {...register("title", {required: "Project Tilte is required"})}
                    />
                    {errors.category && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Category"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type='text'
                        {...register("category", {required: "Category is required"})}
                    />
                    {/* //todo to input add skills section and adding it in to the string array */}
                    {errors.link && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Project link"
                        type='text'
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("link", {required: "Project link is required"})}
                    />
                    {errors.description && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Project Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("description", {required: "project description is required"})}
                    />
                    {errors.problemDesp && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Problem Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("problemDesp", {required: "problemDesp is required"})}
                    />
                    {errors.solutionDesp && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Solution Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("solutionDesp", {required: "solutionDesp is required"})}
                    />
                    {errors.resultDesp && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Result Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("solutionDesp", {required: "solutionDesp is required"})}
                    />

                    {/* project images */}
                    
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Project Images 
                        </label>
                        {errors.projectImage && <span className="mt-0 text-red-600">* This element is required</span>}               
                        <input
                            placeholder="project images"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            {...register("projectImage", {required: "project Image is required"})}
                            multiple
                        />
                    </div>

                    
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Project Background Images
                        </label> 
                        {errors.projectImageBg && <span className="mt-0 text-red-600">* This element is required</span>}               
                        <input
                            placeholder="project background images"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            {...register("projectImageBg", {required: "project Image is required"})}
                            multiple
                        />
                    </div>

                    {/* problem */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Problem Images
                        </label> 
                        {errors.problemDesp && <span className="mt-0 text-red-600">* This element is required</span>}               
                        <input
                            placeholder="problem image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            {...register("problemImage", {required: "problem description is required"})}
                        />
                    </div>

                    {/* Solution */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Solution Images
                        </label> 
                        {errors.solutionImage && <span className="mt-0 text-red-600">* This element is required</span>}               
                        <input
                            placeholder="solution image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            {...register("solutionImage", {required: "solution image is required"})}
                        />
                    </div>

                    {/* Result */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>
                            Result Images
                        </label> 
                        {errors.resultImage && <span className="mt-0 text-red-600">* This element is required</span>}               
                        <input
                            placeholder="Result image"
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            {...register("resultImage", {required: "result image is required"})}
                        />
                    </div>

                    
                    <button type="submit" className="py-2 px-4 mx-auto rounded-md bg-white w-fit text-black">
                        Add Project
                    </button>
                </form>
            </div>
    </div>
  )
}

export default AddProjectForm