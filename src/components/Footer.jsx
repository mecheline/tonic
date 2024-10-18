import React from "react";
import { companyData, landingsData, resourcesData } from "./FooterData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 px-4 lg:px-20 py-24">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <div className="mb-6">
            <img src="/Logo.svg" width="156" height="41" alt="Logo" />
          </div>
          <div className="w-full md:w-[90%] font-openSans font-normal text-base leading-7 text-[#777777]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </div>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <div className="footer-header">Landings</div>
          <div className="flex flex-col gap-y-4">
            {landingsData.map((data) => (
              <Link key={data.title} to={data.href} className="footer-text">
                {data.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <div className="footer-header">Company</div>
          <div className="flex flex-col gap-y-4">
            {companyData.map((data) => (
              <Link key={data.title} to={data.href} className="footer-text">
                {data.title}
                {data.tag && (
                  <button className="py-px px-3.5 bg-[#65E4A3] border-0 rounded-full font-bold text-[#0A2640] ml-2">
                    Hiring!
                  </button>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <div className="footer-header">Resources</div>
          <div className="flex flex-col gap-y-4">
            {resourcesData.map((data) => (
              <Link key={data.title} to={data.href} className="footer-text">
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="font-openSans font-normal text-base leading-7 text-[#777777] mt-8 text-center md:text-left">
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
