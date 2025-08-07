 import React, { useState } from "react";
import heading from "../../assets/headingimg.svg";
import { GoGoal } from "react-icons/go";

const Ourvalues = () => {
  const valuesArray = [
    {
      title: "Goal setting",
      details: ["Define your goals", "Plan your steps", "Track your progress"],
    },
    {
      title: "Team work",
      details: ["Communicate clearly", "Support each other", "Share success"],
    },
    {
      title: "Innovation",
      details: ["Think creatively", "Take smart risks", "Learn from failure"],
    },
    {
      title: "Integrity",
      details: ["Be honest", "Stay accountable", "Build trust"],
    },
  ];

  const [flipIndex, setFlipIndex] = useState(null);

  return (
    <div>
     
      <div className="w-[full] md:w-[50%]">
        <div className="flex gap-5 py-4 mt-2">
          <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">Our Values</h2>
          <img src={heading} alt="" className="hidden md:flex w-35" />
        </div>
        <p className="text-white text-lg">
          Strong values build strong security. Plutosec stands on trust,
          speed, and clear action. You get support that never slows down. We
          act with purpose and always put your safety first. These values guide
          every step we take. That’s how we protect what matters to you.
        </p>
      </div>

      
      <div className="flex-col flex md:flex-row gap-10 py-3">
        {valuesArray.map((data, index) => (
          <div
            key={index}
            onMouseEnter={() => setFlipIndex(index)}
            onMouseLeave={() => setFlipIndex(null)}
            className="w-[full] md:w-[23%] h-40 [perspective:1000px]"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flipIndex === index ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              
              <div className="absolute inset-0 flex flex-col justify-center items-center rounded-md shadow-[0_0_10px_#00D0E7] bg-neutral-900 [backface-visibility:hidden]">
                <GoGoal className="text-white text-5xl" />
                <h4 className="text-xl font-bold text-white text-center">
                  {data.title}
                </h4>
              </div>

              
              <div className="absolute inset-0 rounded-md bg-[#00D0E7] shadow-[0_0_10px_#00D0E7] px-5 flex flex-col justify-center items-start space-y-1 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {data.details.map((point, i) => (
                  <p key={i} className="text-black leading-snug">
                    {i + 1}. {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourvalues;
