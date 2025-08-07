import React from 'react'
import bgimg from "../../../assets/contactbg.svg";
import { useLocation } from 'react-router-dom';
 

const HeaderBanner = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean).pop();
  const formattedName =pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, " ");

  return (
     <>
     <div
             className="relative bg-cover bg-center h-48 sm:h-56 md:h-64 w-full mt-28 rounded-lg border border-[#00D0E7]"
             style={{
               backgroundImage: `url(${bgimg})`,
               boxShadow: "0 0 15px #00D0E7",
             }}
           >
             <div className="absolute inset-0 bg-black/50"></div>
             <div className="relative z-10 text-[#00D0E7] p-2 sm:p-4 text-lg sm:text-2xl md:text-4xl font-bold flex text-center h-full justify-center items-center">
               Home | {formattedName}
             </div>
           </div>
     </>
  )
}

export default HeaderBanner