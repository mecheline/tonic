import { Link } from "react-router-dom";
import service1 from "../../../public/service1.svg";
import arrow from "../../../public/arrow.svg";
import { serviceData } from "../HomeData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="bg-[#0A2640]">
      <div className="lg:px-20 py-12">
        <div className="font-openSans text-[#777777] font-normal text-xl leading-8 text-center mb-4 lg:mb-0">
          Our services
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-manrope font-normal text-2xl md:text-5xl leading-[50px] md:leading-[68px] lg:leading-[72px] text-center text-white lg:w-3/4 mx-auto"
        >
          Handshake infographic mass market crowdfunding iteration.
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:gap-x-16 mt-16"
        >
          {serviceData.map((service, i) => (
            <div key={i} className="mb-24">
              <img
                src={service.image}
                width="300px"
                height="354px"
                alt={service.title}
              />
              <div className="font-openSans font-normal text-2xl leading-9 text-white mt-8 mb-10">
                {service.title}
              </div>
              <div className="">
                <Link
                  to={""}
                  className="font-openSans flex items-center underline underline-offset-[18px] decoration-1 font-bold text-xl leading-9 text-white"
                >
                  Explore page
                  <img src={arrow} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
