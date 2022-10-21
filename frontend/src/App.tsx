import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UI from './components/UI'
import Index from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import GoodsInfo from './views/back/GoodsInfo'
import Order from './views/back/Order'
import User from './views/back/User'
import Goods from './pages/Goods'
import Personal from './pages/Personal'
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
        {/* 重定向 */}
        <Route path="/" element={<Redirect to="/login" />} />
        {/* 登录 */}
        <Route path="/login" element={<Login />}></Route>
        {/* 注册 */}
        <Route path="/register" element={<Register />}></Route>

        {/* 主页 */}
        <Route path="/home">
          <Route path="/home" element={<Index />}></Route>
          {/* 商品页面 */}
          <Route path="goods" element={<Goods />}></Route>
        </Route>

        {/* 个人中心 */}
        <Route path="/personal" element={<Personal />}></Route>

        {/* 后台管理 */}
        <Route path="/admin" element={<UI />}>
          {/* 用户管理 */}
          <Route path="user" element={<User />}></Route>
          {/* 商品管理 */}
          <Route path="goods" element={<GoodsInfo />}></Route>
          {/* 订单管理 */}
          <Route path="order" element={<Order />}></Route>
        </Route>

        {/* 匹配404 */}
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </>
  )
}
