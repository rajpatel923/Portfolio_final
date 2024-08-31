import { useRef } from "react"
import axios from 'axios'
import {useForm, SubmitHandler} from 'react-hook-form'


interface AddSkillFormProps {
    onClose: () => void;
}

interface SkillsFormProps{
    skillTitle:string,
    skillDesp:string,
    usageDesp:string,
    whyIlike:string,
    bgCoustomeColor:string,
    skillImage: FileList,
    skillBodyImage:FileList
  }

const AddSkillForm: React.FC<AddSkillFormProps> = ({onClose}) => {
    const skillFormRef = useRef<HTMLDivElement>(null)
    const {register, handleSubmit, formState: {errors, isSubmitting},reset} = useForm<SkillsFormProps>()
    
    const onSubmit: SubmitHandler<SkillsFormProps> = async(data)=>{
        console.log(data)
        reset()
    }

    const closeModel = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(skillFormRef.current === e.target){
            onClose()
        }
    }

  return (
    <div ref={skillFormRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-[0.5s] overflow-scroll'>
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
                <h1 className="text-center font-bold text-2xl mb-4">Edit the skills</h1>
                <p className="text-hidding_text mb-8 text-xl font-medium">Fill out the form and go ahead and submit!!</p>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Skill_Title"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="text"
                        required
                        {...register("skillTitle", {required: "Skill Tilte is required"})}
                    />
                    <textarea
                        placeholder="Skill Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                        {...register("skillDesp", {required: "Skill Desp is required"})}
                    />
                    <textarea
                        placeholder="Usage Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                        {...register("usageDesp", {required: "usage desp is required"})}
                    />
                    <textarea
                        placeholder="Why I like"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        required
                        {...register("whyIlike", {required: "why i like desp is required"})}
                    />
                    <input
                        placeholder="Choose Color"
                        className="p-2 rounded-full"
                        type="color"
                        required
                        {...register("bgCoustomeColor", {required: "color is require"})}
                    />
                    {/* //todo to handle file save with react-hook-form and then send it to axios */}
                    <input
                        placeholder="Skill_Image"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="file"
                        required
                    />
                    <input
                        placeholder="Skill_bg"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="file"
                        required
                    />
                    <button type="submit" className="py-2 px-4 mx-auto rounded-md bg-white w-fit text-black">
                        Add Skill
                    </button>
                </form>
            </div>

    </div>
  )
}

export default AddSkillForm