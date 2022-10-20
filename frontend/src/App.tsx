import { Routes, Route } from 'react-router-dom'
import UI from './components/UI'
import Goods from './views/back/Goods'
import Header from './components/Header'
import Order from './views/back/Order'
import User from './views/back/User'

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
