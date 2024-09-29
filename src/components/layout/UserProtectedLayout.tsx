import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const UserProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, token } = useAppSelector((state: RootState) => state.auth);

  if (!token || !user || user.role !== "user") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default UserProtectedLayout;
