import React from 'react'
import HeaderBanner from '../components/blogs/blogpage/HeaderBanner'
import IndData from '../components/industries/IndData'
import Testimonial from '../components/testimonials/Testimonial'
import Blogs from '../components/blogs/Blogs'

const Industries = () => {
  return (
     <>
     <div className='px-12'> 
     <HeaderBanner />
     <IndData />
     <Testimonial />
    <Blogs />
     </div>
     </>
  )
}

export default Industries