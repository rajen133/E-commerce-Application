import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../components/Login";
import AdminLayout from "../pages/layout/admin-layout.page";
import AdminDashboard from "../pages/admin/dashboard/admin-dashboard.page";

const Router = () => {
  const routerObj = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminDashboard />,
        },
        {
          path: "banner/create",
          element: <>Banner create</>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerObj} />
    </>
  );
};

export default Router;
