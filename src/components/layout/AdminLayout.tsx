import { Layout, Menu, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hook';
import { logOut } from '../../redux/features/auth/authSlice';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export default function AdminLayout() {

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut())
  }

  const items: MenuItem[] = [
    {
      label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>,
      key: 'dashboard',
    },
    {
      label: <NavLink to={'/admin/shop'}>Shop</NavLink>,
        key: 'shop',
    },
    {
      label: <NavLink to={'/login'}>Login</NavLink>,
        key: 'login',
    },
    {
      label: <NavLink to={'/signup'}>Signup</NavLink>,
        key: 'Signup',
    },
    {
      label: <span onClick={handleLogout}>Logout</span>,
        key: 'logout',
    },
  ];

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} onClick={handleLogout} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
