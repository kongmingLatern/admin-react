import { Routes, Route } from 'react-router-dom'
import UI from './components/UI'
import Goods from './pages/Goods'
import User from './pages/User'
import Order from './pages/Order'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UI />}>
          <Route path="user" element={<User />}></Route>
          <Route path="goods" element={<Goods />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Route>
      </Routes>
    </>
  )
}