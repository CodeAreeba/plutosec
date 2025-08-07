import React from "react";
import career from '../../assets/Career.png'

const Career = () => {
    const careerFormFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name"
  },
  {
    label: "Job Title",
    type: "text",
    placeholder: "Job title"
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Email address"
  },
  {
    label: "Phone Number",
    type: "tel",
    placeholder: "+1"
  } 
];

  return (
    <>
      <div>
        <h2 className="text-5xl font-bold text-[#00D0E7] py-6 text-center">
          Join Our Journey of Plutosec
        </h2>
        <p className="text-white text-lg text-center">
          Be part of a growing cybersecurity team committed to protecting
          businesses. We prioritize innovation, teamwork, and personal growth.
          At Plutosec, you’ll face new challenges and sharpen your skills. Our
          mission is to stay ahead of cyber threats and deliver outstanding
          security solutions. Join us and contribute to a safer digital world.
          Your expertise and passion will make an impact.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  w-[full] gap-10 mt-9"> 
      <div className="w-[full] md:w-[48%] ">
       <h4 className="text-[#00D0E7] font-bold text-4xl py-3 ">Apply Now</h4>
       <p className="text-white text-xl py-5 ">Ready to Take the Next Step?</p>
       <p className="text-white text-sm py-1 mb-3 ">Fill out the form below and take the first step toward an exciting career with us. Let's build the future together!</p>
        <hr className="border-t-2 border-[#00D0E7] "/>
        <div className="flex flex-col gap-4 mt-3">
        {
            careerFormFields.map((data,index) => (
                <div key={index} className="text-white flex flex-col gap-4">
                    <label htmlFor="" className="text-white text-lg">{data.label}</label>
                    <input type={data.type} placeholder={data.placeholder} className="border-b border-white" />
                </div>
            ))
        }
        <div  className="text-white flex flex-col gap-4">
                    <label htmlFor="" className="text-white text-lg">Uploads</label>
                    <label htmlFor="" className="text-center text-xl rounded-md text-[#00D0E7] border-2 border-dotted border-white hover:border-[#00D0E7] p-4"> 
                    Upload Doc or PDF<input type="file" placeholder="Upload Doc or PDF" className="hidden" />
                    </label>
                </div>
                <button className="bg-[#00D0E7] text-black p-3 rounded-lg font-semibold hover:border hover:border-[#00D0E7] hover:text-[#00D0E7] hover:bg-black">Send</button>
        </div>
      </div>
      <div className="shadow-[0_0_10px_#00D0E7] bg-gradient-to-b from-[#003f46] via-[#005e67] to-[#00D0E7] w-[full] mt-2 md:w-[48%] border-1 rounded-md object-cover md:mt-20 h-[98%] border-[#00D0E7] ">
        <img src={career} alt="" className="mx-auto object-fill" />
      </div>
      </div>
    </>
  );
};

export default Career;
