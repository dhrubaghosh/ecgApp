import React, { useState, useEffect } from "react";
import type { FormProps } from "antd";
import { Form, Input, Button, Row, Col, message } from "antd";
import Styles from "../styles/contactusForm.module.css";


type FieldType = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const ContactForm: React.FC = () => {

  const apiBase = import.meta.env.VITE_API_URL;

  
  const [form] = Form.useForm();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const values = Form.useWatch([], form);
  useEffect(() => {
    const { name, phone, email, message } = values || {};
    if (name && phone && email && message) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [values]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      const response = await fetch(`${apiBase}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      message.success("Your message was sent successfully!");
      form.resetFields();
      setIsSubmitDisabled(true);
    } catch (error) {
      console.error("Error:", error);
      message.error(
        "There was a problem sending your message. Please try again."
      );
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={Styles.custom_form}
    >
      <Row gutter={16} className={Styles.responsive_row}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Enter a valid email" },
        ]}
      >
        <Input placeholder="Email address" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <Input.TextArea rows={4} placeholder="Your message" />
      </Form.Item>

      <Form.Item>
        <Button
          className={Styles.btn}
          htmlType="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
