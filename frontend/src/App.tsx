import { Routes, Route } from 'react-router-dom'
import UI from './components/UI'
import Goods from './views/back/Goods'
import Order from './views/back/Order'
import User from './views/back/User'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<div>index</div>}></Route>
        </Route>

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
