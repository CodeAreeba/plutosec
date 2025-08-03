 import React from "react";
import heading from "../../assets/headingimg.svg";
import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";

const Clients = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-0">
      <div className="flex gap-3 md:gap-5 items-center justify-center md:justify-start mb-6">
        <h2 className="text-[#00D0E7] text-2xl sm:text-3xl md:text-4xl font-bold">
          What Our Clients Say?
        </h2>
        <img src={heading} alt="" className="hidden sm:block w-20 sm:w-28 md:w-36" />
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First card */}
        <div className="bg-[#00D0E7] rounded-lg px-4 py-8 text-center">
          <h4 className="text-xl font-medium text-black mb-3">Excellent</h4>
          <div className="flex justify-center gap-1 text-lg mb-2 text-black">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarHalfOutline />
          </div>
          <div className="text-black text-base">
            <p>4.9 average</p>
            <p>96 reviews</p>
          </div>
          <div className="flex items-center justify-center text-white mt-2">
            <MdStars className="text-2xl" />
            <p className="text-xl ml-1">REVIEWS</p>
            <span className="text-xs ml-1">.io</span>
          </div>
        </div>

        {/* Repeated client cards */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-lg px-4 py-6 text-center shadow-[0_0_20px_#00D0E7]"
          >
            <h4 className="text-xl font-medium text-[#00D0E7] mb-3">
              Ema Rodriguiz
            </h4>
            <div className="flex justify-center gap-1 text-lg mb-2 text-[#00D0E7]">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <p className="text-white mb-3 px-2">
              As someone who works daily with human energy and balance,
              I thought I wouldn’t need a cybersecurity partner.
            </p>
            <span className="text-white text-sm">4 weeks ago</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
