import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Row, Col, Form, Button } from "antd";
import { Link } from "react-router-dom";
import login from  "../../images/login.png"

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <Row className="signup-section" align={"top"}>
      <Col md={12} className="section-img">
        <img src={login} />
      </Col>
      <Col md={10}>
          <Row className='signup-title' justify={'center'} align={'middle'}>
                  Resume & Conquer your
            </Row>
            <Row className='battle'>
              <span> Marathon</span>
          </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[10, 20]} justify={"center"} className="padding-col">
            <Col span={10}>
              <label>Email</label>
              <Controller
                name="email"
                rules={{
                  required: "It is mandatory",
                }}
                control={control}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
              <p className="error-msg">{errors.email?.message}</p>
            </Col>
          </Row>

          <Row gutter={[10, 20]} justify={"center"}  className="padding-col">
            <Col span={10}>
              <label>Password</label>
              <Controller
                name="password"
                rules={{
                  required: "It is mandatory"
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Password" type="password" />
                )}
              />
              <p className="error-msg">{errors.password?.message}</p>
            </Col>
          </Row>
          <Row justify={"center"} align={"middle"}>
            <Col pull={1}>
              Not a part of battle yet? <Link to="/signup">Join</Link> fast
            </Col>
            <Col>
              <input type="submit" className="singup-button" value="Login" />
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
