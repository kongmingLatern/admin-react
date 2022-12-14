import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Carousel from '../views/index/Carousel'
import Content from '../views/index/Content'
import Footer from '../views/index/Footer'

export default function Index() {
  const navigate = useNavigate()
  return (
    <>
      {/* 头部 */}
      <Header
        title="一枝花"
        text="退出登录"
        isAuth={localStorage.getItem('isAuth') === '1'}
        click={() => {
          navigate('/login')
          localStorage.clear()
        }}
      />
      {/* 轮播图 */}
      <Carousel />

      {/* 今日推荐： 商品展示 */}
      <Content />

      <Footer />
    </>
  )
}
