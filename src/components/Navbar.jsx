import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const menuItems = [
    {
      path: "/product",
      title: "Product",
      btn: false,
    },
    {
      path: "/services",
      title: "Services",
      btn: false,
    },
    {
      path: "/about",
      title: "About",
      btn: false,
    },
    {
      path: "/login",
      title: "Log In",
      btn: true,
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 py-6 px-6 md:px-14 ${
        isScrolled ? "bg-white fixed top-0 left-0 z-50" : "bg-transparent"
      } z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"}>
            <img src="/Logo.svg" width="162.22px" height="42px" alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 md:gap-x-6 ">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.title}
              className={`flex items-center font-semibold text-base leading-7 text-[#0A2640] font-manrope ${
                item.btn
                  ? `btn-white py-2 px-10 hover:bg-[#0A2640] hover:text-white`
                  : `hover:underline hover:underline-offset-8`
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={`md:hidden transition-all duration-300`}>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  bg-white transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 mt-6 border-b-2 text-center"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.title}
            className={`block py-4 font-semibold text-base leading-7 text-[#0A2640] font-manrope ${
              item.btn
                ? `btn-white py-2 px-8 w-fit mx-auto mb-4 hover:bg-[#0A2640] hover:text-white`
                : `hover:underline hover:underline-offset-8`
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
