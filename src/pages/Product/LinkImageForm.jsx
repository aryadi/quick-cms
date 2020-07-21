import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const validateMessages = {
  required: "${label} is required!",
};

const ImageLogoForm = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([""]);

  const onFinish = (values) => {
    console.log(values);
  };

  const insertValue = (e, index) => {
    let newArray = [...images];
    newArray[index] = e.target.value;
    setImages(newArray);
  };

  const addInput = () => {
    let newArray = [...images];
    newArray.push("");
    setImages(newArray);
  };

  const removeInput = (index) => {
    let newArray = [...images];
    newArray.splice(index, 1);
    setImages(newArray);
  };

  const enterLoading = () => {
    setLoading(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <h1>Image Form</h1>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        {images.map((image, index) => {
          return (
            <Form.Item
              key={index}
              label="Image Url"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                }}
              >
                <Input
                  onChange={(e) => insertValue(e, index)}
                  value={images[index]}
                />
              </Form.Item>
              <Form.Item style={{ display: "inline-block", marginLeft: 16 }}>
                <Button
                  style={{ display: "inline-block", marginLeft: 16 }}
                  type="primary"
                  onClick={() => removeInput(index)}
                  danger
                  disabled={index === 0}
                >
                  <CloseOutlined />
                </Button>
                {index === images.length - 1 && (
                  <Button
                    style={{ display: "inline-block", marginLeft: 16 }}
                    type="primary"
                    onClick={addInput}
                  >
                    <PlusOutlined />
                  </Button>
                )}
              </Form.Item>
            </Form.Item>
          );
        })}
        <Button
          type="primary"
          loading={loading}
          onClick={() => enterLoading(0)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ImageLogoForm;
