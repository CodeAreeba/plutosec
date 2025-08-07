import React, { useState } from "react";
import HeaderBanner from "../components/blogs/blogpage/HeaderBanner";
import ContactCard from "../components/contact/ContactCard";
import heading from "../assets/headingimg.svg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ContactUs = () => {
   const faqItems = [
  {
    question: "What Are Penetration Services?",
    answer: "Penetration testing services simulate real-world cyberattacks to identify vulnerabilities in your system and improve overall security. These tests help you understand where your defenses might fail."
  },
  {
    question:"How Can Vulnerability Assessments Benefit My Business?",
    answer: "Vulnerability assessments scan your systems to identify weaknesses before attackers can exploit them. They allow you to prioritize fixes and strengthen your security posture."
  },
  {
    question: "What is Managed Security Monitoring?",
    answer: "Managed security monitoring provides continuous oversight of your IT infrastructure. This service detects potential threats and ensures quick responses to mitigate risks in real-time."
  },
  {
    question: "Why is Cloud Security Important for My Organization?",
    answer: "Cloud security ensures your data stored in the cloud is protected from unauthorized access. It focuses on safeguarding your cloud applications and services from cyber threats and vulnerabilities."
  },
  {
    question: "How Does Red Teaming Improve My Security?",
    answer: "Red teaming involves simulating advanced attacks to test your security systems. It provides insights into how well your organization responds to cyber threats and helps uncover security gaps."
  },
  {
    question: "What is Identity & Access Management (IAM)?",
    answer: "IAM controls who has access to your systems and data. It ensures that only authorized individuals can access sensitive information, reducing the risk of unauthorized access and data breaches."
  },
  {
    question: "How Can XDR Improve My Security Infrastructure?",
    answer: "XDR (Extended Detection & Response) offers integrated protection across endpoints, networks, and cloud environments. It detects threats and responds to them immediately, improving overall threat management."
  },
  {
    question: "What Is Compliance Consulting?",
    answer: "Compliance consulting helps you meet security standards and regulations. It ensures your systems align with guidelines, reducing legal and operational risks."
  },
  {
    question: "What is DevSecOps?",
    answer: "DevSecOps integrates security into the development process. It helps prevent vulnerabilities from reaching production by addressing security early on."
  },
  {
    question: "Why Should I Consider Cyber Security Consultancy Services?",
    answer: "Cybersecurity consultancy services help you identify, assess, and improve your security strategy. They provide expert guidance on how to build a stronger, more resilient digital environment."
  }
];

const [expand,setExpand] = useState(null);
const [toggle,setToggle] = useState(false);

  return (
    <>
      <div className="px-12">
        <HeaderBanner />
        <div className="mb-5">
          <h2 className="text-5xl font-bold text-[#00D0E7] py-6 text-center">
            Contact Us
          </h2>
          <p className="text-white text-lg text-center">
            You can contact Plutosec when you need fast and expert support. Our
            team helps you understand the next steps and answers your questions
            without delay. We guide you with honest advice and strong solutions.
            Start the conversation today and protect what matters most.
          </p>
        </div>
        <ContactCard />
        <div className="flex gap-5 p-3 mt-3">
          <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <img src={heading} alt="" className="hidden md:flex w-35" />
        </div>
        <div className="flex flex-col gap-5">
          {faqItems.map((data, index) => (
            <div> 
            <div key={index} onClick={() => {setExpand(index)
              setToggle(!toggle);
            }} className={`flex justify-between items-center   text-lg font-bold w-full    px-3 py-5 flex shadow-[0_0_10px_#00D0E7]   ${(index === expand && toggle) ? "bg-[#00D0E7] text-black rounded-t-lg " : "bg-neutral-900 text-white rounded-lg  hover:bg-black"}`}>
              {data.question}
              {((index === expand && toggle) ? <FaMinus /> :<FaPlus />  )}
              
            </div>
            {(index === expand)&& toggle &&
            <div key={index} className="flex justify-between items-center text-white  text-base  w-full bg-neutral-900  rounded-b-lg px-3 py-5 flex shadow-[0_0_10px_#00D0E7] hover:bg-black">
              {data.answer}
               
            </div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
