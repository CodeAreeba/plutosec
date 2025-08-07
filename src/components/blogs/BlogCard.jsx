 import React, { useState, useEffect } from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
 const [userData, setUserData] = useState([]);
 const navigate = useNavigate();
 const [loading,setLoading] = useState(false);

 const openBlog = (blog) => {
  navigate(`blog/${blog.slug}`)
 }

useEffect(() => {
     
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://plutosec.ca/backend/api/blog/list?limit=3&page=1"
        );
        setUserData(res.data.blogs);
        
      } catch (err) {
        console.error(err);
      }
      finally{
        setLoading(false);
      }
    };
    getData();

  }, []);
  console.log(userData);
  // const BlogData = [
  //   {
  //     "title": "How SAST vs DAST Shapes Modern Application Security",
  //     "description": "You need both to cover all types of flaws. SAST runs quicker but may miss behavior‑based issues. DAST takes longer but finds real‑world gaps.",
  //     "date": "25",
  //     "month": "June"
  //   },
  //   {
  //     "title": "AWS GuardDuty in 2025: Is It Still a Good Security Choice?",
  //     "description": "GuardDuty often flags safe activity as a threat. You will see alerts that don't lead to real risks. Small teams may waste time checking clean events unnecessarily.",
  //     "date": "18",
  //     "month": "June"
  //   },
  //   {
  //     "title": "Professional Penetration Testing Services to Detect Security Gaps",
  //     "description": "PlutoSec uses real‑world attack methods to test your defense. You see how your systems respond under pressure. We show you the risks and how to fix them.",
  //     "date": "26",
  //     "month": "May"
  //   }
  // ];

  return (
    <div className="flex flex-col gap-7">
      {loading ? (
        // <p className="text-white">Loading...</p>
         <div className="flex items-center justify-center h-screen bg-black">
        <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#00D0E7] border-t-transparent rounded-full animate-spin"></div>
        <span className="absolute text-[#00D0E7] text-sm font-bold">Blog Cards</span>
      </div>
    </div>
      ):( userData &&
      userData.map((blog,index) => {
        const dateObj = new Date(blog.createdAt);
        const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
        const dateOnly = String(dateObj.getDate()).padStart(2, '0');
        return(
        <div
          key={index}
          className="w-full bg-neutral-900 rounded-lg px-3 py-3 flex shadow-[0_0_10px_#00D0E7] hover:shadow-none hover:-translate-y-2 transition-all duration-300 ease-in-out flex-col md:flex-row"
          onClick={() => openBlog(blog)}
        >
           
          <div className="hidden md:flex flex-col text-[#00D0E7] text-2xl font-extrabold px-5 py-4 text-center">
            <h4>{dateOnly}</h4>
            <h4 className="text-white">{monthName}</h4>
          </div>

          
          <div className="flex flex-col justify-start items-start px-4 md:border-l border-[#696969]">
            <h2 className="text-2xl font-bold mt-2 text-[#00D0E7]">{blog.title}</h2>
            <p className="text-gray-300 text-base leading-relaxed py-2">
              {blog.description}
            </p>
            <button className="bg-[#00D0E7] text-sm text-black font-semibold px-4 py-1 rounded-full">
              {blog.category.name}
            </button>
          </div>
        </div>);

}))}
      {/* {BlogData.map((blog, index) => (
        <div
          key={index}
          className="w-full bg-neutral-900 rounded-lg px-3 py-6 flex shadow-[0_0_20px_#00D0E7] hover:shadow-none hover:-translate-y-2 transition-all duration-300 ease-in-out flex-col md:flex-row"
        >
           
          <div className="hidden md:flex flex-col text-[#00D0E7] text-2xl font-extrabold px-5 py-4 text-center">
            <h4>{blog.date}</h4>
            <h4 className="text-white">{blog.month}</h4>
          </div>

          
          <div className="flex flex-col justify-start items-start px-4 md:border-l border-[#696969]">
            <h2 className="text-2xl font-bold mt-4 text-[#00D0E7]">{blog.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed py-5">
              {blog.description}
            </p>
            <button className="bg-[#00D0E7] text-black font-semibold px-4 py-1 rounded-full">
              cyber security
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default BlogCard;
