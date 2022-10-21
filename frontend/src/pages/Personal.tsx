import Header from '../components/Header'
import OrderInfo from '../views/peronal/OrderInfo'
import UserInfo from '../views/peronal/UserInfo'

export default function Personal() {
  return (
    <>
      {/* 头部 */}
      <Header title="个人中心" text="返回" click={() => history.back()} />

      {/* 用户信息 */}
      <UserInfo />

      {/* 订单信息 */}
      <OrderInfo />
    </>
  )
}
