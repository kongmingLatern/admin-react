import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import './css/index.css'
import CardHeader from '../../components/index/CardHeader'
import { GoodsType } from '../../type'
import { Link } from 'react-router-dom'
import { http } from '../../utils'

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const App: React.FC = () => {
  const [data, setData] = useState<GoodsType[]>([])
  useEffect(() => {
    async function getData() {
      const res = await http.get('/goods')
      console.log(res)
      setData(res.data)
    }
    getData()
  }, [])
  const list = data.map(item => (
    <Card.Grid style={gridStyle} hoverable key={item.gid}>
      <Link to={`/home/goods/${item.gid}`}>
        <Card cover={<img alt="example" src={item.imgs} />} style={{ width: 300 }} bordered={false}>
          <Card.Meta
            title={<CardHeader name={item.gname} price={item.price} />}
            description={item.desc}
          />
        </Card>
      </Link>
    </Card.Grid>
  ))
  return (
    <Card title="今日推荐" style={{ textAlign: 'center' }}>
      {list}
    </Card>
  )
}

export default App
