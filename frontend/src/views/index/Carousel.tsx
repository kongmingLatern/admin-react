import { Carousel } from 'antd'
import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '300px  ',
  color: '#fff',
  lineHeight: '300px  ',
  textAlign: 'center',
  background: '#364d79',
  display: 'inline-block',
}

const imgs: string[] = [
  'https://img.alicdn.com/imgextra/i1/6000000002537/O1CN01ZQTFs21UbzbSaVfNG_!!6000000002537-2-octopus.png',
  'https://img.alicdn.com/imgextra/i2/6000000007179/O1CN01Ozm2mj22u28cnIg3c_!!6000000007179-0-octopus.jpg',
  'https://img.alicdn.com/imgextra/i3/6000000008032/O1CN01zYsRkj29Chz6raKBV_!!6000000008032-2-octopus.png',
]

const imgList = imgs.map((item, index) => (
  <div className="text-center" key={index}>
    <img src={item} style={contentStyle} />
  </div>
))

const App: React.FC = () => <Carousel autoplay>{imgList}</Carousel>

export default App
