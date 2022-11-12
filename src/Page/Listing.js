import React from 'react'
import { useEffect } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";




const Listing = () => {
  const navigate = useNavigate();



  const openImageInNewTab=(imageLink)=>{
    window.open(imageLink, '_blank').focus();



  //  alert(imageLink);

  }

  const openLoginPage=()=>{
    navigate("/login")

  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
  
    {
      title: 'Images',
      dataIndex: 'files',
      key: 'files',
      render: (record) => (
        record.split(",").map(ele=>(
        <> <img src={ele} width="50px" height="50px" style={{cursor:"pointer"}} onClick={()=>openImageInNewTab(ele)}/><br/></> 
        ))
        
      ),
    },
  
  
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
        <Button type="primary" onClick={openLoginPage}>Login Page</Button>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  


  const [data,setData]=useState([]);

useEffect(()=>{
  
  if(!localStorage.getItem("token")){
    navigate("/login")
    return
  }


  async function apiCall(){
    try {

      


      const result=await axios.get("http://rustycoder.live:8000/listing")
      setData(result.data.data);
      
    } catch (error) {
      console.log(error);
    }
  
  }
  apiCall();

  /*
  axios.get("http://rustycoder.live:8000/listing").then(result=>{
    console.log(result);
    setData(result.data.data);
  }).catch(err=>{
    console.log(err);
  })
  */

 


  
  // fetch('http://rustycoder.live:8000/listing')
  // .then((response) => response.json())
  // .then((result) => {
  //   console.log(result.data);
  //   setData(result.data);
  // });
  




},[]);

  return (
    <div>

<Table columns={columns} dataSource={data} />


    </div>
  )
}

export default Listing

