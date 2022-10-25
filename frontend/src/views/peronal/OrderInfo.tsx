import { Avatar, Descriptions, List, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import './css/index.css'
import { http } from '../../utils'
import { UserOutlined } from '@ant-design/icons'

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const res = await http.get('/orders')
      setData(res.data)
    }
    getData()
  }, [])

  return (
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
        <List.Item key={item.oid} extra={<img width={272} alt="logo" src={item.imgs} />}>
          <List.Item.Meta
            avatar={<Avatar style={{ lineHeight: '32px' }} size={40} icon={<UserOutlined />} />}
            title={<span>{item.realName}</span>}
            description={'这个人很懒，什么都没有留下'}
          />
          {/* 详细信息 */}
          <Descriptions bordered column={1}>
            <Descriptions.Item label="订单编号">{item.oid}</Descriptions.Item>
            <Descriptions.Item label="购买商品">{item.gName}</Descriptions.Item>
            <Descriptions.Item label="收件人">{item.realName}</Descriptions.Item>
            <Descriptions.Item label="电话">{item.tel}</Descriptions.Item>
            <Descriptions.Item label="订单时间">{item.oTime}</Descriptions.Item>
            <Descriptions.Item label="地址">{item.address}</Descriptions.Item>
            <Descriptions.Item label="价格">￥{item.price}</Descriptions.Item>
            <Descriptions.Item label="是否完成">
              {item.isFinish ? <Tag color="blue">完成</Tag> : <Tag color="red">未完成</Tag>}
            </Descriptions.Item>
          </Descriptions>
        </List.Item>
      )}
    />
  )
}

export default App
