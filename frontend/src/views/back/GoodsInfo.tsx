import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { GoodsType } from '../../type'

const columns: ColumnsType<GoodsType> = [
  {
    title: 'gid',
    dataIndex: 'gid',
    key: 'gid',
  },
  {
    title: 'gname',
    dataIndex: 'gname',
    key: 'gname',
    render: text => <a>{text}</a>,
  },
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '图片',
    key: 'imgs',
    dataIndex: 'imgs',
    render: (_, { imgs }) => (
      <>
        {imgs.map(img => (
          <img src={img} alt="商品图片" />
        ))}
      </>
    ),
  },
  {
    title: '库存',
    key: 'goodcount',
    dataIndex: 'goodcount',
  },
  {
    title: '价格',
    key: 'price',
    dataIndex: 'price',
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

const data: GoodsType[] = [
  {
    gid: '121212',
    key: '1',
    gname: '大奔',
    type: '123456789',
    desc: '常熟市奥术大师',
    imgs: ['https://www.baidu.com/img/flexible/logo/pc/result.png'],
    goodcount: 100,
    price: 100,
  },
  {
    gid: '121212',
    key: '2',
    gname: '陈楷豪',
    type: '1239123',
    desc: '爱搜第几啊是的',
    imgs: ['https://www.baidu.com/img/flexible/logo/pc/result.png'],
    goodcount: 100,
    price: 100,
  },
  {
    gid: '121212',
    key: '1',
    gname: '大奔',
    type: '123456789',
    desc: '爱搜点胶机都哎设计的欧尼',
    imgs: ['https://www.baidu.com/img/flexible/logo/pc/result.png'],
    goodcount: 100,
    price: 100,
  },
]

const App: React.FC = () => <Table columns={columns} dataSource={data} />

export default App
