import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import {
  FaAmazon,
  FaHome,
  FaImage,
  FaShoppingBasket,
  FaShoppingCart,
  FaSitemap,
} from "react-icons/fa";
import { FaUserGraduate, FaUserGroup } from "react-icons/fa6";
import { Outlet,NavLink } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label:<NavLink to="/admin">Dashboard</NavLink>,
    icon: <FaHome />,
  },
  {
    key: "banner",
    label:<NavLink to="/admin/banner/create">Banners</NavLink>,
    icon: <FaImage />,
    children: [
      { key: "add-banner", label: "Add Banner" },
      { key: "list-banner", label: "List Banner" },
    ],
  },
  {
    key: "brand",
    label:<NavLink to="/admin/brand">Brands</NavLink>,
    icon: <FaAmazon />,
    children: [
      { key: "add-brand", label: "Add Brands" },
      { key: "list-brand", label: "List Brands" },
    ],
  },
  {
    key: "category",
    label: <NavLink to="/admin/category">Catogory</NavLink>,
    icon: <FaSitemap />,
    children: [
      { key: "add-category", label: "Add Category" },
      { key: "list-category", label: "List Category" },
    ],
  },
  {
    key: "user",
    label: <NavLink to="/admin/user">Users</NavLink>,
    icon: <FaUserGroup />,
    children: [
      { key: "add-user", label: "Add Users" },
      { key: "list-user", label: "List Users" },
    ],
  },
  {
    key: "products",
    label:<NavLink to="/admin/product">Products</NavLink>,
    icon: <FaShoppingBasket />,
    children: [
      { key: "add-product", label: "Add Products" },
      { key: "list-product", label: "List Products" },
    ],
  },
  {
    key: "orders",
    label:<NavLink to="/admin/order">Orders</NavLink>,
    icon: <FaShoppingCart />,
  },
];

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Dynamic content */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
