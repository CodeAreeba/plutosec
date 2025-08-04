import React from 'react'
import BlogHead from '../components/blogs/blogpage/BlogHead'
import { useParams } from 'react-router-dom'
const Blog = () => {
    const {slug} = useParams();
  return (
     <> 
     <div className='px-12'> 
        <BlogHead slug={slug}/>
    </div>
     </>
  )
}

export default Blog