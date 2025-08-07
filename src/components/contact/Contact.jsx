import React from "react";
import heading from "../../assets/headingimg.svg";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-15 mt-10">
        <div className=" mb-20">
          <div className="flex gap-5">
            <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <img src={heading} alt="" className="hidden md:flex w-35" />
          </div>
           <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Contact;
