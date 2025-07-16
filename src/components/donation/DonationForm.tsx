import { useState } from "react";
import { Form, Input, InputNumber, Select, Button, message } from "antd";

const { Option } = Select;

const DonationForm = ({ verifyPayment }: any) => {
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePayment = async () => {
    try {
      const values = await form.validateFields();
      console.log("Sending values to /api/payments/create-order:", values);

      if (!values.amount || isNaN(values.amount) || values.amount < 1) {
        message.error("Please enter a valid donation amount (min ₹1).");
        return;
      }

      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: values.amount,
          donor: values,
        }),
      });

      const orderData = await response.json();
      console.log("Order Data received from backend:", orderData);

      if (
        !orderData.success ||
        !orderData.key ||
        !orderData.orderId ||
        !orderData.amount
      ) {
        message.error("Failed to initiate payment. Invalid order details.");
        console.error("Invalid orderData:", orderData);
        return;
      }

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "Environment Conservation Group",
        description: "Donation Payment",
        handler: (response: any) => {
          console.log("Payment handler response:", response);
          message.success("Payment Successful!");
          verifyPayment(response, values);
        },
        prefill: {
          name: values.name,
          email: values.email,
          contact: values.phone,
        },
        theme: { color: "#15803D" },
      };

      console.log("Opening Razorpay checkout with options:", options);

      const rzp = new (window as any).Razorpay(options);

      rzp.on("payment.failed", (response: any) => {
        console.error("Razorpay payment failed:", response.error);
        message.error("Payment failed. Please try again.");
      });

      rzp.open();
    } catch (err) {
      console.error("Error in handlePayment:", err);
      message.error("Please fix the errors in the form!");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFieldsChange={() => {
        const errors = form.getFieldsError();
        const hasErrors = errors.some(({ errors }) => errors.length);

        const values = form.getFieldsValue();
        const requiredFilled =
          values.name &&
          values.email &&
          values.phone &&
          values.cause &&
          values.amount;

        setIsButtonDisabled(hasErrors || !requiredFilled);
      }}
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          { required: true, message: "Please enter your full name" },
          { min: 4, message: "Minimum 4 characters" },
          { max: 50, message: "Maximum 50 characters" },
          {
            pattern: /^[a-zA-Z\s]+$/,
            message: "Only letters and spaces allowed",
          },
        ]}
      >
        <Input placeholder="Full Name" maxLength={50} />
      </Form.Item>

      <Form.Item
        label="Amount (INR)"
        name="amount"
        rules={[
          { required: true, message: "Please enter donation amount" },
          { type: "number", min: 1, message: "Minimum amount is ₹1" },
        ]}
      >
        <InputNumber
          placeholder="Enter amount (₹)"
          min={1}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Invalid email address" },
          { max: 100, message: "Maximum 100 characters" },
        ]}
      >
        <Input placeholder="Email Address" />
      </Form.Item>

      <Form.Item
        label="Phone Number (+91 XXXXXXXXXX)"
        name="phone"
        rules={[
          { required: true, message: "Please enter your phone number" },
          {
            pattern: /^[+]?[\d\s\-()]{10,15}$/,
            message: "Invalid phone number",
          },
        ]}
      >
        <Input placeholder="Phone Number" maxLength={15} />
      </Form.Item>

      <Form.Item
        label="PAN Number (Optional)"
        name="pan"
        rules={[
          {
            pattern: /^$|^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            message: "Invalid PAN (ABCDE1234F)",
          },
        ]}
      >
        <Input
          placeholder="ABCDE1234F"
          maxLength={10}
          style={{ textTransform: "uppercase" }}
        />
      </Form.Item>

      <Form.Item
        label="Select a cause for donation"
        name="cause"
        rules={[{ required: true, message: "Please select a cause" }]}
      >
        <Select placeholder="Select a cause">
          <Option value="Membership">Membership</Option>
          <Option value="Donation">General Donation</Option>
          <Option value="Tribal Support">Tribal Support</Option>
          <Option value="Disaster Management">Disaster Management</Option>
          <Option value="Others">Others</Option>
        </Select>
      </Form.Item>

      <Button
        type="primary"
        block
        disabled={isButtonDisabled}
        style={{
          marginTop: 20,
          backgroundColor: "#15803D",
          border: "none",
          color: "white",
          height: "40px",
          fontWeight: "bold",
          opacity: isButtonDisabled ? 0.6 : 1,
        }}
        onClick={handlePayment}
      >
        Donate Now
      </Button>
    </Form>
  );
};

export default DonationForm;
