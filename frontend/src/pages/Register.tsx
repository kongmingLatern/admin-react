import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import RegistBox from '../views/register/registerBox'

export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      {/* 头部 */}
      <Header title="注册" text="去登陆" click={() => navigate('/login')} />

      {/* 注册框 */}
      <RegistBox />
    </>
  )
}
