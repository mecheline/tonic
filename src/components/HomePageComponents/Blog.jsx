import { Link } from "react-router-dom";
import service1 from "../../../public/service1.svg";
import arrow from "../../../public/arrow.svg";
import { blogData, serviceData } from "../HomeData";

const Blog = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="py-6 md:py-12">
        <div className="font-openSans text-[#777777] font-normal text-xl leading-8 text-center">
          Our Blog
        </div>
        <div className="font-manrope font-normal text-2xl md:text-5xl leading-[45px] md:leading-[72px] text-center mt-8 mb-12 md:mb-20">
          Value proposition accelerator product management venture
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-x-8 gap-y-16 w-[90%] mx-auto">
            {blogData.map((service) => (
              <div
                key={service.title}
                className="md:w-[46%] lg:w-[30%] hover:shadow-md hover:bg-gray-100 hover:rounded-lg"
              >
                <img
                  src={service.image}
                  width="300px"
                  height="209px"
                  alt={service.title}
                  className="cursor-pointer"
                />
                <div className="py-4 px-1">
                  <div className="flex items-center justify-between gap-x-8 my-4">
                    <div className="font-openSans font-bold text-[#0A2640] text-base leading-7">
                      {service.category}
                    </div>
                    <div className="font-openSans font-normal text-[#777777] text-base leading-7">
                      {service.date}
                    </div>
                  </div>
                  <div className="font-openSans font-normal text-xl lg:text-2xl leading-8 h-32 cursor-pointer">
                    {service.title}
                  </div>
                  <div className="flex gap-x-2 mt-4">
                    <div>
                      <img src={service.pic} />
                    </div>
                    <div className="font-openSans font-normal text-base leading-7">
                      {service.name}
                    </div>
                  </div>
                  <hr className="block lg:hidden mt-12" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-20">
            <button className="btn-white text-center py-4 px-14 hover:bg-[#0A2640] hover:text-white">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
