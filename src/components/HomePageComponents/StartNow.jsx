import { useEffect, useState } from "react";

import startNowQuadrant from "../../../public/startNowQuadrant.svg";
import ThirdQuadrant from "../Quadrant";
import AOS from "aos";
import "aos/dist/aos.css";

const StartNow = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const submitEmailHandler = () => {
    console.log(email);
  };
  return (
    <div className="relative">
      <div className=" hidden md:block">
        <ThirdQuadrant
          image={startNowQuadrant}
          position={"absolute"}
          top={"top-0"}
          right={"right-0"}
          width={"w-98"}
          height={"h-98"}
          index="z-30"
        />
      </div>
      <div className="bg-[#0A2640] z-20">
        <div className="py-24 px-4 md:w-2/3 mx-auto text-center ">
          <div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="font-manrope font-normal text-2xl md:text-3xl lg:text-5xl leading-[45px] md:leading-[52px] lg:leading-[72px] text-white relative z-50 "
            >
              An enterprise template to ramp up your company website
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex flex-col md:flex-row gap-y-12 items-center justify-center gap-x-4 mt-12"
            >
              <div className="relative flex flex-col">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className={`font-manrope font-normal text-xl leading-8 placeholder-black border-0 focus:outline-none px-8 py-4 rounded-full ${
                    isValid ? "border-gray-300" : "border-red-500"
                  }`}
                  value={email}
                  onChange={handleChange}
                />
                {!isValid && email && (
                  <div className="text-red-500 mt-1 absolute top-16 left-4">
                    Please enter a valid email address.
                  </div>
                )}
              </div>

              <button
                onClick={submitEmailHandler}
                className="btn-white bg-[#65E4A3] py-4 px-14 md:px-6 lg:px-14"
                disabled={!isValid}
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
