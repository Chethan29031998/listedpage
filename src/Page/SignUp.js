import React from 'react'

import { Button, Checkbox, Form, Input } from "antd";
import { Navigate, useNavigate,  } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const navigate=useNavigate();
const onFinish=(value)=>{
    console.log(value)

axios.post("http://rustycoder.live:8181/auth/signup",value).then(response=>{
  console.log(response.data)
  navigate("/login")
}).catch(err=>{
  console.log(err)
})
}
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
  return (
    <div>
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  )
}

export default SignUp