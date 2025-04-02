import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, MenuProps } from "antd";
import {
  FaAmazon,
  FaHome,
  FaImage,
  FaShoppingBasket,
  FaShoppingCart,
  FaSitemap,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";

const { Header, Sider, Content } = Layout;

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
    <>
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
    </>
  );
};
export default AdminLayout;
