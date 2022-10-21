import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UI from './components/UI'
import Index from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import Goods from './views/back/Goods'
import Order from './views/back/Order'
import User from './views/back/User'
function Redirect({ to }) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null
}
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redirect to="/login" />} />
        {/* 登录 */}
        <Route path="/login" element={<Login />}></Route>
        {/* 注册 */}
        <Route path="/register" element={<Register />}></Route>

        <Route path="/home">
          <Route path="/home" element={<Index />}></Route>
        </Route>

        {/* 后台管理 */}
        <Route path="/admin" element={<UI />}>
          {/* 用户管理 */}
          <Route path="user" element={<User />}></Route>
          {/* 商品管理 */}
          <Route path="goods" element={<Goods />}></Route>
          {/* 订单管理 */}
          <Route path="order" element={<Order />}></Route>
        </Route>

        {/* 匹配404 */}
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </>
  )
}
