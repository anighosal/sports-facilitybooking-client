import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddAdmin from "../pages/Admin/AddAdmin";
import Bookings from "../pages/Admin/Bookings";
import Dashboard from "../pages/Admin/Dashboard";
import Facilities from "../pages/Admin/Facilities";
import BookingPage from "../pages/BookingPage/BookingPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import FacilityList from "../pages/FacilityList/FacilityList";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "add-admin",
        element: <AddAdmin />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
