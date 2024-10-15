import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/ui/layouts/AuthLayout";
import {
  Books,
  Car,
  Catalog,
  CreateCar,
  Home,
  Login,
  MyBooks,
  Register,
  UpdateCar,
} from "./components/pages";
import MainLayout from "./components/ui/layouts/MainLayout";

import "./App.css";
import Protect from "./components/ui/Protect";
import AdminLayout from "./components/ui/layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cars", element: <Catalog /> },
      { path: "/car/:id", element: <Car /> },
      {
        path: "/my-books",
        element: (
          <Protect>
            <MyBooks />
          </Protect>
        ),
      },
      {
        path: "/orders",
        element: (
          <Protect onlyAdmin>
            <Books />
          </Protect>
        ),
      },
      {
        path: "/create-car",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: (
              <Protect onlyAdmin>
                <CreateCar />
              </Protect>
            ),
          },
        ],
      },
      {
        path: "/update-car/:id",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: (
              <Protect onlyAdmin>
                <UpdateCar />
              </Protect>
            ),
          },
        ],
      },

      {
        path: "/login",
        element: <AuthLayout />,
        children: [{ path: "", element: <Login /> }],
      },
      {
        path: "/register",
        element: <AuthLayout />,
        children: [{ path: "", element: <Register /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
