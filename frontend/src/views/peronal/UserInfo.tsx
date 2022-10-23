import Avatar from '../../components/peronal/Avatar'

export default function UserInfo() {
  return (
    <>
      <div className="h-40 text-center bg-red-400 relative">
        <div className="absolute left-[50%] top-[50%] text-white translate-x-[-50%] translate-y-[-50%]">
          {/* 头像 */}
          <Avatar />
          <p className="text-gray-300 mt-3">这个人很懒，什么都没有留下</p>
        </div>
      </div>
    </>
  )
}
