import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import heading from "../../assets/headingimg.svg";
import offering from "../../assets/keyofferings.jpg";
import servicebg from "../../assets/storiesbg.jpg";
import { showServiceDetails } from "../../utils/fetch";

const Subseervice = () => {
  const { slug } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [storiesIndex, setStoriesIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await showServiceDetails(slug)
        // const res = await axios.get(
        //   `https://plutosec.ca/backend/api/service/view/${slug}`
        // );
        setUserData(res.service);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [slug]);

  return (
    <div className="px-1 md:px-2 py-6">
      {loading ? (
         <div className="flex items-center justify-center h-screen bg-black space-x-2">
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-4 h-4 bg-[#00D0E7] rounded-full animate-bounce [animation-delay:0.4s]"></div>
    </div>
      ) : userData ? (
        <>
          <div>
            <h2 className="text-5xl font-bold text-[#00D0E7] py-6 text-center">
              {userData.title}
            </h2>
            <p className="text-white text-lg text-center">
              {userData.description}
            </p>
            <p className="text-white text-lg text-center">
              <div
                className="custom-service"
                dangerouslySetInnerHTML={{ __html: userData.cta }}
              ></div>
            </p>
          </div>

          <div>
            <div className="flex gap-5 py-4 mt-2">
              <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
                Key Offerings
              </h2>
              <img src={heading} alt="" className="hidden md:flex w-35" />
            </div>
            <div className="flex w-[full] md:gap-5">
              {userData.offerings.map((data, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`text-sm p-1 w-1/4  md:font-bold md:text-lg border-1 border-[#00D0E7] py-3 px-2   ${
                      selectedIndex === index
                        ? "bg-[#00D0E7] text-black rounded-t-md"
                        : "text-[#00D0E7] bg-black rounded-md"
                    } `}
                  >
                    {data.name}
                  </div>
                </>
              ))}
            </div>
            <div className=" flex justify-between items-center border-1 border-[#00D0E7] mt-1 py-4 px-4 rounded-md">
              <div>
                
                {userData.offerings[selectedIndex].items.map((data, index) => (
                  <ul key={index} className="text-white list-disc px-7 ">
                    <li> {data}</li>
                  </ul>
                ))}
              </div>

              <div
                className="hidden md:flex relative h-70 w-110  bg-cover bg-center rounded-md  py-7 px-4 overflow-hidden"
                style={{
                  backgroundImage: `url(${offering})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-md"></div>

                <div className="relative z-10"></div>
              </div>
            </div>

            <div className="flex gap-5 py-4 mt-2">
              <h2 className="text-[#00D0E7] text-4xl font-bold mb-4">
                Success Stories
              </h2>
              <img src={heading} alt="" className="hidden md:flex w-35" />
            </div>

            <div className="w-full flex flex-col md:flex-row border-1 border-[#00D0E7] rounded-md">
              <div className="flex-row w-[full] overflow-x-auto no-scrollbar flex gap-5 px-3 py-3 md:flex-col md:w-[22%]">
                {userData.successstories.map((data, index) => (
                  <>
                    <div
                      key={index}
                      onClick={() => setStoriesIndex(index)}
                      className={`md:border-r-4 rounded-sm pr-7  cursor-pointer   font-bold text-lg  py-3 px-2   ${
                        storiesIndex === index
                          ? "text-[#00D0E7] border-[#00D0E7]"
                          : "text-gray-300 border-gray-300"
                      } `}
                    >
                      {data.name}
                    </div>
                  </>
                ))}
              </div>
              <div
                className="relative w-[full] border border-[#00D0E7] bg-cover bg-center rounded-md md:w-[78%] py-7 px-4 overflow-hidden flex items-center"
                style={{
                  backgroundImage: `url(${servicebg})`,
                }}
              >
                <div className="absolute inset-0 bg-black/70 pointer-events-none rounded-md"></div>

                <div className="relative z-10">
                  <ul className="text-white list-disc text-lg px-7 ">
                    {userData.successstories[storiesIndex].items.map(
                      (data, index) => (
                        <li key={index} >{data}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-red-400">No data found.</p>
      )}
    </div>
  );
};

export default Subseervice;
