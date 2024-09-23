import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import { default as AdminProtectedLayout } from "../components/layout/AdminProtectedLayout";
import MainLayout from "../components/layout/MainLayout";
import UserLayout from "../components/layout/UserLayout";
import UserProtectedLayout from "../components/layout/UserProtectedLayout";
import NotFound from "../NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddAdmin from "../pages/Admin/AddAdmin";
import AddFacility from "../pages/Admin/AddFacility";
import Bookings from "../pages/Admin/Bookings";
import Dashboard from "../pages/Admin/Dashboard";
import DeleteFacility from "../pages/Admin/DeleteFacility";
import Facilities from "../pages/Admin/Facilities";
import UpdateFacility from "../pages/Admin/UpdateFacility";
import BookingPage from "../pages/BookingPage/BookingPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import Facility from "../pages/FacilityList/Facility";
import FacilityDetailes from "../pages/FacilityList/FacilityDetails";
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
        element: <Facility></Facility>,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetailes></FacilityDetailes>,
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
        path: "/users/create-user",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <AdminProtectedLayout>
        <AdminLayout />
      </AdminProtectedLayout>
    ),
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
        path: "facility",
        element: <AddFacility></AddFacility>,
      },
      {
        path: "edit/:id",
        element: <UpdateFacility></UpdateFacility>,
      },
      {
        path: "delete",
        element: <DeleteFacility></DeleteFacility>,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "create-admin",
        element: <AddAdmin></AddAdmin>,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <UserProtectedLayout>
        <UserLayout />
      </UserProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
