import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { OrderType } from '../../type'

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
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]

const data: OrderType[] = [
  {
    oid: '1212',
    gid: '1212',
    uid: '111',
    otime: 2021,
    isFinish: 0,
  },
  {
    oid: '1212',
    gid: '1212',
    uid: '111',
    otime: 2021,
    isFinish: 0,
  },
  {
    oid: '1212',
    gid: '1212',
    uid: '111',
    otime: 20212121,
    isFinish: 1,
  },
]

const App: React.FC = () => <Table columns={columns} dataSource={data} />

export default App
