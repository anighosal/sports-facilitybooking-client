import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/Footer";

import HeroSection from "../../pages/shared/HeroSection";
import Line from "../../pages/shared/Line";
import Navbar from "../../pages/shared/Navbar";
import ScrollToTop from "../ScrollTop/ScrollTop";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const hideNavbarFooterRoutes = ["/login", "/users/create-user"];
  const hideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Line></Line>
      {isHomePage && <HeroSection></HeroSection>}
      <Outlet></Outlet>
      {!hideNavbarFooter && <Footer />}
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default MainLayout;
