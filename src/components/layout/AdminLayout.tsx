import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import ScrollToTop from "../ScrollTop/ScrollTop";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-200">
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Scrollable Outlet */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
          <ScrollToTop></ScrollToTop>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
