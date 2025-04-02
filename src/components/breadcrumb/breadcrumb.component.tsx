import { Breadcrumb } from "antd";
const BreadcrumbComponent = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <a href="/admin">Dashboard</a>,
          },
          {
            title: <a href="/admin/banner">Banners</a>,
          },
          {
            title: <a href="/admin/brand">Brands</a>,
          },
          {
            title: <a href="/admin/category">Categories</a>,
          },
          {
            title: <a href="/admin/user">Users</a>,
          },
          {
            title: <a href="/admin/product">Products</a>,
          },
          {
            title: <a href="/admin/order">Orders</a>,
          },
        ]}
      />
    </>
  );
};

export default BreadcrumbComponent;
