import { Button, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect } from 'react'
import { GoodsType } from '../../type'
import { http } from '../../utils'

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
    render: text => <>{<img src={text} alt="商品图片" />}</>,
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
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" danger>
          添加
        </Button>
        <Button type="primary" danger>
          删除
        </Button>
      </Space>
    ),
  },
]

const App: React.FC = () => {
  const [data, setData] = React.useState<GoodsType[]>([])
  useEffect(() => {
    async function getData() {
      const res = await http.get('/goods')
      setData(res.data)
    }
    getData()
  }, [])
  return <Table columns={columns} dataSource={data} rowKey="gid" />
}

export default App
