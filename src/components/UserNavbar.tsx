// UserNavbar.tsx

const UserNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <button onClick={toggleSidebar} className="text-gray-700">
        Toggle Sidebar
      </button>
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <div>
        <button className="text-gray-700">Profile</button>
        <button className="text-gray-700 ml-4">Logout</button>
      </div>
    </header>
  );
};

export default UserNavbar;
