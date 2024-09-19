import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-200 p-4 gap-4">
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <AdminNavbar toggleSidebar={toggleSidebar} />

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
