import React, { useEffect, useState } from 'react'
import ArticleList from './ArticleList/ArticleList'
import axios from 'axios'
import Loader from './Loader'

interface Article{
    title: string,
    category: string,
    date: string
}

const Article = () => {

    const [articles, setArticles] = useState<Article[]>()
    const [loading, setLoading] = useState<boolean>()

    useEffect(()=>{
        setLoading(true)
        axios.get("/api/v1/getBlogs").then((response)=>{
            if (response.data && response.data.data) {
                setArticles(response.data.data);
            }
        }).catch((error) => {
            console.log(error);
          }).finally(()=>{
            setLoading(false)
        })
    },[])

    if(loading){
        return <Loader/>
    }

  return (
    <div>
        <div className=' hidden  h-[5vh] bg-primary_b lg:grid grid-cols-8 text-hidding_text'>
            <div className='col-span-4 flex items-center'>
               <h1 className='w-fit mx-10'>Name</h1>
            </div>
            <div className='col-span-2 flex items-center'>
                <h1 className='w-fit mx-10'>Category</h1>
            </div>
            <div className='col-span-2 flex items-center'>
                <h1 className='w-fit mx-10'>Date</h1>
            </div>
        </div>

        <div className="flex flex-col items-center text-center mt-10 lg:hidden">
            <h1 className="md:text-5xl text-4xl font-bold mb-4">Blogs</h1>
            <p className=" max-w-[400px] p-2 mb-8 text-grayish_black ">Here are some of my blogs, have fun reading them!!</p>
        </div>

        <div className='lg:flex flex-col gap-4 grid grid-cols-1'>
            {/* <ArticleList category='web development' date='12/12/2003' title='flex flex-col items-center text-center mt-1'/>
            <ArticleList category='web development' date='12/12/2003' title='flex flex-col items-center text-center mt-1'/> */}
            {
                articles?.map((blog)=>{
                    return <ArticleList category={blog.category} date={blog.date} title={blog.title}/>
                })
            }
        </div>
        
    </div>
  )
}

export default Article