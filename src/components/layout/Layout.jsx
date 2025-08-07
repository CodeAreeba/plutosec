import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMessageSquareQuote } from "react-icons/lu";

const Layout = () => {
  return (
     <>
     <Navbar />
     <main>
        <Outlet /> 
     </main>
      <div className="hidden md:fixed md:flex md:flex-col p-2 z-10 gap-2 right-0 bottom-0">
               <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><FiPhone /></span>
               <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><MdOutlineMailOutline /></span>
               <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><LuMessageSquareQuote /></span>
           </div>
    <Footer />
     </>
  )
}

export default Layout;