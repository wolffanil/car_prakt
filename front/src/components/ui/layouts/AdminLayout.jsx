import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 pt-[85px]">
      <Outlet />
      <img
        className="w-full object-cover h-[95%]"
        src="/layout/create.jpg"
        alt="auth"
      />
    </div>
  );
}

export default AdminLayout;
