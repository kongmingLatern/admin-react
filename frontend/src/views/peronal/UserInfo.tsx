import { Button, message, Space } from 'antd'
import Avatar from '../../components/peronal/Avatar'
import { http } from '../../utils'

export default function UserInfo() {
  const addMoney = () => {
    try {
      http.put('/users', {
        uid: localStorage.getItem('uid'),
        pullet: 400,
      })
      message.success('充值成功')
    } catch (e) {
      message.error('充值失败')
    }
  }
  return (
    <>
      <div className="h-40 text-center bg-red-400 relative">
        <div className="absolute left-[50%] top-[50%] text-white translate-x-[-50%] translate-y-[-50%]">
          {/* 头像 */}
          <Avatar />
          <p className="text-gray-300 mt-3">这个人很懒，什么都没有留下</p>
          <Button type="ghost" danger onClick={() => addMoney()} className="bg-white">
            充值
          </Button>
        </div>
      </div>
    </>
  )
}
