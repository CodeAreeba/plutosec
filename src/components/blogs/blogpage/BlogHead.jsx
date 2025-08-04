 import React, { useState, useEffect } from "react";
import axios from "axios";
import bgimg from "../../../assets/contactbg.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const BlogHead = ({ slug }) => {
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://plutosec.ca/backend/api/blog/view/${slug}`
        );
        setUserData(res.data.blog);  
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

//   const shownData = userData && userData.slug === slug ? userData : null;
  const dateObj = userData ? new Date(userData.createdAt) : null;

const formatDate = () => {
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};


   const formatTime = () => {
  return dateObj.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 w-full mt-30 rounded-lg border border-[#00D0E7]"
        style={{
          backgroundImage: `url(${bgimg})`,
          boxShadow: "0 0 15px #00D0E7",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-[#00D0E7] p-4 text-4xl font-bold flex text-center h-full justify-center items-center">
          Home | Blogs | Pen test...
        </div>
      </div>

      {userData && (
        <>
          <div className="text-[#00D0E7] text-4xl font-bold px-12 py-4 mt-4 flex items-center text-center justify-center">
            {userData.title}
          </div>
          <div className="flex items-center justify-center ">
            <span className="text-white">
              {formatDate()}, {formatTime()}
              <span className="font-extrabold text-2xl "> | </span>
              cyber security
            </span>
          </div>
          <div className="w-full flex p-3 mt-3">
            <img className="w-[70%] h-100" src={`https://plutosec.ca/backend/api${userData.thumbnail}`} alt="" />
            <div className="px-14 py-4">
                <h4 className="text-white text-2xl font-bold mb-5">
                    Follow Us
                </h4>
                 <div className="flex justify-center md:justify-start text-base gap-2 p-2">
                      
                      {[TiSocialFacebook, FaLinkedinIn, AiFillInstagram, IoLogoTiktok, FaXTwitter].map((Icon, idx) => (
                        <span
                          key={idx}
                          className="p-2 rounded-full bg-[#00D0E7] hover:border-2 border-[#00D0E7] hover:bg-black hover:text-[#00D0E7]"
                        >
                          <Icon />
                        </span>
                      ))}
                    </div>
                    <span className="text-white p-2  text-lg ">
                        Subscribe to our newsletter and receive a selection of cool articles every week.
                    </span>
                    <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="w-full px-4 py-3 bg-neutral-900 text-white mt-3 rounded-md
           border border-[#00D0E7] focus:outline-none focus:ring-2
           focus:ring-[#00D0E7] focus:border-transparent"
                />
                <div className="md:flex gap-20">
                        <div className="flex gap-3 p-1"> 
                        <input type="checkbox"/>
                        <span className="text-white">I agree to the terms of use for storing my submitted data.</span>
                    </div>
                    </div>
                 <div>
    <button className="bg-[#00D0E7] text-black w-full mt-4 py-2 font-semibold rounded-md">Submit</button>
  </div>
 
          </div>
        
            </div>
               <div dangerouslySetInnerHTML={{__html: userData.detail}} className="custom-html-styles"></div>
        </>
      )}
    </>
  );
};

export default BlogHead;
