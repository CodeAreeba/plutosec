import React, { useState } from "react";
import logo from "../../assets/logo4.png";
import { IoIosGlobe } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Service from "../services/Service";
import { IoMenu } from "react-icons/io5"; 
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuToggle,setMenuToggle] = useState(false);
  const [menuClose,setMenuClose] = useState(true);

  const showMenu = () => {
    setMenuToggle(!menuToggle);
    setMenuClose(!menuClose);
  }

  const navigate = useNavigate();
  const showIndustry= () => {
    navigate(`industries`)
  }

  return (
    <>
      <nav className="bg-black px-10 py-4 mb-10 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
    
          <div className="flex items-center">
            <img src={logo} alt="Plutosec" className="w-40" />
          </div>

         
          <div
            className="hidden md:flex border border-[#00D0E7] rounded-full shadow-[#00D0E7]/50 "
            style={{ boxShadow: "0 0 12px #00D0E7" }}
          >
            <ul className="flex items-center gap-10 text-white font-medium text-lg">
              <div
                className="relative"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <li className="flex items-center px-2 py-3 hover:bg-[#00D0E7] hover:text-black cursor-pointer rounded-full">
                  Services
                  <IoMdArrowDropdown />
                </li>
                
                <div
                  className={`absolute top-full left-0 bg-black text-white transition-all duration-300 ease-in-out ${
                    isVisible
                      ? "opacity-100 max-h-[500px] visible"
                      : "opacity-0 max-h-0 invisible"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <Service />
                </div>
              </div>
                <Link to={`industries`} className="px-2 py-3 hover:bg-[#00D0E7] hover:text-black cursor-pointer rounded-full">Industries </Link>
               
                <Link to={`whyus`} className="px-2 py-3 hover:bg-[#00D0E7] hover:text-black cursor-pointer rounded-full">Why Us</Link>
               
               <Link to={`careers`} className="px-2 py-3 hover:bg-[#00D0E7] hover:text-black cursor-pointer rounded-full">Careers</Link>
               
                <Link to={`contact`} className="px-2 py-3 hover:bg-[#00D0E7] hover:text-black cursor-pointer rounded-full">Contact Us</Link>
               
            </ul>
          </div>

          
          <div className="hidden md:flex items-center gap-2 text-[#00D0E7] rounded-md bg-black text-lg px-3 py-2">
            <IoIosGlobe className="text-xl" />
            <select
              name="language"
              id="language"
              className="bg-black border-none outline-none text-[#00D0E7] cursor-pointer"
            >
              <option value="en" defaultValue>
                English
              </option>
            </select>
          </div>

          <div className={`${menuClose? "flex" : "hidden"} md:hidden text-white text-4xl `} onClick={showMenu}>
                   <IoMenu />
          </div>
          <div className={`${!menuClose? "flex" : "hidden"} md:hidden text-[#00D0E7] text-4xl`} onClick={showMenu}>
                    <IoCloseCircleOutline />
          </div>
           
           
        </div>
         
      </nav>
        
 <div className={`fixed -mt-13  left-0 w-full h-screen bg-black z-50 ${menuToggle ? "flex" : "hidden"} md:hidden`}>
  <div className="flex flex-col w-full gap-1 text-white font-medium text-lg mt-10 px-4">
     <div to="" className="px-2 py-3 border-b border-[#696969] cursor-pointer">
  Services
</div>
<Link to={`industries`} onClick={showMenu} className="px-2 py-3 border-b border-[#696969] cursor-pointer">
  Industries
</Link>
<Link to={`whyus`} onClick={showMenu} className="px-2 py-3 border-b border-[#696969] cursor-pointer">
  Why Us
</Link>
<Link to={`careers`} onClick={showMenu} className="px-2 py-3 border-b border-[#696969] cursor-pointer">
  Careers
</Link>
<Link to={`contact`} onClick={showMenu} className="px-2 py-3 border-b border-[#696969] cursor-pointer">
  Contact Us
</Link>
  </div>
</div>


    </>
  );
};

export default Navbar;
