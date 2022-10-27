import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React, { useEffect, useState } from 'react'
import { http } from '../../utils'

const App: React.FC = () => {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    async function getData() {
      const res = await http.get('/users/getByUid', {
        params: {
          uid: localStorage.getItem('uid') || '',
        },
      })
      setName(res.data.realName)
    }
    getData()
  }, [])

  return (
    <>
      <span className="avatar-item">
        <Badge count={1}>
          <Avatar shape="circle" icon={<UserOutlined />} size={'large'} />
        </Badge>
        <div className="mt-2">{name}</div>
      </span>
    </>
  )
}

export default App
