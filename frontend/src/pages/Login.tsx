import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      <Header title="登录" text="注册" click={() => navigate('/regist')} />
    </>
  )
}
