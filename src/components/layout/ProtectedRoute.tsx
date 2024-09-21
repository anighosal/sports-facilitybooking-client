import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface ProtectedRouteProps {
  children: JSX.Element;
  role: string;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
