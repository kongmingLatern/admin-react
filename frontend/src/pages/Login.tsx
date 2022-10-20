import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import LoginBox from '../views/login/loginBox'

export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      {/* 头部 */}
      <Header title="登录" text="去注册" click={() => navigate('/regist')} />

      {/* 登录框 */}
      <LoginBox />
    </>
  )
}
