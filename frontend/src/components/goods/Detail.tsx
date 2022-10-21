import { Card, Image } from 'antd'
import '../../views/goods/css/index.css'

const CardItem = (
  <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)
export default function Detail() {
  return (
    <div className="flex justify-around items-center borderedrounded-tr-lg bg-white w-30">
      {/* 商品图片 */}
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      {/* 商品描述 */}
      {CardItem}
    </div>
  )
}
