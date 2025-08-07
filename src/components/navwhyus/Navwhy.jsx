import React from "react";
import Whowe from "./Whowe";
import Ourvalues from "./Ourvalues";
import OurMission from "./OurMission";
 

const Navwhy = () => {
  return (
    <>
      <div>
        <h2 className="text-5xl font-bold text-[#00D0E7] py-6 text-center">
          Why Choose Us
        </h2>
        <p className="text-white text-lg text-center">
          Cyber threats grow fast, but we stay faster. Plutosec is a trusted
          name in cybersecurity. We protect your data using smart tools and
          expert support. You get fast detection and strong response against
          threats. Our team handles identity access and keeps your cloud safe.
          We follow all rules and help you stay compliant. Plutosec stays ahead
          to keep you secure. You can focus on your goals without worry.
        </p>
      </div>
      <Whowe />
      <Ourvalues />
      <OurMission />
      
    </>
  );
};

export default Navwhy;
