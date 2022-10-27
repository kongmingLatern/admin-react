import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

const App = ({ name, length }) => {
  return (
    <>
      <span className="avatar-item">
        <Badge count={length}>
          <Avatar shape="circle" icon={<UserOutlined />} size={'large'} />
        </Badge>
        <div className="mt-2">{name}</div>
      </span>
    </>
  )
}

export default App
