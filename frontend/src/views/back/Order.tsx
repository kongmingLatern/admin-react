import { Button, Space, Table } from 'antd'
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
    title: 'gid',
    dataIndex: 'gid',
    key: 'gid',
  },
  {
    title: '订单时间',
    dataIndex: 'otime',
    key: 'otime',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Button type="primary" danger>
        删除
      </Button>
    ),
  },
]

const App: React.FC = () => {
  const [data, setData] = useState<OrderType[]>([])

  useEffect(() => {
    async function getData() {
      const res = await http.get('/orders')
      setData(res.data)
    }
    getData()
  }, [])

  return <Table columns={columns} dataSource={data} rowKey="oid" />
}

export default App
