// import Banner from "../../pages/shared/HeroSection";

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/Footer";

import HeroSection from "../../pages/shared/HeroSection";
import Line from "../../pages/shared/Line";
import Navbar from "../../pages/shared/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <div>
      <Navbar></Navbar>
      <Line></Line>
      {isHomePage && <HeroSection></HeroSection>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
