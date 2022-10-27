import { Avatar, Button, Descriptions, List, message, Space, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import './css/index.css'
import { http } from '../../utils'
import { UserOutlined } from '@ant-design/icons'

const App = ({ user, changeLengh }: any) => {
  const [data, setData] = useState<any[]>([])
  const payment = (price, oid, gid) => {
    let isEnough: boolean = true
    const { pullet } = user
    http.put('/users', {
      uid: localStorage.getItem('uid'),
      pullet: pullet - price < 0 ? price && (isEnough = false) : pullet - price,
    })

    if (!isEnough) {
      message.error('余额不足')
    } else {
      http.put('/orders', {
        uid: localStorage.getItem('uid'),
        oid,
        gid,
        isFinish: 1,
      })
      message.success('支付成功')
      window.location.reload()
    }
  }

  useEffect(() => {
    // 根据 uid 查询当前用户的订单
    async function getData() {
      const res = await http.get('/orders/getByUid', {
        params: {
          uid: localStorage.getItem('uid') || '',
        },
      })
      setData(res.data)
      changeLengh(res.data.length)
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
              {item.isFinish ? (
                <Tag color="blue">完成</Tag>
              ) : (
                <Space>
                  <Tag color="red">未完成</Tag>
                  <Button
                    type="primary"
                    danger
                    onClick={() => payment(item.price, item.oid, item.gid)}
                  >
                    支付
                  </Button>
                </Space>
              )}
            </Descriptions.Item>
          </Descriptions>
        </List.Item>
      )}
    />
  )
}

export default App
