import { HomeOutlined } from "@ant-design/icons";
import {
  AiOutlineApartment,
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Line from "../pages/shared/Line";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <aside
      className={`bg-white text-gray-700 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="mt-10 gap-y-5">
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-2 ms-6 space-x-2 px-4 rounded ${
                isActive ? "text-primary " : "text-gray-700"
              }`
            }
          >
            <HomeOutlined />
            {isOpen && "Dashboard"}
          </NavLink>
        </li>
        <NavLink
          to="/admin/facilities"
          className={({ isActive }) =>
            `flex items-center gap-2 ms-6 space-x-2 px-4 rounded ${
              isActive ? "text-primary " : "text-gray-700"
            }`
          }
        >
          <AiOutlineApartment />
          {isOpen && "Facilities"}
        </NavLink>
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            `flex items-center gap-2 ms-6 space-x-2 px-4 rounded ${
              isActive ? "text-primary " : "text-gray-700"
            }`
          }
        >
          <AiOutlineBook />
          {isOpen && "Booking Management"}
        </NavLink>
        <NavLink
          to="/admin/add-admin"
          className={({ isActive }) =>
            `flex items-center gap-2 ms-6 space-x-2 px-4 rounded ${
              isActive ? "text-primary " : "text-gray-700"
            }`
          }
        >
          <AiOutlineUserAdd />
          {isOpen && "Add Admin"}
        </NavLink>

        <div>
          <Line></Line>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ms-6 space-x-2 px-4 rounded ${
                isActive ? "text-primary " : "text-gray-700"
              }`
            }
          >
            <AiOutlineHome />
            {isOpen && "Home"}
          </NavLink>
        </div>
        <div className="items-center gap-2 ms-6 space-x-2 px-4 rounded">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
