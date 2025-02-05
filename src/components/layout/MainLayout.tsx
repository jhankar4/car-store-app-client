/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, MenuProps } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

interface MainLayoutProps {
  userRole: "user" | "admin";
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'About',
      key: 'about',
    },
    {
      label: 'Contact',
      key: 'contact',
    },
    {
        label: 'Blog',
        key: 'blog',
    },
    {
        label: 'Shop',
        key: 'shop',
    },
    {
        label: 'Login',
        key: 'login',
    },
  ];

export default function MainLayout({ userRole, children }: MainLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('mail');

    const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const onClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


  return (
    <Layout style={{ minHeight: "100vh" }}>
        
      {userRole === "admin" && (
        <>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            breakpoint="md"
            collapsedWidth="0"
            style={{ height: "100vh", position: "fixed", left: 0 }}
          >
            <div className="logo" style={{ padding: 16, color: "#fff", textAlign: "center" }}>
              Admin Panel
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Dashboard</Menu.Item>
              <Menu.Item key="2">Users</Menu.Item>
              <Menu.Item key="3">Settings</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: collapsed ? 0 : 200 }}>
            <Content style={{ padding: 16 }}>{children}</Content>
          </Layout>
        </>
      )}

      {/* Header for User */}
      {userRole === "user" && (
        <Layout>
            <div className="lg-screen-nav" style={{ }}>
                <div style={{  background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <div style={{maxWidth: '1400px',margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px', }}>
                        <div style={{ cursor: 'pointer' }}>
                            <img src="/carnest-logo.png" alt="Logo" style={{ height: '40px' }} />
                        </div>
                        
                        <Menu onClick={onClick} selectedKeys={[current]} 
                        mode="horizontal" items={items}
                        style={{borderBottom: 'none'}}
                        />
                    </div>
                </div>
            </div>


           <div className="mb-screen-nav">
                <Button color="purple" variant="solid" onClick={showDrawer}>
                    <UnorderedListOutlined />
                </Button>
                <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                {items.map((item: any) => (
                    <p>{item.label}</p>
                ))}
                </Drawer>
           </div>

          <Content style={{ padding: 0 }}>{children}</Content>
        </Layout>

       
      )}
    </Layout>
  )
}
