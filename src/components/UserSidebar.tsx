import { HomeOutlined } from "@ant-design/icons";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Line from "../pages/shared/Line";

const UserSidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <aside
      className={`bg-white text-gray-700 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="mt-10 space-y-2">
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            <HomeOutlined />
            {isOpen && "Dashboard"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user/bookings"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            {isOpen && "bookings"}
          </NavLink>
        </li>

        <li>
          <Line></Line>
        </li>
        <li>
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
        </li>
      </ul>
    </aside>
  );
};

export default UserSidebar;
