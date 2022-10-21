import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="circle" icon={<UserOutlined />} size={'large'} />
      </Badge>
      <div className="mt-2">陈楷豪</div>
    </span>
  </>
)

export default App
