import React from "react";
import LeftMain from "./LeftMain";
import Rightmain from "./Rightmain";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMessageSquareQuote } from "react-icons/lu";

const Main = () => {
  const mapData= ["Pentest " , "EDR ", "IAM " ,"XDR " , "VA " , "MSS "]
  return (
    <>
      <div  className="w-full flex flex-col gap-10 px-8 pt-40 md:flex-row ">
         <LeftMain data={mapData} />
        <Rightmain />
      </div>
      <div className="hidden md:fixed md:flex md:flex-col p-2 z-10 gap-2 right-0 bottom-0">
          <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><FiPhone /></span>
          <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><MdOutlineMailOutline /></span>
          <span className="bg-[#00D0E7] p-3 rounded-full text-xl"><LuMessageSquareQuote /></span>
      </div>
    </>
  );
};

export default Main;
