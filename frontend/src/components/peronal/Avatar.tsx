import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React from 'react'

const App: React.FC = () => {
  const realName = localStorage.getItem('uid')
  return (
    <>
      <span className="avatar-item">
        <Badge count={1}>
          <Avatar shape="circle" icon={<UserOutlined />} size={'large'} />
        </Badge>
        <div className="mt-2">{realName}</div>
      </span>
    </>
  )
}

export default App
