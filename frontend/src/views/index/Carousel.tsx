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
  'https://img0.baidu.com/it/u=4198904971,2407265308&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
  'https://img0.baidu.com/it/u=3028162671,4134546975&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
]

const imgList = imgs.map((item, index) => (
  <div className="text-center" key={index}>
    <img src={item} style={contentStyle} />
  </div>
))

const App: React.FC = () => <Carousel autoplay>{imgList}</Carousel>

export default App
