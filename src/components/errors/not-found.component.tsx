import { NavLink } from "react-router";

const NotFoundError = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <NavLink to="/admin" className="ant-btn ant-btn-primary">
          Go Back Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundError;
