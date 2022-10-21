import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Header({ title, text, isLogin = false, click = () => {} }) {
  const navigate = useNavigate()
  return (
    <header className="font-semibold  bg-[#001529] relative w-[100%]">
      <h1 className="text-[#fff] text-lg  p-6">{title}</h1>

      <div className="absolute top-6 right-6">
        <span className="text-white mr-3">
          {isLogin && (
            <Button type="primary" onClick={() => navigate('/personal')}>
              我的
            </Button>
          )}
        </span>
        <Button type="primary" onClick={click}>
          {text}
        </Button>
      </div>
    </header>
  )
}
