import React, { useState, useEffect } from "react";
import axios from "axios";
import bgimg from "../../../assets/contactbg.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import HeaderBanner from "./HeaderBanner";

const BlogHead = ({ slug }) => {
  const [userData, setUserData] = useState(null);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://plutosec.ca/backend/api/blog/view/${slug}`
        );
        setUserData(res.data.blog);
      } catch (err) {
        console.error(err);
      }
      finally{
        setLoading(false);
      }
    };
    getData();
  }, []);

  const dateObj = userData ? new Date(userData.createdAt) : null;

  const formatDate = () => {
    if (!dateObj) return "";
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  const formatTime = () => {
    if (!dateObj) return "";
    return dateObj.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      
       <HeaderBanner />

      { loading ? (
    
     
    <div className="flex items-center justify-center h-screen bg-black space-x-2">
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce [animation-delay:0.4s]"></div>
    </div>
   
      ) : (
      
      userData && (
        <>
        
          <div className="text-[#00D0E7] text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-8 py-4 mt-4 flex items-center text-center justify-center">
            {userData.title}
          </div>
 
          <div className="flex items-center justify-center px-4 text-center">
            <span className="text-white text-sm sm:text-base">
              {formatDate()}, {formatTime()}
              <span className="font-extrabold text-lg sm:text-2xl"> | </span>
              cyber security
            </span>
          </div>
 
          <div className="w-full flex flex-col lg:flex-row p-3 gap-6 mt-6">
        
            <img
              className="w-full lg:w-[65%] h-auto rounded-md"
              src={`https://plutosec.ca/backend/api${userData.thumbnail}`}
              alt=""
            />

           
            <div className="flex-1 px-2 sm:px-6 py-4 bg-neutral-900 rounded-md border border-[#00D0E7]">
              <h4 className="text-white text-xl sm:text-2xl font-bold mb-5">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-2 p-2">
                {[TiSocialFacebook, FaLinkedinIn, AiFillInstagram, IoLogoTiktok, FaXTwitter].map((Icon, idx) => (
                  <span
                    key={idx}
                    className="p-2 rounded-full bg-[#00D0E7] hover:border-2 border-[#00D0E7] hover:bg-black hover:text-[#00D0E7] cursor-pointer"
                  >
                    <Icon size={20} />
                  </span>
                ))}
              </div>

              <span className="text-white p-2 text-sm sm:text-lg block mt-3">
                Subscribe to our newsletter and receive a selection of cool articles every week.
              </span>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 bg-neutral-900 text-white mt-3 rounded-md border border-[#00D0E7] focus:outline-none focus:ring-2 focus:ring-[#00D0E7] focus:border-transparent text-sm sm:text-base"
              />

              <div className="flex gap-3 items-start mt-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-white text-xs sm:text-sm">
                  I agree to the terms of use for storing my submitted data.
                </span>
              </div>

              <button className="bg-[#00D0E7] text-black w-full mt-4 py-2 font-semibold rounded-md hover:bg-[#00b8cc] transition">
                Submit
              </button>
            </div>
          </div>

         
          <div
            dangerouslySetInnerHTML={{ __html: userData.detail }}
            className="custom-html-styles px-4 sm:px-8 mt-6 text-white"
          ></div>
        </>
      ))}
    </>
  );
};

export default BlogHead;
