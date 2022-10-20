import { Routes, Route } from 'react-router-dom'
import UI from './components/UI'
import Index from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Goods from './views/back/Goods'
import Order from './views/back/Order'
import User from './views/back/User'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Index />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/regist" element={<Register />}></Route>

        <Route path="/admin" element={<UI />}>
          <Route path="user" element={<User />}></Route>
          <Route path="goods" element={<Goods />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Route>

        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </>
  )
}
