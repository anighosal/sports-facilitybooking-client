import {
  BellOutlined,
  MenuOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

const AdminNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="bg-white text-gray-700 flex justify-between items-center p-4">
      <button onClick={toggleSidebar} className="text-gray-700 ">
        <MenuOutlined className="text-2xl" />
      </button>

      {/* Search Bar */}
      <div className="w-1/3 border-2 rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-white text-gray-700 w-full"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <BellOutlined className="text-2xl" />
        <MessageOutlined className="text-2xl" />
        <div className="flex items-center space-x-2">
          <UserOutlined className="text-2xl" />
          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
