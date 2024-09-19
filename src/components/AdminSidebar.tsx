import {
  ApartmentOutlined,
  DashboardOutlined,
  SolutionOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <aside
      className={`bg-white text-gray-700 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="mt-10 space-y-4 ">
        <li className="flex  space-x-2 justify-center">
          <DashboardOutlined />
          {isOpen && (
            <Link className="hover:text-primary" to="/admin">
              Dashboard
            </Link>
          )}
        </li>
        <li className="flex items-center space-x-2 justify-center">
          <ApartmentOutlined />
          {isOpen && (
            <Link className="hover:text-primary" to="/admin/facilities">
              Facility Management
            </Link>
          )}
        </li>
        <li className="flex items-center space-x-2 justify-center">
          <SolutionOutlined />
          {isOpen && (
            <Link className="hover:text-primary" to="/admin/bookings">
              Booking Management
            </Link>
          )}
        </li>
        <li className="flex items-center space-x-2 justify-center">
          <UserAddOutlined />
          {isOpen && (
            <Link className="hover:text-primary" to="/admin/add-admin">
              Add Admin
            </Link>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
