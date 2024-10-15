import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

function AuthLayout() {
  const { isAuth } = useAuth();

  if (isAuth) return <Navigate to="/" replace />;

  return (
    <div className="w-full min-h-screen grid grid-cols-2 pt-[85px]">
      <img
        className="w-full object-cover h-[1000px]"
        src="/layout/auth.jfif"
        alt="auth"
      />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
