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
    const skillFormRef = useRef<HTMLDivElement>(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SkillsFormProps>({
      defaultValues: {
        bgCoustomeColor: "#000000" // Set a default color value here
      }
    });

  const onSubmit: SubmitHandler<SkillsFormProps> = async (formData) => {
    console.log(formData);

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('skillTitle', formData.skillTitle);
    formDataToSend.append('skillDesp', formData.skillDesp);
    formDataToSend.append('usageDesp', formData.usageDesp);
    formDataToSend.append('whyIlike', formData.whyIlike);
    formDataToSend.append('bgCoustomeColor', formData.bgCoustomeColor);
    formDataToSend.append('skillImage', formData.skillImage[0]); // Only one file is appended
    formDataToSend.append('skillBodyImage', formData.skillBodyImage[0]); // Only one file is appended

    try {
      const res = await axios.post('/api/v1/users/skillDetail', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
    } catch (error) {
      // TODO: Add a toast notification to notify the user
      console.log(error);
    }

    reset();
  };

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
                    {errors.skillTitle && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Skill Title"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="text"
                        {...register("skillTitle", {required: "Skill Tilte is required"})}
                    />
                    {errors.skillDesp && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Skill Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("skillDesp", {required: "Skill Desp is required"})}
                    />
                    {errors.usageDesp && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Usage Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("usageDesp", {required: "usage desp is required"})}
                    />
                    {errors.whyIlike && <span className="mt-0 text-red-600">* This element is required</span>}
                    <textarea
                        placeholder="Why I like"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("whyIlike", {required: "why i like desp is required"})}
                    />
                    {errors.bgCoustomeColor && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Choose Color"
                        className="p-2 rounded-full"
                        type="color"
                        {...register("bgCoustomeColor", {required: "color is require"})}
                    />
                    {/* //todo to handle file save with react-hook-form and then send it to axios */}
                    {errors.skillImage && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Skill_Image"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="file"
                        {...register("skillImage", {required: "Skill image is required!"})}
                    />
                    {errors.skillBodyImage && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Skill_bg"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="file"
                        {...register("skillBodyImage", {required: "Skill body image is required!"})}
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