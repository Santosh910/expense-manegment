import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner';
import axios from 'axios'
import {Form,Input,message} from 'antd'
import '../styles/RegisterPage.css'

const Register = () => {
    const [loading,setLoading] = useState(false)
    const router = useNavigate();

    const handleSubmit = async(values)=>{
        try {
            setLoading(true);
            const {data} = await axios.post("http://localhost:5000/api/v1/user/register",values);
            setLoading(false);
            message.success("Registration success");
            router('/') 
        } catch (error) {
            setLoading(false);
            message.error("something went wrong");
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("user")){
            router("/")
        }
    },[router])
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={handleSubmit}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Cleck Here to login</Link>
            <button className="btn btn-primary">Resgiter</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register