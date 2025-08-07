import React from 'react'
import HeaderBanner from '../components/blogs/blogpage/HeaderBanner'
import Navwhy from '../components/navwhyus/Navwhy'
import Blogs from '../components/blogs/Blogs'

const Whyus = () => {
  return (
     <>
     <div className='px-12'> 
     <HeaderBanner />
     <Navwhy />
     </div>
      <Blogs />
     </>
  )
}

export default Whyus