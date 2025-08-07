import React from 'react'
import heading from "../../assets/headingimg.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import img3 from '../../assets/charlotte-tremblay.jpg';
import img2 from '../../assets/rohan-sharma.jpg';
import img1 from '../../assets/charlotte-tremblay.jpg';


const Testimonial = () => {
    const testData = [
  {
    "name": "Tessa Martel",
    "post": "System Administrator",
    "about": "As a System Administrator, I value precision and speed—Plutosec delivered both. Their structured reports and quick threat mitigation helped us maintain uptime without compromise.",
    "image": img1
  },
  {
    "name": "Rohan Sharma",
    "post": "IT Manager",
    "about": "Managing IT operations at scale requires trustworthy security partners. Plutosec enhanced our infrastructure’s resilience with clear processes, responsive support, and proactive defenses.",
    "image": img2
  },
  {
    "name": "Charlotte Tremblay",
    "post": "CTO",
    "about": "In my role as CTO, compliance and data protection are top priorities. Plutosec brought clarity to complex healthcare standards and executed a secure, scalable solution.",
    "image": img3
  }
]

  return (
     <>
    <div className="px-4 md:px-10 lg:px-15 mt-10"> 
     <div className="flex justify-between mb-20">
               <div className="flex gap-5">
                 <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
                   Testimonials
                 </h2>
                 <img src={heading} alt="" className="hidden md:flex w-35" />
               </div>
               <span className="text-[#00D0E7] flex items-center gap-2">
                 View All
                 <FaArrowRightLong />
               </span>
             </div>
       <div className="flex flex-wrap gap-10 justify-center">
  {testData.map((service, index) => (
    <div
      key={index}
      className="relative bg-neutral-900 rounded-lg px-4 py-6 mb-10 flex flex-col 
                 items-center justify-center text-center 
                 shadow-[0_0_12px_#00D0E7] hover:shadow-none 
                 hover:-translate-y-2 transition-all duration-300 ease-in-out
                 w-full sm:w-[48%] lg:w-[30%]"
    >
      <img
        src={service.image}
        alt="Card Image"
        className="rounded-full outline outline-2 outline-[#00D0E7] 
                   w-20 h-20 absolute -top-12 left-1/2 transform -translate-x-1/2"
      />
      <span className='text-[#00D0E7] font-bold text-3xl mt-6'>
         <FaQuoteLeft />
      </span>

      <p className="text-gray-300 text-lg  leading-relaxed py-5 border-b border-[#696969]">
        {service.about}
      </p>
      <h2 className="text-2xl font-bold mt-4 text-[#00D0E7]">{service.post}</h2>
      <h2 className="text-xl font-bold mt-1 text-white">{service.name}</h2>
    </div>
  ))}
</div>


        </div>
     </>
  )
}

export default Testimonial