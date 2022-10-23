import { Button, message, Space, Table } from 'antd'
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
    dataIndex: 'oTime',
    key: 'oTime',
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
