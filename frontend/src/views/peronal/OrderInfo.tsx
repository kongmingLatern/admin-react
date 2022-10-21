import { Descriptions } from 'antd'
import React from 'react'
import './css/index.css'

const App: React.FC = () => (
  <Descriptions title="用户名" bordered>
    <Descriptions.Item label="姓名" span={3}>
      陈楷豪
    </Descriptions.Item>
    <Descriptions.Item label="电话" span={3}>
      129123901203
    </Descriptions.Item>
    <Descriptions.Item label="地址" span={3}>
      江苏省常熟市
    </Descriptions.Item>
    <Descriptions.Item label="余额" span={3}>
      ￥100
    </Descriptions.Item>
  </Descriptions>
)

export default App
