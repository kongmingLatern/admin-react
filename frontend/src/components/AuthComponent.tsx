import { getUid } from '../utils'
import { Navigate } from 'react-router-dom'

export default function AuthComponent({ children }): JSX.Element {
  const isUid = getUid()
  if (isUid) {
    // 正常渲染
    return <>{children}</>
  } else {
    // 跳转到登录页
    return <Navigate to="/login" replace />
  }
}
