import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/Footer";

import HeroSection from "../../pages/shared/HeroSection";
import Line from "../../pages/shared/Line";
import Navbar from "../../pages/shared/Navbar";
import ScrollToTop from "../ScrollTop/ScrollTop";

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
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default MainLayout;
