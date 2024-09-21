// AdminProtectedLayout.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const AdminProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, token } = useAppSelector((state: RootState) => state.auth);

  // Check if the user is authenticated and has the "admin" role
  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminProtectedLayout;
