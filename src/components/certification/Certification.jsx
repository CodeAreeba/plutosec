import React from "react";
import heading from "../../assets/headingimg.svg";
import Crousel from "./Crousel";

const Certification = () => {
  return (
    <>
      <div className="px-15 mt-10">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
              Certifications
            </h2>
            <img src={heading} alt="" className="hidden md:flex w-35" />
          </div>
        </div>
        <div className="flex-col md:flex-row flex">
          <div> 
        <p className=" text-gray-300 text-lg mb-6 leading-relaxed py-5 md:w-135">
          Plutosec holds top cybersecurity certifications trusted across Canada.
          Our team follows proven methods like NIST and ISO to deliver accurate
          results. Every test is guided by strong standards and expert skills.
          You get clear reports and solid protection that meet industry and
          government needs. We help you stay ahead with secure systems built on
          certified practices. Our experts stay updated with the latest
          compliance changes. You gain confidence knowing your security meets
          global benchmarks.
        </p>
        </div>
        <div> 
        <Crousel />
        </div> 
        </div>
      </div>
    </>
  );
};

export default Certification;
