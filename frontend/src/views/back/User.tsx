import { Button, Form, Input, message, Modal, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { UserType } from '../../type'
import { http } from '../../utils'

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let [data, setData] = useState<UserType[]>([])

  useEffect(() => {
    async function getData() {
      let res = await http.get('/users')
      setData(res.data)
    }
    getData()
  }, [])

  const onSuccess = async values => {
    try {
      await http.post('/users/register', values)
      message.success('添加成功')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
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
      title: '密码',
      dataIndex: 'password',
      key: 'password',
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
      render: ({ uid }, record) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => removeItem(uid)}>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  async function removeItem(uid: any) {
    console.log(uid)
    try {
      await http.delete('/users', {
        params: {
          uid,
        },
      })
      message.success('删除成功')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (error) {
      message.error('删除失败')
    }
  }

  return (
    <>
      <Button type="primary" danger onClick={() => setIsModalOpen(true)}>
        添加
      </Button>
      <Modal
        title="添加用户"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
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
