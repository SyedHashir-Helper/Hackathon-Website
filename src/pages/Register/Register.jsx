import React, { useMemo, useRef, useState } from 'react'
import {useForm, Controller} from 'react-hook-form'
import { Input, Row, Col, Form, Button, Select , Checkbox, Divider} from 'antd'
import "../../styles/SignUp_Styles/SignUpForm.css"
import { Link } from 'react-router-dom'
import signup from "../../images/singup.png"
import debounce from 'lodash/debounce';
import Countdown from '../HomePage/Countdown'
const {TextArea} = Input;
import "../../styles/Register.css"
const Register = () => {

    const { register, handleSubmit, watch, control, formState: {errors}} =  useForm({
        defaultValues: {
          teamname: "",
          teamlead: "",
          domain: "",
          project: "",
          implmentationidea: "",
          priorexperience: "",
          hear: "",
          consent: "",
        }
      })
  
      const onSubmit = (data) => console.log(data)



  return (
    <Row className='signup-section' gutter={20}>
        <Col md={14} className='register-left-section' >
            <Row className='text-align-center'>
                <Col md={24} className='reg-first-line'>
                    The clock won't wait
                </Col>
            </Row>
            <Row>
                <Col md={24} className='text-align-center'>
                    <span class="material-symbols-outlined timer-logo">
                        hourglass_top
                    </span>
                </Col>
            </Row>
            <Row>
                <Col md={24} className='text-align-center reg-second-line'>
                    The countdown to innovation has begun
                </Col>
            </Row>
            <Row>
                <Col md={24} className='text-align-center reg-third-line'>
                <span class="material-symbols-outlined">
                    swords
                </span>
              Join the ultimate coding battle.
                </Col>
            </Row>
            <Countdown md={4}/>
        </Col>
        <Col md={10}>
            <Row className='signup-title' justify={'center'} align={'middle'}>
                Initiate the Battle of coding
            </Row>
            <Row className='battle'>
              <span>Join VeloStrike Marathon 2.0</span>
            </Row>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Row gutter={[10,10]} justify={"center"}>
                <Col span={10}>
                  <label>Team Name</label>
                  <Controller
                    name="teamname"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => <Input {...field}  placeholder='Team Name' />}
                  />

                  <p className='error-msg'>{errors.teamname?.message}</p>

                </Col>
                <Col span={10}>
                  <label>Team Lead</label>
                  <Controller
                    name="teamlead"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => 
                            <Select
                                {...field}
                                    placeholder="Team Lead"
                                style={{
                                    width: "100%"
                                }}
                                options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                ]}
                        />}
                  />
                  <p className='error-msg'>{errors.teamlead?.message}</p>
                </Col>
                <Divider orientation='horizontal' />
                <Col span={10}>
                 <label style={{display: "block"}}>Domain of Project</label>
                  <Controller
                    name="domain"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => 

                        <Select
                                {...field}
                                placeholder="Select Domain"
                                style={{
                                width: "100%"
                                }}
                                options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                ]}
                            />}
                  />
                  <p className='error-msg'>{errors.domain?.message}</p>
                </Col>
                <Col span={10}>
                <label style={{display: "block"}}>Select Project</label>
                  <Controller
                    name="project"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => 

                        <Select
                                {...field}
                                placeholder="Select Project"
                                style={{
                                    width: "100%"
                                }}
                                options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                ]}
                            />}
                  />
                  <p className='error-msg'>{errors.project?.message}</p>
                </Col>

                <Col span={20}>
                  <label>How will you implement this project?</label>
                  <Controller
                    name="implmentationidea"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => <TextArea {...field} placeholder="Project High Level Implementation Idea" showCount allowClear autoSize={{
                        minRows: 3,
                        maxRows: 5,
                      }} maxLength={600}/>}
                  />

                  <p className='error-msg'>{errors.implmentationidea?.message}</p>

                </Col>

                <Divider orientation='horizontal' />

                <Col span={10}>
                <label style={{display: "block"}}>Prior Experience</label>
                  <Controller
                    name="priorexperience"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => 

                        <Select
                                {...field}
                                placeholder="Prior Experience"
                                style={{
                                    width: "100%"
                                }}
                                options={[
                                {
                                    value: 'Yes',
                                    label: 'Yes',
                                },
                                {
                                    value: 'No',
                                    label: 'No',
                                }
                                ]}
                            />}
                  />
                  <p className='error-msg'>{errors.priorexperience?.message}</p>
                </Col>

                
                <Col span={10}>
                <label style={{display: "block"}}>How did you hear about us?</label>
                  <Controller
                    name="hear"
                    rules={{
                      required: "It is mandatory"
                    }}
                    control={control}
                    render={({ field }) => 

                        <Select
                                {...field}
                                placeholder="Select"
                                style={{
                                    width: "100%"
                                }}
                                options={[
                                {
                                    value: 'linkedin',
                                    label: 'LinkedIn',
                                },
                                {
                                    value: 'Instagram',
                                    label: 'Instagram',
                                },
                                {
                                    value: 'Other',
                                    label: 'Other',
                                },
                                ]}
                            />}
                  />
                  <p className='error-msg'>{errors.hear?.message}</p>
                </Col>
              </Row>
              <Row justify={"space-between"} align={'middle'}>
                <Col span={13} push={2}>
                    <Controller
                        name="consent"
                        rules={{
                        required: "Please agree"
                        }}
                        control={control}
                        render={({ field }) => <Checkbox {...field}> I accept & present my consent on all T&Cs.</Checkbox>}
                    />
                    <p className='error-msg'>{errors.consent?.message}</p>
                </Col>
                <Col pull={2}>
                  <input type='submit' className='singup-button' value="Register" />
                </Col>
              </Row>
            </form>
        </Col>
    </Row>
  )
}

export default Register
