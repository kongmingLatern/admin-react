import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Modal, Space, Table, Upload } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { GoodsType } from '../../type'
import { http } from '../../utils'

const columns: ColumnsType<GoodsType> = [
  {
    title: 'gid',
    dataIndex: 'gid',
    key: 'gid',
  },
  {
    title: 'gname',
    dataIndex: 'gname',
    key: 'gname',
    render: text => <a>{text}</a>,
  },
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '图片',
    key: 'imgs',
    dataIndex: 'imgs',
    render: text => <>{<img src={text} alt="商品图片" width={90} height={90} />}</>,
  },
  {
    title: '库存',
    key: 'goodcount',
    dataIndex: 'goodcount',
  },
  {
    title: '价格',
    key: 'price',
    dataIndex: 'price',
  },
  {
    title: '操作',
    key: 'action',
    render: ({ gid }, record) => (
      <Space size="middle">
        <Button type="primary" danger onClick={() => removeItem(gid)}>
          删除
        </Button>
      </Space>
    ),
  },
]

const removeItem = async gid => {
  console.log(gid)
  try {
    await http.delete('/goods', {
      params: {
        gid,
      },
    })
    message.success('删除成功')
    window.location.reload()
  } catch (e: any) {
    message.error(e.msg)
  }
}
const App: React.FC = () => {
  const [data, setData] = React.useState<GoodsType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }
  async function getData() {
    const res = await http.get('/goods')

    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const onSuccess = async values => {
    try {
      await http.post('/goods', values)
      message.success('添加成功')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (e: any) {
      message.error(e.msg)
    }
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" danger onClick={() => setIsModalOpen(true)}>
        添加
      </Button>
      <Modal
        title="添加用户"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          name="basic"
          initialValues={{ remember: false }}
          onFinish={onSuccess}
          onFinishFailed={handleCancel}
          className="inline-block text-left w-96 text-inherit "
        >
          <Form.Item
            label="商品名称"
            name="gname"
            rules={[{ required: true, message: 'Please input your gname!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="商品类型"
            name="type"
            rules={[{ required: true, message: 'Please input your Goods Type!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="picture"
            label="Upload"
            valuePropName="file"
            getValueFromEvent={normFile}
          >
            <Upload
              name="file"
              action="http://localhost:8080/goods/upload"
              method="post"
              listType="picture"
              withCredentials={true}
            >
              <Button type='ghost' icon={<UploadOutlined />} className="text-white" >
                点击上传
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="商品描述"
            name="desc"
            rules={[{ required: true, message: 'Please input your desc!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="商品数量"
            name="goodCount"
            rules={[{ required: true, message: 'Please input your goodCount!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="价格"
            name="price"
            rules={[{ required: true, message: 'Please input your price!' }]}
          >
            <Input />
          </Form.Item>

          <div className="text-right">
            <Button key="submit" htmlType="submit" type="ghost">
              <span className="text-white">提交</span>
            </Button>
          </div>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} rowKey="gid" />
    </>
  )
}

export default App
