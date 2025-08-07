import React from 'react'
import heading from "../../assets/headingimg.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
     <>
     <div className="px-4 md:px-10 lg:px-15 mt-10 "> 
     <div className="flex justify-between mb-5">
               <div className="flex gap-5">
                 <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
                   Latest Blogs
                 </h2>
                 <img src={heading} alt="" className="hidden md:flex w-35" />
               </div>
               <span className="text-[#00D0E7] flex items-center gap-2">
                 View All
                 <FaArrowRightLong />
               </span>
             </div>
             <div>
                <BlogCard />
             </div>
        </div>
              
     </>
  )
}

export default Blogs