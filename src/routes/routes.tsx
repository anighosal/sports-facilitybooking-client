import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import BookingPage from "../pages/BookingPage/BookingPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import FacilityList from "../pages/FacilityList/FacilityList";
import Home from "../pages/home/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/facility",
        element: <FacilityList></FacilityList>,
      },
      {
        path: "/booking",
        element: <BookingPage></BookingPage>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
