/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Typography, Card } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Title, Text } = Typography;

const SignupForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="card-container">
      <Card className="form-card">
        {/* Logo */}
        <NavLink to='/' className="logo-container">
          <img src="carnest-logo-2.png" alt="Logo" className="logo" />
        </NavLink>

        {/* Headline */}
        <Title level={2} className="title">Create an Account</Title>
        <Text type="secondary">Sign up to get started.</Text>

        {/* Signup Form */}
        <Form layout="vertical" onFinish={onFinish} className="signup-form">
          {/* Name Field */}
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your name" />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters long!" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          {/* Signup Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>

          {/* Login Link */}
          <Text>
            Already have an account? <NavLink to="/login">Log in</NavLink>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default SignupForm;
