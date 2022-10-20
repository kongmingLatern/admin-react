import { Button } from 'antd'
export default function Header({ title, exit }) {
  return (
    <header className="font-semibold  bg-[#001529] relative ">
      <h1 className="text-[#fff] text-lg  p-6">{title}</h1>

      <div className="absolute top-6 right-6">
        <span className="text-white mr-3">管理员: Username</span>
        <Button type="primary">{exit}</Button>
      </div>
    </header>
  )
}
