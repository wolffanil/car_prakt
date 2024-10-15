import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

function Protect({ children, onlyAdmin }) {
  const { user, isAuth } = useAuth();

  if (isAuth) return children;

  if (onlyAdmin && isAuth && user?.role === "admin") return children;

  return <Navigate to="/login" replace />;
}

export default Protect;
