import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { UserType } from '../../type'

const columns: ColumnsType<UserType> = [
  {
    title: 'uid',
    dataIndex: 'uid',
    key: 'uid',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '电话',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '余额',
    key: 'balance',
    dataIndex: 'balance',
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

const data: UserType[] = [
  {
    uid: '121212',
    key: '1',
    name: '大奔',
    tel: '123456789',
    address: '常熟市奥术大师',
    balance: '100',
  },
  {
    uid: '121213',
    key: '2',
    name: '陈楷豪',
    tel: '123456781212',
    address: '常熟市按实际都',
    balance: '200',
  },
  {
    uid: '121215',
    key: '3',
    name: '颜志华',
    tel: '12312931',
    address: '常熟市第三人民医院',
    balance: '300',
  },
]

const App: React.FC = () => <Table columns={columns} dataSource={data} />

export default App
