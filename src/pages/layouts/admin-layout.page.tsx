import { useEffect, useState } from "react";
import { Layout } from "antd";

import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import AdminSidebar from "../../components/sidebar/sidebar.component";
import { UserHeader } from "../../components/headers/user-header.component";

const { Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const { user: loggedInUser } = useAuth();

  useEffect(() => {
    if (!loggedInUser) {
      // toast.error("Please login first");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Layout>
        <AdminSidebar collapsed={collapsed} />
        <Layout>
          <UserHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              margin: "40px 16px",
              padding: 24,
              minHeight: "100vh",
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
