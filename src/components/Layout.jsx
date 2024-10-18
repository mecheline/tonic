import Navbar from "./Navbar";
import ThirdQuadrant from "./Quadrant";

import ellipse2 from "../../public/ellipse2.svg";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="hidden md:block">
        <ThirdQuadrant
          image={ellipse2}
          position={"absolute"}
          top={"top-0"}
          right={"right-0"}
          width={"w-98"}
          height={"h-98"}
          index={"-z-50"}
        />
      </div>
      <div className="w-full">{children}</div>
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Layout;
