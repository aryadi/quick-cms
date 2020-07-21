import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { postImage } from "../../API-services/images";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: "${label} is required!",
};

const ImageLogoForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  const enterLoading = async () => {
    setLoading(true);

    try {
      let response = await postImage({
        url: "/home/buku/anggur2"
      })
      
      console.log(response)
    } catch (error) {
      console.error(error) 
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Image Form</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "Image Url"]}
          label="Image Url"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            type="primary"
            loading={loading}
            onClick={enterLoading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ImageLogoForm;
