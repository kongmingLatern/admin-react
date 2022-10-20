import { Button, Checkbox, Form, Input, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import '../login/css/button.css'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="text-center mt-20 ">
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
    </div>
  )
}

export default App
