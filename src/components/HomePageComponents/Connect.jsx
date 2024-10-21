import { CiLogin } from "react-icons/ci";

import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Connect = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const connectData = [
    {
      id: 0,
      text: "We connect our customers with the best.",
      icon: <FaRegEdit />,
    },
    {
      id: 1,
      text: "Advisor success customer launch party.",
      icon: <IoEyeOutline />,
    },
    {
      id: 2,
      text: "Business-to-consumer long tail.",
      icon: <MdOutlineWbSunny />,
    },
  ];
  return (
    <div className="mt-24 px-6 lg:px-28">
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-16">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:w-1/2"
        >
          <img src="/connect1.svg" width="494px" height="610px" alt="connect" />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="md:w-1/2">
          <div className="font-manrope font-normal text-2xl md:text-3xl lg:text-4xl leading-[45px] md:leading-[50px] lg:leading-[56px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className="mt-8">
            {connectData.map((data) => (
              <div key={data.id} className="flex gap-x-4 mb-4">
                <img src="/check.svg" width={"20px"} alt="checked" />
                <div className="font-openSans font-normal text-xl leading-8">
                  {data.text}
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-x-2 font-manrope btn-dark mt-8 w-full md:w-auto  hover:bg-[#0A2640] hover:text-white">
            Start now
            <CiLogin />
          </button>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-16 mt-24 md:mt-12 lg:mt-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:w-1/2"
        >
          <div className="font-manrope font-normal text-2xl md:text-3xl lg:text-4xl leading-[45px] md:leading-[50px] lg:leading-[56px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className="mt-8">
            {connectData.map((data) => (
              <div
                key={data.id}
                className="flex items-center gap-x-4 mb-4 p-4 shadow-lg bg-white rounded hover:bg-[#0A2640] hover:text-white"
              >
                {data.icon}
                <div className="font-openSans font-normal text-xl leading-8">
                  {data.text}
                </div>
              </div>
            ))}
          </div>
          {/* <button className="btn-dark text-white mt-8">Start now</button> */}
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="md:w-1/2">
          <img src="/connect2.svg" width="494px" height="610px" alt="connect" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
