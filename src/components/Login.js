// src/components/Login.js
import React, { useState } from 'react';
// import { useHistory } from /'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { loginFun } from '../api';
import { useSelector } from 'react-redux';
console.log('loginFun: ', loginFun);

const { Title } = Typography;

const Login = () => {
    const count = useSelector((state) => state.counter);
    console.log('count: ', count);
  const [loading, setLoading] = useState(false);
//   const history = useHistory();

  const handleLogin = async (values) => {
    // setLoading(true);
    loginFun(values.email, values.password)
  };

  return (
    <div style={{ width: 300, margin: '0 auto' }}>
      <Title level={2}>Login</Title>
      <Form
        onFinish={handleLogin}
        initialValues={{ email: '', password: '' }}
        layout="vertical"
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
