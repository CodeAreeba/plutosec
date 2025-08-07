import React, { useState } from "react";
import heading from "../../assets/headingimg.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import zemalt from "../../assets/zemalt.png";
import broadium from "../../assets/Brodium.png";
import utho from "../../assets/utho.png";
import cleved from "../../assets/cleved.png";
import cpa from "../../assets/cpa.png";
import cql from "../../assets/cql.png";
import dharna from "../../assets/dharna.png";
import insurance from "../../assets/insurance.png";
import lowest from "../../assets/lowest.png";
import mhc from "../../assets/mhc.png";
import negup from "../../assets/negup.png";
import paramed from "../../assets/paramed.png";
import prasad from "../../assets/prasad.png";
import rh from "../../assets/rh.png";
import srj from "../../assets/srj.png";

const Valueable = () => { 
  const myData = [
  {
    image: zemalt,
    name: "Zemalt PVT LTD",
  },
  {
    image: broadium,
    name: "Broadium",
  },
  {
    image: utho,
    name: "Utho",
  },
  {
    image: cleved,
    name: "Cleved",
  },
  {
    image: cpa,
    name: "CPA",
  },
  {
    image: cql,
    name: "CQL",
  },
  {
    image: dharna,
    name: "Dharna",
  },
  {
    image: insurance,
    name: "Insurance",
  },
  {
    image: lowest,
    name: "Lowest",
  },
  {
    image: mhc,
    name: "MHC",
  },
  {
    image: negup,
    name: "Negup",
  },
  {
    image: paramed,
    name: "Paramed",
  },
  {
    image: prasad,
    name: "Prasad",
  },
  {
    image: rh,
    name: "RH",
  },
  {
    image: srj,
    name: "SRJ",
  },
];
 const pages = [
    [myData[0], myData[1], myData[2]],
    [myData[3], myData[4], myData[5]],
    [myData[6], myData[7], myData[8]],
    [myData[9], myData[10], myData[11]],
    [myData[12], myData[13], myData[14]],
  ];
 
const [currentPage,setCurrentPage] = useState(0);


  return (
    <>
      <div className="px-4 md:px-10 lg:px-15 mt-10">
        <div className="flex justify-between ">
          <div className="flex gap-5">
            <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
              OUR VALUEABLE CLIENTS
            </h2>
            <img src={heading} alt="" className="hidden md:flex w-35" />
          </div>
          <span className="text-[#00D0E7] flex items-center gap-2">
            View All
            <FaArrowRightLong />
          </span>
        </div>
        <div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed py-4 text-center md:text-left">
            We work with top companies in healthcare, technology, finance,
            telecom, and cloud services. Plutosec delivers cybersecurity
            solutions made to fit your needs. Our expertise and strong focus
            create trust and protection that meet the highest global standards.
            We build lasting partnerships that keep your digital world safe.
          </p>
        </div>
        <div className="flex flex-col md:flex md:flex-row  gap-10">
          {
          
          pages[currentPage].map((data,index) => (
            <div key={index} className="max-w-[100%] md:max-w-[30%]">
              <img
                src={data.image}
                alt=""
                className="w-[100%] md:w-99 h-25 bg-white px-20 py-8 rounded-lg mb-5"
              />
              <div className="text-gray-300 text-xl text-center">
                <h4 className="border-t-2 border-gray-300 py-2 ">
                  {data.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 p-3">
         { pages.map((_,id) => (

            <div key={id} 
            onClick={() => setCurrentPage(id)}
            className={`w-3 h-3 rounded-full  ${currentPage === id ? ("bg-[#00D0E7] w-6" ): ("bg-white  ")} `}></div>
          ))}

           
        </div>
      </div>
    </>
  );
};

export default Valueable;
