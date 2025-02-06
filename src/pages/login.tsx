/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/login.css'
import { Form, Input, Button, Typography, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography;

export default function LoginForm () {
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
        <Title level={2} className="title">Welcome</Title>
        <Text type="secondary">Log in with your carnest account to continue.</Text>

        {/* Login Form */}
        <Form layout="vertical" onFinish={onFinish} className="login-form">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          {/* Forgot Password */}
          <Form.Item>
            <a className="forgot-password" href="/forgot-password">
              Forgot password?
            </a>
          </Form.Item>

          {/* Login Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in securely
            </Button>
          </Form.Item>

          {/* Signup Link */}
          <Text>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </Text>
        </Form>
      </Card>
    </div>
  );
};
