import React from "react";
import heading from "../../assets/headingimg.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import logo2 from "../../assets/certificate1.webp";
import Cards from "./Card";

const Cyber = () => {
  return (
    <>
      <div className="px-8 mt-10">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
              Our Cybersecurity Services
            </h2>
            <img src={heading} alt="" className="hidden md:flex w-35" />
          </div>
          <span className="hidden text-[#00D0E7] md:flex items-center gap-2">
            View All
            <FaArrowRightLong />
          </span>
        </div>
         <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-lg mb-6 leading-relaxed py-4 px-2 sm:px-4 w-full md:w-[80%] lg:w-[60%]">
  Plutosec offers a range of cybersecurity solutions to protect your
  organization from evolving threats. Our services are designed to
  strengthen your security across multiple platforms.
</p>

        <div className="flex flex-wrap gap-10 p-4">
           <Cards />
        </div>
      </div>
    </>
  );
};

export default Cyber;
