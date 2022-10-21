import { Button, Card, Image } from 'antd'
import '../../views/goods/css/index.css'

const CardItem = (
  <Card
    title="关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套"
    style={{ width: 300, backgroundColor: '#fff' }}
    className="flex-auto"
    bordered={false}
  >
    {/* 月促 */}
    <p className="text-gray-400">
      月促：
      <span className="text-2xl text-blue-400 font-semibold">10</span>
    </p>

    {/* 类别     */}
    <p>
      类别：
      <span className="">衣服</span>
    </p>

    {/* 商品价格 */}
    <p>
      价格：￥
      <span className="text-red-500 font-bold text-4xl">110</span>
      /个
    </p>

    {/* 配送信息 */}
    <div className="mt-5">
      <p>
        配送：
        <span>广东东莞 至 苏州市 常熟市</span>
      </p>
      <p>快递：免运费</p>
    </div>

    {/* 商品描述 */}
    <p className="mt-5">
      销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)
    </p>

    {/* 立即购买 */}
    <footer className="text-right  mt-5 ">
      <Button type="primary" danger className="rounded">
        立即购买
      </Button>
    </footer>
  </Card>
)

export default function Detail() {
  return (
    <div className="flex justify-around rounded-tr-lg bg-[#222] detail overflow-hidden">
      {/* 商品图片 */}
      <div className="img flex-1 text-center bg-white">
        <Image
          src="https://gw.alicdn.com/bao/uploaded/i1/4107467909/O1CN01PhgbC428IN82kprm7_!!0-item_pic.jpg_300x300q90.jpg_.webp"
          preview={false}
        />
      </div>

      {/* 商品描述 */}
      {CardItem}
    </div>
  )
}
