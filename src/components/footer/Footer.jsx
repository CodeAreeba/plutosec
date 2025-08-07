import React from "react";
import logo from "../../assets/logo4.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
       <div className="flex flex-col justify-start md:flex-row bg-black gap-8 px-6 md:px-20 py-10 md:justify-center md:items-center md:items-start mt-10">
  <div className="w-full  md:w-1/4 text-center md:text-left">
    <div className="flex justify-center md:justify-start">
      <img src={logo} alt="Plutosec" className="w-40" />
    </div>
    <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed py-4">
      Defending Digital Assets – Empowering Cybersecurity Experts, and Shaping a Secure Future.
    </p>
    <div className="flex justify-center md:justify-start text-base gap-2">
      
      {[TiSocialFacebook, FaLinkedinIn, AiFillInstagram, IoLogoTiktok, FaXTwitter].map((Icon, idx) => (
        <span
          key={idx}
          className="p-2 rounded-full bg-[#00D0E7] hover:border-2 border-[#00D0E7] hover:bg-black hover:text-[#00D0E7]"
        >
          <Icon />
        </span>
      ))}
    </div>
  </div>

   
  <div className="w-full md:w-2/4 flex flex-col sm:flex-row justify-around gap-8 text-center md:text-left">
    <div>
      <h4 className="text-[#00D0E7] text-xl font-bold mb-4">Company</h4>
      <ul className="text-gray-100 text-base flex flex-col gap-1">
        {["Services", "Blogs", "Industries", "Testimonials", "Career", "Contact Us"].map((item, idx) => (
          <li key={idx} className="hover:text-[#00D0E7]">{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-[#00D0E7] text-xl font-bold mb-4">Others</h4>
      <ul className="text-gray-100 text-base flex flex-col gap-1">
        {["Success Stories", "Partner Program", "Why Us", "Terms & Conditions", "Privacy Policy", "About Us"].map((item, idx) => (
          <li key={idx} className="hover:text-[#00D0E7]">{item}</li>
        ))}
      </ul>
    </div>
  </div>

  
  <div className="w-full md:w-1/4 text-center md:text-left">
    <h4 className="text-[#00D0E7] text-xl font-bold mb-4">Join New Settler</h4>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-100 mb-1">Your Email</label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-2 py-2 bg-neutral-900 text-white rounded-md border border-[#00D0E7] focus:outline-none focus:ring-2 focus:ring-[#00D0E7]"
        />
        <button className="bg-[#00D0E7] text-black rounded-md px-4 py-2 text-sm hover:border-2 border-[#00D0E7] hover:bg-black hover:text-[#00D0E7]">
          Subscribe
        </button>
      </div>
    </div>
    <ul className="text-gray-100 text-base flex flex-col gap-2">
      <li className="hover:text-[#00D0E7] flex items-center justify-center md:justify-start gap-2">
        <MdOutlineMail className="text-[#00D0E7]" /> contact@plutosec.ca
      </li>
      <li className="hover:text-[#00D0E7] flex items-center justify-center md:justify-start gap-2">
        <FiPhone className="text-[#00D0E7]" /> +1 (905) 367-6038
      </li>
      <li className="hover:text-[#00D0E7] flex items-center justify-center md:justify-start gap-2">
        <LuMapPin className="text-[#00D0E7]" /> 201A-23 Westmore Dr. Etobicoke ON M9V 3Y7
      </li>
    </ul>
  </div>
</div>

 
<div className="w-full border-t border-gray-600 text-center py-6">
  <span className="text-[#00D0E7] text-sm md:text-base">
    Copyright 2021-2025 Plutosec.ca All rights reserved
  </span>
</div>

    </>
  );
};

export default Footer;
