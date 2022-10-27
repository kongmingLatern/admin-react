import { Button, Card, Image, message } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GoodsType } from '../../type'
import { http } from '../../utils'
import '../../views/goods/css/index.css'

async function addOrder(gid: string, count: number, price: number) {
  try {
    if (count <= 0) {
      message.error('商品已售罄')
      return
    }
    // NOTE: 查询订单信息
    await http.post('/orders', { gid })
    message.success('添加订单成功')
    // NOTE: 对应商品数量减一
    await http.put('/goods', { gid, goodCount: count - 1, price })
  } catch (e) {
    message.error('添加订单失败')
  }
}
export default function Detail() {
  const { gid } = useParams()
  const navigate = useNavigate()

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

  const CardItem = (item: GoodsType): JSX.Element => {
    return (
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

        {/* 类别 */}
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
        <p className="mt-5">{item.desc}</p>

        {/* 我想要 */}
        <footer className="text-right  mt-5 ">
          <Button
            type="primary"
            danger
            disabled={item.goodCount <= 0}
            className="rounded"
            onClick={() => {
              addOrder(item.gid, item.goodCount, item.price)
              navigate('/personal')
            }}
          >
            {
              item.goodCount > 0 ? (
                "我想要"
              ) : (
                "已售罄"
              )
            }
          </Button>
        </footer>
      </Card>
    )
  }
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
