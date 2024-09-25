import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const UserNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <button onClick={toggleSidebar} className="text-gray-700">
        Toggle Sidebar
      </button>
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <div>
        <button className="text-gray-700">Profile</button>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default UserNavbar;
