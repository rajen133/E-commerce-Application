import { Header } from "antd/es/layout/layout";
import { Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import BreadcrumbComponent from "../breadcrumb/breadcrumb.component";
interface UserHeaderProps {
  collapsed: boolean;
  setCollapsed: Function;
}
export const UserHeader = ({ collapsed, setCollapsed }: UserHeaderProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
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
        <div className="flex mx-10 pt-4 ">
          <BreadcrumbComponent />
        </div>
      </Header>
    </>
  );
};
