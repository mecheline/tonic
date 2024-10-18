import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-20 items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 font-openSans">
        404 - Page Not Found
      </h1>
      <Link to="/">
        <button className="btn-white py-4 px-14 font-manrope hover:bg-[#0A2640] hover:text-white">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
