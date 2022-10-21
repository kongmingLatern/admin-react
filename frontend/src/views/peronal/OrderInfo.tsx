import { Avatar, Button, List, Space } from 'antd'
import React from 'react'
import OrderDesc from './OrderDesc'
import './css/index.css'

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}))

const App: React.FC = () => (
  <List
    className="bg-white list"
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page)
      },
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <Space direction="vertical" className="text-center" size={'large'}>
            <img
              width={272}
              alt="logo"
              src="https://gw.alicdn.com/bao/uploaded/i1/4107467909/O1CN01PhgbC428IN82kprm7_!!0-item_pic.jpg_300x300q90.jpg_.webp"
            />

            <Button type="primary" className="bg-[#1890ff]" danger>
              查看详情
            </Button>
          </Space>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<span>陈楷豪</span>}
          description={<span>老中医</span>}
        />
        {/* 详细信息 */}
        <OrderDesc />
      </List.Item>
    )}
  />
)

export default App
