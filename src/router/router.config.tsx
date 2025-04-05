import { RouterProvider, createBrowserRouter } from "react-router";
import { lazy } from "react";
import ListBanner from "../pages/banner/list-banner.page";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../context/auth.context";
import BannerProvider from "../context/banner.context";

// lazy() optimize the performance
const HomePage = lazy(() => import("../pages/home/home.page"));
const RegisterPage = lazy(() => import("../pages/auth/register.page"));
const AdminLayout = lazy(() => import("../pages/layouts/admin-layout.page"));
const AdminDashboard = lazy(
  () => import("../pages/admin/dashboard/admin-dashboard.page")
);
const NotFoundError = lazy(
  () => import("../components/errors/not-found.component")
);
const EditBanner = lazy(() => import("../pages/banner/edit-banner.page"));
const CreateBanner = lazy(() => import("../pages/banner/create-banner.page"));

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <HomePage pageTitle="Login Page" />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: (
      <BannerProvider>
        <AdminLayout />
      </BannerProvider>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "banner/create",
        element: <CreateBanner />,
      },
      {
        path: "banner",
        element: <ListBanner />,
      },
      {
        path: "banner/:id",
        element: <EditBanner />,
      },
      {
        path: "*",
        element: <NotFoundError />,
      },
    ],
  },
]);
const RouterConfig = () => {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <RouterProvider router={routerObj} />
      </AuthProvider>
    </>
  );
};

export default RouterConfig;
