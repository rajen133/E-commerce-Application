import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps } from "antd";
import {
  FaAmazon,
  FaHome,
  FaImage,
  FaShoppingBasket,
  FaShoppingCart,
  FaSitemap,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/images/logo.jpg";

interface IAdminSidebarProps {
  collapsed: boolean;
}
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: <NavLink to="/admin">Dashboard</NavLink>,
    icon: <FaHome />,
  },
  {
    key: "banner",
    label: "Banners",
    icon: <FaImage />,
    children: [
      {
        key: "add-banner",
        label: <NavLink to="/admin/banner/create">Add Banner</NavLink>,
      },
      {
        key: "list-banner",
        label: <NavLink to="/admin/banner">List Banner</NavLink>,
      },
    ],
  },
  {
    key: "brand",
    label: "Brands",
    icon: <FaAmazon />,
    children: [
      {
        key: "add-brand",
        label: <NavLink to="/admin/brand/create">Add Brand</NavLink>,
      },
      {
        key: "list-brand",
        label: <NavLink to="/admin/brand">List Brand</NavLink>,
      },
    ],
  },
  {
    key: "category",
    label: "Categories",
    icon: <FaSitemap />,
    children: [
      {
        key: "add-category",
        label: <NavLink to="/admin/category/create">Add Category</NavLink>,
      },
      {
        key: "list-category",
        label: <NavLink to="/admin/category">List Category</NavLink>,
      },
    ],
  },
  {
    key: "user",
    label: "Users",
    icon: <FaUserGroup />,
    children: [
      {
        key: "add-user",
        label: <NavLink to="/admin/user/create">Add User</NavLink>,
      },
      {
        key: "list-user",
        label: <NavLink to="/admin/user">List User</NavLink>,
      },
    ],
  },
  {
    key: "product",
    label: "Products",
    icon: <FaShoppingBasket />,
    children: [
      {
        key: "add-product",
        label: <NavLink to="/admin/product/create">Add Products</NavLink>,
      },
      {
        key: "list-product",
        label: <NavLink to="/admin/product">List Products</NavLink>,
      },
    ],
  },
  {
    key: "order",
    label: <NavLink to="/admin/order">Orders</NavLink>,
    icon: <FaShoppingCart />,
  },
];
const AdminSidebar = ({ collapsed }: IAdminSidebarProps) => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex my-2.5 items-center justify-center rounded-full">
          <img
            src={logo}
            alt="logo"
            className="w-20 rounded-full border-2 border-yellow-50 shadow-yellow-600 shadow-sm"
          />
        </div>
        <Menu
          theme="dark"
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};

export default AdminSidebar;
