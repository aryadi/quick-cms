import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { postImage } from "../../API-services/images";
import { successModal, errorModal } from "../../utilities/modal";

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
  let isMounted = true
  let [loading, setLoading] = useState(false);
  let [imageUrl, setImageUrl] = useState("");

  const imageInputChange = (e) => {
    if (isMounted) {
      setImageUrl(e.target.value);
    }
  };

  const onSubmit = async () => {
    if (isMounted) {
      setLoading(true);
    }

    try {
      let response = await postImage({
        url: imageUrl,
      });

      if (response.status === 200) {
        successModal();
      } else {
        errorModal();
      }
    } catch (error) {
      errorModal();
      console.error(error);
    }
    if (isMounted) {
      setLoading(false);
    }
  };

  useEffect(() => {
    return function cleanup() {
      isMounted = false
    }
  }, [])

  return (
    <>
      <h1>Image Form</h1>
      <Form
        {...layout}
        name="nest-messages"
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
          <Input value={imageUrl} onChange={imageInputChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" loading={loading} onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ImageLogoForm;
