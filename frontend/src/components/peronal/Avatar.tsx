import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

const App = ({ name, length }) => {
  return (
    <>
      <span className="avatar-item">
        <Badge count={length}>
          <Avatar
            shape="circle"
            icon={
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-d83c52d80123231303496578c6a6802c_r.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670250913&t=8db3d87449bbe4bbeeea8d63032bb247" />
            }
            size={'large'}
          />
        </Badge>
        <div className="mt-2">{name}</div>
      </span>
    </>
  )
}

export default App
