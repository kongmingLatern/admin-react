import { Button, Card, Image, message } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GoodsType } from '../../type'
import { http } from '../../utils'
import '../../views/goods/css/index.css'

const CardItem = (item: GoodsType) => (
  <Card
    title={item.gname}
    style={{ width: 300, backgroundColor: '#fff' }}
    className="flex-auto"
    bordered={false}
  >
    {/* 库存 */}
    <p className="text-gray-400">
      库存：
      {item.goodCount < 10 ? (
        item.goodCount > 0 ? (
          <span className="text-2xl font-bold text-red-500">{item.goodCount}[即将售空]</span>
        ) : (
          <span className="text-2xl font-bold text-red-500">已售罄</span>
        )
      ) : (
        <span className="text-2xl text-blue-400 font-semibold">{item.goodCount}[库存充足]</span>
      )}
    </p>
    {/* 类别     */}
    <p className="mt-2">
      类别：
      <span className="">{item.type}</span>
    </p>
    {/* 商品价格 */}
    <p className="mt-2">
      价格：￥
      <span className="text-red-500 font-bold text-4xl">{item.price}</span>
      /个
    </p>
    {/* 配送信息 */}
    <div className="mt-5">
      <p>
        配送：
        <span>广东东莞 至 苏州市 常熟市</span>
      </p>
      <p className="mt-2">快递：免运费</p>
    </div>
    {/* 商品描述 */}
    <h2 className="font-bold text-2xl mt-10">商品描述:</h2>
    <p className="mt-5">
      {/* 销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售)销售渠道类型：纯电商(只在线上销售) */}
      {item.desc}
    </p>
    {/* 立即购买 */}
    <footer className="text-right  mt-5 ">
      <Button type="primary" danger className="rounded" onClick={() => addOrder(item.gid)}>
        立即购买
      </Button>
    </footer>
  </Card>
)

async function addOrder(gid: string) {
  console.log(gid)
  try {
    const res = await http.post('/orders', { gid })
    message.success('添加订单成功')
  } catch (e) {
    message.error('添加订单失败')
  }
}
export default function Detail() {
  const { gid } = useParams()

  const [data, setData] = useState<GoodsType>()

  useEffect(() => {
    async function getData() {
      const res = await http.get('/goods/getByGid', {
        params: {
          gid,
        },
      })
      setData(res.data)
    }
    getData()
  }, [])

  return (
    <div className="flex justify-around rounded-tr-lg bg-[#222] detail overflow-hidden">
      {/* 商品图片 */}
      <div className="img flex-1 flex justify-center items-center bg-white">
        <Image src={data && data.imgs} preview={false} />
      </div>

      {/* 商品描述 */}
      {data && CardItem(data)}
    </div>
  )
}
