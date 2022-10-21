import Header from '../components/Header'
import Content from '../views/goods/Content'

export default function Goods() {
  return (
    <>
      <div>
        <Header title="商品详情" text="返回" click={() => history.back()} />

        <Content />
      </div>
    </>
  )
}
