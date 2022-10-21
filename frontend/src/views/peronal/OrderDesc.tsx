import { Descriptions } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Descriptions bordered>
    <Descriptions.Item label="订单编号" span={4}>
      123123asjdioasj123192
    </Descriptions.Item>
    <Descriptions.Item label="购买商品" span={4}>
      关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套关于我转生变成史莱姆这档事卫衣连帽男利姆露萌王动漫二次元外套
    </Descriptions.Item>
    <Descriptions.Item label="收件人" span={4}>
      陈楷豪
    </Descriptions.Item>
    <Descriptions.Item label="电话" span={4}>
      1810000000
    </Descriptions.Item>
    <Descriptions.Item label="订单时间" span={4}>
      2022-10-21 10:00:00
    </Descriptions.Item>
    <Descriptions.Item label="地址" span={4}>
      江苏省常熟市古里
    </Descriptions.Item>
    <Descriptions.Item label="价格" span={4}>
      ￥80.00
    </Descriptions.Item>
  </Descriptions>
)

export default App
