import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { showService } from "../../utils/fetch";
import { baseUrl } from "../../config/config";

const Service = () => {
  const [userData, setUserData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await showService();
        // const res = await axios.get(
        //   "https://plutosec.ca/backend/api/servicecategory/all"
        // );
        setUserData(res.services);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  console.log(userData);

  return (
    <div className="w-[65%] fixed bg-neutral-900 rounded-lg px-3 py-6 flex z-[10] mt-3 -ml-20 gap-6">
    
      <div className="w-1/3 flex flex-col gap-2">
        {userData.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedIndex(index)}
            className={`cursor-pointer text-center p-4 rounded-md transition-all duration-200 border-r-2 ${
              selectedIndex === index
                ? " text-[#00D0E7]"
                : " text-gray-300"
            }`}
          >
            <img
              src={`${baseUrl}${service.icon}`}
              alt=""
              className="w-10 h-10 mx-auto mb-2"
            />
            <h4 className="text-lg font-bold">{service.heading}</h4>
          </div>
        ))}
      </div>

       
<div className="flex-1 grid grid-cols-2 gap-3 max-h-120 overflow-y-auto px-3">
  {userData[selectedIndex]?.data?.map((item, idx) => (
    <Link
      to={`services/${item.slug}`}
      key={idx}
      className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left gap-3 hover:text-[#00D0E7]"
    >
      {item.title}
    </Link>
  ))}
</div>

    </div>
  );
};

export default Service;
