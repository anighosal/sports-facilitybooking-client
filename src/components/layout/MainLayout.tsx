// import Banner from "../../pages/shared/HeroSection";

import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer";
import HeroSection from "../../pages/shared/HeroSection";
import Line from "../../pages/shared/Line";
import Navbar from "../../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Line></Line>
      <HeroSection></HeroSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
