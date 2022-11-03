import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Header({
  title,
  text,
  isAuth = false,
  click = () => {},
}) {
  const navigate = useNavigate()
  return (
    <header className="font-semibold  bg-[#001529] relative w-[100%]">
      <h1 className="text-[#fff] text-lg  p-6">{title}</h1>

      <div className="absolute top-6 right-6">
        <span className="text-white mr-3">
          {isAuth ? (
            <Button
              type="primary"
              onClick={() => navigate('/admin')}
            >
              管理员
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => navigate('/personal')}
            >
              我的
            </Button>
          )}
        </span>
        <Space size={'middle'}>
          <Button
            type="primary"
            onClick={() => navigate('/home')}
          >
            主页
          </Button>
          <Button type="primary" onClick={click}>
            {text}
          </Button>
        </Space>
      </div>
    </header>
  )
}
