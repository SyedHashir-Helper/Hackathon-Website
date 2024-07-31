import React, {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import { Input, Row, Col, Form, Button, message , Spin, Alert } from 'antd'
import "../../../styles/SignUp_Styles/SignUpForm.css"
import { Link } from 'react-router-dom'
import signup from "../../../images/singup.png"
import axios from 'axios'

const SignUpForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false); 
  const [signupsuccess, setsignupsuccess] = useState(false)

    const { register, handleSubmit, watch, control, formState: {errors}, reset, trigger} =  useForm({
      defaultValues: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    })

    const password = watch("password");

    const error = (errmsg) => {
      messageApi.open({
        type: 'error',
        content: errmsg,
      });
    };

    const success = (successmsg) => {
      messageApi.open({
        type: 'success',
        content: successmsg,
        duration: 2
      });
    };

    const onSubmit = async (data) => {
      setLoading(true);
      delete data["confirmpassword"]
      try{
          const response = await axios.post("http://localhost:3500/user/create", 
            data,
            {
              headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status != 200){
          error("Error while registering user")
        }
        if (response.status == 200){
          success("Congratulations... User Registered Successfully..")
          setsignupsuccess(true)
          reset()

          setTimeout(() => {
            console.log("Aya")
            setsignupsuccess(false);
          }, 3000);
        }
      }
      catch(error){
        error(error.message)
      }
      finally {
        setLoading(false); // Set loading to false when request completes
      }
    }
  return (
    
    <Row className='signup-section'  align={'top'}>
      {contextHolder}
        <Col md={12} className='section-img' >
          <img src={signup}/>
        </Col>
        <Col md={10}>
            <Row className='signup-title' justify={'center'} align={'middle'}>
                  Let's Begin a 
            </Row>
            <Row className='battle'>
              <span> Wonderful Battle</span>
            </Row>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Row gutter={[10,30]} justify={"center"}>
                <Col span={10}>
                  <label>First Name</label>
                  <Controller
                    name="firstname"
                    rules={{
                      required: "It is mandatory", minLength: {value: 4, message: "Minimum length is 4 characters"}
                    }}
                    control={control}
                    render={({ field }) => <Input {...field}  placeholder='First Name' />}
                  />

                  <p className='error-msg'>{errors.firstname?.message}</p>

                </Col>
                <Col span={10}>
                 <label>Last Name</label>
                  <Controller
                    name="lastname"
                    rules={{
                      required: "It is mandatory", minLength: {value: 4, message: "Minimum length is 4 characters"}
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Last Name' />}
                  />
                  <p className='error-msg'>{errors.lastname?.message}</p>
                </Col>
                <Col span={10}>
                  <label>Username</label>
                  <Controller
                    name="username"
                    rules={{
                      required: "It is mandatory", minLength: {value: 4, message: "Minimum length is 4 characters"}
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Username'  />}
                  />
                  <p className='error-msg'>{errors.username?.message}</p>
                </Col>

                <Col span={10}>
                  <label>Email</label>
                  <Controller
                    name="email"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Email'  />}
                  />
                  <p className='error-msg'>{errors.email?.message}</p>
                </Col>

                <Col span={10}>
                  <label>Password</label>
                  <Controller
                    name="password"
                    rules={{
                      required: "It is mandatory", minLength: {value: 4, message: "Minimum length is 4 characters"}
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Password' type='password' />}
                  />
                  <p className='error-msg'>{errors.password?.message}</p>
                </Col>
                <Col span={10}>
                  <label>Confirm Password</label>
                  <Controller
                    name="confirmpassword"
                    rules={{
                      required: "It is mandatory",
                      validate: value =>
                        value === password || "The passwords do not match"
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Confirm Password' type='password' />}
                  />
                  <p className='error-msg'>{errors.confirmpassword?.message}</p>
                </Col>
              </Row>
              <Row justify={'end'} align={'middle'}>
                <Col pull={3}>
                    Already Registered? Over to <Link to="/login">Login</Link> Section
                </Col>
                <Col pull={2}>
                  <button type='submit' className='singup-button'>{loading ? <Spin /> : "Sign Up"} </button>
                </Col>
              </Row>
              <Row align={'middle'} justify={'center'}>
                  {signupsuccess && <Alert message="You can now login." type="success" showIcon closable />}
              </Row>
            </form>
        </Col>
    </Row>
  )
}

export default SignUpForm
