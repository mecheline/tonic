import { testimonialData } from "../HomeData";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const Template = () => {
  return (
    <div className="bg-[#0A2640] py-24 px-4 sm:px-20">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="font-manrope font-normal text-3xl md:text-4xl lg:text-5xl text-center md:text-left md:leading-[60px] lg:leading-[72px] text-white w-full md:w-2/3 mb-4 md:mb-0">
          An enterprise template to ramp up your company website
        </div>
        <div className="hidden md:flex gap-x-4 mt-4 md:mt-0 ">
          <IoArrowBackCircleOutline
            size={72}
            className="cursor-pointer text-white hover:text-[#ccc]"
          />
          <IoArrowForwardCircleOutline
            size={72}
            className="cursor-pointer text-white hover:text-[#ccc]"
          />
          {/* <img src="/arrBkd.svg" width="72" height="72" alt="direction" />
          <img src="/arrFwd.svg" width="72" height="72" alt="direction" /> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-x-8 mt-12 md:mt-24">
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white rounded-xl w-full md:w-[46%] lg:w-[30%] p-6 mb-8"
          >
            <div className="font-openSans font-normal text-xl md:text-2xl leading-9 cursor-pointer">
              {testimonial.text}
            </div>
            <div className="mt-8">
              <div className="flex gap-x-2 items-center">
                <div>
                  <img
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-16 h-16 md:w-auto md:h-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-openSans font-bold text-base text-[#0A2640]">
                    {testimonial.name}
                  </div>
                  <div className="font-openSans font-normal text-sm text-[#0A2640]">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
