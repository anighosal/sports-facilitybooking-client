// UserSidebar.tsx
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const UserSidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <aside
      className={`bg-white text-gray-700 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="mt-10 space-y-4">
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
      </ul>
    </aside>
  );
};

export default UserSidebar;
