import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import { Input, Row, Col, Form, Button } from 'antd'
import "../../../styles/SignUp_Styles/SignUpForm.css"
import { Link } from 'react-router-dom'
import signup from "../../../images/singup.png"

const SignUpForm = () => {

    const { register, handleSubmit, watch, control, formState: {errors}} =  useForm({
      defaultValues: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    })

    const onSubmit = (data) => console.log(data)

  return (
    <Row className='signup-section'  align={'top'}>
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
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => <Input {...field} placeholder='Confirm Password' />}
                  />
                  <p className='error-msg'>{errors.confirmpassword?.message}</p>
                </Col>
              </Row>
              <Row justify={'end'} align={'middle'}>
                <Col pull={3}>
                    Already Registered? Over to <Link to="/login">Login</Link> Section
                </Col>
                <Col pull={2}>
                  <input type='submit' className='singup-button' value="SingUp" />
                </Col>
              </Row>
            </form>
        </Col>
    </Row>
  )
}

export default SignUpForm
