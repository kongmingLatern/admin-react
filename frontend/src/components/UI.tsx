import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { Outlet, Link } from 'react-router-dom'

export default function UI() {
  const { Content, Footer, Sider } = Layout
  const items: MenuItem[] = [
    getItem('用户管理', '1', <UserOutlined />),
    getItem('商品管理', '2', <UploadOutlined />),
    getItem('订单管理', '3', <VideoCameraOutlined />),
  ]
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        >
          {/* <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to="/goods">商品管理</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to="/order">订单管理</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 350 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
function getItem(arg0: string, arg1: string, arg2: JSX.Element): MenuItem {
  throw new Error('Function not implemented.')
}
