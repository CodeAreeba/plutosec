 import React, { useState } from "react";
import heading from "../../assets/headingimg.svg";
import { FaHandHoldingDollar, FaRocket } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

const OurMission = () => {
  const missionArray = [
    {
      title: "Grow Your Business",
      desc: [
        "Secure your digital environment.Protect assets and boost efficiency.Focus on growth without the risk."
      ],
      icon: <FaHandHoldingDollar />
    },
    {
      title: "Launch Your Business",
      desc: [
        "Start strong with the right security measures.Secure your brand from day one.Protect your growth potential."
      ],
      icon: <FaRocket />
    },
    {
      title: "Global Connections",
      desc: [
        "Expand globally with confidence.Ensure cybersecurity resilience wherever you operate.Safeguard your connections worldwide."
      ],
      icon: <FaGlobe />
    }
  ];

  const [flipIndex, setFlipIndex] = useState(null);

  return (
    <>
      <div>
        <div className="w-[full] md:w-[50%]">
          <div className="flex gap-5 py-4 mt-2">
            <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
              Our Mission
            </h2>
            <img src={heading} alt="" className="hidden md:flex w-35" />
          </div>
          <p className="text-white text-lg">
            Plutosec protects businesses with advanced cybersecurity solutions.
            We deliver services that keep your digital assets secure and your
            operations running smoothly. Our goal is to make your business
            resilient in an ever-changing cyber landscape. We help you build
            trust, enhance security, and grow confidently.
          </p>
        </div>

        <div className="flex-col flex md:flex-row gap-10 mt-6">
          {missionArray.map((data, index) => (
            <div
              key={index}
              onMouseEnter={() => setFlipIndex(index)}
              onMouseLeave={() => setFlipIndex(null)}
              className="w-[100%] md:w-[30%] h-60 [perspective:1000px]"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipIndex === index ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                
                <div className="absolute inset-0 flex flex-col justify-center items-center rounded-md shadow-[0_0_10px_#00D0E7] bg-neutral-900 [backface-visibility:hidden]">
                  <span className="text-white text-5xl">{data.icon}</span>
                  <h4 className="text-xl font-bold text-white text-center">
                    {data.title}
                  </h4>
                </div>

                 
                <div className="absolute inset-0 rounded-md bg-[#00D0E7] shadow-[0_0_10px_#00D0E7] px-5 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h4 className="text-xl font-bold text-black mb-2">
                    {data.title}
                  </h4>
                  <p className="text-black leading-snug">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurMission;
