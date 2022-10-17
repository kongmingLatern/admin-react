import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UI from './component/UI'
import Goods from './pages/Goods'
import User from './pages/User'

export default function App() {
  return (
    <>
      <header className="font-semibold  bg-red-300 ">
        <h1 className="text-zinc-100 text-lg  p-5">后台管理系统</h1>
      </header>
      <Routes>
        <Route path="/" element={<UI />}>
          <Route path="user" element={<User />}></Route>
          <Route path="goods" element={<Goods />}></Route>
        </Route>
      </Routes>
    </>
  )
}
