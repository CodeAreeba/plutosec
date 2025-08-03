 import React from "react";
import heading from "../../assets/headingimg.svg";
import arrow from "../../assets/choose.svg";

const Whyus = () => {
  return (
    <div className="px-4 md:px-10 lg:px-15 mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        <div className="w-full md:max-w-[52%]">
          <div className="flex gap-3 md:gap-5 items-center justify-center md:justify-start">
            <h2 className="text-[#00D0E7] text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Why Us?
            </h2>
            <img 
              src={heading} 
              alt="" 
              className="hidden w-20 sm:w-28 md:w-35" 
            />
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed py-4 text-center md:text-left">
            Plutosec leads cybersecurity in Canada and is trusted by businesses
            in Toronto, Vancouver, Montreal, and more. Our expert team provides
            advanced penetration testing customized to meet your needs and
            industry standards. We take a consultative approach, ensuring you
            fully understand each evaluation and gain actionable insights. We
            improve your security with precision and lasting results by
            following trusted frameworks like NIST and ISO.
          </p>
        </div>
 
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <img 
            src={arrow} 
            alt="" 
            className="w-35 sm:w-50 md:w-[70%] lg:w-[95%]" 
          />
        </div>

      </div>
    </div>
  );
};

export default Whyus;
