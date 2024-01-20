import React from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import "./index.css"
const { Header, Content, Sider } = Layout;

const navItems: MenuProps['items'] = [].map((key) => ({
  key,
  label: `nav ${key}`,
}));

navItems.push(
    {
        key: '1',
        label: <NavLink to='/'>Головна</NavLink> 
    }
)
navItems.push(
    {
        key: '2',
        label: <NavLink to='/login'>Увійти</NavLink> 
    }
)

const sideItems: MenuProps['items'] = [].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


  sideItems.push(
    {
      key: '1',
      label: 'Компютери та ноутбуки'
    }
  );

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout >
        <Sider width={230} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={sideItems}
          />
        </Sider>
        <Layout style={{ padding: '0px 20px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
      <Footer>Rozetka</Footer>
    </Layout>
  );
};

export default DefaultLayout;