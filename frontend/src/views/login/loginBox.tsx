import { Button, Checkbox, Form, Input, message, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store'
import './css/button.css'

const App: React.FC = () => {
  const navigate = useNavigate()
  const { loginState } = useStore()

  const onFinish = async (values: any) => {
    try {
      await loginState.login(values)
      message.success('登录成功，2秒后自动跳转至主页')
      setTimeout(() => {
        navigate('/home')
      }, 2000)
    } catch (err: any) {
      message.error(err.msg)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    message.error('登录失败，请正确填写用户名和密码')
  }

  return (
    <div className="text-center mt-20 ">
      <div className=" inline-block rounded-xl overflow-hidden bg-[#001529] text-white p-10">
        <h3 className="text-lg font-bold mb-5 text-inherit">登录</h3>
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
                登录
              </Button>
              <Button type="primary" className="bg-[#1890ff]" onClick={() => navigate('/register')}>
                注册
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App
