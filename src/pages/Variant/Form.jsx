import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'
import { AutoComplete } from 'antd'

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
]

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
}
const validateMessages = {
  required: '${label} is required!',
}

const VariantForm = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  const onSelect = (value, optionObject) => {
    console.log(optionObject)
  }

  return (
    <>
      <h1>Variant Form</h1>

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'product']}
          label="Product"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <AutoComplete
            style={{
              width: 200,
            }}
            options={options}
            onSelect={onSelect}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Image Url']}
          label="Image Url"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Size']}
          label="Size"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Color']}
          label="Color"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'Description']} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default VariantForm
