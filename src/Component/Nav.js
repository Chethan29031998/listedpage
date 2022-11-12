import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';

import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const Nav = () => {

const items=[
    {
    key:1,
    label: <Link to={"/listing"}>Listing</Link>,
},
{
    key:2,
    label: <Link to={"/signup"}>SignUp</Link>,
},
{
    key:3,
    label: <Link to={"/login"}>login</Link>,
},
{
  key:4,
  label: <Link to={"/valid"}>Validation</Link>,
},
]



  return (
    <div>
        <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        items={items}
      />
    </Header>
    </div>
  )
}

export default Nav