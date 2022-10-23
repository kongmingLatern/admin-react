import { Button, message, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { OrderType } from '../../type'
import { http } from '../../utils'

const columns: ColumnsType<OrderType> = [
  {
    title: 'oid',
    dataIndex: 'oid',
    key: 'oid',
  },
  {
    title: '姓名',
    dataIndex: 'realName',
    key: 'realName',
  },
  {
    title: '购买商品',
    dataIndex: 'gName',
    key: 'gName',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '图片',
    dataIndex: 'imgs',
    key: 'imgs',
    render: text => <img src={text} width={80} height={80} />,
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: text => `￥${text}`,
  },
  {
    title: '订单时间',
    dataIndex: 'oTime',
    key: 'oTime',
  },
  {
    title: '订单情况',
    dataIndex: 'isFinish',
    key: 'isFinish',
    render: text => (text === 1 ? <Tag color="blue">已完成</Tag> : <Tag color="red">未完成</Tag>),
  },
  {
    title: '操作',
    key: 'action',
    render: ({ oid }, record) => (
      <Button type="primary" danger onClick={() => removeItem(oid)}>
        删除
      </Button>
    ),
  },
]

async function removeItem(oid: string) {
  try {
    await http.delete('/orders', {
      params: {
        oid,
      },
    })
    message.success('删除成功')
    window.location.reload()
  } catch (e: any) {
    message.error(e.msg)
  }
}

const App: React.FC = () => {
  const [data, setData] = useState<OrderType[]>([])

  useEffect(() => {
    async function getData() {
      const res = await http.get('/orders')
      console.log(res)
      setData(res.data)
    }
    getData()
  }, [])

  return <Table columns={columns} dataSource={data} rowKey="oid" />
}

export default App
