 import React from "react";
import { services } from "./data";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full md:w-[48%] lg:w-[30%] bg-neutral-900 rounded-lg px-3 py-6 
          flex flex-col items-center justify-center text-center 
          shadow-[0_0_10px_#00D0E7] hover:shadow-none 
          hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <img
            src={service.image}
            alt="Card Image"
            className="rounded-t-lg w-20 h-20"
          />
          <h2 className="text-2xl font-bold mt-4 text-[#00D0E7]">{service.title}</h2>
          <p className="text-gray-300 text-lg mt-3 leading-relaxed py-5">
            {service.description}
          </p>
          <button className="border border-[#00D0E7] text-[#00D0E7] font-semibold px-6 py-2 rounded-md hover:bg-[#00D0E7] hover:text-black shadow-lg hover:shadow-[#00D0E7]/50 transition-all duration-300">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
