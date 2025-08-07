import React from 'react'
import HeaderBanner from '../components/blogs/blogpage/HeaderBanner'
import Subseervice from '../components/services/Subseervice'
import Testimonial from '../components/testimonials/Testimonial'
import Blogs from '../components/blogs/Blogs'

const Service = () => {
  return (
     <>
     <div className='px-3 md:px-12 lg:px-12'>
        <HeaderBanner /> 
        <Subseervice /> 
        <Testimonial />
        <Blogs />   
    </div>
     </>
  )
}

export default Service