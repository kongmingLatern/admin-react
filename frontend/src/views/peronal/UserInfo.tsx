import Avatar from '../../components/peronal/Avatar'
import PersonalInfo from './PersonalInfo'

export default function UserInfo() {
  return (
    <>
      <div className="h-40 text-center bg-red-400 relative">
        <div className="absolute left-[50%] top-[50%] text-white translate-x-[-50%] translate-y-[-50%]">
          {/* 头像 */}
          <Avatar />
          {/* 个人信息 */}
          <PersonalInfo />
        </div>
      </div>
    </>
  )
}
