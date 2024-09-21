// UserLayout.tsx
import { useState } from "react";

import { Outlet } from "react-router-dom";
import UserNavbar from "../UserNavbar";
import UserSidebar from "../UserSidebar";

const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <UserSidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <UserNavbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
