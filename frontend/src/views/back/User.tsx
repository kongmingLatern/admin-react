import { Button, Form, Input, message, Modal, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { UserType } from '../../type'
import { http } from '../../utils'

// const data: UserType[] = [
//   {
//     uid: '121212',
//     key: '1',
//     name: '大奔',
//     tel: '123456789',
//     address: '常熟市奥术大师',
//     balance: '100',
//   },
//   {
//     uid: '121213',
//     key: '2',
//     name: '陈楷豪',
//     tel: '123456781212',
//     address: '常熟市按实际都',
//     balance: '200',
//   },
//   {
//     uid: '121215',
//     key: '3',
//     name: '颜志华',
//     tel: '12312931',
//     address: '常熟市第三人民医院',
//     balance: '300',
//   },
// ]

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let [data, setData] = useState<UserType[]>([])

  useEffect(() => {
    async function getData() {
      let res = await http.get('/users')
      console.log(res)
      setData([res.data])
    }
    getData()
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const onSuccess = async values => {
    try {
      await http.post('/users/register', values)
      message.success('添加成功')
    } catch (e: any) {
      message.error(e.msg)
    }
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const columns: ColumnsType<UserType> = [
    {
      title: 'uid',
      dataIndex: 'uid',
      key: 'uid',
    },
    {
      title: '真实姓名',
      dataIndex: 'realName',
      key: 'realName',
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
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
      key: 'pullet',
      dataIndex: 'pullet',
    },
    {
      title: '是否是管理员',
      key: 'isAuth',
      dataIndex: 'isAuth',
      render: text => {
        if (text) {
          return <Tag color="green">是</Tag>
        } else {
          return <Tag color="red">否</Tag>
        }
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => setIsModalOpen(true)}>
            添加
          </Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ]
  return (
    <>
      <Modal title="添加用户" open={isModalOpen} footer={null}>
        <Form
          name="basic"
          initialValues={{ remember: false }}
          onFinish={onSuccess}
          onFinishFailed={handleCancel}
          className="inline-block text-left w-96 text-inherit "
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span>密&nbsp;&nbsp;&nbsp;码</span>}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="真实姓名"
            name="realName"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="电话"
            name="tel"
            rules={[{ required: true, message: 'Please input your tel!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="地址"
            name="address"
            rules={[{ required: true, message: 'Please input your address!' }]}
          >
            <Input />
          </Form.Item>

          <div className="text-right">
            <Button key="submit" htmlType="submit" type="ghost">
              <span className="text-white">提交</span>
            </Button>
          </div>
        </Form>
      </Modal>

      <Table columns={columns} dataSource={data} rowKey="uid" />
    </>
  )
}

export default App
