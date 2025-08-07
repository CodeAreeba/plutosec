import React from "react";
import heading from "../../assets/headingimg.svg";
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

const Whowe = () => {
  return (
    <>
      <div className="flex-col flex md:flex-row">
        <div className="w-[full] md:w-[60%]"> 
        <div className="flex gap-5 py-4 mt-2">
          <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
            Who we are?
          </h2>
          <img src={heading} alt="" className="hidden md:flex w-35" />
        </div>
        <p className="text-white text-lg">
          We are cybersecurity professionals who defend your data. Our team
          works with purpose and speed. You get smart support from people who
          understand threats. <br />We believe strong security should be simple.
          That’s why we build tools that solve problems fast. You don’t have
          time to guess. We give you clear answers. <br /> Every company needs
          protection. No matter the size, we help you stay safe. You focus on
          your work. We handle the rest. <br /> Plutosec stands for trust. We work hard
          so you don’t have to worry. You stay one step ahead because we never
          fall behind.
        </p>
        </div>
        <div className="flex gap-5 p-5 mt-7">
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 w-[full]">
                    <img src={image2} alt="" className="rounded-lg h-35 w-[48%] object-cover" />
                    <img src={image3} alt="" className="rounded-lg h-35 w-[48%] object-cover" />
                </div>
                <div>
                    <img src={image4} alt="" className="rounded-lg h-35 w-[100%] object-cover"/>
                </div>
            </div>
            <div>
                <img src={image5} alt="" className="hidden md:flex rounded-lg h-73 object-cover" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Whowe;
