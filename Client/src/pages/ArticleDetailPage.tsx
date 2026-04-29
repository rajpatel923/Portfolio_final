import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Loader from '../components/Loader'

interface BlogDetail {
  _id: string
  title: string
  category: string
  date: string
  content: string
  coverImage?: string
}

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<BlogDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/v1/getBlogs/${id}`)
      .then((res) => {
        if (res.data?.data) {
          setArticle(res.data.data)
        } else {
          setNotFound(true)
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loader />

  if (notFound || !article) {
    return (
      <div className='flex h-full items-center justify-center text-center'>
        <h1 className='text-hidding_text text-2xl font-bold'>Article not found.</h1>
      </div>
    )
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='bg-detailSectionBgHero mb-20 px-6 lg:px-10'>
      <Link to='/articles'>
        <div className='flex w-fit gap-2 items-center mt-10 text-zinc-300 font-medium'>
          <FaLongArrowAltLeft className='font-thin mr-3' />
          <h3 className='font-mono'>Articles</h3>
        </div>
      </Link>

      {article.coverImage && (
        <img
          src={article.coverImage}
          alt={article.title}
          className='w-full max-h-72 object-cover rounded-lg mt-8'
        />
      )}

      <div className='mt-8'>
        <span className='text-sm font-medium text-indigo-400 uppercase tracking-widest'>
          {article.category}
        </span>
        <h1 className='font-extrabold text-3xl lg:text-4xl mt-2 mb-3'>{article.title}</h1>
        <p className='text-zinc-500 text-sm mb-8'>{formattedDate}</p>

        <div className='text-zinc-300 text-base leading-relaxed whitespace-pre-wrap'>
          {article.content || (
            <span className='text-zinc-500 italic'>No content available.</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailPage
