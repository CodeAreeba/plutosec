import React, { useEffect, useState } from 'react'

const LeftMain = ({data}) => {
  const [index,setIndex]= useState(0);
  useEffect(() => {
    const interval=setTimeout(() => {
      setIndex((prev) => (prev+1) % data.length)
  },1000)
  return () => clearTimeout(interval);
},[index])
  return (
     <>
     <div className="max-w-3xl text-left py-6">
          <h2 className="text-2xl text-[#00D0E7] font-semibold md:text-[#00D0E7] text-5xl font-bold mb-4">
            <style>
    {`
      @keyframes blinking {
        0% { opacity: 0.1; }
        100% { opacity: 1; }
      }
    `}
  </style>
            Industry-leading <span  style={{animation: "blinking 1s linear infinite"}}> {data[index]}</span>
            {/* {data.map((tag,index) => (
              <> 
               <h2>{tag}</h2>
               
               </>
            ))} */}
           for your security needs
          </h2>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed py-5">
            Plutosec is a leading cybersecurity company in Canada, specializing
            in advanced penetration testing by certified experts. We offer
            detailed security assessments to help enterprises and government
            organizations identify vulnerabilities and enhance cyber resilience.
          </p>

          <div className="flex flex-wrap text-left gap-4">
            <button className="bg-[#00D0E7] text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-[#00b4c7] hover:shadow-[#00D0E7]/50 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-[#00D0E7] text-[#00D0E7] font-semibold px-6 py-2 rounded-md hover:bg-[#00D0E7] hover:text-black shadow-lg hover:shadow-[#00D0E7]/50 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
     </>
  )
}

export default LeftMain;