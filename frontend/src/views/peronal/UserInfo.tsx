import { Button, message, Space } from 'antd'
import Avatar from '../../components/peronal/Avatar'
import { http } from '../../utils'

export default function UserInfo({ user, length }: any) {
  const addMoney = () => {
    const { pullet } = user
    try {
      http.put('/users', {
        uid: localStorage.getItem('uid'),
        pullet: pullet + 500,
      })
      message.success('充值成功')
      window.location.reload()
    } catch (e) {
      message.error('充值失败')
    }
  }
  return (
    <>
      <div className="h-40 text-center bg-red-400 relative">
        <div className="absolute left-[50%] top-[50%] text-white translate-x-[-50%] translate-y-[-50%]">
          {/* 头像 */}
          <Space direction="vertical">
            <Avatar name={user.realName} length={length} />
            <p className="text-gray-300 ">
              这个人很懒，什么都没有留下
            </p>
            <Space>
              <span>余额：￥{user.pullet}</span>
              <Button
                type="ghost"
                danger
                onClick={() => addMoney()}
                className="bg-white"
              >
                充值
              </Button>
            </Space>
          </Space>
        </div>
      </div>
    </>
  )
}
