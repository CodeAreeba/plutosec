import React from "react";
import LeftMain from "./LeftMain";
import Rightmain from "./Rightmain";
 
const Main = () => {
  const mapData= ["Pentest " , "EDR ", "IAM " ,"XDR " , "VA " , "MSS "]
  return (
    <>
      <div  className="w-full flex flex-col gap-10 px-8 pt-40 md:flex-row ">
         <LeftMain data={mapData} />
        <Rightmain />
      </div>
    </>
  );
};

export default Main;
