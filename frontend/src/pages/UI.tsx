import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function UI() {
  const { Content, Footer, Sider } = Layout
  type MenuItem = Required<MenuProps>['items'][number]

  const navigate = useNavigate()

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }
  const User = <Link to="/admin/user">用户管理</Link>
  const Goods = <Link to="/admin/goods">商品管理</Link>
  const Order = <Link to="/admin/order">订单管理</Link>
  const items: MenuItem[] = [
    getItem(User, '1', <UserOutlined />),
    getItem(Goods, '2', <UploadOutlined />),
    getItem(Order, '3', <VideoCameraOutlined />),
  ]
  return (
    <>
      <Header
        title="后台管理系统"
        text="退出登录"
        click={() => {
          navigate('/login')
          localStorage.clear()
        }}
      />
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
        </Sider>
        <Layout>
          <Content>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 350 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>&copy; 0922202 网上购物后台</Footer>
        </Layout>
      </Layout>
    </>
  )
}
