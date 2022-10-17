import React from 'react'
import Layout from './component/Layout'
import { Routes, Route, Link } from 'react-router-dom'
import User from './pages/User'

export default function App() {
  return (
    <>
      <header className="font-semibold  bg-red-300 ">
        <h1 className="text-zinc-100 text-lg  p-5">后台管理系统</h1>
      </header>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </>
  )
}
