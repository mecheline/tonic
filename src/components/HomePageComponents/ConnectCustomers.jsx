import { useState } from "react";
import { IoChevronDownCircleSharp } from "react-icons/io5";
import { IoChevronUpCircle } from "react-icons/io5";

const ConnectCustomers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "We connect our customers with the best?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Android research & development rockstar? ",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-4 md:px-20 py-24">
      <div>
        <div>
          <img src="/concust.svg" alt="connect customers" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-x-16 mt-8 md:mt-16 ">
          <div className="font-manrope font-normal text-2xl lg:text-4xl leading-[42px] lg:leading-[52px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className="flex flex-col gap-y-8 mt-8 md:mt-0">
            {items.map((item, index) => (
              <div key={item.title}>
                <div
                  className="flex justify-between gap-x-12 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="font-openSans font-normal text-lg md:text-xl leading-8 ">
                    {item.title}
                  </div>
                  {openIndex === index ? (
                    <IoChevronUpCircle size={30} />
                  ) : (
                    <IoChevronDownCircleSharp size={30} />
                  )}
                </div>
                <hr className="border-t border-gray-300 mt-4" />
                <div
                  className={`overflow-hidden transition-max-height duration-300 ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="py-4">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCustomers;
