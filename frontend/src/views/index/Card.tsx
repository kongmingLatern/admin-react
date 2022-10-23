import { Card } from 'antd'
import React, { useState } from 'react'
import './css/index.css'
import CardHeader from '../../components/index/CardHeader'
import { GoodsType } from '../../type'
import { Link } from 'react-router-dom'

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const CardList: GoodsType[] = [
  {
    gid: '1',
    gname: '关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套1',
    type: '衣服',
    imgs: 'https://gw.alicdn.com/bao/uploaded/i1/4107467909/O1CN01PhgbC428IN82kprm7_!!0-item_pic.jpg_300x300q90.jpg_.webp',
    desc: `品牌：喜飞鹿尺码：S M L XL 2XL 3XL 4XL NU面料分类：涤纶图案：几何图案领型：连帽衣门襟：斜襟`,
    goodcount: 20,
    price: 100,
  },
  {
    gid: '2',
    gname: '关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套',
    type: '衣服',
    imgs: 'https://gw.alicdn.com/bao/uploaded/i1/4107467909/O1CN01PhgbC428IN82kprm7_!!0-item_pic.jpg_300x300q90.jpg_.webp',
    desc: '阿萨德教四季豆iasj',
    goodcount: 10,
    price: 200,
  },
  {
    gid: '9',
    gname: 'alter 关于我转生变成史莱姆 米莉姆 日本动漫 正版手办 预定',
    type: '手办',
    imgs: 'https://gd2.alicdn.com/imgextra/i3/695432631/O1CN01JngWVo1VJ2poOJoJY_!!695432631-0-picasso.jpg_400x400.jpg',
    desc: 'ACG作品名: 关于我转生变成史莱姆',
    goodcount: 1,
    price: 1058.0,
  },
  {
    gid: '3',
    gname: '哔哩哔哩 幻星集2233娘星幻之匣盲盒盒蛋二次元手办摆件 B站周边',
    type: '手办',
    imgs: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2201196245656/O1CN01kFUBRW1reUsl2bENu_!!2-item_pic.png_460x460Q90.jpg_.webp',
    desc: '大小：幻星集系列盲盒 星幻之匣',
    goodcount: 100,
    price: 65.55,
  },
  {
    gid: '4',
    gname: '正版现货 bilibili 10周年纯白之爱 2233娘 婚纱 限量 手办 顺丰',
    type: '手办',
    imgs: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2249463491/O1CN01WE9eAU1bevQpjVPBd_!!0-item_pic.jpg_460x460Q90.jpg_.webp',
    desc: '大小：幻星集系列盲盒 星幻之匣',
    goodcount: 100,
    price: 2150.0,
  },
  {
    gid: '5',
    gname: 'bilibili现货 2233娘幻星集 12周年手办 典藏版 青幻之镰星耀使魔',
    type: '手办',
    imgs: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2249463491/O1CN01mnKH5T1bevRdrakt6_!!0-item_pic.jpg_460x460Q90.jpg_.webp',
    desc: '大小：幻星集系列盲盒 星幻之匣',
    goodcount: 100,
    price: 1788.0,
  },
]

// console.log(CardList[0])

const list = CardList.map(item => (
  <Card.Grid style={gridStyle} hoverable key={item.gid}>
    <Link to="/home/goods">
      <Card cover={<img alt="example" src={item.imgs} />} style={{ width: 300 }} bordered={false}>
        <Card.Meta
          title={<CardHeader name={item.gname} price={item.price} />}
          description={item.desc}
        />
      </Card>
    </Link>
  </Card.Grid>
))

const App: React.FC = () => (
  <Card title="今日推荐" style={{ textAlign: 'center' }}>
    {list}
  </Card>
)

export default App
