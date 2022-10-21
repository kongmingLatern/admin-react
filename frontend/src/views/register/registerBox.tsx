import { Button, Checkbox, Form, Input, message, Space, Spin } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { http } from '../../utils'
import '../login/css/button.css'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: any) => {
    setLoading(true)
    let res: Record<string, any> = []
    try {
      res = await http.post('/users/register', values)
      message.success(res.msg)
    } catch (err: any) {
      message.error(err.msg)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="text-center mt-20 ">
      <Spin spinning={loading}>
        <div className=" inline-block rounded-xl overflow-hidden bg-[#001529] text-white p-10">
          <h3 className="text-lg font-bold mb-5 text-inherit">注册</h3>
          <Form
            name="basic"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="inline-block text-left w-96 text-inherit"
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

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
              <Checkbox>我已阅读下述条款</Checkbox>
            </Form.Item>

            <Form.Item className="text-center">
              <Space size="middle">
                <Button type="primary" htmlType="submit" className="bg-[#1890ff]">
                  注册
                </Button>
                <p className="text-white">
                  已有账号？
                  <Link to="/login">去登录</Link>
                </p>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    </div>
  )
}

export default App
