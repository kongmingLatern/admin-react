import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { http } from '../utils'
import OrderInfo from '../views/peronal/OrderInfo'
import UserInfo from '../views/peronal/UserInfo'

export default function Personal() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const res = await http.get('/users/getByUid', {
        params: {
          uid: localStorage.getItem('uid') || '',
        },
      })
      setData(res.data)
    }
    getData()
  }, [])

  return (
    <>
      {/* 头部 */}
      <Header title="个人中心" text="返回" click={() => history.back()} />

      {/* 用户信息 */}
      <UserInfo user={data} />

      {/* 订单信息 */}
      <OrderInfo user={data} />
    </>
  )
}
