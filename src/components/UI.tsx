import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function UI() {
  const { Header, Content, Footer, Sider } = Layout
  const navigate = useNavigate()
  const navTab = ['用户管理', '资料管理', '订单管理', '商品管理']

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {}}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          onClick={e => {
            switch (e.key) {
              case '1': {
                navigate('/user')
                break
              }
              case '2': {
                navigate('/goods')
                break
              }
            }
          }}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: navTab[`${index}`],
            })
          )}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
