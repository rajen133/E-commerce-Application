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
import { Outlet } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <FaHome />,
    onClick: () => {
      //redirect
    },
  },
  {
    key: "banner",
    label: "Banners",
    icon: <FaImage />,
    children: [
      { key: "1", label: "Add Banner" },
      { key: "2", label: "List Banner" },
    ],
  },
  {
    key: "brand",
    label: "Brands",
    icon: <FaAmazon />,
    children: [
      { key: "5", label: "Add Brands" },
      { key: "6", label: "List Brands" },
    ],
  },
  {
    key: "category",
    label: "Category",
    icon: <FaSitemap />,
    children: [
      { key: "5", label: "Add Category" },
      { key: "6", label: "List Category" },
    ],
  },
  {
    key: "user",
    label: "Users",
    icon: <FaUserGroup />,
    children: [
      { key: "5", label: "Add Users" },
      { key: "6", label: "List Users" },
    ],
  },
  {
    key: "products",
    label: "Products",
    icon: <FaShoppingBasket />,
    children: [
      { key: "5", label: "Add Products" },
      { key: "6", label: "List Products" },
    ],
  },
  {
    key: "orders",
    label: "Orders",
    icon: <FaShoppingCart />,
    onClick: () => <Navigate to={"/admin/orders"} />,
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
