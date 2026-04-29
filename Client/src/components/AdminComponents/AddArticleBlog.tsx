import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import {useForm, SubmitHandler} from 'react-hook-form'
import axiosInstance from '../../api/axiosInstance'

interface ArticleBlogForm{
    title:string,
    category:string,
    blogDescription:string,
    content:string,
    coverImage:FileList
}
interface AddArticleBlogProps{
    onClose: ()=> void;
}
const AddArticleBlog: React.FC<AddArticleBlogProps> = ({onClose}) => {
    const articleFormRef = useRef<HTMLDivElement>(null)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ArticleBlogForm>();

    const onSubmit: SubmitHandler<ArticleBlogForm> = async (formData)=>{
        const formDataToSend = new FormData()
        formDataToSend.append('title', formData.title)
        formDataToSend.append('category', formData.category)
        formDataToSend.append('blogDescription', formData.blogDescription)
        formDataToSend.append('content', formData.content)
        if (formData.coverImage[0]) {
            formDataToSend.append('coverImage', formData.coverImage[0])
        }
        try {
            await axiosInstance.post('/api/v1/addBlog', formDataToSend)
            toast.success('Blog added successfully!')
            reset()
            onClose()
        } catch (error) {
            toast.error('Failed to add blog. Please try again.')
        }
    }
    const closeModel = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(articleFormRef.current === e.target){
            onClose()
        }
    }

    return (
    <div ref={articleFormRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-[0.5s] overflow-scroll'>
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
                <h1 className="text-center font-bold text-2xl mb-4">Edit the Blog</h1>
                <p className="text-hidding_text mb-8 text-xl font-medium">Fill out the form and go ahead and submit!!</p>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    {errors.title && <span className="mt-0 text-red-600">* This element is required</span>}
                    <input
                        placeholder="Blog Title"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type="text"
                        {...register("title", {required: "Title is required"})}
                    />
                    <input
                        placeholder="Category"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        type='text'
                        {...register("category", {required: "Category is required"})}
                    />
                    <textarea
                        placeholder="Blog Description"
                        className="text-black p-2 bg-gray-100 rounded-md"
                        {...register("blogDescription", {required: "Blog Description is required"})}
                    />
                    {errors.content && <span className="mt-0 text-red-600">* Content is required</span>}
                    <textarea
                        placeholder="Article Content (markdown supported)"
                        className="text-black p-2 bg-gray-100 rounded-md min-h-[120px]"
                        {...register("content", {required: "Content is required"})}
                    />
                    <div className='flex flex-col gap-2'>
                        <label className='text-hidding_text text-xl font-semibold'>Cover Image</label>
                        {errors.coverImage && <span className="mt-0 text-red-600">* Cover image is required</span>}
                        <input
                            className="text-black p-2 bg-gray-100 rounded-md"
                            type="file"
                            accept="image/*"
                            {...register("coverImage", {required: "Cover image is required"})}
                        />
                    </div>
                    <button type="submit" className="py-2 px-4 mx-auto rounded-md bg-white w-fit text-black">
                        Add Blog
                    </button>
                </form>
            </div>

    </div>
  )
}

export default AddArticleBlog
