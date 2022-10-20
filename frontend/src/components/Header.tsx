import { Button } from 'antd'
export default function Header() {
  return (
    <header className="font-semibold  bg-[#001529] relative ">
      <h1 className="text-[#fff] text-lg  p-6">后台管理系统</h1>

      <div className="absolute top-6 right-6">
        <span className="text-white mr-3">管理员: Username</span>
        <Button type="primary">退出登录</Button>
      </div>
    </header>
  )
}
