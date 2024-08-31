
import { IoDocumentTextOutline } from "react-icons/io5";


interface ArticleListProps{
    title:string,
    category:string,
    date:string
}

const ArticleList = ({title,category,date}:ArticleListProps) => {
  return (
        <div className=' bg-primary_b grid grid-cols-4 gap-6 lg:grid-cols-8 py-4 hover:bg-detailSectionBgNav hover:cursor-pointer text-xl mx-4 border border-none rounded-lg  transition-colors duration-[0.5s]'>
            <div className='col-span-4 mx-6 flex items-center gap-2 '>
                <IoDocumentTextOutline className='text-icon_color h-7 w-7 mx-1'/>
                <h1 className='max-w-[200px] overflow-hidden text-ellipsis text-white text-nowrap '>{title}</h1>
            </div>
            <div className='lg:col-span-2 flex items-center text-hidding_text'>
                <h1 className=' mx-6 max-w-[100px] overflow-hidden text-ellipsis  text-nowrap '>{category}</h1>
            </div>
            <div className='lg:col-span-2 flex items-center  text-hidding_text'>
            <h1 className=' mx-6 max-w-[100px] overflow-hidden text-ellipsis  text-nowrap '>{date}</h1>
            </div>
        </div>
  )
}

export default ArticleList